import React, { useState } from "react";
import { useRouter } from 'next/router';


interface LayoutProps {
  children: React.ReactNode;
}
import { Link } from 'react-scroll'
const Layout: React.FC<LayoutProps> = ({ children }) => {

  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  /*   const handleScroll = () => {
      const header = document.getElementById("header");
      if (header) {
        // setIsSticky(header.offsetTop <= 0);
        setIsSticky(window.scrollY >= header.offsetTop);
        // setIsSticky(header.getBoundingClientRect().top <= 0);
      }
    }; */

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const header = document.getElementById("header");

    if (header) {
      /* console.log(header.offsetTop) */
      setIsHeaderSticky(window.pageYOffset > (prevScrollPos - 120));
     // setPrevScrollPos(currentScrollPos);
    }
  };

  React.useEffect(() => {
    const header = document.getElementById("header");
    if (header) setPrevScrollPos(header.offsetTop)
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex flex-col min-h-screen">
        <header
          id="header"
          // className={`bg-rgb-23-10-28 h-14 flex justify-between items-center px-4 w-full ${isSticky ? "fixed top-0" : ""}`}
          // className={`bg-rgb-23-10-28 h-14 flex justify-between items-center px-4 w-full ${isSticky ? "fixed top-0 left-0 right-0 z-50" : ""   }`}
          className={`bg-rgb-23-10-28 h-14 flex justify-between items-center px-4 w-full shadow-sm blur-1 shadow-white ${isHeaderSticky ? "fixed top-0 left-0 right-0 z-30" : ""
            }`}

        >
          <div className="text-white font-bold text-xs cursor-pointer hover:text-white">
            <a href="#" target="_parent" rel="noopener noreferrer">
              <span className="flex items-center">
                <img src="/icons/account.svg" className="h-6 w-6 rounded-full mr-2" alt="Ícono" />
                <span className="text-sm ml-2">David Zabala</span>
                <span className="text-xs"> &nbsp;&nbsp;Desarrollador Frontend</span>
              </span>
            </a>
          </div>
          <div className="block lg:hidden">
            <button
              className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
              onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <nav className="hidden lg:flex space-x-4">
            <Link to="portafolio" smooth={true} duration={300} className="text-white cursor-pointer">Portfolio</Link>
            <Link to="skillset" smooth={true} duration={300} className="text-white cursor-pointer">Skillset</Link>
        {/*     <Link to="portafolio" smooth={true} duration={300} className="text-white cursor-pointer">Experience</Link> */}
            <Link to="contact" smooth={true} duration={300} className="text-white cursor-pointer">Contact</Link>
          </nav>
        </header>
        <div
          className={`${isOpen ? "block" : "hidden"
            } lg:hidden bg-rgb-11-113-137 px-2 pt-2 pb-3 w-full text-white`}
        >
          <ul>
            <li className="my-2">
              <a className="block hover:bg-white hover:text-blue-900 py-2 px-4 rounded">
                Home
              </a>
            </li>
            <li className="my-2">
              <a className="block hover:bg-white hover:text-blue-900 py-2 px-4 rounded">
                Portafolio
              </a>
            </li>
            <li className="my-2">
              <a className="block hover:bg-white hover:text-blue-900 py-2 px-4 rounded">
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <main className="flex-grow">{children}</main>
      </div>
    </div >
  );
};

export default Layout;