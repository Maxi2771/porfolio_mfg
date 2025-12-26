import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const serviceId = import.meta.env.VITE_SERVICE_ID;
        const templateId = import.meta.env.VITE_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_PUBLIC_KEY;

        console.log("Intentando enviar con:", { serviceId, templateId, publicKey });

        if (!serviceId || !templateId || !publicKey) {
            alert("Error: Faltan las variables de entorno. Revisa tu archivo .env");
            return;
        }

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                console.log('ÉXITO:', result.text);
                alert("¡Mensaje enviado con éxito!");
                e.target.reset();
            }, (error) => {
                console.log('ERROR:', error.text);
                alert("Ocurrió un error: " + error.text);
            });
    };

    return (
        <section className="bg-black text-white p-10" id="contacto">
            <div className="max-w-xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-blue-500 mb-10">Contacto</h2>

                <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full">
                            <label className="block mb-1 text-sm text-gray-300">Nombre</label>
                            <input 
                                type="text" 
                                name="name" 
                                className="w-full bg-transparent border-b border-gray-600 focus:border-blue-500 outline-none p-2 transition-colors" 
                                required 
                            />
                        </div>
                        <div className="w-full">
                            <label className="block mb-1 text-sm text-gray-300">Apellido</label>
                            <input 
                                type="text" 
                                name="lastname" 
                                className="w-full bg-transparent border-b border-gray-600 focus:border-blue-500 outline-none p-2 transition-colors" 
                                required 
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block mb-1 text-sm text-gray-300">Correo</label>
                        <input 
                            type="email" 
                            name="email" 
                            className="w-full bg-transparent border-b border-gray-600 focus:border-blue-500 outline-none p-2 transition-colors" 
                            required 
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm text-gray-300">Mensaje</label>
                        <textarea 
                            name="message" 
                            rows="4" 
                            className="w-full bg-transparent border-b border-gray-600 focus:border-blue-500 outline-none p-2 resize-none transition-colors" 
                            required 
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition-all shadow-lg hover:shadow-blue-900/50"
                    >
                        Enviar Mensaje
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;