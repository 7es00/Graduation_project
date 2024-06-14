<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class StackSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        foreach (range(1, 20) as $index) {
            \DB::table('stacks')->insert([
                'name' => $faker->name,
                'logo' => 'https://picsum.photos/800/600?random=12965',
                'category_id' => $index,
            ]);
        }
    }
}
