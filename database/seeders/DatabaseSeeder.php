<?php

namespace Database\Seeders;

use App\Models\User;
use Spatie\Permission\Models\Role;
use Illuminate\Database\Seeder;


class DatabaseSeeder extends Seeder
{
    public function run()
    {
        // Create role
        $adminRole = Role::firstOrCreate(['name' => 'admin']);

        //Create user admin
        $user = User::create([
            'first_name' => 'Mandela',
            'last_name' => 'Fanuel',
            'email' => 'mandela@example.com',
            'password' => bcrypt('password123'),

        ]);


        $user->assignRole('admin');
    }
}
