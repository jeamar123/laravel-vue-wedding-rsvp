<?php

namespace App\Modules\User\Actions;

use App\Modules\User\Models\User;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role as SpatieRole;

class CreateUserAction
{
    public function __construct()
    {

    }

    public function execute(array $attributes): User
    {
        $role = isset($attributes['password']) ? $attributes['role'] : 'user';

        $user = User::create([
            ...$attributes,
            'full_name' => $attributes['first_name'] . ' ' . $attributes['last_name'],
            'password' => isset($attributes['password']) ? Hash::make($attributes['password']) : null,
            'role' => $role
        ]);

        $user->assignRole(SpatieRole::where('name', $role)->first());

        return $user;
    }
}
