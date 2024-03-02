<?php

namespace App\Modules\Admin\Http\Controllers;

use App\Modules\User\Models\User;
use Illuminate\Http\JsonResponse;
use App\Modules\Admin\Actions\LoginAdminAction;
use App\Modules\Admin\Http\Requests\LoginAdminRequest;

class LoginAdminController
{
    public function __invoke(
        LoginAdminRequest $request,
        LoginAdminAction $login,
    ): JsonResponse 
    {
        $user = $login->execute(
            $request->only('username', 'password'),
            $request->input('remember', false)
        );

        if ($user) {
            activity()
                ->event($user->role . ':logged in')
                ->withProperties([
                    'user' => $user
                ])
                ->log($user->role . ':logged in');

            return response()->json([
                'token' => $user->createToken('apiToken')->plainTextToken,
                'message' => 'Success',
            ], 200);
        }

        return response()->json([
            'message' => 'Invalid Credentials',
        ], 400);
    }
}   