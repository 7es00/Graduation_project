<?php

namespace App\Http\Controllers;

use App\Models\QuizResult;
use Illuminate\Http\Request;

class QuizResultController extends Controller
{
    public function index (){
        $All = QuizResult::all();
        return $All;

    }
public function store(Request $request)
{

    $quiz = QuizResult::create($request->all());
    
        return response()->json($quiz, 201);

}
}
