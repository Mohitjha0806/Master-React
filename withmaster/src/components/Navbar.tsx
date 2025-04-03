import { Link } from 'react-router-dom';
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (

    <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
      </a>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-solid-bg"
        aria-expanded={isOpen}
      >
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-solid-bg">
        <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
          <li>
            <Link to="/layout" className="py-4 px-2 text-white font-semibold hover:text-blue-500 transition duration-300">Home</Link>
          </li>
          <li>
            <Link to="/layout/about" className="py-4 px-2 text-white font-semibold hover:text-blue-500 transition duration-300">About</Link>
          </li>
          <li>
            <Link to="/layout/contact" className="py-4 px-2 text-white font-semibold hover:text-blue-500 transition duration-300">Contact</Link>
          </li>
          <li>
            <Link to="/logoutPage" className="py-4 px-2 text-white font-semibold hover:text-blue-500 transition duration-300">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>




    // <nav classNameName="bg-white shadow-lg">
    //   <div classNameName="max-w-6xl mx-auto px-4">
    //     <div classNameName="flex justify-between">
    //       <div classNameName="flex space-x-7">
    //         {/* Logo can go here */}
    //         <div classNameName="flex items-center py-4 px-2">
    //           <span classNameName="font-semibold text-gray-800 text-lg">Logo</span>
    //         </div>
    //       </div>
          
    //       {/* Primary Navbar items */}
    //       <div classNameName="hidden md:flex items-center space-x-1">
    //         <Link 
    //           to="/" 
    //           classNameName="py-4 px-2 text-gray-800 font-semibold hover:text-blue-500 transition duration-300"
    //         >
    //           Home
    //         </Link>
    //         <Link 
    //           to="/about" 
    //           classNameName="py-4 px-2 text-gray-800 font-semibold hover:text-blue-500 transition duration-300"
    //         >
    //           About
    //         </Link>
    //         <Link 
    //           to="/contact" 
    //           classNameName="py-4 px-2 text-gray-800 font-semibold hover:text-blue-500 transition duration-300"
    //         >
    //           Contact
    //         </Link>
    //       </div>
          
    //       {/* Mobile menu button */}
    //       <div classNameName="md:hidden flex items-center">
    //         <button classNameName="outline-none mobile-menu-button">
    //           <svg 
    //             classNameName="w-6 h-6 text-gray-800"
    //             x-show="!showMenu"
    //             fill="none"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path d="M4 6h16M4 12h16M4 18h16"></path>
    //           </svg>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
      
    //   {/* Mobile menu */}
    //   <div classNameName="hidden mobile-menu">
    //     <ul classNameName="">
    //       <li classNameName="active">
    //         <Link 
    //           to="/" 
    //           classNameName="block text-sm px-2 py-4 text-white bg-blue-500 font-semibold"
    //         >
    //           Home
    //         </Link>
    //       </li>
    //       <li>
    //         <Link 
    //           to="/about" 
    //           classNameName="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300"
    //         >
    //           About
    //         </Link>
    //       </li>
    //       <li>
    //         <Link 
    //           to="/contact" 
    //           classNameName="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300"
    //         >
    //           Contact
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
};

export default Navbar;