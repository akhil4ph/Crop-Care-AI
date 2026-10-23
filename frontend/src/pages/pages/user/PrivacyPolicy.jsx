
import Navbar from '../../../components/layouts/Navbar';
import Footer from '../../../components/layouts/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-[#10b981] selection:text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-500 text-lg">We value your privacy and farm data security.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sticky Sidebar */}
          <aside className="lg:w-1/4 hidden lg:block">
            <div className="sticky top-28 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Privacy Topics</h3>
              <ul className="space-y-3 text-sm text-gray-600 font-medium">
                <li><a href="#information" className="hover:text-[#10b981] transition">1. Information We Collect</a></li>
                <li><a href="#how-we-use" className="hover:text-[#10b981] transition">2. How We Use Your Data</a></li>
                <li><a href="#sharing" className="hover:text-[#10b981] transition">3. Data Sharing & Disclosure</a></li>
                <li><a href="#security" className="hover:text-[#10b981] transition">4. Data Security</a></li>
                <li><a href="#rights" className="hover:text-[#10b981] transition">5. Your Rights</a></li>
                <li><a href="#contact" className="hover:text-[#10b981] transition">6. Contact Us</a></li>
              </ul>
            </div>
          </aside>

          {/* Content Area */}
          <div className="lg:w-3/4 bg-white p-8 lg:p-12 rounded-3xl shadow-sm border border-gray-100 text-gray-700 leading-relaxed">
            
            <p className="mb-8 font-medium">
              At Crop-Care AI, we understand that farm data and personal information are sensitive. This Privacy Policy explains how we collect, use, and safeguard your data when you use our platform.
            </p>

            <section id="information" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Personal Details:</strong> Name, email address, and phone number provided during signup.</li>
                <li><strong>Image Data:</strong> Photos of crops, leaves, and fields that you upload for analysis.</li>
                <li><strong>Usage Data:</strong> Information about how you navigate the app, including IP address, device type, and browser details.</li>
                <li><strong>Location Data:</strong> Coarse location data (if permitted) to provide region-specific agricultural advice.</li>
              </ul>
            </section>

            <section id="how-we-use" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Data</h2>
              <p className="mb-3">We use the collected information to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Provide accurate disease detection and treatment recommendations.</li>
                <li>Maintain a history of your past scans in your dashboard.</li>
                <li>Anonymize and aggregate crop images to train and improve our AI machine learning models.</li>
                <li>Send important account notifications, security alerts, and app updates.</li>
              </ul>
            </section>

            <section id="sharing" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Sharing & Disclosure</h2>
              <p>
                We do <strong>not</strong> sell your personal data to third parties. We may share anonymized, aggregated agricultural data (e.g., disease outbreak trends in a specific region) with research institutions, government agricultural bodies, or partners. We only share personal data when legally required by law enforcement.
              </p>
            </section>

            <section id="security" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
              <p>
                We implement industry-standard encryption (SSL/TLS) for data transmission. Your personal data is stored in secure cloud environments. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section id="rights" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Privacy Rights</h2>
              <p>
                Depending on your location, you have the right to request access to your data, ask for corrections, or request the deletion of your account and associated personal data. You can manage these preferences directly from your User Dashboard & Settings.
              </p>
            </section>

            <section id="contact" className="mb-10 p-6 bg-[#f0fdf4] rounded-xl border border-[#bbf7d0]">
              <h2 className="text-xl font-bold text-[#064e3b] mb-2">6. Contact Us</h2>
              <p className="text-sm text-[#064e3b]">
                If you have any questions or concerns regarding this Privacy Policy or how your data is handled, please reach out to our Data Protection Officer at: <br/>
                <strong>Email:</strong> privacy@cropcareai.com <br/>
                <strong>Phone:</strong> +91 (1800) AGRI-CARE
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;