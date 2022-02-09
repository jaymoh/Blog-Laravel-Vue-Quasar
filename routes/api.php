<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
// open routes

Route::post('auth/login', [AuthController::class, 'userLogin'])->name('auth.login');
Route::post('auth/register', [AuthController::class, 'userRegister'])->name('auth.register');
Route::post('auth/token/refresh', [AuthController::class, 'refreshAuthToken'])->name('auth.token.refresh');

Route::get('posts', [PostController::class, 'index'])->name('posts.index');
Route::get('posts/{id}', [PostController::class, 'show'])->name('posts.show');

// authenticated routes
Route::middleware(['auth:api'])->group(function () {
    Route::post('posts', [PostController::class, 'store'])->name('posts.store');
    Route::put('posts/{id}', [PostController::class, 'update'])->name('posts.update');
    Route::delete('posts/{id}', [PostController::class, 'destroy'])->name('posts.destroy');

    Route::get('auth/user', [AuthController::class, 'authenticatedUser'])->name('auth.user');
    Route::get('auth/logout', [AuthController::class, 'userLogout'])->name('auth.logout');
});
