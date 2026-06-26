<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Manzana;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Muestra la lista de todos los usuarios registrados.
     */
    public function index()
    {
        $users = User::with('role')->get();

        // Enviamos los datos a la vista de React
        return Inertia::render('delegacion/IndexUsers', [
            'users' => $users
        ]);
    }

    /**
     * Muestra el formulario para crear un nuevo usuario.
     */
    public function create()
    {
        // Traemos los roles (Actualmente filtrado al ID 6, modifícalo según necesites)
        $roles = Role::query()->where('id', '=', 6)->get();
        $manzanas = Manzana::all();

        // Pasamos los roles y manzanas a la vista de React
        return Inertia::render('delegacion/CreateUser', [
            'roles' => $roles,
            'Manzanas' => $manzanas
        ]);
    }

    /**
     * Guarda el nuevo usuario en la base de datos.
     */
    public function store(Request $request)
    {
        // 1. Validamos los datos
        $validated = $request->validate([
            'nombre'           => 'required|string|max:255',
            'apellidos'        => 'required|string|max:255',
            'numtel'           => 'nullable|string|max:10',
            'correo'           => 'required|string|email|max:255|unique:users,correo',
            'password'         => 'required|string|min:8',
            'role_id'          => 'required|exists:roles,id',
            'manzana_id'       => 'required|exists:manzanas,id',
            'fecha_nacimiento' => 'nullable|date|before:today',
        ], [
            'correo.unique'     => 'Este correo electrónico ya está registrado en el sistema.',
            'password.min'      => 'La contraseña debe tener al menos 8 caracteres.',
            'role_id.exists'    => 'El rol seleccionado no es válido.',
            'manzana_id.exists' => 'La manzana seleccionada no es válida.',
        ]);

        // 2. Insertamos el registro en la base de datos (SIN el role_id)
        $user = User::create([
            'nombre'           => $validated['nombre'],
            'apellidos'        => $validated['apellidos'],
            'numtel'           => $validated['numtel'],
            'correo'           => $validated['correo'],
            'password'         => Hash::make($validated['password']),
            'role_id'          => $validated['role_id'],
            'manzana_id'       => $validated['manzana_id'],
            'fecha_nacimiento' => $validated['fecha_nacimiento'] ?? null, // Guardamos la fecha si existe
        ]);


        // 4. Redireccionamos a la tabla con un mensaje flash de éxito
        // Asegúrate de que la ruta 'users.index' exista en tu web.php
        return redirect()->route('users.index')->with('success', '¡Usuario creado con éxito!');
    }
}