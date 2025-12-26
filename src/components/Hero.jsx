import { Github, Linkedin } from 'lucide-react';
const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 px-4">
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

                <div className="space-y-6 text-center md:text-left">
                    <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                        Máximo <br />
                        <span className="text-blue-500">Goitia</span>
                    </h1>
                    <h2 className="text-xl md:text-2xl text-gray-400 font-light">
                        Fullstack Developer
                    </h2>

                    <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
                        <a href="#proyectos" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition-all font-medium">
                            Mis Proyectos
                        </a>
                        <a href="#contacto" className="border border-blue-500 text-blue-400 hover:bg-blue-900/20 px-6 py-2 rounded transition-all">
                            Contactar
                        </a>
                    </div>

                    <div className="flex gap-4 justify-center md:justify-start pt-4">
                        <a href="https://github.com/Maxi2771" target="_blank" rel="noopener noreferrer">
                            <Github className="text-white hover:text-blue-400 cursor-pointer" />
                        </a>
                        <a href="https://www.linkedin.com/in/maxi-mfg/" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="text-white hover:text-blue-400 cursor-pointer" />
                        </a>
                    </div>
                </div>

                <div className="flex justify-center md:justify-end">
                    <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-gray-300 overflow-hidden border-4 border-blue-500/20 shadow-[0_0_50px_rgba(37,99,235,0.2)]">
                        <img
                            src="mfg.png"
                            alt="Máximo Goitia"
                            className="w-full h-full object-contain  grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};
export default Hero;