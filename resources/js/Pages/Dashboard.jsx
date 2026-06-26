import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'; // 💡 Importamos la plantilla

const Dashboard = ({ totalUsuarios }) => {
    return (
        // 💡 Envolvemos todo el contenido dentro de nuestro Layout
        <AuthenticatedLayout headerTitle="Panel de Control">
            <Head title="Dashboard" />

            <div className="mb-6">
                <h1 className="text-3xl font-bold text-slate-900">Dashboard General</h1>
                <p className="text-sm text-slate-500">Bienvenido al sistema de gestión.</p>
            </div>

            {/* Tarjetas de estadísticas rápidas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Usuarios Registrados</p>
                        <h3 className="text-3xl font-extrabold text-slate-900 mt-1">{totalUsuarios}</h3>
                    </div>
                    <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg">
                        <i className="fas fa-users text-2xl"></i>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Dashboard;