import { useState } from 'react';

interface Props {
    img?: string
    url: string
}

export default function ButtonContact({
    img = '/icons/danger-white.svg',
    url 
}: Props) {

    return (
        <a href={url} target='_blank' >
            <button
                className={`bg-white m-auto hover:bg-slate-100 text-white rounded-full h-12 w-12 flex items-center justify-center outline-none focus:outline-none transition-transform duration-300 ease-in-out transform hover:scale-110`}
                type='button'
            >
                <img
                    src={img}
                    alt='danger'
                    height={30}
                    width={30}
                />
            </button>
        </a>
    );
}
