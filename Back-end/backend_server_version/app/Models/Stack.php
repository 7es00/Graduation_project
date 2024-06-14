<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stack extends Model
{
    use HasFactory;

    public function tracks() {
        return $this->hasMany(Track::class);
    }

    public function templates() {
        return $this->hasMany(Template::class);
    }

    public function documentations() {
        return $this->hasMany(Documentation::class);
    }

    public function websites() {
        return $this->hasMany(Website::class);
    }

    public function programs() {
        return $this->hasMany(Program::class);
    }

    public function certifications() {
        return $this->hasMany(Certificate::class);
    }
    protected $guarded = [];

    public function Quiz()
    {
        return $this->hasMany(Quiz::class);
    }
}
