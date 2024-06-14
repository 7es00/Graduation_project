<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class QuizTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \DB::table('Quiz')->insert([
            [
                'question' => 'What is Laravel?',
                'a' => 'A PHP framework',
                'b' => 'A JavaScript library',
                'c' => 'A CSS framework',
                'correct_answer' => 'A',
                'level' => 'easy',
                'stack_id' => 1, // Ensure this ID exists in the 'stacks' table
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'question' => 'Which symbol is used for jQuery?',
                'a' => '#',
                'b' => '$',
                'c' => '%',
                'correct_answer' => 'B',
                'level' => 'easy',
                'stack_id' => 2, // Ensure this ID exists in the 'stacks' table
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'question' => 'What does CSS stand for?',
                'a' => 'Controlled Style Sheets',
                'b' => 'Cascading Style Sheets',
                'c' => 'Cascading Simple Sheets',
                'correct_answer' => 'B',
                'level' => 'easy',
                'stack_id' => 3, // Ensure this ID exists in the 'stacks' table
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]
        ]);
    }
}
