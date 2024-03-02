<?php

namespace App\Modules\Rsvp\Actions;

use App\Modules\User\Models\User;
use Illuminate\Support\Arr;

class UpdateRsvpAction
{
    public function __construct(
    ) {
    }

    public function execute(User $user, array $attributes): User
    {

        $user->is_joining = $attributes['is_joining'];
        $user->pending = false;
        $user->save();

        return $user;
    }
}
