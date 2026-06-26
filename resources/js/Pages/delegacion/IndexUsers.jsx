import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';

export default function IndexUsers({ users }) {
    // Usamos usePage para capturar el mensaje flash (success) que mandamos desde el controlador
    const { flash } = usePage().props;

    return (
        <AuthenticatedLayout>
            <Head title="Usuarios Registrados" />

            <div className="py-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Alerta de Éxito (Si existe el mensaje flash, lo mostramos) */}
                {flash?.success && (
                    <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg relative" role="alert">
                        <span className="block sm:inline font-medium">{flash.success}</span>
                    </div>
                )}

                {/* Encabezado y botón de crear */}
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-back-text">Usuarios Registrados</h1>
                        <p className="text-back-textSecondary text-sm mt-1">Gestiona los accesos y miembros de los comités de la delegación.</p>
                    </div>
                    {/* Botón que te lleva al formulario que ya hicimos */}
                    <Link 
                        href={route('users.create')} 
                        className="bg-brand-main text-brand-secondary px-5 py-2.5 rounded-lg font-semibold hover:bg-brand-hover transition-colors shadow-sm inline-flex items-center gap-2"
                    >
                        <i className="fas fa-plus"></i>
                        Nuevo Usuario
                    </Link>
                </div>

                {/* Contenedor de la Tabla */}
                <div className="bg-brand-secondary overflow-hidden shadow-sm rounded-xl border border-back-borderInputs">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-back-general border-b border-back-borderInputs">
                                    <th className="py-4 px-6 text-xs font-bold text-back-textSecondary uppercase tracking-wider">ID</th>
                                    <th className="py-4 px-6 text-xs font-bold text-back-textSecondary uppercase tracking-wider">Nombre Completo</th>
                                    <th className="py-4 px-6 text-xs font-bold text-back-textSecondary uppercase tracking-wider">Contacto</th>
                                    <th className="py-4 px-6 text-xs font-bold text-back-textSecondary uppercase tracking-wider">Rol</th>
                                    <th className="py-4 px-6 text-xs font-bold text-back-textSecondary uppercase tracking-wider text-right">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-back-borderInputs">
                                {users.map((user) => (
                                    <tr key={user.id} className="hover:bg-back-general/50 transition-colors">
                                        
                                        {/* Columna ID */}
                                        <td className="py-4 px-6 text-sm text-back-textSecondary font-medium">
                                            #{user.id}
                                        </td>
                                        
                                        {/* Columna Nombre y Apellidos combinados */}
                                        <td className="py-4 px-6">
                                            <div className="text-sm font-bold text-back-text">
                                                {user.nombre} {user.apellidos}
                                            </div>
                                            <div className="text-xs text-back-textSecondary mt-0.5">
                                                Manzana: {user.manzana_id}
                                            </div>
                                        </td>
                                        
                                        {/* Columna Contacto (Correo y Teléfono) */}
                                        <td className="py-4 px-6">
                                            <div className="text-sm text-back-text">
                                                <i className="fas fa-envelope mr-2 text-back-textSecondary"></i>
                                                {user.correo}
                                            </div>
                                            <div className="text-sm text-back-text mt-1">
                                                <i className="fas fa-phone mr-2 text-back-textSecondary"></i>
                                                {user.numtel || 'Sin teléfono'}
                                            </div>
                                        </td>
                                        
                                        {/* Columna Rol (Usando la relación manual) */}
                                        <td className="py-4 px-6 text-sm">
                                            <span className="bg-brand-main/10 text-brand-main py-1 px-3 rounded-full text-xs font-bold uppercase tracking-wide">
                                                {user.role ? user.role.name : 'Sin rol'}
                                            </span>
                                        </td>
                                        
                                        {/* Columna Acciones */}
                                        <td className="py-4 px-6 text-sm text-right">
                                            <button className="text-brand-main hover:text-brand-hover font-medium mr-4 transition-colors">
                                                <i className="fas fa-edit mr-1"></i> Editar
                                            </button>
                                            <button className="text-red-500 hover:text-red-700 font-medium transition-colors">
                                                <i className="fas fa-trash mr-1"></i> Eliminar
                                            </button>
                                        </td>
                                        
                                    </tr>
                                ))}
                                
                                {/* Estado Vacío: Si no hay usuarios en la base de datos */}
                                {users.length === 0 && (
                                    <tr>
                                        <td colSpan="5" className="py-12 text-center">
                                            <div className="text-back-textSecondary mb-2">
                                                <i className="fas fa-users text-4xl opacity-50"></i>
                                            </div>
                                            <p className="text-back-textSecondary text-lg font-medium">No hay usuarios registrados aún.</p>
                                            <p className="text-back-textSecondary text-sm">Comienza agregando un nuevo miembro a la delegación.</p>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}