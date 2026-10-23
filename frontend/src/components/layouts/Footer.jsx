
import { Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="bg-[#064e3b] p-2 rounded-lg">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="font-extrabold text-xl text-gray-900">Crop-Care AI</span>
            </Link>
            <p className="text-gray-500 mb-6">
              Professional agricultural tools for disease diagnosis and crop health management.
            </p>
            <p className="text-gray-800 font-semibold">
              support@cropcareai.com<br/>
              +91 (1800) AGRI-CARE
            </p>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-5">Products</h4>
            <ul className="space-y-3 text-gray-500">
              <li><Link to="#" className="hover:text-[#10b981] transition">AI Crop Scanning</Link></li>
              <li><Link to="#" className="hover:text-[#10b981] transition">Pest Detection</Link></li>
              <li><Link to="#" className="hover:text-[#10b981] transition">Analytics Dashboard</Link></li>
              <li><Link to="#" className="hover:text-[#10b981] transition">Mobile App</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-5">Company</h4>
            <ul className="space-y-3 text-gray-500">
              <li><Link to="/AboutUs" className="hover:text-[#10b981] transition">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-[#10b981] transition">Knowledge Hub</Link></li>
              <li><Link to="/ContactUs" className="hover:text-[#10b981] transition">Help Center</Link></li>
              <li><Link to="#" className="hover:text-[#10b981] transition">Community Forum</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-5">Legal</h4>
            <ul className="space-y-3 text-gray-500">
              <li><Link to="/PrivacyPolicy" className="hover:text-[#10b981] transition">Privacy Policy</Link></li>
              <li><Link to="/Term_Services" className="hover:text-[#10b981] transition">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Crop-Care AI. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-gray-900">Twitter</Link>
            <Link to="#" className="hover:text-gray-900">LinkedIn</Link>
            <Link to="#" className="hover:text-gray-900">Facebook</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;