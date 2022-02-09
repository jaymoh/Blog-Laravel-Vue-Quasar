<?php

namespace Tests\Feature\Importing\Posts;

use App\Jobs\PostsImporterJob;
use App\Models\Post;
use App\Utils\ApiClients;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Bus;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Tests\TestCase;

class ImportPostsFromSquareOneApiTest extends TestCase
{
    /**
     * Test the command to fire job to import posts works
     */
    public function testCommandPostsImportSuccess()
    {
        $this->artisan('blog:posts-import')->assertSuccessful();
    }

    /**
     * test the job to import posts is dispatched
     */
    public function testItDispatchedJobToImportPosts()
    {
        Bus::fake();

        Artisan::call('blog:posts-import');

        Bus::assertDispatched(PostsImporterJob::class);
    }

    /**
     * test the endpoint returns the expected json structure
     *
     *  Should fail if the structure changes
     * @todo improve and fake requests/mock api
     */
    public function testSquareOneApiReturnsExpectedJsonStructure()
    {
        // $route = config('services.sq1.base_url') . 'posts';

        $response = ApiClients::sq1Client()->get('posts');

        $this->assertEquals(200, $response->status());

        $jsonData = $response->json();

        $this->assertIsArray($jsonData['data']);

        $this->assertTrue(Arr::has($jsonData['data'],'0.title'));
        $this->assertTrue(Arr::has($jsonData['data'],'0.description'));
        $this->assertTrue(Arr::has($jsonData['data'],'0.publication_date'));
    }
}
