<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

use function PHPSTORM_META\map;

class TrackSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        foreach (range(1, 20) as $index) {
            \DB::table('tracks')->insert([
                'name' => $faker->name,
                'level' => $faker->randomElement(['Beginner', 'Intermediate', 'Advanced']),
                'logo' => 'https://picsum.photos/800/600?random=12965',
                'stack_id' => $index,
                'description' => $faker->name
            ]);
        }
    }
}
