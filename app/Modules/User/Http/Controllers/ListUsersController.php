<?php

namespace App\Modules\User\Http\Controllers;
use App\Modules\User\Http\Resources\UserResource;

use App\Modules\User\Models\User;
use Illuminate\Http\JsonResponse;

class ListUsersController
{
    public function __invoke(): JsonResponse
    {   
        $users = User::where('role', 'user')->orderBy('created_at')->get();

        foreach ($users as $user) {
            $user->response = $user->pending ? 'pending' : ($user->is_joining ? 'joining' : 'not_joining');
        }

        return response()->json([
            'users' => $users
        ], 200);
    }
}   