import { Link } from 'react-router';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-screen bg-white/30 backdrop-blur-md border-t border-white/20 py-6">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-4">
          <ul className="flex items-center justify-center gap-8">
            <li>
              <Link to="/about" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">About Us</Link>
            </li>
            <li>
              <Link to="/privacy" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/contact" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center text-slate-600">
          <span>
            &copy; Copyright {currentYear} | <span className="font-semibold">Mission75</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
