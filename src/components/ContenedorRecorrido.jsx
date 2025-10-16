const ContenedorRecorrido = () => {
  return (
    <section id="ruta" className="recorrido w-full bg-blanco py-8">
      <div className="w-[80%] max-w-[1800px] mx-auto">
        <div className="recorrido-div flex flex-col lg:flex-row gap-6 lg:gap-8 justify-between">
          
          {/* Mapa de ruta SVG */}
          <div className="recorrido-item w-full lg:w-[49%] h-auto">
            <img 
              src="/img/banners/Ruta.svg" 
              alt="Mapa de ruta" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Google Maps Embed */}
          <div className="recorrido-item w-full lg:w-[49%] h-[400px] lg:h-auto">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.136547243092!2d-92.28707822409999!3d14.873641170331956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858e0fadbbcf1aed%3A0x768686c06d00e507!2sAnytime%20Fitness!5e0!3m2!1ses!2smx!4v1748567904223!5m2!1ses!2smx"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full rounded-lg shadow-lg border-0"
              allowFullScreen
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContenedorRecorrido;