<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    public function run(): void 
    {
        DB::table('roles')->insert([
            ['nombre' => 'superAdmin', 'descripcion' => 'Administrador total del sistema'],
            ['nombre' => 'delegado', 'descripcion' => 'Delegado de la comunidad'],
            ['nombre' => 'secretario', 'descripcion' => 'Secretario de la delegación'],
            ['nombre' => 'agua', 'descripcion' => 'Personal encargado del Comité de Agua'],
            ['nombre' => 'feria', 'descripcion' => 'Personal encargado del Comité de Feria'],
            ['nombre' => 'user', 'descripcion' => 'Contribuyente del pueblo'],
        ]);
    }
}