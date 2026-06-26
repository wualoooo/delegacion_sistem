import React, { useState } from 'react';
import Sidebar from '@/Layouts/Sidebar';
import HeaderPC from '@/Components/Header'; // 💡 1. Importa tu componente de Header aquí (ajusta la ruta según cómo lo hayas guardado)

export default function AuthenticatedLayout({ children, headerTitle = 'Panel de Control' }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-slate-100 font-sans">
            
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

            <div className="flex-1 flex flex-col overflow-hidden">
                
                {/* Navbar móvil (Si tu Header de PC no está adaptado para celulares, conservamos este para móviles) */}
                <header className="flex items-center justify-between p-4 bg-white border-b border-slate-200 md:hidden">
                    <button 
                        onClick={() => setIsSidebarOpen(true)} 
                        className="text-slate-600 p-2"
                    >
                        <i className="fas fa-bars text-xl"></i>
                    </button>
                    <span className="font-bold text-slate-800">{headerTitle}</span>
                    <div className="w-6"></div>
                </header>

                {/* 💡 2. AQUÍ COLOCAS TU HEADER DE PC */}
                {/* Le pongo 'hidden md:block' asumiendo que es solo para PC, si es responsivo quítale esas clases */}
                <div className="hidden md:block">
                    <HeaderPC /> 
                </div>

                {/* Contenedor principal donde cambia el contenido */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
                    {children} 
                </main>
                
            </div>
        </div>
    );
}