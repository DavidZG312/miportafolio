import { useState } from "react";
import CardProyect from "../Cards/CardProyect";
import ModalPortfolio from "../modal/ModalPortfolio";

interface Proyects {
    id: number;
    title: string;
    description: string[];
    imageUrl: string;
    danger?: boolean;
    url?: string;
}

const proyects: Proyects[] = [
    {
        id: 1,
        title: 'SIEDCO',
        imageUrl: '/img/LoginSiedco.PNG',
        description: [
            'Sistema de Información Estadístico, Delincuencial, Contravencional y Operativo - Policía Nacional',
            'Este proyecto se desarrolló utilizando Next.js como framework principal, Material-UI para el estilizado de la interfaz y Axios para la comunicación con el backend. Esta combinación de tecnologías permitió crear una aplicación web moderna, rápida y altamente funcional, brindando una excelente experiencia de usuario y una fácil mantenibilidad del código',
        ],
        danger: true
    },
    {
        id: 2,
        title: 'SIDENCO',
        imageUrl: '/img/LoginSidenco.PNG',
        description: ['Sistema de denuncias y contravenciones - Policía Nacional',
            'Este proyecto se desarrolló utilizando Next.js como framework principal, Material-UI para el estilizado de la interfaz y Axios para la comunicación con el backend. Esta combinación de tecnologías permitió crear una aplicación web moderna, rápida y altamente funcional, brindando una excelente experiencia de usuario y una fácil mantenibilidad del código',],
        danger: true
    },
    {
        id: 3,
        title: 'SIEVI',
        imageUrl: '/img/LoginSievi.PNG',
        description: ['Sistema de Información Estadístico Vial - Policía Nacional'],
        danger: true
    },
    {
        id: 4,
        title: 'SITIES',
        imageUrl: '/img/LoginSities.PNG',
        description: ['Sistema Único de Información sobre Tráfico Ilegal de Especies Silvestres - Policía Nacional'],
        danger: true
    },
    {
        id: 5,
        title: 'SIPSE',
        imageUrl: '/img/LoginSipse.PNG',
        description: ['Sistema de Información Estadístico, Delincuencial, Contravencional y Operativo - Policía Nacional'],
        danger: true
    },
    {
        id: 6,
        title: 'SIGIC',
        imageUrl: '/img/LoginSigic.PNG',
        description: ['Sistema Integral para la Gestión de la Investigación Criminal'],
        danger: true
    },
    {
        id: 7,
        title: 'DCCAE',
        imageUrl: '/img/LoginDCCAE.PNG',
        description: ['DCCAE DEPARTAMENTO CONTROL COMERCIO DE ARMAS, MUNICIONES Y EXPLOSIVOS'],
        url: 'https://dccae.cgfm.mil.co/dccae/'
    },
    {
        id: 8,
        title: 'SIAEM',
        imageUrl: '/img/LoginSIAEM.PNG',
        description: ['DCCAE SISTEMA CONTROL DE ARMAS SIAEM 2.0'],
        danger: true

    },
]

const Portfolio = () => {

    const [modal, setModal] = useState(false)
    const [contentModal, setContentModal] = useState<Proyects[]>([])

    const handleOpen = (id: number) => {
        setContentModal(proyects.filter((item: Proyects) => item.id === id))
        setModal(true)
    }

    const handleClose = () => {
        setContentModal([])
        setModal(false)
    }

    return (
        <div className="px-4 py-10" id="portafolio">
            <h1 className="text-2xl font-bold mb-6 text-center">PORTFOLIO</h1>
            {/* <div className="border-b-2 border-rgb-23-10-28 w-4/5 mb-8 tex m-auto" style={{ height: '1px' }} /> */}
            <div className="bg-gradient-to-l from-white via-black to-white w-full mt-3 mb-7 h- m-auto rounded-full" style={{ height: '1.5px' }} />
            <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
                {proyects.map(({ id, title, description, imageUrl }) => (
                    <CardProyect key={id} title={title} imageUrl={imageUrl} handleClick={() => handleOpen(id)} />
                ))}
            </div>
            {modal && (
                <ModalPortfolio contentModal={contentModal} handleClose={handleClose} />
            )}
        </div>
    );
};

export default Portfolio;
