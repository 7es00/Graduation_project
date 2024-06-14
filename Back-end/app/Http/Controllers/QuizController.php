<?php

namespace App\Http\Controllers;

use App\Models\Quiz;
use Illuminate\Http\Request;

class QuizController extends Controller
{
    public function index()
    {
        $quiz = Quiz::with('stack')->get();

        if (!$quiz) {
            return response()->json(['message' => 'Quiz not found'], 404);
        }

        return response()->json($quiz);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'question' => 'required|string',
            'a' => 'required|string',
            'b' => 'required|string',
            'c' => 'required|string',
            'correct_answer' => 'required|in:A,B,C',
            'level' => 'required|string',
            'stack_id' => 'required|exists:stacks,id'
        ]);

        $quiz = Quiz::create($validated);
        return response()->json($quiz, 201);
    }

    public function show($id)
    {
        $quiz = Quiz::with('stack') // Eager load the stack relationship
                    ->find($id);

        if (!$quiz) {
            return response()->json(['message' => 'Quiz not found'], 404);
        }

        return response()->json($quiz);
    }

    public function update(Request $request, $id)
    {
        $quiz = Quiz::find($id);

        if (!$quiz) {
            return response()->json(['message' => 'Quiz not found'], 404);
        }

        $validated = $request->validate([
            'question' => 'string',
            'a' => 'string',
            'b' => 'string',
            'c' => 'string',
            'correct_answer' => 'in:A,B,C',
            'level' => 'string',
            'stack_id' => 'exists:stacks,id'
        ]);

        $quiz->update($validated);
        return response()->json($quiz);
    }

    public function destroy($id)
    {
        $quiz = Quiz::find($id);

        if (!$quiz) {
            return response()->json(['message' => 'Quiz not found'], 404);
        }

        $quiz->delete();
        return response()->json(['message' => 'Quiz deleted successfully']);
    }


    public function filterQuizzes(Request $request)
{
    $level = $request->query('level');
    $stackName = $request->query('stack_name');

    // Fetch quizzes based on the level and the name of the stack
    $quizzes = Quiz::with('stack')  // Ensure you're eager loading 'stack'
                ->where('level', $level)
                ->whereHas('stack', function ($query) use ($stackName) {
                    $query->where('name', $stackName);
                })
                ->get();

    return response()->json($quizzes);
}
}
