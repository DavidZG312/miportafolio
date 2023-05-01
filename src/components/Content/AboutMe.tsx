import React from 'react';

const About = () => {
  return (
    /*  <div className="container mt-40 mx-auto px-4 py-8 md:flex md:items-center">
       <div className="md:w-1/3">
         <img
           src="/profile.jpg"
           alt="Profile"
           className="rounded-full w-64 mx-auto"
         />
       </div>
       <div className="mt-8 md:mt-0 md:w-2/3">
         <h1 className="text-4xl font-bold mb-2 text-center md:text-left text-black">
           Sobre mi
         </h1>
         <p className="text-xl text-center md:text-left text-black" >
           Desarrollador de Software con experiencia en tecnologías web y frameworks como React y Next.js. Con 1+ años de experiencia en el campo.
         </p>
       </div>
     </div> */

    /*    <div className="flex flex-col items-center">
         <img
           src="https://via.placeholder.com/150"
           alt="profile picture"
           className="w-40 h-40 rounded-full"
         />
         <div className="my-4 border-b-2 border-rgb-243-248-249 pb-2">
           <h2 className="text-2xl font-bold">Nombre Apellido</h2>
         </div>
         <div className="mt-4">
           <h4 className="text-lg font-medium">Desarrollador Front-end</h4>
           <p className="text-gray-700 text-center mt-2">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
             libero nec blandit faucibus, orci tortor bibendum turpis, sed
             malesuada elit velit vitae orci. Sed ut libero eget massa interdum
             laoreet at at velit. Duis in lorem nec leo lacinia auctor vitae eu
             magna. Nullam vitae erat nisi.
           </p>
         </div>
       </div> */
    <div className="relative">
      <div className="absolute w-full h-full bg-cover bg-center z-0">
        <video
          className="w-full h-full object-cover opacity-50"
          autoPlay
          loop
          muted
        >
          <source src="/video/pexels-distill-852421-1920x1080-30fps.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="relative z-10">
        <div className="flex flex-col items-center justify-center px-4 py-16 sm:px-6 lg:py-12 lg:px-8">
        {/*   <img
            src="/profile.jpg"
            alt="Profile"
            className="rounded-full h-48 w-48 border-4 border-white"
          /> */}
          <div className="relative">
            <div className="h-64 w-64 bg-cover bg-center bg-gray-400 rounded-full" style={{ backgroundImage:`url('/img/profile.jpg')` }}>
            </div>
            <div className="flex flex-col items-center justify-center px-4 py-8">
              <hr className="border-t-4 border-rgb-23-10-28 w-64 rounded-full mb-4" />
              <h2 className="text-rgb-23-10-28 text-2xl font-bold mb-4">David Zabala Granados</h2>
              <h4 className="text-rgb-23-10-28 text-lg font-medium">Desarrollador Front-end</h4>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default About;
