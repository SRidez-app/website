import React, { useState, useEffect } from 'react';

const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  // Table of contents data
  const sections = [
    { id: 'introduction', title: 'Introduction', number: '' },
    { id: 'section1', title: 'Introduction', number: '1.' },
    { id: 'section2', title: 'User Accounts', number: '2.' },
    { id: 'section2-1', title: 'SMS Communications', number: '2.1' },
    { id: 'section3', title: 'Payment Terms', number: '3.' },
    { id: 'section4', title: 'Refunds and Disputes', number: '4.' },
    { id: 'section5', title: 'Background Checks', number: '5.' },
    { id: 'section6', title: 'Limitation of Liability', number: '6.' },
    { id: 'section7', title: 'Arbitration Agreement', number: '7.' },
    { id: 'section8', title: 'Privacy and Data Use', number: '8.' },
    { id: 'section9', title: 'User Conduct', number: '9.' },
    { id: 'section10', title: 'Indemnity Clause', number: '10.' },
    { id: 'section11', title: 'Accessibility & Updates', number: '11.' },
    { id: 'section12', title: 'No Harm Clause', number: '12.' },
    { id: 'section13', title: 'Conclusion', number: '13.' }
  ];

  <div className="px-6 pt-32 pb-16 text-white bg-background min-h-screen">
  <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

  <section id="accounts-payments" className="mb-8">
    <h2 className="text-xl font-semibold">Accounts & Payments</h2>
    <p>...</p>
  </section>

  <section id="safety-security" className="mb-8">
    <h2 className="text-xl font-semibold">Safety & Security</h2>
    <p>...</p>
  </section>

  <section id="legal-compliance" className="mb-8">
    <h2 className="text-xl font-semibold">Legal & Compliance</h2>
    <p>...</p>
  </section>

  <section id="privacy-conduct" className="mb-8">
    <h2 className="text-xl font-semibold">Privacy & User Conduct</h2>
    <p>...</p>
  </section>
