import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">404</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
        404 page not found
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-bg text-white font-medium border border-border hover:bg-fg hover:text-bg transition-colors"
      >
        Go to Home
      </Link>
    </div>
  );
}
