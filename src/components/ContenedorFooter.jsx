import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const ContenedorFooter = () => {

    return (
        <>
            {/* Primer Footer - Logos de patrocinadores */}
            <footer className="w-full bg-[#3c0058]">
                <div className="w-[80%] max-w-[1800px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center flex-wrap gap-6 py-20">

                        {/* Logo Amifit */}
                        <div className="text-center mb-3 md:mb-0">
                            <div className="flex flex-col items-center">
                                <img
                                    src="/img/logos/amifit.png"
                                    alt="Logo Amifit"
                                    className="mt-2 h-12 object-contain"
                                />
                            </div>
                        </div>

                        {/* Logo Anytime */}
                        <div className="text-center mb-3 md:mb-0">
                            <img
                                src="/img/logos/ANYTIME.svg"
                                alt="AnyTime"
                                className="mt-2 h-12 object-contain"
                            />
                        </div>

                        {/* Logo Ayuntamiento */}
                        <div className="text-center mb-3 md:mb-0">
                            <img
                                src="/img/logos/AYUNTAMIENTO.svg"
                                alt="Ayuntamiento"
                                className="h-12 object-contain"
                            />
                        </div>

                        {/* Logo Constructora */}
                        <div className="text-center mb-3 md:mb-0">
                            <img
                                src="/img/logos/CONSTRUCTORA-02.svg"
                                alt="Constructora"
                                className="h-12 object-contain"
                            />
                        </div>

                        {/* Logo Tropiko */}
                        <div className="text-center mb-3 md:mb-0">
                            <img
                                src="/img/logos/TROPIKO.svg"
                                alt="Tropiko"
                                className="h-12 object-contain"
                            />
                        </div>

                    </div>
                </div>
            </footer>

            {/* Segundo Footer - Información y redes sociales */}
            <footer className="w-full bg-[#000543]">
                <div className="w-[80%] max-w-[1800px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center flex-wrap gap-6 py-20">

                        {/* Logo Hortensias */}
                        <div className="text-center mb-3 md:mb-0">
                            <div className="flex flex-col items-center">
                                <img
                                    src="/img/logos/HORTENSIAS.png"
                                    alt="Logo Hortensias"
                                    className="mt-2 w-1/4 h-auto object-contain"
                                />
                            </div>
                        </div>

                        {/* Aviso de privacidad */}
                        <div className="text-center mb-3 md:mb-0">
                            <a href="#" onClick={(e) => e.preventDefault()} className="text-white hover:text-verde transition-colors">
                                <p className="m-0">Aviso de privacidad</p>
                            </a>
                        </div>

                        {/* Términos y condiciones */}
                        <div className="text-center mb-3 md:mb-0">
                            <a href="#" onClick={(e) => e.preventDefault()} className="text-white hover:text-verde transition-colors">
                                <p className="m-0">Términos y condiciones</p>
                            </a>
                        </div>

                        {/* Preguntas frecuentes */}
                        <div className="text-center mb-3 md:mb-0">
                            <a href="#" onClick={(e) => e.preventDefault()} className="text-white hover:text-verde transition-colors">
                                <p className="m-0">Preguntas Frecuentes</p>
                            </a>
                        </div>

                        {/* Redes sociales */}
                        <div className="flex gap-4">
                            <p className="m-0 text-white text-lg font-medium tracking-wide">
                                Síguenos
                            </p>
                            <a
                                className="text-white hover:text-verde transition-colors transform hover:scale-110"
                                target="_blank"
                                href="https://www.facebook.com/Anytimetapachula/"
                            >
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                            <a
                                className="text-white hover:text-verde transition-colors transform hover:scale-110"
                                target="_blank"
                                href="https://www.instagram.com/anytimefitnesstapachula/"
                            >
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                        </div>


                    </div>
                </div>
            </footer>

            {/* Botón flotante para ir arriba */}

        </>
    );
};

export default ContenedorFooter;