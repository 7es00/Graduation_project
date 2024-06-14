<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class DocumentationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        foreach (range(1, 20) as $index) {
            \DB::table('documentations')->insert([
                'name' => $faker->name,
                'image' => 'https://picsum.photos/800/600?random=12965',
                'link' => 'https://google.com',
                'short_description' => $faker->sentence($nbWords = 6, $variableNbWords = true),
                'technology_id' => $index
            ]);
        }
    }
}
