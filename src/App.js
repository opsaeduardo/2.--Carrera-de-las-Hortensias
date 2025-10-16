import { useState, useEffect } from "react";
import BarraNav from "./components/BarraNav";
import ContenedorCarrusel from "./components/ContenedorCarrusel";
import ContenedorGanadores from "./components/ContenedorGanadores";
import ContenedorImg from "./components/ContenedorImg";
import ContenedorMomentos from "./components/ContenedorMomentos";
import ContenedorVideo from "./components/ContenedorVideo";
import FormularioRegistro from "./components/FormularioRegistro";
import ContenedorRecorrido from "./components/ContenedorRecorrido";
import ContenedorFooter from "./components/ContenedorFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Función suave para volver arriba
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const checkScroll = () => {
      const scrolled = window.scrollY > 300; // margen para no mostrarlo demasiado pronto
      setShowScrollButton(scrolled);
    };

    // Escucha el scroll (optimizado con throttling simple)
    const handleScroll = () => {
      window.requestAnimationFrame(checkScroll);
    };

    window.addEventListener("scroll", handleScroll);
    // Ejecutar una vez al cargar
    checkScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black min-h-screen w-full relative">
      {/* SECCIONES PRINCIPALES */}
      <BarraNav />
      <ContenedorVideo />
      <ContenedorMomentos />
      <ContenedorGanadores />
      <ContenedorImg />
      <ContenedorCarrusel />
      <FormularioRegistro />
      <ContenedorRecorrido />
      <ContenedorFooter />

      {/* BOTÓN SCROLL UP */}
      <button
        onClick={scrollToTop}
        aria-label="Volver arriba"
        className={`fixed bottom-8 right-8 z-50 w-14 h-14 flex items-center justify-center rounded-full 
  bg-gradient-to-br from-[#00ffce] to-[#00b8ff] 
  text-[#3c0058] text-2xl shadow-[0_0_25px_rgba(0,0,0,0.5)] border border-[#3c0058]/40 
  transition-all duration-300 ease-in-out 
  ${showScrollButton ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"} 
  hover:scale-110 hover:shadow-[0_0_40px_rgba(0,255,206,0.6)]`}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>

    </div>
  );
}

export default App;
