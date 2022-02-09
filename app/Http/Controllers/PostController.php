<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Post;
use App\Utils\Constants;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Schema;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;

class PostController extends AbstractController
{
    public function index()
    {
        // read from cache on page load
        if (!$this->hasRequestModifiers()) {
            return PostResource::collection($this->indexFromCache());
        }

        if (request()->input('perPage')) {
            $this->perPage = request()->input('perPage');
        }

        $query = $this->prepareQuery();

        return PostResource::collection($query->paginate($this->perPage));
    }

    private function prepareQuery()
    {
        $query = Post::query();

        // only pick posts for a specific user
        if (request()->input('user')) {
            $query->where(['user_id' => request()->input('user')]);
        }

        // search query filters
        $filters = preg_split('/\s+/', request()->input('searchQuery'), -1, PREG_SPLIT_NO_EMPTY);

        if (count($filters) > 0) {
            $query->where(function (Builder $q) use ($filters) {
                foreach ($filters as $filter) {
                    $q->where(function (Builder $qq) use ($filter) {
                        $qq->where('title', 'LIKE', "%{$filter}%")
                            ->orWhere('description', 'LIKE', "%{$filter}%");
                    });
                }
            });
        }

        // add relationships to be included if any
        if (request()->input('includeRelations')) {
            $includes = (array)request()->input('includeRelations');
            $addInclude = [];
            foreach ($includes as $include) {
                if (in_array($include, Post::availableRelations)) {
                    $addInclude[] = $include;
                }
            }
            $query->with($addInclude);
        }

        // order by has to be the last one
        if (request()->input('sortBy') && $this->allowedSortDir(request()->input('sortDir'))) {
            if (Schema::hasColumn('posts', request()->input('sortBy')))
                $query->orderBy(request()->input('sortBy'), request()->input('sortDir'));
        }

        return $query;
    }

    private function indexFromCache()
    {
        // cache for 23hrs (23*60*60)
        Log::info('Cache hit');
        return Cache::remember(Constants::POSTS_INDEX_CACHE_KEY, 82800, function () {
            return $this->prepareQuery()->paginate($this->perPage);
        });
    }

    private function hasRequestModifiers()
    {
        $perPage = request()->input('perPage') ?: $this->perPage;
        $page = request()->input('page') ?: 1;
        $searchQuery = request()->input('searchQuery');
        $sortBy = request()->input('sortBy') ?: 'id';
        $sortDir = request()->input('sortDir') ?: 'ASC';
        $includeRelations = (array)request()->input('includeRelations') ?: [];

        return !($perPage === $this->perPage && $page === 1 && !$searchQuery && $sortBy === 'id'
            && $sortDir === 'ASC' && count($includeRelations) === 0);
    }

    public function show($id)
    {
        $post = Post::query()->find($id);

        if (!$post) {
            throw new NotFoundHttpException('Post not found!');
        }

        return $this->transformResponse(new PostResource($post));
    }

    public function store()
    {
        $data = request()->validate([
            'title' => 'required',
            'description' => 'required',
            'publication_date' => 'nullable|date'
        ]);

        $data['user_id'] = request()->user()->id;

        $post = Post::query()->create($data);

        // reset cache
        Cache::forget(Constants::POSTS_INDEX_CACHE_KEY);

        return $this->transformResponse(new PostResource($post), 'Blog Post Created Successfully', 201);
    }

    public function update($id)
    {
        if (!request()->user()->isAdmin()) {
            throw new UnauthorizedHttpException('', 'Updating not allowed!');
        }

        $data = request()->validate([
            'title' => 'required',
            'description' => 'required',
            'publication_date' => 'nullable|date'
        ]);

        $post = Post::query()->find($id);

        if (!$post) {
            throw new NotFoundHttpException('Post not found');
        }

        $post->update($data);

        // reset cache
        Cache::forget(Constants::POSTS_INDEX_CACHE_KEY);

        return $this->transformResponse(new PostResource($post), 'Blog Post Updated Successfully');
    }

    public function destroy($id)
    {
        if (!request()->user()->isAdmin()) {
            throw new UnauthorizedHttpException('', 'Deleting not allowed!');
        }

        $post = Post::query()->find($id);

        if (!$post) {
            throw new NotFoundHttpException('Post not found');
        }

        $post->delete();

        Cache::forget(Constants::POSTS_INDEX_CACHE_KEY);

        return $this->transformResponse([], 'Blog Post Deleted');
    }
}
