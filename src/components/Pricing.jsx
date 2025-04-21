import React, { useState } from 'react';

const PriceCard = ({ title, price, features, isHighlighted = false, isYearly }) => {
  return (
    <div className={`relative rounded-[20px] p-8 h-full flex flex-col ${
      isHighlighted 
        ? 'bg-gradient-to-br from-[#121212] via-[#004766] to-[#00BFFF]' 
        : 'bg-[rgba(255,255,255,0.05)]'
    }`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-[22px] text-white font-medium">{title}</h3>
        {/* <div className="w-8 h-8">
          <img src="/logo-icon.svg" alt="" className="w-full h-full object-contain opacity-80" />
        </div> */}
      </div>
      <div className="mb-8">
        {typeof price === 'number' ? (
          <div className="flex items-baseline gap-1">
            <span className="text-[40px] font-medium text-white">
              ${isYearly ? price * 10 : price}
            </span>
            <span className="text-[#999999] text-base">/mo</span>
          </div>
        ) : (
          <div className="text-[32px] font-medium text-white">{price}</div>
        )}
      </div>
      <div className="flex-grow">
        <p className="text-sm text-[#999999] mb-4">Includes:</p>
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <svg className="w-[18px] h-[18px] text-[#00BFFF]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-[#E6E6E6] text-base">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <button className="w-full py-4 rounded-full text-center font-medium transition-all bg-white text-black hover:bg-white/90">
        Get started
      </button>
    </div>
  );
};

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      title: "Starter Plan",
      price: 0,
      features: [
        "Community Roundups",
        "Developer Networking",
        "Support and Assistance"
      ]
    },
    {
      title: "Pro Plan",
      price: 29,
      features: [
        "Community Roundups",
        "Developer Networking",
        "Support and Assistance",
        "Events and Workshops",
        "Project Opportunities"
      ],
      isHighlighted: true
    },
    {
      title: "Enterprise plan",
      price: "Contact us",
      features: [
        "Community Roundups",
        "Developer Networking",
        "Support and Assistance",
        "Events and Workshops",
        "Project Opportunities",
        "Exclusive Discounts and Offers"
      ]
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="text-[#999999] text-sm mb-3">Tagline</div>
          <h2 className="text-[40px] font-medium text-white mb-4">Pricing plans</h2>
          <p className="text-[#999999] text-lg max-w-2xl mx-auto">
            Explore our flexible pricing plans designed to fit your needs. Choose the plan that suits your 
            budget and gain access to all the features and support you need.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="bg-[rgba(255,255,255,0.05)] rounded-full p-1 flex items-center">
            <button 
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-base transition-all ${
                !isYearly ? 'bg-white text-black' : 'text-[#999999]'
              }`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-base transition-all ${
                isYearly ? 'bg-white text-black' : 'text-[#999999]'
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
          {plans.map((plan, index) => (
            <PriceCard key={index} {...plan} isYearly={isYearly} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing; 