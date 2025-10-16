import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const FormularioRegistro = () => {
    const [esSocio, setEsSocio] = useState(null);
    const [aceptoTerminos, setAceptoTerminos] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulario enviado');
    };

    const mostrarFormulario = async (socio) => {
        setIsVisible(false);
        await new Promise(resolve => setTimeout(resolve, 300));
        setEsSocio(socio);
        setIsVisible(true);
    };

    const volverASeleccion = async () => {
        setIsVisible(false);
        await new Promise(resolve => setTimeout(resolve, 300));
        setEsSocio(null);
        setIsVisible(true);
    };

    // Si no se ha seleccionado si es socio o no
    if (esSocio === null) {
        return (
            <section id="formulario" className="w-full bg-azul py-40">
                <div className="w-[80%] max-w-[1800px] mx-auto">
                    <div className={`div-info-socio text-center transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}>
                        <p className="text-[#00ffce] text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 tracking-[5px]">
                            ¿Eres socio de <span className="text-white">AnyTime Fitness</span> Tapachula?
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <button
                                type="button"
                                onClick={() => mostrarFormulario(true)}
                                className="px-12 py-4 bg-verde text-slate-700 rounded-lg font-bold text-lg tracking-[2px] hover:bg-verde/90 transition-all duration-300 transform hover:scale-105"
                            >
                                SI SOY SOCIO
                            </button>
                            <button
                                type="button"
                                onClick={() => mostrarFormulario(false)}
                                className="px-12 py-4 bg-verde text-slate-700 rounded-lg font-bold text-lg tracking-[2px] hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                            >
                                NO SOY SOCIO
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="divFormulario" className="w-full bg-azul py-12">
            <div className="w-[80%] max-w-[1800px] mx-auto">
                {/* Botón para volver */}
                <div className="text-center mb-8">
                    <button
                        onClick={volverASeleccion}
                        className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#1e1e20] to-[#2a2d31] px-4 py-2 text-white font-semibold tracking-wide transition-all duration-300 hover:from-[#2a2d31] hover:to-[#1e1e20] hover:shadow-[0_0_15px_rgba(0,255,128,0.4)] hover:scale-105"
                    >
                        <span className="absolute inset-0 rounded-xl border border-gray-700 opacity-30 group-hover:opacity-0 transition-opacity duration-300"></span>
                        <FontAwesomeIcon
                            icon={faArrowLeft}
                            className="text-verde text-lg transform transition-transform duration-300 group-hover:-translate-x-1"
                        />
                        <span className="group-hover:text-verde transition-colors duration-300">Volver</span>
                    </button>

                </div>

                <form
                    onSubmit={handleSubmit}
                    className="w-full mx-auto"
                >
                    {/* Contenedor del formulario con backdrop */}
                    <div className={`bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-10 mb-8 transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}>
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark tracking-[3px] text-shadow-custom">
                                REGÍSTRATE
                            </h2>
                        </div>

                        {/* Grid de inputs */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                            {/* Nombre */}
                            <div className="md:col-span-4">
                                <label htmlFor="nombre" className="block m-1 text-dark font-semibold text-lg tracking-[1px]">
                                    NOMBRE:
                                </label>
                                <input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    placeholder="Nombre Completo"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-verde focus:border-transparent text-lg tracking-[1px]"
                                    required
                                />
                            </div>

                            {/* Correo */}
                            <div className="md:col-span-3">
                                <label htmlFor="correo" className="block m-1 text-dark font-semibold text-lg tracking-[1px]">
                                    CORREO:
                                </label>
                                <input
                                    type="email"
                                    id="correo"
                                    name="correo"
                                    placeholder="Correo Electrónico"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-verde focus:border-transparent text-lg tracking-[1px]"
                                    required
                                />
                            </div>

                            {/* Playera */}
                            <div className="md:col-span-3">
                                <label htmlFor="playera" className="block m-1 text-dark font-semibold text-lg tracking-[1px]">
                                    TIPO DE PLAYERA:
                                </label>
                                <select
                                    id="playera"
                                    name="playera"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-verde focus:border-transparent text-lg tracking-[1px]"
                                    required
                                >
                                    <option value="">SELECCIONA...</option>
                                    <option value="Chica">CHICA</option>
                                    <option value="Mediana">MEDIANA</option>
                                    <option value="Grande">GRANDE</option>
                                </select>
                            </div>

                            {/* Edad */}
                            <div className="md:col-span-2">
                                <label htmlFor="edad" className="block m-1 text-dark font-semibold text-lg tracking-[1px]">
                                    EDAD:
                                </label>
                                <input
                                    type="text"
                                    id="edad"
                                    name="edad"
                                    placeholder="Edad"
                                    maxLength="2"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-verde focus:border-transparent text-lg tracking-[1px] text-center"
                                    required
                                />
                            </div>

                            {/* Sexo */}
                            <div className="md:col-span-3 sm:col-span-6">
                                <label htmlFor="sexo" className="block m-1 text-dark font-semibold text-lg tracking-[1px]">
                                    SEXO:
                                </label>
                                <select
                                    id="sexo"
                                    name="sexo"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-verde focus:border-transparent text-lg tracking-[1px]"
                                    required
                                >
                                    <option value="">SELECCIONA...</option>
                                    <option value="Masculino">MASCULINO</option>
                                    <option value="Femenino">FEMENINO</option>
                                </select>
                            </div>

                            {/* Teléfono */}
                            <div className="md:col-span-3 sm:col-span-6">
                                <label htmlFor="telefono" className="block m-1 text-dark font-semibold text-lg tracking-[1px]">
                                    TELÉFONO:
                                </label>
                                <input
                                    type="number"
                                    id="telefono"
                                    name="telefono"
                                    placeholder="Número Telefónico"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-verde focus:border-transparent text-lg tracking-[1px]"
                                    required
                                />
                            </div>

                            {/* Cupón - Solo si NO es socio */}
                            {!esSocio && (
                                <div className="md:col-span-3">
                                    <label htmlFor="cupon" className="block m-1 text-dark font-semibold text-lg tracking-[1px]">
                                        CUPÓN:
                                    </label>
                                    <input
                                        type="text"
                                        id="cupon"
                                        name="cupon"
                                        placeholder="Ingresa el cupón"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-verde focus:border-transparent text-lg tracking-[1px]"
                                    />
                                    <small className="text-green-600 font-semibold italic tracking-[0.5px] text-base">
                                        Si cuentas con un cupón, ingrésalo aquí.
                                    </small>
                                </div>
                            )}

                            {/* Llave de acceso - Solo si es socio */}
                            {esSocio && (
                                <div className="md:col-span-3">
                                    <label htmlFor="keyfob" className="block m-1 text-dark font-semibold text-lg tracking-[1px]">
                                        LLAVE DE ACCESO:
                                    </label>
                                    <input
                                        type="text"
                                        id="keyfob"
                                        name="keyfob"
                                        placeholder=""
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-verde focus:border-transparent text-lg tracking-[1px]"
                                        required
                                    />
                                    <small className="text-green-600 font-semibold italic tracking-[0.5px] text-base">
                                        Si eres invitado por un socio, por favor, ingresa su llave
                                    </small>
                                </div>
                            )}
                        </div>

                        {/* Términos y condiciones */}
                        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                            <div className="flex items-start space-x-3">
                                <input
                                    type="checkbox"
                                    id="boton-check"
                                    checked={aceptoTerminos}
                                    onChange={(e) => setAceptoTerminos(e.target.checked)}
                                    className="w-5 h-5 text-verde bg-gray-100 border-gray-300 rounded focus:ring-verde focus:ring-2 mt-1"
                                    required
                                />
                                <label htmlFor="boton-check" className="text-dark text-lg tracking-[0.5px] leading-relaxed">
                                    Acepto el{' '}
                                    <a
                                        target="_blank"
                                        href="/aviso-de-privacidad"
                                        className="text-verde hover:underline font-semibold"
                                    >
                                        Aviso de Privacidad
                                    </a>{' '}
                                    y los{' '}
                                    <a
                                        target="_blank"
                                        href="/terminos-y-condiciones"
                                        className="text-verde hover:underline font-semibold"
                                    >
                                        Términos y Condiciones
                                    </a>
                                </label>
                            </div>

                            {/* reCAPTCHA hidden */}
                            <input type="hidden" name="g-recaptcha-response" id="g-recaptcha-response" />
                        </div>
                    </div>

                    {/* Botón de registro */}
                    <div className="text-center">
                        {/* <button
                            type="submit"
                            disabled={!aceptoTerminos}
                            className={`botonRegistro px-16 py-4 text-white font-bold rounded-2xl transition-all duration-300 transform text-xl tracking-[3px] ${!aceptoTerminos
                                    ? 'opacity-50 cursor-not-allowed hover:scale-100'
                                    : 'hover:scale-105'
                                }`}
                        >
                            REGISTRARME
                        </button> */}
                    </div>
                </form>
            </div>

            <style jsx>{`
        .text-shadow-custom {
          text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
        }
        
        .botonRegistro {
          background-color: #00ffce;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.401);
          letter-spacing: 3px;
          background-size: 400% 400%;
          animation: gradient 5s ease infinite;
        }
        
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
        </section>
    );
};

export default FormularioRegistro;