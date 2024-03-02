<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Modules\User\Models\User;
use App\Enums\Role;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role as SpatieRole;

class UserSeeder extends Seeder
{
    protected const USERS = [
        [
            'full_name' => 'Super Admin',
            'first_name' => 'Super',
            'last_name' => 'Admin',
            'email' => 'super@admin.com',
            'username' => 'super_admin',
            'password' => 'password',
            'role' => Role::SUPER_ADMIN->value,
        ],
        [
            'full_name' => 'Admin Admin',
            'first_name' => 'Admin',
            'last_name' => 'Admin',
            'email' => 'admin@admin.com',
            'username' => 'admin',
            'password' => 'admin',
            'role' => Role::SUPER_ADMIN->value,
        ],
        [
            'full_name' => 'Jeamar Libres',
            'first_name' => 'Jeamar',
            'last_name' => 'Libres',
            'email' => 'jeamar@example.com',
            'username' => 'jeamar',
            'password' => 'jeamar',
            'group' => 'libres',
            'role' => Role::USER->value,
        ],
        [
            'full_name' => 'Shiely Libres',
            'first_name' => 'Shiely',
            'last_name' => 'Libres',
            'email' => 'shiely@example.com',
            'username' => 'shiely',
            'password' => 'shiely',
            'group' => 'libres',
            'role' => Role::USER->value,
        ],
    ];

    public function run()
    {
        foreach (self::USERS as $user_details) {
            $user = User::create([
                ...$user_details,
                'password' => Hash::make($user_details['password']),
            ]);
            $user->assignRole(SpatieRole::findByName($user_details['role']));
        }
    }
}
