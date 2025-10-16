import React from "react";

function ContenedorMomentos() {
    return (
        <section id="momentos" className="w-full bg-morado py-12">
            {/* Contenido interno */}
            <div className="w-[80%] max-w-[1800px] mx-auto min-h-[500px] flex flex-col">
                {/* Título */}
                <h2 className="text-center text-white text-3xl md:text-4xl tracking-[5px] mb-16 font-semibold">
                    No es solo una carrera,
                    <br />
                    es una experiencia que marcará tu ruta
                </h2>

                {/* Contenedor de tarjetas */}
                <div
                    className="
            flex flex-col md:flex-row flex-wrap
            justify-center md:justify-between
            items-center gap-10 lg:gap-14 xl:gap-20
          "
                >
                    {/* Tarjeta 1 */}
                    <div className="flex-1 max-w-[250px] flex flex-col items-center rounded-xl shadow-md transition-all duration-300 hover:scale-[1.03]">
                        <div className="w-full flex justify-center mb-3">
                            <div className="w-[240px] h-[240px] rounded-full overflow-hidden flex justify-center items-center">
                                <img
                                    src="/img/momentos/momento3.webp"
                                    alt="Kits"
                                    className="w-full h-full object-cover rounded-full transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                        </div>
                        <div className="w-full flex">
                            <p className="text-white text-[1.1rem] p-5 text-justify rounded-lg">
                                Entrega de kits, accesorios y sorpresas exclusivas
                            </p>
                        </div>
                    </div>

                    {/* Tarjeta 2 */}
                    <div className="flex-1 max-w-[250px] flex flex-col items-center rounded-xl shadow-md transition-all duration-300 hover:scale-[1.03]">
                        <div className="w-full flex justify-center mb-3">
                            <div className="w-[240px] h-[240px] rounded-full overflow-hidden flex justify-center items-center">
                                <img
                                    src="/img/momentos/momento2.webp"
                                    alt="San Valentin"
                                    className="w-full h-full object-cover rounded-full transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                        </div>
                        <div className="w-full flex">
                            <p className="text-white text-[1.1rem] p-5 text-justify rounded-lg">
                                ¡Participa con tu mejor outfit alusivo y gana premios increíbles!
                            </p>
                        </div>
                    </div>

                    {/* Tarjeta 3 */}
                    <div className="flex-1 max-w-[250px] flex flex-col items-center rounded-xl shadow-md transition-all duration-300 hover:scale-[1.03]">
                        <div className="w-full flex justify-center mb-3">
                            <div className="w-[240px] h-[240px] rounded-full overflow-hidden flex justify-center items-center">
                                <img
                                    src="/img/momentos/momento.webp"
                                    alt="Ice Breaker"
                                    className="w-full h-full object-cover rounded-full transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                        </div>
                        <div className="w-full flex">
                            <p className="text-white text-[1.1rem] p-5 text-justify rounded-lg">
                                Ambiente lleno de música, alegría y diversión desde el inicio
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContenedorMomentos;
