import { Link } from 'react-router';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 h-12 w-[80%] px-4 py-2 mx-auto flex items-center justify-between rounded-full bg-white/30 backdrop-blur-md border border-white/20">
      <Link to="/" className="font-bold text-lg">
        <span>Mission</span>
        <span className="text-blue-600">75</span>
      </Link>
      <div>
        <ul className="flex gap-6">
          <li>
            <Link to="/docs" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Docs</Link>
          </li>
          <li>
            <Link to="/about" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
