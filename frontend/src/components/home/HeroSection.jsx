import { Camera, CheckCircle2, Zap, WifiOff, AlertTriangle } from 'lucide-react';
import heroBg from '../../assets/hero/hero.webp'; 
import posterImg from '../../assets/hero/poster.webp'; 

const Hero = () => {
  return (
    <div 
      className="relative min-h-[calc(100vh-80px)] flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <style>
        {`
          /* Scanner Line Animation */
          @keyframes scanline {
            0% { top: 0%; }
            50% { top: 97%; }
            100% { top: 0%; }
          }
          .animate-scanline {
            animation: scanline 3s linear infinite;
          }

          /* Button Pulse Glow Animation */
          @keyframes pulse-btn {
            0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
            70% { box-shadow: 0 0 0 15px rgba(16, 185, 129, 0); }
            100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
          }
          .animate-pulse-btn {
            animation: pulse-btn 2s infinite;
          }
        `}
      </style>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 py-12">
        
        {/* ================= LEFT SIDE CONTENT ================= */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left pt-10 lg:pt-0">
          
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-2">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 overflow-hidden">
                <img src="https://i.pravatar.cc/100?img=33" alt="user" className="w-full h-full object-cover"/>
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-400 overflow-hidden">
                <img src="https://i.pravatar.cc/100?img=11" alt="user" className="w-full h-full object-cover"/>
              </div>
            </div>
            <span className="text-white font-semibold text-sm sm:text-base drop-shadow-md">
              Trusted by 10,000+ farmers worldwide
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            Professional Crop Disease Detection with 98% Accuracy
          </h1>
          
          <p className="text-lg text-gray-100 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium drop-shadow">
            Specialized AI platform for identifying 200+ plant diseases and pests. Get instant diagnosis and treatment recommendations from professional-grade diagnostic technology.
          </p>
          
          {/* UPDATED BUTTONS: Added hover:-translate-y-1, hover:shadow-2xl and pulse animation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
            <button 
              type="button" 
              className="animate-pulse-btn bg-[#10b981] text-white px-8 py-3.5 rounded-lg font-bold text-lg hover:bg-[#0d9b6c] hover:-translate-y-1 hover:shadow-2xl active:scale-95 transition-all duration-300 cursor-pointer"
            >
              Detect Disease Now
            </button>
            <button 
              type="button" 
              className="bg-white text-[#064e3b] px-8 py-3.5 rounded-lg font-bold text-lg hover:bg-gray-100 hover:-translate-y-1 hover:shadow-xl active:scale-95 transition-all duration-300 cursor-pointer"
            >
              Professional Tools
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-black/20 backdrop-blur-sm text-white text-sm font-medium">
              <CheckCircle2 className="w-4 h-4" /> 98% Accuracy
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-black/20 backdrop-blur-sm text-white text-sm font-medium">
              <Zap className="w-4 h-4" /> Instant Results
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-black/20 backdrop-blur-sm text-white text-sm font-medium">
              <WifiOff className="w-4 h-4" /> Offline Capable
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE FLOATING CARD ================= */}
        <div className="lg:w-[45%] w-full max-w-md mx-auto relative z-20">
          
          <div className="bg-white rounded-2xl p-6 shadow-2xl border border-gray-100">
            
            <div className="text-center mb-5">
              <h3 className="text-xl font-bold text-gray-900">Scan Your Crops</h3>
              <p className="text-sm text-gray-500 mt-1">Point your camera at leaves or fruit</p>
            </div>

            <div className="relative rounded-xl overflow-hidden mb-5">
              <img 
                src={posterImg} 
                alt="Scanning crops" 
                className="w-full h-48 sm:h-56 object-cover brightness-90"
              />
              
              {/* Green Scanner Line */}
              <div className="absolute left-0 w-full h-[3px] bg-[#10b981] shadow-[0_0_12px_#10b981] z-20 animate-scanline"></div>
              
              <div className="absolute inset-4 border-2 border-white/40 rounded-lg pointer-events-none z-10">
                <div className="absolute -top-1 -left-1 w-6 h-6 border-t-4 border-l-4 border-white rounded-tl"></div>
                <div className="absolute -top-1 -right-1 w-6 h-6 border-t-4 border-r-4 border-white rounded-tr"></div>
                <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-4 border-l-4 border-white rounded-bl"></div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-4 border-r-4 border-white rounded-br"></div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md border-2 border-white rounded-full flex items-center justify-center shadow-lg">
                  <Camera className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-[#fff1f2] border border-red-100 rounded-xl p-3 mb-4 flex flex-col relative">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                <span className="font-bold text-red-700 text-sm">Early Blight Detected</span>
              </div>
              <div className="text-xs text-red-600 font-semibold px-7 mt-0.5">
                Confidence: 94%
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-red-400"></div>
            </div>

            {/* UPDATED: Hover float added to treatment button too */}
            <button 
              type="button"
              className="w-full bg-[#064e3b] text-white py-3 rounded-xl text-sm font-bold shadow-md hover:bg-[#04362a] hover:-translate-y-1 hover:shadow-xl active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <CheckCircle2 className="w-5 h-5" /> View Treatment Options
            </button>
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;