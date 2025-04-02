import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            {/* Logo can go here */}
            <div className="flex items-center py-4 px-2">
              <span className="font-semibold text-gray-800 text-lg">Logo</span>
            </div>
          </div>
          
          {/* Primary Navbar items */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              to="/" 
              className="py-4 px-2 text-gray-800 font-semibold hover:text-blue-500 transition duration-300"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="py-4 px-2 text-gray-800 font-semibold hover:text-blue-500 transition duration-300"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="py-4 px-2 text-gray-800 font-semibold hover:text-blue-500 transition duration-300"
            >
              Contact
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button">
              <svg 
                className="w-6 h-6 text-gray-800"
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className="hidden mobile-menu">
        <ul className="">
          <li className="active">
            <Link 
              to="/" 
              className="block text-sm px-2 py-4 text-white bg-blue-500 font-semibold"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;