<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class QuizResult extends Model
{
    protected $table = 'QuizResult';
    protected $fillable = ['studentId', 'score'];
}
