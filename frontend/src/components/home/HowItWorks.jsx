

const HowItWorks = () => {
  return (
    <div className="bg-[#064e3b] py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">How Disease Detection Works</h2>
          <p className="text-[#a7f3d0] text-lg max-w-2xl mx-auto">
            Advanced AI-powered identification in three simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 text-center relative">
          {/* Connector Line (visible only on desktop) */}
          <div className="hidden md:block absolute top-8 left-[15%] w-[70%] h-0.5 bg-[#047857] z-0"></div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-[#10b981] rounded-full flex items-center justify-center text-2xl font-bold border-4 border-[#064e3b] shadow-lg mb-6">1</div>
            <h3 className="text-xl font-bold mb-3">Capture Image</h3>
            <p className="text-gray-300">Take clear photos of suspected diseases or pests on your crops using any smartphone.</p>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-[#10b981] rounded-full flex items-center justify-center text-2xl font-bold border-4 border-[#064e3b] shadow-lg mb-6">2</div>
            <h3 className="text-xl font-bold mb-3">AI Analysis</h3>
            <p className="text-gray-300">Our computer vision AI analyzes the image and identifies the exact pathogen instantly.</p>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-[#10b981] rounded-full flex items-center justify-center text-2xl font-bold border-4 border-[#064e3b] shadow-lg mb-6">3</div>
            <h3 className="text-xl font-bold mb-3">Action Plan</h3>
            <p className="text-gray-300">Receive precise treatment recommendations, dosage, and prevention strategies.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;