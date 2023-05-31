import { SyntheticEvent, useState } from "react";
import CardProyect from "../Cards/CardProyect";
import ModalPortfolio from "../modal/ModalPortfolio";
import ButtonContact from "../Buttons/ButtonContact";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'
import Spinner from "../spinner/Spinner";

interface dataMail {
    email: string;
    message: string;
}

const Contact = () => {

    const [data, setData] = useState<dataMail>({
        email: '',
        message: ''
    })
    const [spinner, setSpinner] = useState(false)

    const { email, message } = data;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const sendEmail = (e: SyntheticEvent) => {
        emailjs.send(
            'service_vszfcuc',
            'template_ffgcve7',
            {
                to_name: email,
                message: message
            },
            'R9HoewGFFDLApfYlM'
        )
            .then((response) => {
                /*   Swal.fire(
                      'Se ha enviado con exito el correo.',
                    
                      'success'
                  ) */

                Swal.fire({
                    // position: 'top-end',
                    icon: 'success',
                    title: 'Se ha enviado con exito el correo',
                    showConfirmButton: false,
                    timer: 1500
                })

            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
        setSpinner(false)
    }

    // Luego, puedes usar la función sendEmail en tu componente React, por ejemplo, en un formulario de contacto
    /*     <form onSubmit={sendEmail}>
            <button type="submit">Enviar correo electrónico</button>
        </form> */


    return (
        <div className="px-4 py-20" id="contact">
            {spinner && (<Spinner />)}
            <h1 className="text-3xl font-bold mb-10 text-center">CONTACT</h1>
            {/* <div className="border-b-2 border-rgb-23-10-28 w-4/5 mb-8 tex m-auto" style={{ height: '1px' }} /> */}
            <div className="bg-gradient-to-l from-white via-black to-white w-full mt-3 mb-7 h- m-auto rounded-full" style={{ height: '1.5px' }} />
            <div className="w-5/6 p-10 bg-rgb-25-34-52 m-auto mt-16 rounded-2xl">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    setSpinner(true)
                    setTimeout(() => {
                        sendEmail(e)
                    }, 2000);
                }}>
                    <h4 className="text-center text-2xl text-white">
                        Your email:
                    </h4>
                    <div className="text-center">
                        <input required className="w-5/6 h-12 my-5 p-5 " name="email" type="email" placeholder="johndoe@correo.com" onChange={handleChange} />
                    </div>
                    <h4 className="text-center text-2xl text-white">
                        Your message:
                    </h4>
                    <div className="text-center">
                        <textarea required className="w-5/6 my-5 p-5 " name="message" onChange={handleChange} rows={4} />
                    </div>
                    <div className='text-center pt-4'>
                        <button
                            type="submit"
                            className="text-white font-bold text-lg bg-lime-500 p-3 px-6 rounded-lg hover:bg-white hover:text-rgb-25-34-52 hover:border-lime-500 transition-transform duration-300 ease-in-out transform hover:scale-110"
                        >
                            Send
                        </button>
                    </div>
                    <div className='mt-8 flex justify-center space-x-3'>
                        <ButtonContact
                            img="/icons/linkedin.svg"
                            url="https://www.linkedin.com/in/davidzabalagranados/"
                        />
                        <ButtonContact
                            img="/icons/github.svg"
                            url="https://github.com/DavidZG312"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
