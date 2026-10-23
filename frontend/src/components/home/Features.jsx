
import { ScanSearch, Bug, Activity, BarChart3 } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <ScanSearch className="w-8 h-8 text-white" />,
      title: "AI Crop Scanning",
      desc: "Instantly diagnose 200+ plant diseases with advanced computer vision algorithms."
    },
    {
      icon: <Bug className="w-8 h-8 text-white" />,
      title: "Pest Detection",
      desc: "Identify beetles, aphids, caterpillars, and 500+ insect species affecting yields."
    },
    {
      icon: <Activity className="w-8 h-8 text-white" />,
      title: "Crop Doctor AI",
      desc: "Get targeted treatment recommendations, dosage, and real-time intervention plans."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: "Analytics Dashboard",
      desc: "Track disease history, monitor crop health trends, and optimize your farming strategy."
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            Advanced Technology for Modern Farming
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to monitor crop health, prevent outbreaks, and maximize your yield in one comprehensive platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div key={index} className="bg-[#f8fafc] rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition group">
              <div className="bg-[#064e3b] w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#10b981] transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;