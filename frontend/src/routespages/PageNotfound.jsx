// src/pages/PageNotfound.jsx
import { Link } from 'react-router-dom'; // Assuming you're using react-router-dom

const PageNotfound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <h1 className="text-9xl font-extrabold text-red-600 mb-4 animate-pulse">404</h1>
      <h2 className="text-4xl font-bold text-gray-800 mb-2">Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default PageNotfound;