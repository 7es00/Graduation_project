<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\FirstLevelCategory;
use App\Models\Stack;
use Illuminate\Http\Request;

class StackController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = FirstLevelCategory::with(
            'categories',
            'categories.stacks'
        )->get();
        return response()->json($data);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $stacks = Stack::with(
            'tracks',
            'tracks.technologies',
            'templates',
            'documentations',
            'websites',
            'programs',
            'certifications'
        )->findOrFail($id);

        return response()->json($stacks);
    }
}
