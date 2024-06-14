<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TechnologiesCategory extends Model
{
    use HasFactory;

    public function technologies() {
        return $this->hasMany(Technology::class);
    }
}
