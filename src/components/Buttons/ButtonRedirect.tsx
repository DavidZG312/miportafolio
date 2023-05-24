import { useState } from 'react';

interface Props {
    url?: string
}

export default function ButtonRedirect({
    url
}: Props) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <a href={url} target='_blank' className="relative inline-block">
            <button
                className={`bg-green-600 m-auto hover:bg-green-500 text-white rounded-full h-12 w-12 flex items-center justify-center outline-none focus:outline-none ${isHovered ? 'ring ring-green-400' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img
                    src='/icons/redirect-white.svg'
                    alt='danger'
                    height={25}
                    width={25}
                />
            </button>
        </a>
    );
}
