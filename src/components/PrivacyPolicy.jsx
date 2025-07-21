import React, { useState, useEffect } from 'react';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  // Table of contents data
  const sections = [
    { id: 'introduction', title: 'Introduction', number: '' },
    { id: 'section1', title: 'Information We Collect', number: '1.' },
    { id: 'section1-1', title: 'Personal Information', number: '1.1' },
    { id: 'section1-2', title: 'Usage Data', number: '1.2' },
    { id: 'section1-3', title: 'Location Data', number: '1.3' },
    { id: 'section1-4', title: 'Device Information', number: '1.4' },
    { id: 'section2', title: 'How We Use Your Information', number: '2.' },
    { id: 'section2-1', title: 'Service Provision', number: '2.1' },
    { id: 'section2-2', title: 'Safety and Security', number: '2.2' },
    { id: 'section2-3', title: 'Communication', number: '2.3' },
    { id: 'section2-4', title: 'Research and Development', number: '2.4' },
    { id: 'section3', title: 'How We Share Your Information', number: '3.' },
    { id: 'section4', title: 'Your Privacy Rights', number: '4.' },
    { id: 'section5', title: 'Data Retention', number: '5.' },
    { id: 'section6', title: 'Data Security', number: '6.' },
    { id: 'section7', title: 'Location Data Use', number: '7.' },
    { id: 'section8', title: 'Do Not Track (DNT) Signals', number: '8.' },
    { id: 'section9', title: 'Background Checks', number: '9.' },
    { id: 'section10', title: 'Updates to This Policy', number: '10.' },
    { id: 'section11', title: 'Accessibility', number: '11.' },
    { id: 'section12', title: 'Contact Us', number: '12.' }
  ];

 // Add this useEffect for hash scrolling
