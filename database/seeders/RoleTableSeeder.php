<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->truncate();
        Role::create([
            'name' => 'admin',
            'display_name' => 'Administrator',
        ]);

        Role::create([
            'name' => 'editor',
            'display_name' => 'Editor',
        ]);
    }
}
