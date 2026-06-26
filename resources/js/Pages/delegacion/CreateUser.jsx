import React from 'react';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const CreateUser = ({ roles, Manzanas }) => {
    
    const rolesSeguros = (roles && roles.length > 0) ? roles : [
        { id: 6, nombre: 'Usuario', descripcion: 'Contribuyente del Pueblo' }
    ];

    // 💡 Corregido: Datos de emergencia por si falla la base de datos
    const manzanasegura = (Manzanas && Manzanas.length > 0) ? Manzanas : [
        { id: 1, name_manzana: 'Centro' } 
    ];

    const { data, setData, post, processing, errors } = useForm({
        nombre: '',
        apellidos: '',
        numtel: '',
        correo: '',
        password: '',
        role_id: rolesSeguros[0].id, 
        manzana_id: manzanasegura[0].id,
        fecha_nacimiento: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('users.store'));
    };

    return (
        <AuthenticatedLayout headerTitle="Registrar Usuario">
            
            <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Crear Nuevo Usuario</h2>
                        <p className="text-sm text-slate-500">Registra un miembro en la base de datos global.</p>
                    </div>
                    <button 
                        type="button"
                        onClick={() => window.history.back()}
                        className="text-sm bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg transition"
                    >
                        <i className="fas fa-arrow-left mr-2"></i> Volver
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Campos de Nombre y Apellidos */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <label className="mb-2 font-semibold text-sm text-slate-700">Nombre(s)</label>
                            <input 
                                type="text" 
                                value={data.nombre} 
                                onChange={e => setData('nombre', e.target.value)} 
                                className={`p-3 border rounded-lg focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600 ${errors.nombre ? 'border-red-500 bg-red-50' : 'border-slate-300'}`}
                            />
                            {errors.nombre && <span className="text-red-500 text-xs mt-1">{errors.nombre}</span>}
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-2 font-semibold text-sm text-slate-700">Apellidos</label>
                            <input 
                                type="text" 
                                value={data.apellidos} 
                                onChange={e => setData('apellidos', e.target.value)} 
                                className={`p-3 border rounded-lg focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600 ${errors.apellidos ? 'border-red-500 bg-red-50' : 'border-slate-300'}`}
                            />
                            {errors.apellidos && <span className="text-red-500 text-xs mt-1">{errors.apellidos}</span>}
                        </div>
                    </div>

                    {/* Campo de Fecha de Nacimiento */}
                    <div className="flex flex-col">
                        <label className="mb-2 font-semibold text-sm text-slate-700">Fecha de Nacimiento</label>
                        <input 
                            type="date" 
                            value={data.fecha_nacimiento} 
                            onChange={e => setData('fecha_nacimiento', e.target.value)} 
                            className={`p-3 border rounded-lg bg-white focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600 ${errors.fecha_nacimiento ? 'border-red-500 bg-red-50' : 'border-slate-300'}`}
                        />
                        {errors.fecha_nacimiento && <span className="text-red-500 text-xs mt-1">{errors.fecha_nacimiento}</span>}
                    </div>

                    {/* Campos de Teléfono y Correo */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <label className="mb-2 font-semibold text-sm text-slate-700">Número de Teléfono</label>
                            <input 
                                type="text" 
                                value={data.numtel} 
                                onChange={e => setData('numtel', e.target.value)} 
                                className={`p-3 border rounded-lg focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600 ${errors.numtel ? 'border-red-500 bg-red-50' : 'border-slate-300'}`}
                            />
                            {errors.numtel && <span className="text-red-500 text-xs mt-1">{errors.numtel}</span>}
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-2 font-semibold text-sm text-slate-700">Correo Electrónico</label>
                            <input 
                                type="email" 
                                value={data.correo} 
                                onChange={e => setData('correo', e.target.value)} 
                                className={`p-3 border rounded-lg focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600 ${errors.correo ? 'border-red-500 bg-red-50' : 'border-slate-300'}`}
                            />
                            {errors.correo && <span className="text-red-500 text-xs mt-1">{errors.correo}</span>}
                        </div>
                    </div>

                    {/* Selector de ROLES */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <div className="flex flex-col">
                        <label className="mb-2 font-semibold text-sm text-slate-700">Rol del Usuario</label>
                        <select 
                            value={data.role_id}
                            onChange={e => setData('role_id', e.target.value)}
                            className={`p-3 border rounded-lg bg-white focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600 ${errors.role_id ? 'border-red-500 bg-red-50' : 'border-slate-300'}`}
                        >
                            {rolesSeguros.map((role) => (
                                <option key={role.id} value={role.id}>
                                    {role.nombre} — ({role.descripcion})
                                </option>
                            ))}
                        </select>
                        {errors.role_id && <span className="text-red-500 text-xs mt-1">{errors.role_id}</span>}
                    </div>

                    {/* Selector de MANZANAS */}
                    <div className="flex flex-col">
                        {/* 💡 Corregido: Le cambié el nombre a la etiqueta, antes decía 'Rol' */}
                        <label className="mb-2 font-semibold text-sm text-slate-700">Manzana a la que pertenece</label>
                        <select 
                            value={data.manzana_id}
                            onChange={e => setData('manzana_id', e.target.value)}
                            className={`p-3 border rounded-lg bg-white focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600 ${errors.manzana_id ? 'border-red-500 bg-red-50' : 'border-slate-300'}`}
                        >
                            {/* 💡 Corregido: Cambié a 'manzana.name_manzana' para que coincida con tu BD */}
                            {manzanasegura.map((manzana) => (
                                <option key={manzana.id} value={manzana.id}>
                                    {manzana.name_manzana}
                                </option>
                            ))}
                        </select>
                        {errors.manzana_id && <span className="text-red-500 text-xs mt-1">{errors.manzana_id}</span>}
                    </div>
                    </div>

                    {/* Contraseña */}
                    <div className="flex flex-col">
                        <label className="mb-2 font-semibold text-sm text-slate-700">Contraseña</label>
                        <input 
                            type="password" 
                            value={data.password} 
                            onChange={e => setData('password', e.target.value)} 
                            className={`p-3 border rounded-lg focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600 ${errors.password ? 'border-red-500 bg-red-50' : 'border-slate-300'}`}
                        />
                        {errors.password && <span className="text-red-500 text-xs mt-1">{errors.password}</span>}
                    </div>

                    {/* Botón de Enviar */}
                    <div className="flex justify-end pt-4">
                        <button 
                            type="submit" 
                            disabled={processing}
                            className={`px-6 py-3 font-bold rounded-lg text-black transition duration-300 flex items-center justify-center gap-2 ${
                                processing ? 'bg-brand-400 cursor-not-allowed' : 'bg-action-save hover:bg-action-saveHover'
                            }`}
                        >
                            {processing ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>Guardando...</span>
                                </>
                            ) : (
                                'Guardar Usuario'
                            )}
                        </button>
                    </div>
                </form>
            </div>
            
        </AuthenticatedLayout>
    );
};

export default CreateUser;