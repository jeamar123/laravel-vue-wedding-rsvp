<?php

namespace App\Modules\Admin\Actions;

use App\Modules\User\Models\User;
use Illuminate\Contracts\Auth\Factory as Auth;

class LoginAdminAction
{
    public function __construct(protected Auth $auth)
    {
        
    }

    public function execute(array $credentials, bool $remember = false): ?User
    {
        if (! $this->auth->guard('web')->attempt(
            [...$credentials],
            $remember
        )) {
            return null;
        }

        /** @var User $user */
        $user = $this->auth->user();

        return $user;
    }
}
