<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /*Los atributos que se pueden guardar masivamente (Los que vienen del formulario)*/
    protected $fillable = [
        'nombre',
        'apellidos',
        'numtel',
        'correo',
        'password',
        'role_id',
        'manzana_id',
        'fecha_nacimiento',
    ];

    /* Los atributos que deben ocultarse (Por seguridad, para que no viajen a React)*/
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /*Convertir tipos de datos (Casting)*/
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'fecha_nacimiento' => 'date', // 💡 Le decimos a Laravel que esto es una fecha real
        ];
    }

    //RELACIONES DE BASE DE DATOS

    /*Un usuario pertenece a un Rol.*/
    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    /*Un usuario pertenece a una Manzana*/
    public function manzana()
    {
        // Si tu modelo se llama Manzanas.php pon Manzanas::class
        return $this->belongsTo(Manzana::class); 
    }
}