import CardProyect from "../Cards/CardProyect";

const proyects = [
    { id: 1, title: 'SIEDCO', description: '', imageUrl: '/img/LoginSiedco.PNG' },
    { id: 2, title: 'SIDENCO', description: '', imageUrl: '/img/LoginSidenco.PNG' },
    { id: 3, title: 'SIEVI', description: '', imageUrl: '/img/LoginSievi.PNG' },
    { id: 4, title: 'SITIES', description: '', imageUrl: '/img/LoginSities.PNG' },
    { id: 5, title: 'SIPSE', description: '', imageUrl: '/img/LoginSipse.PNG' },
    { id: 6, title: 'SIGIC', description: '', imageUrl: '/img/LoginSigic.PNG' },
    { id: 7, title: 'DCCAE', description: '', imageUrl: '/img/LoginDCCAE.PNG' },
    { id: 8, title: 'SIAEM', description: '', imageUrl: '/img/LoginSIAEM.PNG' },
]

const Portfolio = () => {
    return (
        <div className="px-4 py-10">
            <h1 className="text-2xl font-bold mb-6 text-center">PORTAFOLIO</h1>
            <div className="border-b-2 border-rgb-23-10-28 w-4/5 mb-8 tex m-auto" style={{ height: '1px' }} />
            <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
                {proyects.map(({ id, title, description, imageUrl }) => (
                    <CardProyect key={id} title={title} description={description} imageUrl={imageUrl} />
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
