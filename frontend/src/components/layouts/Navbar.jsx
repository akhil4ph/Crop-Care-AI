import  { useState } from 'react';
import { Leaf, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-[#064e3b] p-2 rounded-xl">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="font-extrabold text-2xl text-gray-900 tracking-tight">
              Crop-Care <span className="text-[#10b981]">AI</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/MainCategory" className="text-gray-600 font-medium hover:text-[#10b981] transition">Disease ID</Link>
            <Link to="/blog" className="text-gray-600 font-medium hover:text-[#10b981] transition">Articles</Link>
            <Link to="/ContactUs" className="text-gray-600 font-medium hover:text-[#10b981] transition">Contact</Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="bg-[#064e3b] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#04362a] transition shadow-md">
              Log In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;