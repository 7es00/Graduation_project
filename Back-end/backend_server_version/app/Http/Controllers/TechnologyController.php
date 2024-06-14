<?php

namespace App\Http\Controllers;

use App\Models\Technology;
use App\Models\Video;
use Illuminate\Http\Request;

class TechnologyController extends Controller
{
    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $technology = Technology::with('videos')->findOrFail($id);
        return response()->json($technology);
    }

    public function videos(string $id) {
        $videos = Video::where('technology_id', $id)->get();
        return response()->json($videos);
    }
}
