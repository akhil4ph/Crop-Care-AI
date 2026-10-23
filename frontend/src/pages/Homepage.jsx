
import Navbar from '../components/layouts/Navbar';
import Hero from '../components/home/HeroSection';
import Features from '../components/home/Features';
import HowItWorks from '../components/home/HowItWorks';
import Footer from '../components/layouts/Footer';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#10b981] selection:text-white">
      {/* Top Navigation */}
      <Navbar />

      <main>
        {/* Main Hero Banner with Upload functionality UI */}
        <Hero />

        {/* Feature Highlights section */}
        <Features />

        {/* 3 Step Process section */}
        <HowItWorks />
      </main>

      {/* Modern Footer */}
      <Footer />
    </div>
  );
};

export default Homepage;