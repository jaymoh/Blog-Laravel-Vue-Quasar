<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->truncate();
        DB::table('role_user')->truncate();

        $user = User::create([
            'name' => 'System Administrator',
            'username' => 'admin',
            'email' => 'admin@blogger.test',
            'email_verified_at' => now(),
            'password' => bcrypt('123Secret'),
        ]);
        $user->roles()->attach(1);

        User::factory()->count(2)->create();

        if (env("APP_ENV") === "testing") {
            User::factory()->count(5)->create();
        }
    }
}
