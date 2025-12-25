import BrandIcons from "../assets/img/BrandIcons.jsx";
const Skills = () => {
  const skills = [
    { name: "HTML", icon: <BrandIcons.HTML /> },
    { name: "CSS", icon: <BrandIcons.CSS /> },
    { name: "JavaScript", icon: <BrandIcons.JS /> },
    { name: "React", icon: <BrandIcons.React /> },
    { name: "Tailwind", icon: <BrandIcons.Tailwind /> },
    { name: "SASS", icon: <BrandIcons.Sass /> },
    { name: "PHP", icon: <BrandIcons.PHP /> },
    { name: "SQL", icon: <BrandIcons.SQL /> },
    { name: "Visual Studio Code", icon: <BrandIcons.vsc /> },
    { name: "Figma", icon: <BrandIcons.Figma /> },
    { name: "Trello", icon: <BrandIcons.Trello /> },
    { name: "Supabase", icon: <BrandIcons.Supabase /> },
    { name: "GitHub", icon: <BrandIcons.GitHub /> },
    { name: "Git", icon: <BrandIcons.Git /> },
  ];

  return (
    <section id="habilidades" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-500 mb-12">Habilidades</h2>

        <div className="border border-blue-600 rounded-lg p-10 bg-black">
          <h3 className="text-xl text-white mb-8">Tecnologías y Herramientas</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center gap-2 group">
                <div className="text-blue-500 p-4 rounded-full bg-blue-900/10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {skill.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;