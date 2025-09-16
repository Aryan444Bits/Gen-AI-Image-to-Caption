function Footer() {
  return (
    <footer className="bg-white shadow-lg mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
              </svg>
              <span className="text-2xl font-bold text-gray-800">PicsArt</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Level up your social media presence with stunning visuals. Create, edit, and share amazing content with our powerful tools.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-600 transition duration-300">
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition duration-300">
                <i className="fab fa-twitter text-lg"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition duration-300">
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition duration-300">
                <i className="fab fa-linkedin-in text-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">Services</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">Blog</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-blue-600 mt-1 mr-3"></i>
                <span className="text-gray-600">123 Design Street, Creative City</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone text-blue-600 mt-1 mr-3"></i>
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope text-blue-600 mt-1 mr-3"></i>
                <span className="text-gray-600">info@picsart.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold text-gray-800">Subscribe to our Newsletter</h3>
              <p className="text-gray-600">Get the latest updates and offers</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-2 md:mb-0">
            © {new Date().getFullYear()} PicsArt. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition duration-300">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;