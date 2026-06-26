<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ManzanaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('manzanas')->insert([
            ['name_manzana' => 'Centro'],
            ['name_manzana' => 'Cerritos'],
            ['name_manzana' => 'Boxhuada'],
            ['name_manzana' => 'Tzadhé'],
            ['name_manzana' => 'Cruz Blanca'],
            ['name_manzana' => 'Memthi'],
        ]);
    }
}
