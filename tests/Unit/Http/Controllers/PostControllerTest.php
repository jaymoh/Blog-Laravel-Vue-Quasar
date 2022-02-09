<?php

namespace Tests\Unit\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Post;
use Tests\Unit\Http\AbstractHttpTest;

class PostControllerTest extends AbstractHttpTest
{
    /**
     * test user store post successful
     */
    public function testPostStoreSuccess()
    {
        $title = 'This is a cool blog.';
        $userId = 2; // must already exist from running the seeders

        $requestBody = [
            'title' => $title,
            'description' => 'While strolling along the river bed, they met',
            'publication_date' => '2022-02-08 05:23:55',
        ];

        // this end point stores and returns the saved model as json
        $route = route('posts.store');

        $response = $this->actingAsNormalUser($userId)
            ->json('POST', $route, $requestBody);

        $response->assertStatus(201)
            ->assertJsonPath('data.title', $title)
            ->assertJsonPath('data.user_id', $userId);
    }

    /**
     * test post store with invalid data should fail
     */
    public function testPostStoreInvalid()
    {
        $userId = 2; // user must already exist from running the seeders

        $requestBody = [];

        // this end point stores and returns the saved model as json
        $route = route('posts.store');

        $response = $this->actingAsNormalUser($userId)
            ->json('POST', $route, $requestBody);

        $response
            ->assertStatus(422)
            ->assertJson(require __DIR__ . '/responses/posts/posts-store-invalid-response.php');
    }

    /**
     * test posts index returns array of posts in the data key
     */
    public function testPostsIndex()
    {
        $route = route('posts.index');

        $response = $this
            ->json('GET', $route);

        $response->assertStatus(200)
            ->assertJsonStructure(require __DIR__ . '/responses/posts/posts-index-response.php');
    }

    /**
     * test posts index returns array of posts for a specific user
     */
    public function testPostsIndexForUser()
    {
        // posts for user id 2
        $userId = 2;
        $perPage = 10;

        $requestBody = [
            'user' => $userId,
            'perPage' => $perPage
        ];

        $userPosts = Post::query()->where(['user_id' => $userId])->limit($perPage)->get()->toArray();

        $route = route('posts.index');

        $response = $this
            ->json('GET', $route, $requestBody);

        $response->assertStatus(200)->assertJsonPath('data.0.title', $userPosts[0]['title']);
        $this->assertDataLength($response, count($userPosts));
    }

    /**
     * test update post successful for admin user only
     */
    public function testPostUpdateSuccess()
    {
        $title = 'This cool title has been updated.';
        $postId = 2; // must already exist from running the seeders

        $requestBody = [
            'title' => $title,
            'description' => 'While strolling along the river bed, they never met',
        ];

        // this end point updates the resource and returns the saved model as json
        $route = route('posts.update', ['id' => $postId]);

        $response = $this->actingAsAdminUser()
            ->json('PUT', $route, $requestBody);

        $response->assertStatus(200)
            ->assertJsonPath('data.title', $title);
    }

    /**
     * test post update failure for normal users
     */
    public function testPostUpdateFailure()
    {
        $title = 'This cool title has been updated.';
        $userId = 2; // must already exist from running the seeders
        $postId = 2; // must already exist from running the seeders

        $requestBody = [
            'title' => $title,
            'description' => 'While strolling along the river bed, they never met',
        ];

        // non admin users not allowed to update to this endpoint
        $route = route('posts.update', ['id' => $postId]);

        $response = $this->actingAsNormalUser($userId)
            ->json('PUT', $route, $requestBody);

        $response->assertStatus(401)
            ->assertJsonFragment(["message" => "Updating not allowed!"]);
    }

    /**
     * test post show not found
     */
    public function testPostShowNotFound()
    {
        $postId = 20; // this id does not exist as the test seeders only added 2 posts
        $route = route('posts.show', ['id' => $postId]);

        $response = $this->json('GET', $route);

        $response->assertStatus(404)
            ->assertJsonFragment(["message" => "Post not found!"]);
    }

    /**
     * test delete post failure for normal users
     */
    public function testPostDeleteFailure()
    {
        $userId = 2; // not admin
        $postId = 2; // delete an id that exists
        $route = route('posts.destroy', ['id' => $postId]);

        // delete post
        $response = $this->actingAsNormalUser($userId)->json('DELETE', $route);

        $response->assertStatus(401)
            ->assertJsonFragment(["message" => "Deleting not allowed!"]);
    }

    /**
     * test post delete success for admin user only
     */
    public function testPostDeleteSuccess()
    {
        $postId = 2; // delete an id that exists
        $route = route('posts.destroy', ['id' => $postId]);

        // delete post
        $response = $this->actingAsAdminUser()->json('DELETE', $route);

        $response->assertStatus(200)
            ->assertJsonFragment(["message" => "Blog Post Deleted"]);

        // try to show the post
        $showRoute = route('posts.show', ['id' => $postId]);
        $response = $this->json('GET', $showRoute);

        $response->assertStatus(404)
            ->assertJsonFragment(["message" => "Post not found!"]);
    }
}
