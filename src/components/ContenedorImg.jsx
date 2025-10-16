import React from 'react'

function ContenedorImg() {
    return (
        <section id="carrera" className="w-full bg-morado relative overflow-hidden">
            {/* Contenedor interno */}
            <div
                className="
                    w-[100%] max-w-[1800px] mx-auto
                    aspect-video rounded-xl overflow-hidden
                    bg-cover bg-center bg-no-repeat
                    shadow-lg
                    transition-all duration-500"
                    style={{
                        backgroundImage: "url('/img/banners/PAGINA-CARRERA.png')",
                    }}
            >
                {/* Si quieres reemplazar por video, descomenta esto */}
                {/*
        <video
          src="/img/video.webm"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
        */}
            </div>
        </section>
    )
}

export default ContenedorImg