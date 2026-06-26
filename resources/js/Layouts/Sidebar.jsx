import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';

const Sidebar = ({ isOpen, setIsOpen }) => {
    const { auth } = usePage().props;
    const userRole = auth?.role || 'superAdmin';
    // Estado para controlar qué submenú está abierto (guardamos el nombre del menú)
    const [openSubMenu, setOpenSubMenu] = useState(null);
    // Función para abrir/cerrar submenús
    const toggleSubMenu = (menuName) => {
        if (openSubMenu === menuName) {
            setOpenSubMenu(null); // Si ya estaba abierto, lo cierra
        } else {
            setOpenSubMenu(menuName); // Abre el seleccionado
        }
    };

    const menuItems = [
        { 
            name: 'Dashboard Principal', 
            icon: 'fa-home', 
            route: 'dashboard', 
            roles: ['superAdmin', 'delegado'] 
        },
        { 
            name: 'Administradores', 
            icon: 'fa-user-shield', 
            roles: ['superAdmin',],
            route: 'dashboard', 
        },
        { 
            name: 'Usuarios', 
            icon: 'fa-users', 
            roles: ['superAdmin', 'delegado'],
            
            subItems: [
                { name: 'Lista de Usuarios', route: 'users.index' },
                { name: 'Crear Usuario', route: 'users.create' },
            ]
        },
        { 
            name: 'Delegación', 
            icon: 'fa-building-columns', 
            roles: ['superAdmin', 'agua'],
            subItems: [
                { name: 'Control de Lecturas', route: 'dashboard' },
                { name: 'Registrar Pagos', route: 'dashboard' },
            ]
        },
        { 
            name: 'Comité Agua', 
            icon: 'fa-tint', 
            roles: ['superAdmin', 'agua'],
            subItems: [
                { name: 'Control de Lecturas', route: 'dashboard' },
                { name: 'Registrar Pagos', route: 'dashboard' },
            ]
        },
        { 
            name: 'Comité Feria', 
            icon: 'fa-republican', 
            roles: ['superAdmin', 'feria'],
            subItems: [
                { name: 'Lista de Eventos', route: 'dashboard' },
                { name: 'Finanzas Feria', route: 'dashboard' },
            ]
        },
    ];

    return (
        <>
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden" 
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            <aside className={`
                fixed inset-y-0 left-0 z-30 w-60 bg-back-text text-brand-secondary transform transition-transform duration-300 ease-in-out
                md:relative md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <div className="p-6 flex items-center justify-center border-b border-back-textSecondary/30">
                    <span className="text-xl font-bold tracking-wider text-brand-secondary">¡Bienvenido!</span>
                </div>

                <nav className="mt-6 px-4">
                    {menuItems.map((item) => {
                        const hasSubItems = item.subItems && item.subItems.length > 0;
                        const isSubMenuOpen = openSubMenu === item.name;

                        return item.roles.includes(userRole) && (
                            <div key={item.name} className="w-full">
                                {hasSubItems ? (
                                    // SI TIENE SUBOPCIONES: Es un botón que despliega el menú
                                    <button
                                        onClick={() => toggleSubMenu(item.name)}
                                        className="w-full flex items-center justify-between p-3 my-1 rounded-lg hover:bg-brand-main transition-colors group text-left"
                                    >
                                        <div className="flex items-center">
                                            <i className={`fas ${item.icon} w-6 text-back-textSecondary group-hover:text-brand-secondary transition-colors`}></i>
                                            <span className="ml-3 font-medium text-brand-secondary">{item.name}</span>
                                        </div>
                                        {/* Flecha indicadora que gira si está abierto */}
                                        <i className={`fas fa-chevron-down text-xs text-back-textSecondary transition-transform duration-200 ${isSubMenuOpen ? 'rotate-180' : ''}`}></i>
                                    </button>
                                ) : (
                                    // SI NO TIENE SUBOPCIONES: Es un Link directo (como el Dashboard)
                                    <Link
                                        href={route(item.route)}
                                        onClick={() => setIsOpen(false)}
                                        className={`flex items-center p-3 my-1 rounded-lg hover:bg-brand-main transition-colors group ${
                                            route().current(item.route) ? 'bg-brand-main' : ''
                                        }`}
                                    >
                                        <i className={`fas ${item.icon} w-6 text-back-textSecondary group-hover:text-brand-secondary transition-colors`}></i>
                                        <span className="ml-3 font-medium text-brand-secondary">{item.name}</span>
                                    </Link>
                                )}

                                {/* Renderizado de las subopciones con animación suave */}
                                {hasSubItems && (
                                    <div className={`pl-9 overflow-hidden transition-all duration-300 ${isSubMenuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        {item.subItems.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                href={route(subItem.route)}
                                                onClick={() => setIsOpen(false)} // Cierra sidebar en móvil
                                                className={`block p-2 my-1 text-sm rounded-md text-back-textSecondary hover:text-brand-secondary hover:bg-brand-main/50 transition-colors ${
                                                    route().current(subItem.route) ? 'text-brand-secondary font-semibold' : ''
                                                }`}
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;