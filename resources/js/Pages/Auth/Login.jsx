import React, { useState } from 'react';
import { Oval } from 'react-loader-spinner';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // Creamos el estado para controlar la carga
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        //Activamos el estado de carga
        setIsLoading(true);
        console.log('Datos enviados:', { email, password });
        // Simulación de una petición a una API (Ej: dura 2 segundos)
        setTimeout(() => {ar
            setIsLoading(false);
            alert('¡Inicio de sesión simulado con éxito!');
        }, 2000);
    };

    return (
        <div className="flex h-screen w-full">
        
            {/* Lado Izquierdo: Imagen (Oculto en móviles 'hidden', visible en pantallas medianas 'md:block') */}
            <div className="hidden md:block md:w-1/2">
                <img 
                    src="https://images.unsplash.com/photo-1694985198543-b67810b69748?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Fondo de Login" 
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Lado Derecho: Formulario */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white p-8">
                
                <div className="w-full max-w-md">
                    <h2 className="text-3xl font-bold mb-2 text-gray-800">Iniciar Sesión</h2>
                    <p className="text-gray-500 mb-8 text-sm">Ingresa tus datos de inicio de sesión para acceder a tu cuenta.</p>
                    
                    <form onSubmit={handleSubmit}>
                        
                        <div className="flex flex-col mb-5">
                            <label htmlFor="email" className="mb-2 font-semibold text-back-text">
                                Correo Electrónico
                            </label>
                            <input 
                                type="email" 
                                id="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                                placeholder="ejemplo@correo.com"
                                className="p-3 border border-back-borderInputs rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                            />
                        </div>
                        
                        <div className="flex flex-col mb-6">
                            <label htmlFor="password" className="mb-2 font-semibold text-back-text">
                                Contraseña
                            </label>
                            <input 
                                type="password" 
                                id="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                required 
                                placeholder="********"
                                className="p-3 border border-back-borderInputs rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                            />
                        </div>
                        
                        {/* 4. Modificamos el botón para reaccionar al estado de carga */}
                        <button 
                            type="submit" 
                            disabled={isLoading} // Evita múltiples clics mientras carga
                            className={`w-full p-3 text-white font-bold rounded transition duration-300 flex justify-center items-center gap-2 ${
                                isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-brand-main hover:bg-brand-hover'
                            }`}
                        >
                            {isLoading ? (
                                <>
                                    <Oval
                                        height={20}
                                        width={20}
                                        color="#ffffff"
                                        wrapperClass=""
                                        visible={true}
                                        ariaLabel='oval-loading'
                                        secondaryColor="#4fa94d"
                                        strokeWidth={4}
                                        strokeWidthSecondary={4}
                                    />
                                    Cargando...
                                </>
                            ) : (
                                'Ingresar'
                            )}
                        </button>
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;