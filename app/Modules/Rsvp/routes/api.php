<?php

use Illuminate\Support\Facades\Route;
use App\Modules\Rsvp\Http\Controllers\CheckUserController;
use App\Modules\Rsvp\Http\Controllers\UpdateRsvpController;


Route::post('check-name', CheckUserController::class)
    ->name('rsvp.check-name');
//     Route::get('reservations', GetReservationsController::class)
//         ->name('user.rsvp.reservation.list');
//     Route::post('create/reservation', CreateReservationController::class)
//         ->name('user.rsvp.reservation.create');
//     Route::post('reservation/companions', CompanionReservationController::class)
//         ->name('user.rsvp.reservation.companions');
Route::patch('update', UpdateRsvpController::class)
    ->name('rsvp.update');
//     Route::delete('delete/reservation/{id}', DeleteReservationController::class)
//         ->name('user.rsvp.reservation.delete');