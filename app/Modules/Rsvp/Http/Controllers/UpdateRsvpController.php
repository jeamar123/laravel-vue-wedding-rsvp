<?php

namespace App\Modules\Rsvp\Http\Controllers;

use App\Modules\User\Models\User;
use App\Modules\User\Http\Resources\UserResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

use App\Modules\Rsvp\Actions\UpdateRsvpAction;
use App\Modules\Rsvp\Http\Requests\UpdateRsvpRequest;

class UpdateRsvpController
{
  public function __invoke(
    UpdateRsvpRequest $request, 
    UpdateRsvpAction $updateRsvpAction,
  ): JsonResponse 
  {
    $user = User::find($request->id);

    if(!$user){
      return response()->json([
        'message' => 'User not found.'
      ], 404);
    }

    $updateRsvpAction->execute($user, $request->validated());

    if($request->companions){
      $companions = $request->companions;
      foreach ($companions as $companion) {
        if($companion['response'] != 'pending'){
          $companion_rsvp = User::find($companion['id']);

          $updateRsvpAction->execute($companion_rsvp, [
            'is_joining' => ($companion['response'] === 'going' ? true : false),
          ]);
        }
      }
    }
  
    return response()->json([
      'message' => 'Success.'
    ], 200);
  }
}   