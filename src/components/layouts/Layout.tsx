import Link from "next/link";
import React, { useState } from "react";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
  
    const handleScroll = () => {
      const header = document.getElementById("header");
      if (header) {
        setIsSticky(header.offsetTop <= 0);
      }
    };
  
    React.useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return (
      <div className="min-h-screen rgb-243-248-249">
        <div className="flex flex-col min-h-screen">
          <header
            id="header"
            className={`bg-rgb-23-10-28 h-14 flex justify-between items-center px-4 w-full ${
              isSticky ? "fixed top-0" : ""
            }`}
          >
            <div className="text-white font-bold text-xl">David Zabala</div>
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
              <a className="text-white">Inicio</a>
              <a className="text-white">Portafolio</a>
              <a className="text-white">Contacto</a>
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
      </div>
    );
  };
  
  export default Layout;