<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class TemplateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        foreach (range(1, 20) as $index) {
            \DB::table('templates')->insert([
                'name' => $faker->name,
                'image' => 'https://picsum.photos/800/600?random=12965',
                'track_id' => $index
            ]);
        }
    }
}
