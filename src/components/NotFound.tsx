import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <div className="text-center">
        <h1 className="text-7xl font-bold mb-3">404</h1>
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
      </div>

      <div className="mt-8">
        <Link 
          to="/" 
          className="text-blue-600 hover:underline text-lg"
        >
          ← Back to Gallery
        </Link>
      </div>
    </div>
  );
};

export default NotFound;