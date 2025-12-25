import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import kodedz from "../../public/kodedz.jpg";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Sobre Mí', href: '#sobre-mi' },
        { name: 'Habilidades', href: '#habilidades' },
        { name: 'Proyectos', href: '#proyectos' },
        { name: 'Contacto', href: '#contacto' },
    ];

    return (
        <nav className="fixed w-full bg-black/90 backdrop-blur-sm border-b border-blue-900/30 z-50 py-4">
            <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
                <img src={kodedz} className="w-10 h-10 rounded-full" />

                <div className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-300 hover:text-blue-500 transition-colors border border-blue-900/50 px-4 py-1 rounded hover:border-blue-500"
                        >
                            {link.name}
                        </a> 
                    ))}
                </div>

                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden bg-black border-t border-blue-900/30 absolute w-full">
                    <div className="flex flex-col items-center py-4 space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-gray-300 hover:text-blue-500"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;