import { Link, useNavigate } from 'react-router-dom';

export default function GlobalNavigation() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 text-white text-xs px-4 py-2 flex justify-between items-center z-[9999] relative w-full">
      <div className="flex items-center gap-4">
        <Link to="/" className="hover:text-gray-300 font-medium transition-colors">
          Homepage
        </Link>
        <button 
          onClick={() => navigate(-1)} 
          className="hover:text-gray-300 font-medium transition-colors cursor-pointer"
        >
          Back
        </button>
      </div>
      <div>
        <Link to="/sitemap" className="hover:text-gray-300 font-medium transition-colors">
          Sitemap
        </Link>
      </div>
    </div>
  );
}
