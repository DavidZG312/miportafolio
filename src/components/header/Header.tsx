import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-800">
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between flex-wrap py-4">
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                       {/*  <svg
                            className="fill-current h-8 w-8 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path
                                fillRule="evenodd"
                                d="M2.392 9.854a1 1 0 011.32-.083l.094.083 5 5a1 1 0 01-1.414 1.414L4 11.414V17a1 1 0 01-2 0V7a1 1 0 011-1h7a1 1 0 010 2H4.586l1.293 1.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 01-.083-1.32l.083-.094 5-5z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className="font-semibold text-xl tracking-tight">Tailwind CSS</span> */}
                    </div>
                    <div className="block lg:hidden">
                        <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
                            <svg
                                className="fill-current h-3 w-3"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Menu</title>
                                <path d="M0 3a3 3 0 013-3h14a3 3 0 013 3v1a3 3 0 01-3 3H3a3 3 0 01-3-3V3zm0 7a3 3 0 013-3h14a3 3 0 013 3v1a3 3 0 01-3 3H3a3 3 0 01-3-3v-1zm0 7a3 3 0 013-3h14a3 3 0 013 3v1a3 3 0 01-3 3H3a3 3 0 01-3-3v-1z" />
                            </svg>
                        </button>
                    </div>
                    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                        <div className="text-sm lg:flex-grow">
                            <a
                                href="#responsive-header"
                                className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
                            >
                                Docs
                            </a>
                            <a
                                href="#responsive-header"
                                className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
                            >
                                Examples
                            </a>
                            <a
                                href="#responsive-header"
                                className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white"
                            >
                                Blog
                            </a>
                        </div>
                        <div className="text-sm">
                            <a
                                href="#account"
                                className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
                            >
                                Account
                            </a>
                            <a
                                href="#login"
                                className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white"
                            >
                                Log in
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;