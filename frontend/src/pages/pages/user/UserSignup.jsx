import  { useState } from 'react';
import { Leaf, User, Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const UserSignup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex bg-white font-sans">
      
      {/* Left Side - Visual/Branding (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#064e3b] relative flex-col justify-center px-16 overflow-hidden">
        {/* Decorative background circles */}
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-[#10b981] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-[#34d399] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
        <div className="relative z-10 text-white">
          <div className="bg-white/10 p-3 rounded-xl inline-block mb-6 backdrop-blur-sm border border-white/20">
            <Leaf className="w-10 h-10 text-[#10b981]" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
            Join the future of <span className="text-[#10b981]">smart farming.</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-md leading-relaxed">
            Create an account to detect crop diseases instantly, get expert treatment plans, and secure your harvest with AI.
          </p>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 relative overflow-y-auto">
        
        {/* Mobile Logo (Visible only on small screens) */}
        <div className="absolute top-8 left-8 lg:hidden flex items-center gap-2">
          <div className="bg-[#064e3b] p-1.5 rounded-lg">
            <Leaf className="w-5 h-5 text-white" />
          </div>
          <span className="font-extrabold text-xl text-gray-900">Crop-Care AI</span>
        </div>

        <div className="w-full max-w-md mt-12 lg:mt-0 py-8">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Create an Account</h2>
            <p className="text-gray-500">Sign up to get started with your digital crop doctor.</p>
          </div>

          <form className="space-y-5">
            {/* Full Name Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="name">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="name"
                  type="text"
                  className="block w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="email">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  className="block w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-all"
                  placeholder="farmer@example.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="block w-full pl-11 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-all"
                  placeholder="Create a strong password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-[#10b981] transition-colors cursor-pointer"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start mt-4">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  className="h-4 w-4 text-[#10b981] focus:ring-[#10b981] border-gray-300 rounded cursor-pointer mt-1"
                />
              </div>
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-600 cursor-pointer">
                I agree to the{' '}
                {/* Updated Links to include hover:underline so they look clickable */}
                <Link to="/terms" className="text-[#10b981] hover:text-[#064e3b] hover:underline font-semibold transition-colors">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-[#10b981] hover:text-[#064e3b] hover:underline font-semibold transition-colors">
                  Privacy Policy
                </Link>.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex justify-center items-center gap-2 py-3.5 px-4 border border-transparent rounded-xl shadow-sm text-base font-bold text-white bg-[#064e3b] hover:bg-[#04362a] active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#10b981] transition-all mt-6 cursor-pointer"
            >
              Create Account
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="font-bold text-[#10b981] hover:text-[#064e3b] hover:underline transition-colors">
                Sign In here
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UserSignup;