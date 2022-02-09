<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

class DevSetup extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'blog:dev-setup';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Basic development setups and cleanups';

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
     */
    public function handle()
    {
        if (!$this->confirm('This command resets the database. Confirm?'))
            return "abort";

        $this->info("Generating new app key...");

        Artisan::call("key:generate --ansi");
        echo Artisan::output();

        $this->info("resetting database and creating database tables...");

        Artisan::call("migrate:fresh");
        echo Artisan::output();

        $this->info("filling database with dummy data...");

        Artisan::call("db:seed");
        echo Artisan::output();

        $this->info("installing passport keys...");

        Artisan::call("passport:install --force");
        echo Artisan::output();

        $this->info("Running optimizations...");

        Artisan::call("optimize:clear");
        echo Artisan::output();
    }
}
