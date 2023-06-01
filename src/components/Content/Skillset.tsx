import { useState } from "react";
import CardProyect from "../Cards/CardProyect";
import ModalPortfolio from "../modal/ModalPortfolio";
import CardSkillset from "../Cards/CardSkillset";
import { InView } from "react-intersection-observer";

interface Proyects {
    title: string;
    imageUrl: string;
}

const proyects: Proyects[] = [
    {
        title: 'HTML5',
        imageUrl: '/icons/HTML5.svg',
    },
    {
        title: 'CSS3',
        imageUrl: '/icons/CSS3.svg',
    },
    {
        title: 'SASS',
        imageUrl: '/icons/SASS.svg',
    },
    {
        title: 'Bootstrap',
        imageUrl: '/icons/Bootstrap.svg',
    },
    {
        title: 'JAVASCRIPT',
        imageUrl: '/icons/JAVASCRIPT.svg',
    },
    {
        title: 'REACT JS',
        imageUrl: '/icons/REACT JS.svg',
    },
    {
        title: 'GIT',
        imageUrl: '/icons/GIT.svg',
    },
]

const Skillset = () => {

    const [inView, setInView] = useState(false);

    return (
        <InView onChange={(inView) => setInView(inView)}>
            <div className={`px-4 py-20 bg-rgb-23-10-28 ${inView ? 'fade-in-animation' : 'opacity-0'}`}  id="skillset">
                <h1 className="text-3xl font-bold mb-10 text-center text-white">SKILLSET</h1>
                {/* <div className="border-b-2 border-rgb-23-10-28 w-4/5 mb-8 tex m-auto" style={{ height: '1px' }} /> */}
                <div className="bg-gradient-to-l from-black via-white to-black w-full mt-3 mb-7 h- m-auto rounded-full" style={{ height: '1.5px' }} />
                <div className="grid gap-8 grid-cols-2 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 p-5 px-16 justify-center">
                    {proyects.map(({ title, imageUrl }, index) => (
                        <CardSkillset key={index} title={title} imageUrl={imageUrl} />
                    ))}
                </div>
            </div>
        </InView>

    );
};

export default Skillset;
