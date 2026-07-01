import { useState } from 'react';

export default function Pricing() {
  // Simple state machine to toggle between monthly or yearly billing metrics
  const [isYearly, setIsYearly] = useState(false);

  const tiers = [
    {
      name: "Starter",
      price: "0",
      desc: "Perfect for freelancers or agencies just getting started with client portals.",
      features: ["Up to 3 active projects", "1 branded portal", "File delivery (5 GB)", "Basic approval flows", "Email notifications"],
      cta: "Get started free",
      popular: false
    },
    {
      name: "Studio",
      price: isYearly ? "39" : "49", // Swaps pricing based on state condition
      desc: "For growing agencies running multiple client projects at once.",
      features: ["Unlimited active projects", "Up to 10 branded portals", "File delivery (50 GB)", "Advanced approval flows", "Smart reminders", "Figma & Notion integrations"],
      cta: "Start 14-day trial",
      popular: true // Triggers the heavy purple styling wrapper from image_c67b1c.png
    },
    {
      name: "Agency",
      price: isYearly ? "95" : "119",
      desc: "For established agencies that need custom branding and team collaboration at scale.",
      features: ["Everything in Studio", "Unlimited portals", "Custom domains", "250 GB storage", "White-labeled emails", "Priority support"],
      cta: "Contact sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 border-t border-zinc-900">
      
      {/* Top Header Row */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-purple/10 border border-brand-purple/30 text-purple-400 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-ping"></span>
          Pricing
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
          Simple pricing. <br />No surprises.
        </h2>
        <p className="text-zinc-400 text-sm md:text-base font-normal font-body">
          Start free, grow as you land more clients. Cancel any time.
        </p>
      </div>

      {/* Interactive State Toggle Switch Switcher */}
      <div className="flex items-center justify-center gap-4 mb-16 font-body">
        <span className={`text-sm font-medium transition-colors ${!isYearly ? 'text-white' : 'text-zinc-500'}`}>Monthly</span>
        
        <button 
          onClick={() => setIsYearly(!isYearly)}
          className="w-12 h-6 rounded-full bg-zinc-800 p-0.5 relative transition-colors duration-300 focus:outline-none border border-zinc-700/50"
        >
          <div className={`w-5 h-5 rounded-full bg-brand-purple shadow-md transform transition-transform duration-300 ${isYearly ? 'translate-x-6 bg-purple-400' : 'translate-x-0'}`} />
        </button>

        <span className={`text-sm font-medium transition-colors flex items-center gap-2 ${isYearly ? 'text-white' : 'text-zinc-500'}`}>
          Yearly 
          <span className="text-[10px] font-bold bg-amber-500/10 text-amber-500 border border-amber-500/30 px-2 py-0.5 rounded-full uppercase tracking-wider">
            Save 20%
          </span>
        </span>
      </div>

      {/* 3-Card Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {tiers.map((tier, idx) => (
          <div 
            key={idx}
            className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
              tier.popular 
                ? 'bg-[#181A2A] border-2 border-brand-purple shadow-[0_0_40px_rgba(124,58,237,0.15)] scale-102 z-10' 
                : 'bg-[#131520]/60 border border-zinc-900 hover:border-zinc-800'
            }`}
          >
            {/* Pop Tag for popular feature card */}
            {tier.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-purple text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                Most Popular
              </span>
            )}

            <div>
              {/* Card Meta Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold uppercase tracking-wider text-white mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1 text-white">
                  <span className="text-4xl font-extrabold font-heading">${tier.price}</span>
                  <span className="text-zinc-500 text-sm font-body font-normal">/month</span>
                </div>
                <p className="text-zinc-400 text-xs font-normal leading-relaxed mt-4 min-h-[40px] font-body">{tier.desc}</p>
              </div>

              {/* Bullet points array split mapping */}
              <ul className="space-y-3.5 border-t border-zinc-900/80 pt-6 mb-8 font-body">
                {tier.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5 text-sm text-zinc-300">
                    <span className="text-brand-purple font-bold text-xs mt-0.5">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Execution Button target */}
            <button 
              className={`w-full py-3 px-4 rounded-xl font-medium text-sm transition-all duration-200 ${
                tier.popular 
                  ? 'bg-brand-purple hover:bg-purple-700 text-white shadow-[0_4px_20px_rgba(124,58,237,0.3)]' 
                  : 'bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800'
              }`}
            >
              {tier.cta}
            </button>

          </div>
        ))}
      </div>

    </section>
  );
}