</div>

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
          <button className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2 mx-auto mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="gradient-text">Terms & Conditions</span>
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

          {/* Terms Content */}
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
                    Welcome to Seat Ridez Inc. ("Seat Ridez," "we," "our," or "us"). These Terms and Conditions ("Terms") govern your access to and use of the Seat Ridez platform, including our website, mobile application, and related services (collectively, the "Platform"). By creating an account, accessing the Platform, or using any of its features, you agree to these Terms and the Privacy Policy.
                  </p>
                </div>

                {/* Section 1 */}
                <section id="section1">
                  <h2 className="text-2xl font-bold text-white mb-4 gradient-text">1. Introduction</h2>
                  <p className="mb-4">
                    Seat Ridez is a professional service provider offering a mobile application ("Platform") that facilitates connections between users for carpooling. We do not provide transportation services, hire drivers, or own vehicles. All transportation arrangements are made directly between users of the Platform.
                  </p>
                  <p className="mb-2 font-medium">By using Seat Ridez, you agree:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>To these Terms and our Privacy Policy, which outlines how we collect, use, and protect your data. Both documents collectively govern your relationship with Seat Ridez.</li>
                    <li>That you are entering a direct relationship with the other user (driver or passenger) for carpooling services. Seat Ridez acts solely as a neutral intermediary and is not responsible for any incidents, disputes, or liabilities that arise during or after the carpooling arrangement.</li>
                  </ul>
                </section>

                {/* Section 2 */}
                <section id="section2">
                  <h2 className="text-2xl font-bold text-white mb-4 gradient-text">2. User Accounts</h2>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">Account Eligibility</h3>
                  <p className="mb-2">To create and maintain an account on the Platform, you must:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Be at least 18 years old.</li>
                    <li>Provide valid verification, such as a government-issued ID or driver's license, during registration.</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-white mb-3">Account Responsibilities</h3>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Ensure that the information you provide (name, contact details, payment method) is accurate and up-to-date.</li>
                    <li>Maintain the confidentiality of your account credentials.</li>
                    <li>Notify Seat Ridez immediately if you suspect unauthorized access to your account.</li>
                  </ul>
                  <p className="mb-4">
                    Seat Ridez reserves the right to suspend or terminate accounts that violate these requirements or provide false information.
                  </p>
                  <p>
                    Seat Ridez retains user data as outlined in the Privacy Policy. Users may access or request deletion of their data through the process described therein.
                  </p>
                </section>

                {/* Section 2.1 */}
                <section id="section2-1">
                  <h3 className="text-xl font-semibold text-white mb-3">2.1 SMS Communications & OTP Notifications</h3>
                  <p className="mb-4">
                    You may choose to opt-in to receive SMS communications for account-related alerts, updates, and optional promotional messages. Opting out will not limit your ability to use the core features of the Seat Ridez platform
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Consent:</strong> By registering your mobile phone number with Seat Ridez, you may choose to receive SMS messages for account verification, alerts, and updates.</li>
                    <li><strong>Account Recovery (Forgot Password/Email):</strong> If you forget your email or password, we may send a one-time verification code (OTP) via SMS to verify your identity and help you regain access to your account.</li>
                    <li><strong>Opt-out:</strong> SMS consent is optional, and you can opt out anytime by replying STOP.</li>
                    <li><strong>No Restriction:</strong> Opting out will not restrict your ability to use Seat Ridez.</li>
                    <li><strong>Content of SMS:</strong> These messages include One-Time Passcodes (OTPs), security alerts, and other important notifications regarding your account.</li>
                    <li><strong>Charges:</strong> Standard message and data rates may apply.</li>
                    <li><strong>Feature Access:</strong> Opting into SMS communications is optional and will not restrict your ability to use Seat Ridez.</li>
                  </ul>
                </section>

                {/* Section 3 */}
                <section id="section3">
                  <h2 className="text-2xl font-bold text-white mb-4 gradient-text">3. Payment Terms</h2>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">Charges</h3>
                  <p className="mb-2">
                    Seat Ridez facilitates payments between drivers and passengers for carpooling services. Ride charges may include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Base Fare:</strong> A starting fee for all rides.</li>
                    <li><strong>Distance and Time Rates:</strong> Charges based on the length and duration of the ride.</li>
                    <li><strong>Additional Fees:</strong> Cancellation fees, dynamic pricing during peak demand, and location-specific surcharges.</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-white mb-3">Cancellation Fee</h3>
                  <p>A flat $5 cancellation fee will apply for both drivers and passengers if a confirmed ride is canceled without valid reasons.</p>
                </section>

                {/* Section 4 */}
                <section id="section4">
                  <h2 className="text-2xl font-bold text-white mb-4 gradient-text">4. Refunds and Disputes</h2>
                  <p className="mb-4">
                    Under applicable U.S. privacy laws, including the California Consumer Privacy Act (CCPA), you have the following rights:
                  </p>

                  <h3 className="text-xl font-semibold text-white mb-3">Refunds for Cancellations</h3>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Passenger Cancellations:</strong> Only the ride cost (excluding the cancellation fee) will be refunded.</li>
                    <li><strong>Driver Cancellations:</strong> The passenger will receive a full refund of the ride cost but will not be refunded the $5 cancellation fee.</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-white mb-3">Processing Time</h3>
                  <p className="mb-4">Refunds are typically credited within 7–10 business days.</p>

                  <h3 className="text-xl font-semibold text-white mb-3">Payment Disputes</h3>
                  <p>
                    For any disputes regarding payments or cancellation penalties, passengers and drivers can contact Seat Ridez support at support@seatridez.com. Each case will be reviewed individually and resolved within 30 days.
                  </p>
                </section>

                {/* Section 5 */}
                <section id="section5">
                  <h2 className="text-2xl font-bold text-white mb-4 gradient-text">5. Background Checks and Safety Measures</h2>
                  <p className="mb-4">
                    To ensure the safety and security of our users, Seat Ridez may conduct background checks on drivers and, where applicable, passengers.
                  </p>

                  <h3 className="text-xl font-semibold text-white mb-3">What Information Is Used</h3>
                  <p className="mb-4">
                    When conducting background checks, we may collect additional personal information, such as government-issued identification, driving history, and relevant records.
                  </p>

                  <h3 className="text-xl font-semibold text-white mb-3">Third-Party Services</h3>
                  <p className="mb-4">
                    Background checks may be conducted by third-party service providers under strict confidentiality agreements.
                  </p>

                  <h3 className="text-xl font-semibold text-white mb-3">Driver Insurance and Vehicle Verification</h3>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Drivers are required to upload pictures of their valid insurance card and current vehicle photos during registration.</li>
                    <li>These details must be kept up-to-date and renewed periodically to ensure compliance with local laws and transparency for passengers.</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-white mb-3">Driver Insurance Disclaimer</h3>
                  <p className="mb-4">
                    Drivers are solely responsible for maintaining valid insurance as required by local laws. During account creation, drivers must acknowledge this responsibility and agree to maintain compliant insurance at all times.
                  </p>

                  <h3 className="text-xl font-semibold text-white mb-3">Indemnification for Insurance Non-Compliance</h3>
                  <p>
                    Drivers explicitly agree to indemnify, defend, and hold harmless Seat Ridez for any claims, damages, or liabilities arising from their failure to maintain compliant insurance.
                  </p>
                </section>

                {/* Section 6 */}
                <section id="section6">
                  <h2 className="text-2xl font-bold text-white mb-4 gradient-text">6. Limitation of Liability</h2>
                  <p className="mb-4">
                    Seat Ridez maintains general liability insurance, including professional liability coverage, to protect the company and its operations. However, this insurance does not extend to cover:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Injuries, property damage, or losses incurred during rides facilitated through the Platform.</li>
                    <li>Disputes between users (drivers and passengers) regarding payments, behavior, or other issues.</li>
                    <li>Acts of misconduct, negligence, or unlawful behavior by users of the Platform.</li>
                    <li>Mechanical issues or vehicle malfunctions that occur during a ride.</li>
                    <li>Delays, cancellations, or changes to ride arrangements made by users of the Platform.</li>
                    <li>Loss, theft, or damage of personal belongings during a ride.</li>
                    <li>Misrepresentation by drivers or passengers, including vehicle condition, licensing, or personal information.</li>
                    <li>Incidents arising from failure to adhere to local traffic laws or regulations by drivers.</li>
                    <li>Unauthorized use of the Platform or accounts by third parties.</li>
                  </ul>
                  <p className="mb-2">By using the Platform, you acknowledge and agree that:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Seat Ridez is not liable for damages resulting from your use of the Platform, except as required by law.</li>
                    <li>You are solely responsible for ensuring compliance with applicable laws, including maintaining valid insurance and securing your account credentials to prevent unauthorized access.</li>
                  </ul>
                </section>

                {/* Section 7 */}
                <section id="section7">
                  <h2 className="text-2xl font-bold text-white mb-4 gradient-text">7. Arbitration Agreement</h2>
                  <p className="mb-4">
                    Disputes related to Seat Ridez, including issues concerning privacy practices, will be resolved through binding arbitration as outlined in this section.
                  </p>

                  <h3 className="text-xl font-semibold text-white mb-3">Mediation (Optional Step)</h3>
                  <p className="mb-4">
                    Before proceeding to arbitration, users may choose to engage in mediation to resolve disputes amicably. Mediation is not mandatory but serves as a step to minimize potential conflicts.
                  </p>

                  <h3 className="text-xl font-semibold text-white mb-3">Explicit Acknowledgment</h3>
                  <p>
                    During account registration, users must acknowledge their agreement to this arbitration clause by checking a box stating: "I agree to resolve disputes through binding arbitration."
                  </p>
                </section>

                {/* Section 8 */}
                <section id="section8">
                  <h2 className="text-2xl font-bold text-white mb-4 gradient-text">8. Privacy and Data Use</h2>
                  <p>
                    Your use of the Platform is governed by our Privacy Policy, which details the data we collect, use, and retain. By using Seat Ridez, you consent to our data practices and acknowledge your rights under applicable laws, as outlined in the Privacy Policy.
                  </p>
                </section>

                {/* Section 9 */}
                <section id="section9">
                  <h2 className="text-2xl font-bold text-white mb-4 gradient-text">9. User Conduct</h2>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">General Conduct</h3>
                  <p className="mb-4">
                    Treat all users with respect. Harassment, violence, and discrimination are prohibited. Comply with all applicable traffic laws, safety regulations, and local laws.
                  </p>

                  <h3 className="text-xl font-semibold text-white mb-3">Driver Responsibilities</h3>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Maintain a safe, insured, and clean vehicle that meets local requirements.</li>
                    <li>Be punctual and adhere to the agreed-upon ride details.</li>
                    <li>Upload proof of valid insurance and vehicle photos, ensuring they are kept up-to-date.</li>
                    <li>Understand and comply with local carpooling and transportation regulations.</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-white mb-3">Passenger Responsibilities</h3>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Be ready at the pickup location at the scheduled time.</li>
                    <li>Treat the driver's vehicle with care and respect.</li>
                  </ul>

                  <p>Seat Ridez reserves the right to suspend or terminate accounts for violations of these guidelines.</p>
                </section>

                {/* Section 10 */}
                <section id="section10">
                  <h2 className="text-2xl font-bold text-white mb-4 gradient-text">10. Indemnity and Hold Harmless Clause</h2>
                  <p className="mb-4">
                    By using Seat Ridez, you agree to indemnify, defend, and hold harmless Seat Ridez Inc. and its officers, employees, agents, affiliates, and representatives ("Seat Ridez Parties") from any claims, damages, or liabilities arising from:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Injuries, accidents, or losses occurring during rides.</li>
                    <li>Disputes between drivers and passengers regarding behavior, payment, or ride details.</li>
                    <li>Acts of negligence, recklessness, or unlawful behavior during use of the Platform.</li>
                    <li>Violations of any applicable laws, rules, or regulations by drivers or passengers.</li>
                    <li>Any breach of the terms and conditions set forth in this agreement.</li>
                    <li>Use of unlicensed, uninsured, or otherwise unauthorized vehicles by drivers.</li>
                    <li>Fraudulent or false information provided by users during account creation or ride arrangements.</li>
                    <li>Claims resulting from users' failure to comply with the Platform's community guidelines or policies.</li>
                  </ul>
                  <p className="mb-2">
                    Seat Ridez is not liable for any direct, indirect, incidental, or consequential damages related to your use of the Platform, including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Loss of income or business opportunities.</li>
                    <li>Emotional distress or trauma caused by incidents during rides.</li>
                    <li>Inconvenience or costs incurred due to ride cancellations, delays, or disputes.</li>
                  </ul>
                </section>

                {/* Section 11 */}
                <section id="section11">
                  <h2 className="text-2xl font-bold text-white mb-4 gradient-text">11. Accessibility and Periodic Updates</h2>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">Accessibility</h3>
                  <p className="mb-4">
                    Seat Ridez is committed to making our platform accessible to all users. While alternative formats are not yet available, we plan to implement accessibility features in future updates. If you need assistance with these Terms, please contact support@seatridez.com.
                  </p>

                  <h3 className="text-xl font-semibold text-white mb-3">Periodic Updates</h3>
                  <p>
                    These Terms may be updated periodically to reflect changes in laws, our practices, or the services we offer. Users will be notified of updates via email or an in-app notification at least 15 days before the revised Terms take effect. Continued use of the Platform constitutes acceptance of any revisions.
                  </p>
                </section>

                {/* Section 12 */}
                <section id="section12">
                  <h2 className="text-2xl font-bold text-white mb-4 gradient-text">12. No Harm Clause</h2>
                  <p className="mb-4">By using the Seat Ridez platform, you agree that:</p>

                  <h3 className="text-xl font-semibold text-white mb-3">1. User Responsibility:</h3>
                  <p className="mb-4">
                    Seat Ridez is not responsible for harm, injury, losses, or damages caused by users of the Platform (drivers or passengers) or external factors during, before, or after a ride arranged through the Platform.
                  </p>

                  <h3 className="text-xl font-semibold text-white mb-3">2. Assumption of Risk:</h3>
                  <p className="mb-2">You assume all risks associated with using the Platform, including but not limited to:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Risks inherent to carpooling arrangements</li>
                    <li>Interactions or disputes with other users of the Platform.</li>
                    <li>The condition or safety of vehicles used during rides.</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-white mb-3">4. Release of Liability:</h3>
                  <p className="mb-2">
                    You release Seat Ridez and its officers, employees, agents, and affiliates from liability for any claims, damages, or disputes arising from your use of the Platform, including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Incidents caused by negligence, misconduct, or unlawful actions of other users.</li>
                    <li>Loss, theft, or damage to personal belongings during rides.</li>
                    <li>Changes, delays, or cancellations to ride arrangements.</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-white mb-3">5. Legal Compliance:</h3>
                  <p className="mb-4">
                    You acknowledge that it is your sole responsibility to ensure compliance with local traffic laws, vehicle safety regulations, and insurance requirements while using the Platform.
                  </p>

                  <p>
                    This release of liability applies to the fullest extent permitted by applicable law. If any provision of this clause is deemed invalid or unenforceable, the remaining provisions shall remain in full force and effect.
                  </p>
                </section>

                {/* Section 13 */}
                <section id="section13">
                  <h2 className="text-2xl font-bold text-white mb-4 gradient-text">13. Conclusion</h2>
                  <p className="mb-2">By agreeing to these Terms, you:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Acknowledge that Seat Ridez acts as a marketplace, not a transportation provider.</li>
                    <li>Agree to resolve disputes through arbitration.</li>
                    <li>Understand your responsibilities as a user, driver, or passenger.</li>
                  </ul>

                  <p className="text-lg font-medium text-center">
                    Thank you for choosing Seat Ridez. Enjoy your journey!
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

export default TermsAndConditions;