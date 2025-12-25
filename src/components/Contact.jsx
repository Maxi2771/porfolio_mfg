import { useRef } from "react";
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('servicio_mfg', 'template_mfg', form.current, '7AGke9eq2Ow6yScgX')
            .then((result) => {
                alert("¡Mensaje enviado con éxito!");
            }, (error) => {
                alert("Ocurrió un error, intenta nuevamente.");
            });
    };

    return (
        <section className="bg-black text-white p-10" id="contacto">
            <h2 className="text-4xl font-bold text-center text-blue-500 mb-10">Contacto</h2>

            <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto flex flex-col gap-4">

                <div className="flex gap-4">
                    <div className="w-1/2">
                        <label className="block mb-1">Nombre</label>
                        <input type="text" name="user_name" className="w-full bg-transparent border-b border-gray-600 focus:border-blue-500 outline-none p-2" required />
                    </div>
                    <div className="w-1/2">
                        <label className="block mb-1">Apellido</label>
                        <input type="text" name="user_lastname" className="w-full bg-transparent border-b border-gray-600 focus:border-blue-500 outline-none p-2" required />
                    </div>
                </div>

                <div>
                    <label className="block mb-1">Correo</label>
                    <input type="email" name="user_email" className="w-full bg-transparent border-b border-gray-600 focus:border-blue-500 outline-none p-2" required />
                </div>

                <div>
                    <label className="block mb-1">Mensaje</label>
                    <textarea name="message" rows="4" className="w-full bg-transparent border-b border-gray-600 focus:border-blue-500 outline-none p-2" required />
                </div>

                <button type="submit" className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded transition-colors">
                    Enviar
                </button>
            </form>
        </section>
    );
};
export default Contact;