
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left mb-2 md:mb-0">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400 transition-colors">
            Facebook
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors">
            Twitter
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;