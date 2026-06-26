<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Manzana extends Model
{
    protected $table = 'manzanas';
    protected $fillable = ['name_manzana'];

    public function users()
    {
        return $this->hasMany(User::class);
    }
    
    }
