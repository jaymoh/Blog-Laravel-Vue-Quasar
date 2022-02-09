<?php

namespace App\Console\Commands;

use App\Jobs\PostsImporterJob;
use Illuminate\Console\Command;

class PostsImportCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'blog:posts-import';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Fires job to import posts from sq1 rest endpoint';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function handle()
    {
        PostsImporterJob::dispatch();
    }
}
