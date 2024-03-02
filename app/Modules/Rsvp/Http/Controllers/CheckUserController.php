<?php

namespace App\Modules\Rsvp\Http\Controllers;

use App\Modules\User\Models\User;
use App\Modules\User\Http\Resources\UserResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CheckUserController
{
  public function __invoke(Request $request): JsonResponse 
  {
    $splitName = explode(' ', $request->name);
    $first_name = $splitName[0];
    $last_name = $splitName[sizeof($splitName)-1];
    $full_name = $first_name . ' ' . $last_name;

    $check_user = User::where('full_name', $full_name)->first();

    if(!$check_user){
      return response()->json([
        'message' => 'User not found.'
      ], 404);
    }

    $user = UserResource::make($check_user);

    if($user->group){
      $pending = array();
      $companions = User::where('group', $user->group)
                          ->where('id', '!=' , $user->id)
                          ->get();
      
      foreach ($companions as $companion) {
        $companion_response = $companion->is_joining == true ? 'going' : 'not_going';
        $companion->response = $companion->pending ? 'pending' : $companion_response;

        if($companion->response === 'pending'){
          array_push($pending, $companion);
        }
      }

      $response = [
        'user' => $user,
        'companions' => [
          'list' => $companions,
          'pending' => $pending,
          'total' => sizeof($companions)
        ]
      ];
    }
  
    return response()->json($response, 200);
  }
}   