import React from 'react';

const PriceCard = ({ title, price, features, isPopular }) => {
  return (
    <div className={`relative rounded-2xl p-6 ${isPopular ? 'bg-primary/10 border-2 border-primary' : 'bg-secondary/50 border border-border'}`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm">
          Most Popular
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-bold">${price}</span>
          {price > 0 && <span className="text-foreground/70">/mo</span>}
        </div>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-foreground/90">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 rounded-lg ${isPopular ? 'bg-primary text-white' : 'bg-secondary hover:bg-secondary/70'} transition-colors`}>
        Get Started
      </button>
    </div>
  );
};

const Pricing = () => {
  const plans = [
    {
      title: 'Free',
      price: 0,
      features: [
        'Basic community access',
        'Limited forum posts',
        'Public profile',
        'Basic support',
      ],
    },
    {
      title: 'Pro',
      price: 29,
      features: [
        'Full community access',
        'Unlimited forum posts',
        'Featured profile',
        'Priority support',
        'Access to premium content',
        'Early access to features',
      ],
      isPopular: true,
    },
    {
      title: 'Enterprise',
      price: 99,
      features: [
        'Everything in Pro',
        'Custom branding',
        'API access',
        'Dedicated support',
        'Team collaboration',
        'Advanced analytics',
      ],
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing plans</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Always know what you'll pay.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PriceCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing; 