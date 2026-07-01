export default function Features() {
  const featuresList = [
    {
      icon: "💼",
      title: "Branded client portals",
      desc: "Give every client a custom branded hub with your logo, colors, and domain. They'll think you built it just for them — because you did.",
    },
    {
      icon: "✅",
      title: "Clear client approvals",
      desc: "Replace endless email threads with a clean approval flow. Clients review, comment, and sign off without needing to create an account.",
    },
    {
      icon: "📦",
      title: "Organized file delivery",
      desc: "Send files with context, not just links. Group assets by project phase and keep every version accessible and labeled.",
    },
    {
      icon: "🔔",
      title: "Smart notifications",
      desc: "Automatic reminders nudge clients when reviews are overdue. Stop being the one to follow up — Flowdesk does it for you.",
    },
    {
      icon: "📅",
      title: "Project timeline views",
      desc: "Keep clients in the loop with a visual milestone tracker. They can see exactly where the project stands without a status call.",
    },
    {
      icon: "🔌",
      title: "Integrations that fit in",
      desc: "Connect Notion, Figma, Slack, and more. Flowdesk pulls from where your team already works — no double entry, no tab chaos.",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-32">
      
{/* Header Container */}
<div className="max-w-3xl mb-16">
  {/* The Blinking Badge - Just like the Hero! */}
  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-purple/10 border border-brand-purple/30 text-purple-400 mb-4">
    <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-ping"></span>
    Features
  </span>
  
  <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
    Everything your agency <br /> needs to run smoother
  </h2>
  <p className="text-zinc-400 text-base md:text-lg font-normal max-w-2xl font-body">
    From onboarding to final handoff, Flowdesk handles the back-and-forth so your team can focus on the work.
  </p>
</div>

      {/* 3x2 Grid Wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuresList.map((feat, idx) => (
          <div 
            key={idx}
            className="group relative bg-[#131520] border border-zinc-800/60 rounded-2xl p-8 hover:border-brand-purple/50 transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_30px_rgba(0,0,0,0.2)]"
          >
            {/* Subtle card glow on hover */}
            <div className="absolute -inset-px bg-gradient-to-br from-brand-purple/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            {/* Icon Bubble */}
            <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xl mb-6 shadow-inner">
              {feat.icon}
            </div>

            {/* Content */}
            <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
              {feat.title}
            </h3>
            <p className="text-zinc-400 text-sm font-normal leading-relaxed font-body">
              {feat.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}