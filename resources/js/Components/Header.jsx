import React from 'react';
import { usePage, Link } from '@inertiajs/react';

const Header = ({ setIsSidebarOpen }) => {
    const { auth } = usePage().props;

    return (
        // Fondo secondary, con borde del color exacto de tus inputs
        <header className="bg-brand-secondary shadow-sm border-b border-back-borderInputs p-4 flex justify-between items-center px-8">
            
            <button 
                onClick={() => setIsSidebarOpen(true)}
                className="md:hidden text-back-textSecondary focus:outline-none hover:text-brand-main"
            >
                <i className="fas fa-bars text-xl"></i>
            </button>

            <div className="hidden md:block">
                <h2 className="text-back-textSecondary font-medium">Panel de Control</h2>
            </div>

            <div className="flex items-center gap-4">
                <div className="text-right">
                    {/* Agregamos el signo de interrogación y un valor por defecto ('Invitado') */}
                    <p className="text-sm font-bold text-back-text leading-none">
                        {auth.user?.name || 'Invitado'}
                    </p>
                    <p className="text-xs text-brand-main font-semibold uppercase mt-1">
                        {auth.role || 'Sin rol'}
                    </p>
                </div>
                
                <div className="relative group">
                    <button className="w-10 h-10 rounded-full bg-brand-main flex items-center justify-center text-brand-secondary font-bold hover:bg-brand-hover transition-colors shadow-sm">
                        {/* También protegemos la inicial del avatar */}
                        {auth.user?.name?.charAt(0) || '?'}
                    </button>
                    
                    <div className="absolute right-0 w-48 mt-2 py-2 bg-brand-secondary border border-back-borderInputs rounded-lg shadow-xl hidden group-hover:block z-50">
                        <Link 
                            href={'#'} 
                            className="block px-4 py-2 text-sm text-back-text hover:bg-back-general transition-colors"
                        >
                            Mi Perfil
                        </Link>
                        <Link 
                            href={'#'} 
                            method="post" 
                            as="button" 
                            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-back-general transition-colors"
                        >
                            Cerrar Sesión
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;