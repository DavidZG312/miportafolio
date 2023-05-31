import { useState } from 'react';
import ButtonHover from '../Buttons/ButtonHover';
import ButtonRedirect from '../Buttons/ButtonRedirect';

interface Proyects {
    id: number;
    title: string;
    description: string[];
    imageUrl: string;
    url?: string;
    danger?: boolean;
}

interface Props {
    handleClose: () => any;
    contentModal: Proyects[];
}

const text: string = `La aplicación en la que trabajé es de uso privado y está sujeta a restricciones de confidencialidad.\nDebido a estas restricciones, no puedo compartir detalles adicionales, como enlaces para su visualización o acceso a más imagenés de esta, ya que esto implicaría revelar información sensible o propiedad intelectual protegida. Estas medidas son necesarias para garantizar la seguridad, privacidad y cumplimiento de los acuerdos de confidencialidad establecidos con nuestros clientes y socios comerciales.\nSin embargo, puedo proporcionar una descripción técnica general de la aplicación, discutir los desafíos abordados durante su desarrollo y compartir información sobre las tecnologías y enfoques utilizados. Si tienes preguntas específicas o deseas profundizar en aspectos técnicos generales, estaré encantado de brindarte la información dentro de los límites de confidencialidad establecidos.`

export default function ModalPortfolio({ contentModal, handleClose }: Props) {
    const data = contentModal[0];

    return (
        <div className="fixed z-50 inset-0 overflow-y-auto flex items-center justify-center">
            {/* Fondo oscuro */}
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            </div>

            {/* Contenido del modal */}
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-3xl sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">

                    <h3 className="relative rounded-md text-lg leading-6 font-medium font-roboto bg-rgb-23-10-28 p-4 text-white text-center">
                        {data.title}
                        <button
                            onClick={handleClose}
                            className="absolute right-0 top-0 p-4"
                        >
                            <svg
                                className="h-6 w-6 fill-current text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M18.3 5.71a1 1 0 0 0-1.42 0L12 10.59l-4.88-4.88a1 1 0 1 0-1.42 1.42L10.59 12l-4.88 4.88a1 1 0 1 0 1.42 1.42L12 13.41l4.88 4.88a1 1 0 0 0 1.42-1.42L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z" />
                            </svg>
                        </button>
                    </h3>
                    <div className="mt-2">
                        <img
                            className="object-cover h-500 w-full"
                            src={data.imageUrl}
                            alt="Imagen del proyecto"
                        />
                    </div>
                    <div className="bg-gradient-to-l from-white via-black to-white w-full my-3 h- m-auto rounded-full" style={{ height: '1.5px' }} />
                    <div className="mt-2 text-center">
                        {data.description.map((item: string, index: number) => {
                            return (
                                <>
                                    {index === 0 ? (
                                        <h4 className="text-md text-black font-bold text-center">{item}</h4>
                                    ) : (
                                        <p className="text-sm text-black font-roboto text-left">{item}</p>
                                    )}
                                    <br />
                                </>
                            )
                        })}
                        {data.danger ? (
                            <ButtonHover
                                content={text}
                            />
                        ) : (
                            <ButtonRedirect
                                url={data.url}
                            />
                        )}
                    </div>
                </div>

            </div>
        </div >
    );
}
