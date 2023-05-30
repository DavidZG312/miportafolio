import { useState } from "react";
import CardProyect from "../Cards/CardProyect";
import ModalPortfolio from "../modal/ModalPortfolio";
import CardSkillset from "../Cards/CardSkillset";

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
        title: 'HTML5',
        imageUrl: '/icons/HTML5.svg',
        description: [
            'Sistema de Información Estadístico, Delincuencial, Contravencional y Operativo - Policía Nacional',
            'Este proyecto se desarrolló utilizando Next.js como framework principal, Material-UI para el estilizado de la interfaz, Axios para la comunicación con el backend y Redux para un manejo eficiente del estado. Esta combinación de tecnologías permitió crear una aplicación web moderna, rápida y altamente funcional, brindando una excelente experiencia de usuario y una fácil mantenibilidad del código',
        ],
        danger: true
    },
    {
        id: 2,
        title: 'CSS3',
        imageUrl: '/icons/CSS3.svg',
        description: [
            'Sistema de denuncias y contravenciones - Policía Nacional',
            'Este proyecto se desarrolló utilizando Next.js como framework principal, Material-UI para el estilizado de la interfaz, Axios para la comunicación con el backend y Redux para un manejo eficiente del estado. Esta combinación de tecnologías permitió crear una aplicación web moderna, rápida y altamente funcional, brindando una excelente experiencia de usuario y una fácil mantenibilidad del código',
        ],
        danger: true
    },
    {
        id: 3,
        title: 'JAVASCRIPT',
        imageUrl: '/icons/JAVASCRIPT.svg',
        description: [
            'Sistema de Información Estadístico Vial - Policía Nacional',
            'Este proyecto se desarrolló utilizando Next.js como framework principal, Material-UI para el estilizado de la interfaz, Axios para la comunicación con el backend y Redux para un manejo eficiente del estado. Esta combinación de tecnologías permitió crear una aplicación web moderna, rápida y altamente funcional, brindando una excelente experiencia de usuario y una fácil mantenibilidad del código',
        ],
        danger: true
    },
    {
        id: 4,
        title: 'REACT JS',
        imageUrl: '/icons/REACT JS.svg',
        description: [
            'Sistema Único de Información sobre Tráfico Ilegal de Especies Silvestres - Policía Nacional',
            'Este proyecto se desarrolló utilizando Next.js como framework principal, Material-UI para el estilizado de la interfaz, Axios para la comunicación con el backend y Redux para un manejo eficiente del estado. Esta combinación de tecnologías permitió crear una aplicación web moderna, rápida y altamente funcional, brindando una excelente experiencia de usuario y una fácil mantenibilidad del código',
        ],
        danger: true
    },
   /*  {
        id: 5,
        title: 'NEXT JS',
        imageUrl: '/icons/CSS3.svg',
        description: [
            'Sistema de Información Estadístico, Delincuencial, Contravencional y Operativo - Policía Nacional',
            'Este proyecto se desarrolló utilizando Next.js como framework principal, Material-UI para el estilizado de la interfaz, Axios para la comunicación con el backend y Redux para un manejo eficiente del estado. Esta combinación de tecnologías permitió crear una aplicación web moderna, rápida y altamente funcional, brindando una excelente experiencia de usuario y una fácil mantenibilidad del código',
        ],
        danger: true
    }, */
    {
        id: 6,
        title: 'GIT',
        imageUrl: '/icons/GIT.svg',
        description: [
            'Sistema Integral para la Gestión de la Investigación Criminal',
            'Este proyecto se desarrolló utilizando Next.js como framework principal, Material-UI para el estilizado de la interfaz, Axios para la comunicación con el backend y Redux para un manejo eficiente del estado. Esta combinación de tecnologías permitió crear una aplicación web moderna, rápida y altamente funcional, brindando una excelente experiencia de usuario y una fácil mantenibilidad del código',
        ],
        danger: true
    },
  /*   {
        id: 7,
        title: 'DCCAE',
        imageUrl: '/img/LoginDCCAE.PNG',
        description: [
            'DCCAE DEPARTAMENTO CONTROL COMERCIO DE ARMAS, MUNICIONES Y EXPLOSIVOS',
            'Este proyecto se desarrolló utilizando Next.js como framework principal, Material-UI para el estilizado de la interfaz, Axios para la comunicación con el backend, Redux para un manejo eficiente del estado, react-google-recaptcha para una validación segura del inicio de sesión y PWA para la posibilidad de descargar la aplicación en dispositivos móviles. Esta combinación de tecnologías permitió crear una aplicación web moderna, rápida y altamente funcional, brindando una excelente experiencia de usuario y una fácil mantenibilidad del código',
        ],
        url: 'https://dccae.cgfm.mil.co/dccae/'
    },
    {
        id: 8,
        title: 'SIAEM',
        imageUrl: '/img/LoginSIAEM.PNG',
        description: [
            'DCCAE SISTEMA CONTROL DE ARMAS SIAEM 2.0',
            'Este proyecto se desarrolló utilizando Next.js como framework principal, Material-UI para el estilizado de la interfaz, Axios para la comunicación con el backend, Redux para un manejo eficiente del estado, react-google-recaptcha para una validación segura del inicio de sesión y PWA para la posibilidad de descargar la aplicación en dispositivos móviles. Esta combinación de tecnologías permitió crear una aplicación web moderna, rápida y altamente funcional, brindando una excelente experiencia de usuario y una fácil mantenibilidad del código',
        ],
        danger: true

    }, */
]

const Skillset = () => {

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
        <div className="px-4 py-20 bg-rgb-23-10-28" id="skillset">
            <h1 className="text-3xl font-bold mb-10 text-center text-white">SKILLSET</h1>
            {/* <div className="border-b-2 border-rgb-23-10-28 w-4/5 mb-8 tex m-auto" style={{ height: '1px' }} /> */}
            <div className="bg-gradient-to-l from-black via-white to-black w-full mt-3 mb-7 h- m-auto rounded-full" style={{ height: '1.5px' }} />
            <div className="grid gap-8 grid-cols-1 md:grid-cols-5 p-5 px-16 justify-center">
                {proyects.map(({ id, title, description, imageUrl }) => (
                    <CardSkillset key={id} title={title} imageUrl={imageUrl} handleClick={() => handleOpen(id)} />
                ))}
            </div>
        </div>
    );
};

export default Skillset;
