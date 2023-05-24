import { useState } from 'react';

interface Props {
    content: string;
    img?: string
}

export default function ButtonHover({
    content,
    img = '/icons/danger-white.svg'
}: Props) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="relative inline-block">
            <button
                className={`bg-red-500 m-auto hover:bg-red-600 text-white rounded-full h-12 w-12 flex items-center justify-center outline-none focus:outline-none ${isHovered ? 'ring ring-red-300' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img
                    src={img}
                    alt='danger'
                    height={100}
                    width={100}
                />
            </button>
            {isHovered && (
                <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="absolute bg-black  p-4 text-white rounded-md shadow-lg transform -translate-x-1/2 bottom-full -mb-2 transition-all duration-300 opacity-90 pointer-events-auto text-sm w-96 text-justify">
                    {content}
                </div>
            )}
        </div>
    );
}
