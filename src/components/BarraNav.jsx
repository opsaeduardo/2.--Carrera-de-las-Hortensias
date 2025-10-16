import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faRunning, faMedal, faMapMarkedAlt, faSignInAlt } from "@fortawesome/free-solid-svg-icons";

export default function BarraNav() {
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [scrolled, setScrolled] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        const onScroll = () => {
            const h = navRef.current?.offsetHeight || 80;
            setScrolled(window.scrollY > h);
        };
        window.addEventListener("scroll", onScroll);
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            const h = navRef.current?.offsetHeight || 0;
            const y = el.getBoundingClientRect().top + window.scrollY - h - 20;
            window.scrollTo({ top: y, behavior: "smooth" });
            setActiveSection(id);
        }
        setOpen(false);
    };

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const obs = new IntersectionObserver(
            (entries) => entries.forEach(e => e.isIntersecting && setActiveSection(e.target.id)),
            { threshold: 0.6 }
        );
        sections.forEach(s => obs.observe(s));
        return () => sections.forEach(s => obs.unobserve(s));
    }, []);

    return (
        <>
            {open && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setOpen(false)} />}

            {/* Cambios CLAVE: alternamos blur y opacidad */}
            <nav
                ref={navRef}
                className={`fixed top-0 left-0 w-full z-50 shadow-sm transition-[background-color,backdrop-filter,box-shadow] duration-500
          ${scrolled
                        ? "bg-[#0a0d26] backdrop-blur-0 shadow-lg"      // sólido SIN blur
                        : "bg-[#0a0d26]/30 backdrop-blur-md"            // translúcido CON blur
                    }`}
            >
                <div className="w-[80%] max-w-[1800px] mx-auto flex items-center justify-between px-6 py-3 relative">
                    <img src="/img/logos/HORTENSIAS.png" alt="Logo" className="w-28 h-20 object-contain" />

                    <button onClick={() => setOpen(!open)} className="text-white text-3xl md:hidden focus:outline-none z-50">
                        {open ? <X size={32} /> : <Menu size={32} />}
                    </button>

                    <ul className={`md:flex md:items-center md:space-x-6
              absolute md:static left-0 top-full w-full md:w-auto
              flex flex-col md:flex-row items-center
              text-white font-medium tracking-[2px] text-lg
              transition-all duration-500 ease-in-out 
              ${open ? "max-h-96 opacity-100 py-6 bg-[#0a0d26]" : "max-h-0 opacity-0 md:max-h-full md:opacity-100"}
              overflow-hidden z-50`}
                    >
                        <li className="w-full md:w-auto text-center">
                            <button
                                onClick={() => scrollToSection("momentos")}
                                className={`w-full py-4 md:py-0 flex items-center justify-center gap-2 transition-all duration-300 ${activeSection === "momentos" ? "text-verde font-semibold" : "hover:text-verde"
                                    }`}
                            >
                                <FontAwesomeIcon icon={faCalendarAlt} />
                                Momentos
                            </button>
                        </li>

                        <li className="w-full md:w-auto text-center">
                            <button
                                onClick={() => scrollToSection("ganadores")}
                                className={`w-full py-4 md:py-0 flex items-center justify-center gap-2 transition-all duration-300 ${activeSection === "ganadores" ? "text-verde font-semibold" : "hover:text-verde"
                                    }`}
                            >
                                <FontAwesomeIcon icon={faMedal} />
                                Ganadores
                            </button>
                        </li>

                        <li className="w-full md:w-auto text-center">
                            <button
                                onClick={() => scrollToSection("carrera")}
                                className={`w-full py-4 md:py-0 flex items-center justify-center gap-2 transition-all duration-300 ${activeSection === "carrera" ? "text-verde font-semibold" : "hover:text-verde"
                                    }`}
                            >
                                <FontAwesomeIcon icon={faRunning} />
                                Carrera
                            </button>
                        </li>

                        <li className="w-full md:w-auto text-center">
                            <button
                                onClick={() => scrollToSection("ruta")}
                                className={`w-full py-4 md:py-0 flex items-center justify-center gap-2 transition-all duration-300 ${activeSection === "ruta" ? "text-verde font-semibold" : "hover:text-verde"
                                    }`}
                            >
                                <FontAwesomeIcon icon={faMapMarkedAlt} />
                                Ruta
                            </button>
                        </li>

                        <li className="w-full md:w-auto text-center mt-2 md:mt-0">
                            <button
                                onClick={() => scrollToSection("formulario")}
                                className={`px-6 py-3 md:px-4 md:py-2 rounded-md font-semibold w-full md:w-auto flex items-center justify-center gap-2 transition-all duration-300 ${activeSection === "formulario" ? "bg-verde text-azul scale-105" : "bg-verde text-azul hover:scale-105"
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
