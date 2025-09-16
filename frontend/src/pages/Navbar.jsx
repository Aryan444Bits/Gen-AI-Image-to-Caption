import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo/Brand Section */}
        <NavLink 
          to="/" 
          className="flex items-center text-2xl font-bold text-gray-800 hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
        >
          <svg className="w-8 h-8 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
          </svg>
          PicsArt
        </NavLink>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium py-2 px-1 text-gray-700 hover:text-blue-600 transition-all duration-300 hover:-translate-y-0.5 ${
                isActive ? "text-blue-600 border-b-2 border-blue-600 font-semibold" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `font-medium py-2 px-1 text-gray-700 hover:text-blue-600 transition-all duration-300 hover:-translate-y-0.5 ${
                isActive ? "text-blue-600 border-b-2 border-blue-600 font-semibold" : ""
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `font-medium py-2 px-1 text-gray-700 hover:text-blue-600 transition-all duration-300 hover:-translate-y-0.5 ${
                isActive ? "text-blue-600 border-b-2 border-blue-600 font-semibold" : ""
              }`
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Auth Links */}
        <div className="flex items-center space-x-4">
          <NavLink
            to="/signin"
            className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
          >
            Sign In
          </NavLink>
          
          {/* Mobile menu button (optional) */}
          <button className="md:hidden flex flex-col justify-center items-center w-10 h-10 text-gray-600 hover:text-blue-600 transition-colors duration-300">
            <span className="block w-6 h-0.5 bg-current mb-1.5"></span>
            <span className="block w-6 h-0.5 bg-current mb-1.5"></span>
            <span className="block w-6 h-0.5 bg-current"></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;