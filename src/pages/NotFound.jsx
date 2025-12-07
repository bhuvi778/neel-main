import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Page Not Found</h2>
          <p className="text-gray-600 text-lg mb-8">
            Sorry, the page you are looking for does not exist. It might have been moved or deleted.
          </p>
          <Link to="/" className="btn-primary inline-block">
            <i className="fas fa-home mr-2"></i>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
