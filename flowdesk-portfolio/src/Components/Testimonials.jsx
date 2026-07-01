export default function Testimonials() {
  const reviews = [
    {
      stars: 5,
      quote: "Cut our approval turnaround from 5 days to under 24 hours. The client portal is sleeker than anything we tried before.",
      name: "Luca Groves",
      role: "Creative Director, Studio Magna",
    },
    {
      stars: 5,
      quote: "Our clients actually compliment the portal. That's never happened with any tool we've used. Onboarding new projects is now half the effort.",
      name: "James Serrano",
      role: "Founder, Horizon Agency",
    },
    {
      stars: 5,
      quote: "The Figma and Notion integrations alone saved us hours a week. It fits right into how we already work — no one had to change a thing.",
      name: "Amira Sharma",
      role: "Operations Lead, PixelCraft",
    },
  ];

  return (
    <section className="py-20 md:py-32 border-t border-zinc-900">
      
      {/* Header Container */}
      <div className="max-w-3xl mb-16">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-purple/10 border border-brand-purple/30 text-purple-400 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-ping"></span>
          What people say
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.1] tracking-tight">
          Agencies love it. <br /> Clients stay longer.
        </h2>
      </div>

      {/* 3-Column Reviews Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((rev, idx) => (
          <div 
            key={idx}
            className="bg-[#131520]/40 border border-zinc-900 rounded-2xl p-8 flex flex-col justify-between space-y-6"
          >
            {/* Stars & Quote */}
            <div className="space-y-4">
              {/* Star Rating Render */}
              <div className="flex gap-1 text-amber-500 text-sm">
                {Array.from({ length: rev.stars }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              
              {/* Review Text */}
              <p className="text-zinc-300 text-base font-normal italic leading-relaxed font-body">
                "{rev.quote}"
              </p>
            </div>

            {/* Author Meta Details */}
            <div className="flex items-center gap-3 pt-4 border-t border-zinc-900">
              {/* Simple geometric placeholder avatar initials */}
              <div className="w-10 h-10 rounded-full bg-brand-purple/20 border border-brand-purple/30 text-purple-400 font-bold text-xs flex items-center justify-center font-heading">
                {rev.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h4 className="text-sm font-bold text-white tracking-tight">{rev.name}</h4>
                <p className="text-zinc-500 text-xs font-normal font-body">{rev.role}</p>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}