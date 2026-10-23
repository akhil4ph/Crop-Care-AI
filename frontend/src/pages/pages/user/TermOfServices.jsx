
import Navbar from '../../../components/layouts/Navbar';
import Footer from '../../../components/layouts/Footer';

const Term_Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-[#10b981] selection:text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-500 text-lg">Last Updated: October 2026</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sticky Sidebar */}
          <aside className="lg:w-1/4 hidden lg:block">
            <div className="sticky top-28 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Table of Contents</h3>
              <ul className="space-y-3 text-sm text-gray-600 font-medium">
                <li><a href="#acceptance" className="hover:text-[#10b981] transition">1. Acceptance of Terms</a></li>
                <li><a href="#services" className="hover:text-[#10b981] transition">2. Description of Service</a></li>
                <li><a href="#user-obligations" className="hover:text-[#10b981] transition">3. User Obligations</a></li>
                <li><a href="#disclaimer" className="hover:text-[#10b981] transition">4. Medical / Agronomy Disclaimer</a></li>
                <li><a href="#intellectual" className="hover:text-[#10b981] transition">5. Intellectual Property</a></li>
                <li><a href="#limitation" className="hover:text-[#10b981] transition">6. Limitation of Liability</a></li>
              </ul>
            </div>
          </aside>

          {/* Content Area */}
          <div className="lg:w-3/4 bg-white p-8 lg:p-12 rounded-3xl shadow-sm border border-gray-100 text-gray-700 leading-relaxed">
            
            <p className="mb-8">
              Welcome to Crop-Care AI. Please read these Terms of Service carefully before using our platform. By accessing or using our website, mobile application, or API services, you agree to be bound by these terms.
            </p>

            <section id="acceptance" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p>
                By creating an account, uploading images, or otherwise using Crop-Care AI, you agree to comply with these terms. If you do not agree with any part of these terms, you may not use our services. We reserve the right to update these terms at any time without prior notice.
              </p>
            </section>

            <section id="services" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
              <p>
                Crop-Care AI provides an artificial intelligence-based image scanning service designed to identify potential plant diseases, pests, and nutrient deficiencies. We offer treatment recommendations based on standard agricultural practices.
              </p>
            </section>

            <section id="user-obligations" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Obligations</h2>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>You must provide accurate and complete information during registration.</li>
                <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                <li>You agree not to upload explicit, illegal, or completely irrelevant images (e.g., non-plant images meant to test or break the system).</li>
              </ul>
            </section>

            <section id="disclaimer" className="mb-10 p-6 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
              <h2 className="text-xl font-bold text-[#064e3b] mb-3">4. Agronomy & Accuracy Disclaimer</h2>
              <p className="text-sm">
                <strong>CRITICAL NOTICE:</strong> While our AI model achieves high accuracy rates, it is an informational tool, NOT a definitive diagnostic service. The recommendations provided by Crop-Care AI (including pesticide/fungicide usage and dosage) should be verified with a local certified agronomist or agricultural extension office before application. We are not liable for crop loss, chemical damage, or reduced yield resulting from reliance solely on our AI predictions.
              </p>
            </section>

            <section id="intellectual" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
              <p>
                The Crop-Care AI name, logos, algorithms, and software design are the exclusive property of Crop-Care AI. By uploading photos, you grant us a non-exclusive, anonymized right to use those images to further train and improve our machine learning models.
              </p>
            </section>

            <section id="limitation" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
              <p>
                In no event shall Crop-Care AI, its developers, or partners be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, crops, or goodwill, arising from your use of the service.
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Term_Services;