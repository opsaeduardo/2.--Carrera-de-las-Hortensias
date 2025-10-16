import React, { useState, useEffect } from 'react'

function ContenedorVideo() {
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [visible, setVisible] = useState(true);
    const mensajes = [
        "CARRERA DE LAS HORTENSIAS",
        "¡Haz historia en cada kilómetro!",
        "¡Vive la Carrera de las Hortensias!",
        "Tapachula 2025"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % mensajes.length);
                setVisible(true);
            }, 1000); // tiempo de fade out
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setVisible(true);
    }, [currentMessageIndex]);

    return (
        <div className="relative w-full h-screen bg-black overflow-hidden">
            {/* Texto central */}
            <div className="absolute inset-0 z-10 flex items-center justify-center text-center text-white text-5xl md:text-6xl font-bold tracking-wide drop-shadow-[0_0_15px_white]">
                <span
                    className={`transition-opacity duration-1000 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`}
                    key={currentMessageIndex}
                >
                    {mensajes[currentMessageIndex]}
                </span>
            </div>

            {/* Video de fondo */}
            <video
                className="absolute inset-0 w-full h-full object-cover opacity-50"
                src="/img/banners/videoFondo.webm"
                autoPlay
                muted
                loop
                playsInline
            ></video>
        </div>
    )
}

export default ContenedorVideo