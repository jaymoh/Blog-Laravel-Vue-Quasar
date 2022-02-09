<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('posts')->truncate();
        // create a post for normal user_id 2
        Post::query()->create([
           'title' => 'Normal User Post',
           'description' => 'Normal User Post Description',
           'user_id' => 2
        ]);

        // some random posts
        Post::factory()->count(2)->create();
    }
}
