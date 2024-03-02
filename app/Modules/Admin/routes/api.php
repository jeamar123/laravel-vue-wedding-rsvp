<?php

use Illuminate\Support\Facades\Route;
use App\Modules\Admin\Http\Controllers\LoginAdminController;
use App\Modules\Admin\Http\Controllers\CurrentUserController;

use App\Modules\User\Models\User;


Route::post('/login', LoginAdminController::class)->name('user.login');