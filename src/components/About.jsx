const About = () => {
    return (
        <section id="sobre-mi" className="py-20 px-4 bg-black">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-blue-500 mb-12">Sobre Mí</h2>

                <div className="border border-blue-600/50 rounded-lg p-8 md:p-12 relative bg-black/50">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-4 text-gray-300 leading-relaxed text-sm md:text-base">
                            <p>
                                Me presento soy Máximo Goitia, un desarrollador Fullstack apasionado por la tecnología y la programación. Desde joven, he estado fascinado por el mundo digital y cómo las aplicaciones pueden transformar la vida de las personas.
                            </p>
                            <p>
                                Mi enfoque se centra en el desarrollo de soluciones web modernas y eficientes. Tengo experiencia en el diseño y desarrollo de interfaces intuitivas, así como en la implementación de funcionalidades robustas que mejoren la experiencia del usuario.
                            </p>
                        </div>
                        <img src="sobre_mi.jpeg" alt="Proyecto con Batocer" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;