useEffect(() => {
  const hash = window.location.hash;
  if (hash) {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}, []);

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for better UX
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Generate floating elements for background animation
  const generateFloatingElements = () => {
    const elements = [];
    for (let i = 0; i < 8; i++) {
      elements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 4,
        duration: Math.random() * 3 + 4,
      });
    }
    return elements;
  };

  const floatingElements = generateFloatingElements();

  return (
   <div className="min-h-screen relative bg-gradient-to-br  from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Animated gradient overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(ellipse at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)
            `,
            animation: 'gradient-shift 8s ease-in-out infinite alternate'
          }}
        />

        {/* Floating elements */}
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size}px`,
              height: `${element.size}px`,
              animation: `float ${element.duration}s ease-in-out infinite`,
              animationDelay: `${element.delay}s`,
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.05)'
            }}
          />
        ))}

        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Content */}
    <div className="relative z-10 min-h-screen pt-20">

        {/* Header */}
        <div className="text-center pt-8 pb-6 px-4">
          {/* <button className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2 mx-auto mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </button> */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="gradient-text">Privacy Policy</span>
          </h1>
          <p className="text-white/70 text-lg">Seat Ridez Terms & Conditions</p>
          <p className="text-white/60 text-base mt-2">Effective Date: 2/1/2025</p>
        </div>

        {/* Main Layout with Sidebar */}
        <div className="max-w-7xl mx-auto px-4 pb-12 flex gap-8">
          
          {/* Table of Contents Sidebar */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-8">
              <div 
                className="backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 15px 50px rgba(59, 130, 246, 0.2)'
                }}
              >
                <h3 className="text-lg font-bold text-white mb-4 gradient-text">Table of Contents</h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-300 flex items-center gap-2 ${
                        activeSection === section.id
                          ? 'bg-blue-500/30 text-white border-l-2 border-blue-400'
                          : 'text-white/70 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {section.number && (
                        <span className="text-xs font-mono text-blue-400 min-w-[24px]">
                          {section.number}
                        </span>
                      )}
                      <span className={`${activeSection === section.id ? 'font-medium' : ''}`}>
                        {section.title}
                      </span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Privacy Policy Content */}
          <div className="flex-1 min-w-0">
            <div 
              className="backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                boxShadow: '0 25px 80px rgba(59, 130, 246, 0.2)'
              }}
            >
              <div className="text-white/90 leading-relaxed space-y-8">
                
                {/* Introduction */}
                <div id="introduction">
                  <p className="text-base">
                    At Seat Ridez Inc. ("Seat Ridez," "we," "our," or "us"), we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, share, and secure your information when you use our platform. By using Seat Ridez, you agree to the practices described in this Privacy Policy and the Terms and Conditions.
                  </p>
                </div>

                {/* Section 1 */}
                <section id="section1">
                  <h2 className="text-2xl font-bold text-white mb-4 gradient-text">1. Information We Collect</h2>
                  <p className="mb-4">
                    We collect the following types of information to provide and improve our services:
                  </p>
                </section>

                {/* Section 1.1 */}
                <section id="section1-1">
                  <h3 className="text-xl font-semibold text-white mb-3">1.1 Personal Information</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Information you provide, such as your name, email address, phone number, payment details, and profile photo.</li>
                    <li>Verification data, including your date of birth, driver's license, or government-issued ID, to confirm you meet our age requirement (18+).</li>
                    <li><strong>Driver Verification Data:</strong> If you register as a driver, we collect and store images of your vehicle, license plate, and proof of valid insurance to ensure compliance with platform safety requirements</li>
                  </ul>
                </section>

                {/* Section 1.2 */}
                <section id="section1-2">
                  <h3 className="text-xl font-semibold text-white mb-3">1.2 Usage Data</h3>
                  <p>
                    Data about how you interact with the platform, such as ride history, communication with drivers or riders, preferences, and ratings.
                  </p>
                </section>

                {/* Section 1.3 */}
                <section id="section1-3">
                  <h3 className="text-xl font-semibold text-white mb-3">1.3 Location Data</h3>
                  <p>
                    Precise location data while the app is in use to enable pickups, drop-offs, and route optimization.
                  </p>
                </section>

                {/* Section 1.4 */}
                <section id="section1-4">
                  <h3 className="text-xl font-semibold text-white mb-3">1.4 Device Information</h3>
                  <p>
                    Details about the devices you use to access Seat Ridez, such as hardware models, operating systems, and IP addresses.
                  </p>
                </section>

                {/* Section 2 */}
                <section id="section2">
                  <h2 className="text-2xl font-bold text-white mb-4 gradient-text">2. How We Use Your Information</h2>
                  <p className="mb-4">
                    We use your information for the following purposes:
                  </p>
                </section>

                {/* Section 2.1 */}
                <section id="section2-1">
                  <h3 className="text-xl font-semibold text-white mb-3">2.1 Service Provision</h3>
                  <p>
                    To connect riders with drivers, process payments, and provide a safe, efficient ride-sharing experience.
                  </p>
                </section>

                {/* Section 2.2 */}
                <section id="section2-2">
                  <h3 className="text-xl font-semibold text-white mb-3">2.2 Safety and Security</h3>
                  <p>
                    To verify user identities, prevent fraud, and implement safety features like trip tracking and incident reporting.
                  </p>
                </section>

                {/* Section 2.3 */}
                <section id="section2-3">
                  <h3 className="text-xl font-semibold text-white mb-3">2.3 Communication</h3>
                  <p className="mb-4">
                    We send One-Time Passcodes (OTPs) via SMS for account verification, password recovery, and security confirmations.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>One-Time Passcodes (OTPs) for account verification and password/email recovery.</li>
                    <li>Security alerts regarding suspicious login activity.</li>
                    <li>Ride confirmations and updates about driver arrival times and trip status.</li>
                    <li>Service notifications about policy changes, account updates, and customer support communications.</li>
                    <li>Promotional messages (only sent to users who explicitly opt in).</li>
                  </ul>
                  
                  <h4 className="text-lg font-medium text-white mb-2">Opt-in & Opt-out Policy:</h4>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Users may opt in during account registration.</li>
                    <li>You may opt out anytime by replying STOP to SMS messages.</li>
                    <li>Opting out does not restrict your ability to use Seat Ridez.</li>
                  </ul>

                  <p><strong>Message & Data Rates:</strong> Standard SMS and data rates may apply based on your mobile carrier.</p>
                </section>

                {/* Section 2.4 */}
                <section id="section2-4">
                  <h3 className="text-xl font-semibold text-white mb-3">2.4 Research and Development</h3>
                  <p>
                    To analyze user behavior, improve platform performance, and develop new features.
                  </p>
                </section>

                {/* Section 3 */}
                <section id="section3">
                  <h2 className="text-2xl font-bold text-white mb-4 gradient-text">3. How We Share Your Information</h2>
                  <p className="mb-4">
                    We share user information only as necessary to operate our services:
                  </p>

                  <h3 className="text-xl font-semibold text-white mb-3">3.1 With Service Providers</h3>
                  <p className="mb-4">
                    Data may be shared with third-party vendors, such as payment processors, identity verification services, and SMS messaging providers.
                  </p>

                  <h3 className="text-xl font-semibold text-white mb-3">3.2 With Other Users</h3>
                  <p className="mb-4">
                    Drivers and riders share limited details, such as names, profile photos, and vehicle information, to facilitate the ride.
                  </p>

                  <h3 className="text-xl font-semibold text-white mb-3">3.3 For Legal Reasons</h3>
                  <p>
                    We may disclose information to comply with legal obligations, enforce our Terms and Conditions, or protect the rights and safety of our users.
                  </p>
                </section>

                {/* Section 4 */}
                <section id="section4">
                  <h2 className="text-2xl font-bold text-white mb-4 gradient-text">4. Your Privacy Rights</h2>
                  <p className="mb-4">
                    Under applicable U.S. privacy laws, including the California Consumer Privacy Act (CCPA), you have the following rights:
                  </p>

                  <h3 className="text-xl font-semibold text-white mb-3">4.1 Right to Access</h3>
                  <p className="mb-4">
                    You can request information about the data we collect, use, and share.
                  </p>

                  <h3 className="text-xl font-semibold text-white mb-3">4.2 Right to Delete</h3>
                  <p className="mb-4">
                    Request deletion of your account and data (with exceptions for legal and business obligations).
                  </p>

                  <h3 className="text-xl font-semibold text-white mb-3">4.3 Right to Opt-Out</h3>
                  <p className="mb-4">
                    Seat Ridez does not sell user information. You may opt out of marketing communications at any time.
                  </p>

                  <h3 className="text-xl font-semibold text-white mb-3">4.4 Right to Non-Discrimination</h3>
                  <p>
                    We will not deny services or impose restrictions for exercising your privacy rights.
                  </p>
                </section>

                {/* Section 5 */}
                <section id="section5">
                  <h2 className="text-2xl font-bold text-white mb-4 gradient-text">5. Data Retention</h2>
                  <p className="mb-4">
                    We retain your information only as long as necessary to fulfill our business and legal obligations:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Account Information:</strong> Retained as long as your account is active. Deleted within 90 days of account closure.</li>
                    <li><strong>Transaction Data:</strong> Retained for 3-7 years for compliance and audit purposes.</li>
                    <li><strong>SMS & Communication Data:</strong> Stored securely for account verification and security tracking but can be deleted upon request</li>
                    <li><strong>Marketing Data:</strong> Retained for up to 2 years, unless you opt out earlier.</li>
                  </ul>
                </section>

                {/* Section 6 */}
                <section id="section6">
                  <h2 className="text-2xl font-bold text-white mb-4 gradient-text">6. Data Security</h2>
                  <p className="mb-4">
                    We implement security measures to protect your data:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Encryption:</strong> Sensitive information like payment details is encrypted.</li>
                    <li><strong>Secure Storage:</strong> Data is stored in secure systems with limited access.</li>
                    <li><strong>Regular Audits:</strong> We regularly review and update our security practices.</li>
                  </ul>
                  <p>
                    Despite these measures, no system is completely secure. By using Seat Ridez, you acknowledge and accept the risks of data transmission.
                  </p>
                </section>

                {/* Section 7 */}
                <section id="section7">
                  <h2 className="text-2xl font-bold text-white mb-4 gradient-text">7. Location Data Use</h2>
                  <p className="mb-4">
                    Seat Ridez uses precise location data to provide accurate and efficient services, including enabling passengers and drivers to locate one another, optimize travel routes, and ensure timely pickups and drop-offs.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Collection:</strong> Location data is collected only during active use of the app.</li>
                    <li><strong>Storage:</strong> This data is stored securely and is anonymized or deleted after limited post-ride analysis.</li>
                    <li><strong>User Control:</strong> Users can manage location-sharing permissions through their device settings.</li>
                  </ul>
                  <p>
                    We do not share location data with third parties except as necessary to provide our services or comply with legal obligations.
                  </p>
                </section>

                {/* Section 8 */}
                <section id="section8">
                  <h2 className="text-2xl font-bold text-white mb-4 gradient-text">8. Do Not Track (DNT) Signals</h2>
                  <p>
                    We do not currently respond to Do Not Track (DNT) signals because no industry standard has been established. However, users can manage their privacy preferences through the app settings or by contacting Seat Ridez support.
                  </p>
                </section>

                {/* Section 9 */}
                <section id="section9">
                  <h2 className="text-2xl font-bold text-white mb-4 gradient-text">9. Background Checks and Safety Measures</h2>
                  <p className="mb-4">
                    To ensure the safety and security of our users, Seat Ridez may conduct background checks on drivers and, where applicable, riders.
                  </p>

                  <h3 className="text-xl font-semibold text-white mb-3">9.1 What Information Is Used</h3>
                  <p className="mb-4">
                    When conducting background checks, we may collect additional personal information, such as government-issued identification, driving history, and relevant records.
                  </p>

                  <h3 className="text-xl font-semibold text-white mb-3">9.2 Third-Party Services</h3>
                  <p className="mb-4">
                    Background checks may be conducted by third-party service providers under strict confidentiality agreements.
                  </p>

                  <h3 className="text-xl font-semibold text-white mb-3">9.3 Purpose</h3>
                  <p className="mb-4">
                    The information collected during background checks is used solely to verify compliance with our safety requirements and improve trust within our platform.
                  </p>

                  <h3 className="text-xl font-semibold text-white mb-3">9.4 User Acknowledgment</h3>
                  <p>
                    By using our platform, you acknowledge and consent to the collection and use of this information for the purpose of background checks.
                  </p>
                </section>

                {/* Section 10 */}
                <section id="section10">
                  <h2 className="text-2xl font-bold text-white mb-4 gradient-text">10. Updates to This Policy</h2>
                  <p className="mb-4">
                    We may update this Privacy Policy to reflect changes in our practices or legal requirements. Significant updates will be communicated via email or in-app notifications. The updated policy will include a new "Effective Date" at the top.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Email notifications</li>
                    <li>In-app alerts</li>
                    <li>Website announcements</li>
                  </ul>
                  <p>
                    The revised policy will take effect 15 days after notification. Continued use of Seat Ridez implies acceptance of changes.
                  </p>
                </section>

                {/* Section 11 */}
                <section id="section11">
                  <h2 className="text-2xl font-bold text-white mb-4 gradient-text">11. Accessibility</h2>
                  <p className="mb-4">
                    Seat Ridez is committed to making our Privacy Policy accessible to all users. While alternative formats are not yet available, we plan to implement accessibility features in future updates. If you need assistance with this Privacy Policy, please contact
                  </p>
                  <p>
                    Email: support@seatridez.com.
                  </p>
                </section>

                {/* Section 12 */}
                <section id="section12">
                  <h2 className="text-2xl font-bold text-white mb-4 gradient-text">12. Contact Us</h2>
                  <p className="mb-4">
                    If you have questions about this Privacy Policy or wish to exercise your privacy rights, you can contact us:
                  </p>
                  <p>
                    Email: support@seatridez.com
                  </p>
                </section>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile TOC Button */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <button 
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
          onClick={() => {
            // Simple mobile menu implementation
            const currentIndex = sections.findIndex(s => s.id === activeSection);
            const nextIndex = (currentIndex + 1) % sections.length;
            scrollToSection(sections[nextIndex].id);
          }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <style jsx>{`
        .gradient-text {
          background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 50%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 3s ease-in-out infinite alternate;
        }

        @keyframes gradient-shift {
          0% { 
            background-position: 0% 50%;
            filter: hue-rotate(0deg);
          }
          50% { 
            background-position: 100% 50%;
            filter: hue-rotate(180deg);
          }
          100% { 
            background-position: 0% 50%;
            filter: hue-rotate(360deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
      `}</style>
    </div>
  );
};

export default PrivacyPolicy;