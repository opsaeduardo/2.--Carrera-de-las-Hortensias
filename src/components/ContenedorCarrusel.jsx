import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ContenedorCarrusel() {
    const slides = [
        ["/img/evento/foto1.webp", "/img/evento/foto2.webp", "/img/evento/foto3.webp"],
        ["/img/evento/foto4.webp", "/img/evento/foto15.webp", "/img/evento/foto6.webp"],
        ["/img/evento/foto7.webp", "/img/evento/foto8.webp", "/img/evento/foto9.webp"],
        ["/img/evento/foto10.webp", "/img/evento/foto11.webp", "/img/evento/foto12.webp"],
    ];

    const [index, setIndex] = useState(0);

    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="w-full bg-white py-10 flex justify-center">
            <div className="relative w-[80%] max-w-[1800px] overflow-hidden">
                {/* Slides container */}
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {slides.map((group, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                        >
                            {group.map((src, j) => (
                                <div
                                    key={j}
                                    className="rounded-xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.03]"
                                >
                                    <img
                                        src={src}
                                        alt={`Slide ${i}-${j}`}
                                        className="w-full h-[350px] object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Botón izquierdo */}
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 -translate-y-1/2 left-2 md:left-6 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition-all"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Botón derecho */}
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 -translate-y-1/2 right-2 md:right-6 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition-all"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>

                {/* Indicadores */}
                <div className="flex justify-center mt-6 gap-2">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-3 h-3 rounded-full transition-all ${index === i ? "bg-morado" : "bg-gray-300 hover:bg-gray-400"
                                }`}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ContenedorCarrusel;
