import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                brand: {
                main: '#4f46e5',
                hover:'#4338ca',
                secondary: '#f8fafc',
                },
                back: {
                general:'#f1f5f9',
                borderInputs:'#cbd5e1',
                text:' #0f172a',
                textSecondary: '#64748b'
                },
                action: {
                    save: '#10b981',       // Emerald 500 (Para el fondo)
                    saveHover: '#059669',  // Emerald 600 (Para cuando pasas el mouse)
                }

                /*Para las gráficas y alertas necesitas colores con buen contraste entre sí:
                    🟢 Éxito / Positivo: #10b981 (Tailwind emerald-500)
                    🟡 Advertencia / Proceso: #f59e0b (Tailwind amber-500)
                    🔴 Peligro / Alerta: #ef4444 (Tailwind red-500)
                    🔵 Info / Extra (Gráficas): #06b6d4 (Tailwind cyan-500) o #3b82f6 (Tailwind blue-500)*/
                    
            },
        },
    },

    plugins: [forms],
};
