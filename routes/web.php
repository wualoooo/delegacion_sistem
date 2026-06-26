<?php
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});*/

Route::get('/', function () {
    return Inertia::render('Auth/Login');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');

// 1. Ruta para ver la pantalla del formulario (Esta usarás en el Sidebar)
Route::get('/usuarios/crear', [UserController::class, 'create'])->name('users.create');
// 2. Ruta para que el formulario guarde los datos en la base de datos
Route::post('/usuarios', [UserController::class, 'store'])->name('users.store');

Route::get('/usuarios', [UserController::class, 'index'])->name('users.index');

Route::middleware(['auth'])->group(function () {


});





















/*


Route::middleware(['auth', 'role:admin'])->prefix('admin')->group(function () {
    Route::get('/dashboard', function () {
        // Inertia busca automáticamente en la carpeta Admin
        return Inertia::render('Admin/DashboardAdmin'); 
    })->name('admin.dashboard');

    // Aquí irían más rutas de admin...
    // Route::get('/usuarios', [AdminUserController::class, 'index']);

});

// ZONA EXCLUSIVA PARA USUARIOS NORMALES
Route::middleware(['auth', 'role:usuario'])->prefix('usuario')->group(function () {
    
    // La URL será: misitio.com/usuario/dashboard
    Route::get('/dashboard', function () {
        // Inertia busca automáticamente en la carpeta User
        return Inertia::render('User/DashboardUser'); 
    })->name('user.dashboard');

});*/


/*
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
*/