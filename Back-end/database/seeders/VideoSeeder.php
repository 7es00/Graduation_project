<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class VideoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        foreach (range(1, 20) as $index) {
            \DB::table('videos')->insert([
                'name' => $faker->name,
                'instructor' => $faker->name,
                'language' => $faker->randomElement(['en', 'ar']),
                'image' => 'https://picsum.photos/800/600?random=12965',
                'video' => 'https://www.youtube.com/embed/_uQrJ0TkZlc?si=49kN3KBGy6SPmT_0',
                'is_recommended' => $faker->boolean,
                'technology_id' => $index
            ]);
        }
    }
}
