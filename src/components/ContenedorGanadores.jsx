function ContenedorGanadores() {
    return (
        <section id="ganadores" className="w-full bg-azul py-12">
            {/* Título */}
            <div className="w-[80%] max-w-[1800px] mx-auto text-center text-white mb-16">
                <h2 className="text-3xl md:text-4xl tracking-[4px] font-semibold leading-snug">
                    Así premiamos en la
                    <br />
                    Carrera de las Hortensias 2024...
                    <br />
                    <span className="text-verde">¡Prepárate para lo que viene en 2025!</span>
                </h2>
            </div>

            {/* Podio - Contenedor principal */}
            <div className="w-[80%] max-w-[1800px] mx-auto min-h-[500px] mt-28">
                {/* Versión móvil: 1° - 2° - 3° (vertical) */}
                <div className="flex flex-col items-center gap-8 md:hidden">
                    {/* 1° Lugar */}
                    <div className="w-full max-w-[350px] flex flex-col items-center">
                        <img src="/img/medallas/1lugar.svg" alt="Primer Lugar" className="w-full" />
                        <div className="text-center text-white text-[1.2rem] mt-4">
                            <p className="text-verde text-[1.5rem] font-semibold my-3">
                                ¡Tu esfuerzo vale oro!
                            </p>
                            <p>• Mochila Nike</p>
                            <p>• Audífonos JBL</p>
                            <p>• IceShaker</p>
                            <p>• Proteína Birdman sabor chocolate</p>
                        </div>
                    </div>

                    {/* 2° Lugar */}
                    <div className="w-full max-w-[350px] flex flex-col items-center">
                        <img src="/img/medallas/2lugar.svg" alt="Segundo Lugar" className="w-full" />
                        <div className="text-center text-white text-[1.2rem] mt-4">
                            <p className="text-verde text-[1.5rem] font-semibold my-3">
                                ¡Sigue corriendo por la cima!
                            </p>
                            <p>• Mochila Under Armour (azul) / Nike (rosa)</p>
                            <p>• Cordón edición especial Anytime Fitness</p>
                            <p>• Proteína vegetal Birdman 30g sabor matcha</p>
                        </div>
                    </div>

                    {/* 3° Lugar */}
                    <div className="w-full max-w-[350px] flex flex-col items-center">
                        <img src="/img/medallas/3lugar.svg" alt="Tercer Lugar" className="w-full" />
                        <div className="text-center text-white text-[1.2rem] mt-4">
                            <p className="text-verde text-[1.5rem] font-semibold my-3">
                                ¡Tu pasión también se premia!
                            </p>
                            <p>• IceShaker</p>
                            <p>• Proteína Birdman sabor chocolate</p>
                            <p>• Cangurera deportiva Athletic</p>
                        </div>
                    </div>
                </div>

                {/* Versión desktop: 2° - 1° - 3° */}
                <div
                    className="
            hidden md:flex items-end justify-between
            gap-10 lg:gap-14 xl:gap-20 pb-6
          "
                >
                    {/* 2° Lugar */}
                    <div className="flex-1 max-w-[400px] flex flex-col items-center transition-transform duration-300 hover:scale-[1.02]">
                        <img
                            src="/img/medallas/2lugar.svg"
                            alt="Segundo Lugar"
                            className="w-full transition-transform duration-300 hover:scale-105"
                        />
                        <div className="text-center text-white text-[1.2rem] mt-4">
                            <p className="text-verde text-[1.5rem] font-semibold my-3">
                                ¡Sigue corriendo por la cima!
                            </p>
                            <p>• Mochila Under Armour (azul) / Nike (rosa)</p>
                            <p>• Cordón edición especial Anytime Fitness</p>
                            <p>• Proteína vegetal Birdman 30g sabor matcha</p>
                        </div>
                    </div>

                    {/* 1° Lugar */}
                    <div className="flex-1 max-w-[400px] flex flex-col items-center transition-transform duration-300 hover:scale-[1.02] -translate-y-20 lg:-translate-y-24">
                        <img
                            src="/img/medallas/1lugar.svg"
                            alt="Primer Lugar"
                            className="w-full transition-transform duration-300 hover:scale-105"
                        />
                        <div className="text-center text-white text-[1.2rem] mt-4">
                            <p className="text-verde text-[1.5rem] font-semibold my-3">
                                ¡Tu esfuerzo vale oro!
                            </p>
                            <p>• Mochila Nike</p>
                            <p>• Audífonos JBL</p>
                            <p>• IceShaker</p>
                            <p>• Proteína Birdman sabor chocolate</p>
                        </div>
                    </div>

                    {/* 3° Lugar */}
                    <div className="flex-1 max-w-[400px] flex flex-col items-center transition-transform duration-300 hover:scale-[1.02]">
                        <img
                            src="/img/medallas/3lugar.svg"
                            alt="Tercer Lugar"
                            className="w-full transition-transform duration-300 hover:scale-105"
                        />
                        <div className="text-center text-white text-[1.2rem] mt-4">
                            <p className="text-verde text-[1.5rem] font-semibold my-3">
                                ¡Tu pasión también se premia!
                            </p>
                            <p>• IceShaker</p>
                            <p>• Proteína Birdman sabor chocolate</p>
                            <p>• Cangurera deportiva Athletic</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContenedorGanadores;
