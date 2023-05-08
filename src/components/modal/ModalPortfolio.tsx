import { useState } from 'react';

interface Proyects {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
}

interface Props {
    handleClose: () => any;
    contentModal: Proyects[];
}

export default function ModalPortfolio({ contentModal, handleClose }: Props) {
    const data = contentModal[0];

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
            {/* Fondo oscuro */}
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            {/* Contenido del modal */}
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <button
                        onClick={handleClose}
                        className="absolute right-0 top-0 p-4"
                    >
                        <svg
                            className="h-6 w-6 fill-current text-gray-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M18.3 5.71a1 1 0 0 0-1.42 0L12 10.59l-4.88-4.88a1 1 0 1 0-1.42 1.42L10.59 12l-4.88 4.88a1 1 0 1 0 1.42 1.42L12 13.41l4.88 4.88a1 1 0 0 0 1.42-1.42L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z" />
                        </svg>
                    </button>
                    <h3 className="text-lg leading-6 font-medium text-gray-900 text-center">
                        {data.title}
                    </h3>

                    <div className="mt-2">
                        <img
                            className="object-cover h-500 w-full"
                            src={data.imageUrl}
                            alt="Imagen del proyecto"
                        />
                    </div>
                    <div className="mt-2">
                        <p className="text-sm text-gray-500">{data.description}</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
