import { Github, ExternalLink } from "lucide-react";
import nexoinventory from "../assets/img/nexoinventory.png";
import luxibot from "../assets/img/luxibot.png";
const Projects = () => {
  const projects = [
    {
      title: "NexoInventory",
      desc: "Una aplicación web moderna y ágil diseñada para simplificar la gestión de inventario. Creada con React y Vite, y potenciada por Supabase, esta herramienta ofrece una experiencia de usuario fluida y en tiempo real para el control de stock.",
      image: nexoinventory,
      githubLink: "https://github.com/Maxi2771/NexoInventory",
      demoLink: "https://nexoinventory.netlify.app/"
    },
    {
      title: "Luxi Bot",
      desc: "Un bot de discord con javascript, está en fase de desarrollo cuenta con una web donde puedes ver los comandos y utilizarlos en tus servidores de discord. Actualmente en Desarrollo.",
      image: luxibot,
      //githubLink: "https://github.com/Maxi2771/NexoInventory",
      //demoLink: "https://nexoinventory.netlify.app/"
    }
  ];

  return (
    <section id="proyectos" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-500 mb-16">Proyectos</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <div key={i} className="border border-blue-900/50 p-6 rounded-lg bg-black hover:border-blue-500 transition-colors">
              <img className="h-48 rounded-md mb-6 w-full object-cover object-top" src={proj.image} alt="" />

              <h3 className="text-2xl text-white font-bold mb-3">{proj.title}</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {proj.desc}
              </p>

              <div className="flex gap-4 sm:flex-row flex-col">
                {
                  proj.githubLink && proj.demoLink ? (
                    <>
                      <a href={proj.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-sm md:text-xs transition-colors flex items-center justify-center gap-2">
                        <Github size={16} /> Repositorio GitHub
                      </a>
                      <a href={proj.demoLink} target="_blank" rel="noopener noreferrer" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-sm md:text-xs transition-colors flex items-center justify-center gap-2">
                        <ExternalLink size={16} /> Ver Demo
                      </a>
                    </>
                  ) : (
                    <span className="italic text-blue-500 flex-1 py-2 rounded text-sm transition-colors flex items-center justify-center gap-2">Proyecto en desarrollo</span>
                  )
                    
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;