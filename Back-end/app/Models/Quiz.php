<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    protected $table = 'Quiz';
    protected $guarded = [];

    protected $fillable = ['question', 'a', 'b', 'c', 'correct_answer', 'level', 'stack_id'];

    public function stack()
    {
        return $this->belongsTo(Stack::class);
    }
}
