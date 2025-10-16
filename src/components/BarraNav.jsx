import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCalendarAlt,
    faRunning,
    faMedal,
    faMapMarkedAlt,
    faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    // 🔹 Desplazamiento suave con compensación por el navbar
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            const navHeight = document.querySelector("nav")?.offsetHeight || 0;
            const sectionTop = section.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = sectionTop - navHeight - 20;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });

            setActiveSection(id); // 🔥 se marca al instante
        }
        setOpen(false);
    };

    // 🔹 Detectar sección activa con IntersectionObserver
    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    return (
        <>
            {/* Fondo oscuro cuando el menú móvil está abierto */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setOpen(false)}
                />
            )}

            <nav className="fixed top-0 left-0 w-full z-50 bg-azul/50 backdrop-blur-md shadow-sm">
                <div className="w-[80%] max-w-[1800px] mx-auto flex items-center justify-between px-6 py-3 relative">
                    {/* Logo */}
                    <img
                        src="/img/logos/HORTENSIAS.png"
                        alt="Logo"
                        className="w-28 h-20 object-contain"
                    />

                    {/* Botón Hamburguesa */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="text-white text-3xl md:hidden focus:outline-none z-50"
                    >
                        {open ? <X size={32} /> : <Menu size={32} />}
                    </button>

                    {/* Menú */}
                    <ul
                        className={`
              md:flex md:items-center md:space-x-6
              absolute md:static left-0 top-full w-full md:w-auto
              flex flex-col md:flex-row items-center
              text-white font-medium tracking-[2px] text-lg
              transition-all duration-500 ease-in-out 
              ${open
                                ? "max-h-96 opacity-100 py-6 backdrop-blur-md shadow-sm w-full z-50 bg-azul/100"
                                : "max-h-0 opacity-0 md:max-h-full md:opacity-100"
                            }
              overflow-hidden z-50
            `}
                    >
                        {/* Momentos */}
                        <li className="w-full md:w-auto text-center">
                            <button
                                onClick={() => scrollToSection("momentos")}
                                className={`w-full py-4 md:py-0 flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 ${activeSection === "momentos"
                                        ? "text-verde font-semibold"
                                        : "hover:text-verde"
                                    }`}
                            >
                                <FontAwesomeIcon icon={faCalendarAlt} />
                                Momentos
                            </button>
                        </li>

                        {/* Ganadores */}
                        <li className="w-full md:w-auto text-center">
                            <button
                                onClick={() => scrollToSection("ganadores")}
                                className={`w-full py-4 md:py-0 flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 ${activeSection === "ganadores"
                                        ? "text-verde font-semibold"
                                        : "hover:text-verde"
                                    }`}
                            >
                                <FontAwesomeIcon icon={faMedal} />
                                Ganadores
                            </button>
                        </li>

                        {/* Carrera */}
                        <li className="w-full md:w-auto text-center">
                            <button
                                onClick={() => scrollToSection("carrera")}
                                className={`w-full py-4 md:py-0 flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 ${activeSection === "carrera"
                                        ? "text-verde font-semibold"
                                        : "hover:text-verde"
                                    }`}
                            >
                                <FontAwesomeIcon icon={faRunning} />
                                Carrera
                            </button>
                        </li>

                        {/* Ruta */}
                        <li className="w-full md:w-auto text-center">
                            <button
                                onClick={() => scrollToSection("ruta")}
                                className={`w-full py-4 md:py-0 flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 ${activeSection === "ruta"
                                        ? "text-verde font-semibold"
                                        : "hover:text-verde"
                                    }`}
                            >
                                <FontAwesomeIcon icon={faMapMarkedAlt} />
                                Ruta
                            </button>
                        </li>

                        {/* Inscríbete */}
                        <li className="w-full md:w-auto text-center mt-2 md:mt-0">
                            <button
                                onClick={() => scrollToSection("formulario")}
                                className={`px-6 py-3 md:px-4 md:py-2 rounded-md font-semibold w-full md:w-auto flex items-center justify-center gap-2 transition-all duration-300 ${activeSection === "formulario"
                                        ? "bg-verde text-azul scale-105"
                                        : "bg-verde text-azul hover:scale-105"
                                    }`}
                            >
                                <FontAwesomeIcon icon={faSignInAlt} />
                                Inscríbete
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
