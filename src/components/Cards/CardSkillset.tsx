import React from "react";

interface Props {
    title: string;
    imageUrl: string;
}

const CardSkillset = ({ title, imageUrl }: Props) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div
            className="relative cursor-pointer border h-36 bg-gray-100 border-gray-200 rounded-md shadow-lg w-full h-260px overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="absolute inset-0 bg-cover bg-center z-0">
                <img src={imageUrl} alt="icon" className={`h-24 w-24 m-auto mt-8`} />
                <div className="opacity-0 absolute inset-0 z-10 hover:opacity-50 transition-opacity"></div>
            </div>
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center opacity-0 bg-gray-900 hover:opacity-75 transition-opacity">
                <h3 className={`text-lg font-medium text-white text-center ${isHovered ? "opacity-100" : "opacity-0"} transition-opacity`}>{title}</h3>
            </div>
        </div>
    );
};

export default CardSkillset;
