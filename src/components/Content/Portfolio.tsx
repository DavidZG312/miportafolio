import { useState } from "react";
import CardProyect from "../Cards/CardProyect";
import ModalPortfolio from "../modal/ModalPortfolio";

interface Proyects {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
}

const proyects: Proyects[] = [
    { id: 1, title: 'SIEDCO', description: 'Programa dirigido a Hechos', imageUrl: '/img/LoginSiedco.PNG' },
    { id: 2, title: 'SIDENCO', description: 'Programa dirigido a Hechos', imageUrl: '/img/LoginSidenco.PNG' },
    { id: 3, title: 'SIEVI', description: 'Programa dirigido a Hechos', imageUrl: '/img/LoginSievi.PNG' },
    { id: 4, title: 'SITIES', description: 'Programa dirigido a Hechos', imageUrl: '/img/LoginSities.PNG' },
    { id: 5, title: 'SIPSE', description: 'Programa dirigido a Hechos', imageUrl: '/img/LoginSipse.PNG' },
    { id: 6, title: 'SIGIC', description: 'Programa dirigido a Hechos', imageUrl: '/img/LoginSigic.PNG' },
    { id: 7, title: 'DCCAE', description: 'Programa dirigido a Armas', imageUrl: '/img/LoginDCCAE.PNG' },
    { id: 8, title: 'SIAEM', description: 'Programa dirigido a Armas', imageUrl: '/img/LoginSIAEM.PNG' },
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
        <div className="px-4 py-10">
            <h1 className="text-2xl font-bold mb-6 text-center">PORTAFOLIO</h1>
            <div className="border-b-2 border-rgb-23-10-28 w-4/5 mb-8 tex m-auto" style={{ height: '1px' }} />
            <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
                {proyects.map(({ id, title, description, imageUrl }) => (
                    <CardProyect key={id} title={title} description={description} imageUrl={imageUrl} handleClick={() => handleOpen(id)} />
                ))}
            </div>
            {modal && (
                <ModalPortfolio contentModal={contentModal} handleClose={handleClose} />
            )}
        </div>
    );
};

export default Portfolio;
