<?php
use App\Http\Controllers\API\StudentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
//routes for users
Route::post('register', [UserController::class, 'register']);

//sudents routes
// sleep(10);
Route::get('students', [StudentController::class, 'index']);
Route::post('add-student', [StudentController::class, 'store']);
Route::get('edit-student/{id}', [StudentController::class, 'edit']);
Route::put('update-student/{id}', [StudentController::class, 'update']);
Route::get('delete-student/{id}', [StudentController::class, 'destroy']);
Route::get('delete-all', [StudentController::class, 'deleteAll']);
Route::get('search-student/{id}', [StudentController::class, 'searchStudent']);
Route::get('search/{key}', [StudentController::class, 'search']);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
