<?php

namespace App\Jobs;

use App\Models\Post;
use App\Models\User;
use App\Utils\ApiClients;
use App\Utils\Constants;
use App\Utils\LogHelper;
use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Cache;

class PostsImporterJob implements ShouldQueue, ShouldBeUnique
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        // try catch in case the endpoint is unreachable
        try {
            $response = ApiClients::sq1Client()->get('posts');
        } catch (\Exception $exception) {
            LogHelper::error(['Response' => $exception->getMessage()]);

            return;
        }

        if ($response->status() !== 200) {
            LogHelper::debug(['Response message' => $response->reason(), 'Status' => $response->status()]);
            return; // stop script
        }

        $data = $response->json();
        // get array of posts from the data key
        $posts = Arr::get($data, 'data', []);

        if (is_array($posts) && count($posts) > 0) {
            // get first user with admin role
            $user = User::query()
                ->whereHas('roles', function (Builder $q) {
                    $q->whereKey(1);
                })
                ->first();

            if (!$user) {
                LogHelper::error(['PostsImportError' => 'Admin user not found']);
                return;
            }

            // loop and create the posts
            // To prevent redundancy only create a new model if title is different
            foreach ($posts as $post) {
                $title = Arr::get($post, 'title');
                Post::query()->updateOrCreate(['title' => $title], [
                    'user_id' => $user->id,
                    'title' => $title,
                    'description' => Arr::get($post, 'description'),
                    'publication_date' => Carbon::parse(Arr::get($post, 'publication_date'))->toDateTimeString()
                ]);
            }
            // reset cache
            Cache::forget(Constants::POSTS_INDEX_CACHE_KEY);

            return;
        }

        // else just log the response for future debugging
        LogHelper::debug(['Response' => $response->json()]);
    }
}
