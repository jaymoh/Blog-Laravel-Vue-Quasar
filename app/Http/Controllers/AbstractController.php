<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

abstract class AbstractController extends Controller
{
    public $perPage = 10;

    public $postsIndexCacheKey = 'posts_index_no_request_modifiers';

    /**
     * Allowed sort directions
     *
     * @param $dir
     * @return bool
     */
    public function allowedSortDir($dir)
    {
        $dir = Str::upper($dir);

        $sortDir = ['ASC', 'DESC'];

        return in_array($dir, $sortDir);
    }

    public function transformResponse($data, $message = 'Success!', $statusCode = 200): JsonResponse
    {
        return response()->json([
            'data' => $data,
            'message' => $message,
        ], $statusCode);
    }
}
