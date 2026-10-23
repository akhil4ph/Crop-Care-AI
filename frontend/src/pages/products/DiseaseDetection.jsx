import  { useState } from 'react';
import { UploadCloud, Camera, Loader2, AlertTriangle, CheckCircle2, Pill, Activity, Leaf } from 'lucide-react';
import Navbar from '../../components/layouts/Navbar';
import Footer from '../../components/layouts/Footer';

const DiseaseDetection = () => {
  const [image, setImage] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState(null);

  // Mock function to simulate AI scanning process
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setIsScanning(true);
      
      // Simulate AI processing time (3 seconds)
      setTimeout(() => {
        setIsScanning(false);
        setResult({
          diseaseName: "Tomato Early Blight",
          confidence: 94,
          status: "infected",
          treatment: {
            medicine: "Mancozeb 75% WP",
            dosage: "Mix 2-2.5 grams in 1 Litre of water.",
            application: "Spray evenly on affected leaves during morning or evening."
          }
        });
      }, 3000);
    }
  };

  const resetScan = () => {
    setImage(null);
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans selection:bg-[#10b981] selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">AI Crop Disease Scanner</h1>
          <p className="text-gray-500">Upload a clear photo of the affected leaf for instant diagnosis.</p>
        </div>

        {/* State 1: Upload Interface */}
        {!image && !isScanning && (
          <div className="w-full max-w-2xl bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
            <label className="border-2 border-dashed border-[#10b981] bg-[#ecfdf5] rounded-2xl p-16 flex flex-col items-center text-center cursor-pointer hover:bg-[#d1fae5] transition w-full h-80 justify-center">
              <input type="file" className="hidden" accept="image/*" onChange={handleUpload} />
              <div className="bg-white p-4 rounded-full shadow-md mb-6">
                <UploadCloud className="w-12 h-12 text-[#10b981]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Upload or Take Photo</h3>
              <p className="text-gray-500 mb-6">Click to browse or drag and drop your image here</p>
              <div className="bg-[#064e3b] text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg">
                <Camera className="w-5 h-5" />
                Open Camera / Gallery
              </div>
            </label>
          </div>
        )}

        {/* State 2: Processing Overlay / Loading State[cite: 2] */}
        {isScanning && (
          <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
            <div className="relative mb-8">
              {/* Image Preview with Scanning Animation */}
              <img src={image} alt="Uploading" className="w-48 h-48 object-cover rounded-2xl opacity-70" />
              <div className="absolute top-0 left-0 w-full h-2 bg-[#10b981] shadow-[0_0_15px_#10b981] animate-[scan_2s_ease-in-out_infinite]"></div>
            </div>
            <Loader2 className="w-10 h-10 text-[#10b981] animate-spin mb-4" />
            <h3 className="text-xl font-bold text-gray-900">Scanning Image...</h3>
            <p className="text-gray-500 mt-2">AI is analyzing your crop... please wait.</p>
          </div>
        )}

        {/* State 3: Result & Recommendation Screen[cite: 2] */}
        {result && !isScanning && (
          <div className="w-full max-w-4xl bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden flex flex-col md:flex-row">
            
            {/* Left Image Preview */}
            <div className="md:w-2/5 bg-gray-900 relative">
              <img src={image} alt="Scanned Leaf" className="w-full h-full object-cover opacity-90 min-h-[300px]" />
              <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 shadow-md">
                <AlertTriangle className="w-4 h-4" /> Disease Detected
              </div>
            </div>

            {/* Right Results & Recommendation Box */}
            <div className="md:w-3/5 p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-1">{result.diseaseName}</h2>
                  <div className="inline-flex items-center gap-1 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                    <Activity className="w-4 h-4" /> {result.confidence}% Confidence Match
                  </div>
                </div>
              </div>

              {/* Recommendation Box[cite: 2] */}
              <div className="bg-[#f8fafc] border border-gray-200 rounded-2xl p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-4 border-b pb-3">
                  <Pill className="w-5 h-5 text-[#10b981]" /> Treatment Plan
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-bold text-gray-500 uppercase tracking-wider block mb-1">Medicine</span>
                    <p className="text-gray-900 font-semibold">{result.treatment.medicine}</p>
                  </div>
                  <div>
                    <span className="text-sm font-bold text-gray-500 uppercase tracking-wider block mb-1">Dosage</span>
                    <p className="text-gray-900 font-semibold">{result.treatment.dosage}</p>
                  </div>
                  <div>
                    <span className="text-sm font-bold text-gray-500 uppercase tracking-wider block mb-1">Application</span>
                    <p className="text-gray-900 font-semibold">{result.treatment.application}</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={resetScan}
                className="w-full bg-gray-900 text-white py-3.5 rounded-xl font-bold hover:bg-gray-800 transition"
              >
                Scan Another Crop
              </button>
            </div>
          </div>
        )}

      </main>

      {/* Tailwind Custom Animation for Scanner */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { top: 0; }
          50% { top: 100%; }
          100% { top: 0; }
        }
      `}} />

      <Footer />
    </div>
  );
};

export default DiseaseDetection;