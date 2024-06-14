<?php

use App\Http\Controllers\Api\QuizController as ApiQuizController;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\QuizResultController;
use App\Http\Controllers\StackController;
use App\Http\Controllers\TechnologyController;
use App\Http\Controllers\TrackController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('auth')->group(function () {
    Route::post('/login', [AuthenticationController::class, 'login']);
    Route::post('/register', [AuthenticationController::class, 'register']);
});

// Stacks
Route::apiResource('stacks', StackController::class)->only(['index', 'show']);

// Tracks
Route::apiResource('tracks', TrackController::class)->only(['index', 'show']);

// Technologies
Route::get('technologies/{id}', [TechnologyController::class, 'show'])->name('technologies');
Route::get('technologies/{id}/videos', [TechnologyController::class, 'videos'])->name('technologies.videos');
Route::get('technologies/{id}/videos/{videoID}', [TechnologyController::class, 'getVideo'])->name('technologies.video');
// Route::apiResource('Quiz', ApiQuizController::class);
// Route::get('Quiz/{id}', [ApiQuizController::class, 'show'])->name('Quizs');



Route::apiResource('quizzes', QuizController::class);

Route::apiResource('submit-quiz-results', QuizResultController::class);
Route::get('/quizzes/filter', 'QuizController@filterQuizzes');