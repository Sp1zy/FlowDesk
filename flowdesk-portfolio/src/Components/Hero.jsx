export default function Hero() {
  return (
    <section className="pt-24 pb-20 md:pt-36 md:pb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      
      {/* Left Column: Text Content (Occupies 7/12 columns on large screens) */}
      <div className="lg:col-span-7 flex flex-col items-start space-y-6">
        
        {/* Built for Creative Agencies Badge */}
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-purple/10 border border-brand-purple/30 text-purple-400">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-ping"></span>
          Built for creative agencies
        </span>

        {/* Main Massive Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
          Client portals <br />
          <span className="bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-400 bg-clip-text text-transparent">
            your clients
          </span> <br />
          will love
        </h1>

        {/* Description Text */}
        <p className="text-zinc-400 text-base md:text-lg max-w-xl font-normal leading-relaxed">
          Stop chasing approvals over email. Flowdesk gives your agency a branded hub for projects, files, and feedback — all in one place.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-2 w-full sm:w-auto">
          <button className="w-full sm:w-auto bg-brand-purple hover:bg-purple-700 text-white font-medium px-8 py-3.5 rounded-xl transition-all shadow-[0_0_25px_rgba(124,58,237,0.4)]">
            Start for free →
          </button>
          <button className="w-full sm:w-auto bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white font-medium px-8 py-3.5 rounded-xl transition-colors">
            See how it works
          </button>
        </div>
      </div>

      {/* Right Column: App Mockup Dashboard (Occupies 5/12 columns on large screens) */}
      <div className="lg:col-span-5 relative w-full">
        {/* Glow behind dashboard */}
        <div className="absolute -inset-4 bg-brand-purple/10 rounded-3xl blur-2xl pointer-events-none"></div>
        
        {/* Dashboard Frame Container */}
        <div className="relative bg-[#0F111A] border border-zinc-800/80 rounded-2xl shadow-2xl p-6 overflow-hidden animate-float">
          
          {/* Window Chrome Header Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-zinc-900">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
            </div>
            <span className="text-xs font-mono text-zinc-500 tracking-wider uppercase">flowdesk — agency overview</span>
            <div className="w-12"></div> {/* Spacer for symmetry */}
          </div>

          {/* Mini Dashboard Metrics Grid */}
          <div className="grid grid-cols-2 gap-4 pt-6">
            <div className="bg-[#141724] border border-zinc-800/40 p-4 rounded-xl">
              <span className="text-zinc-500 text-[10px] font-semibold tracking-wider uppercase block mb-1">Active Projects</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-white font-heading">14</span>
                <span className="text-green-400 text-xs font-semibold">▲</span>
              </div>
            </div>
            <div className="bg-[#141724] border border-zinc-800/40 p-4 rounded-xl flex flex-col justify-between">
              <span className="text-zinc-500 text-[10px] font-semibold tracking-wider uppercase block mb-1">Pending Reviews</span>
              <div className="text-xl text-zinc-400">🔒</div>
            </div>
          </div>

          {/* Mock Project Row Items */}
          <div className="mt-6 space-y-3">
            <span className="text-zinc-500 text-[10px] font-semibold tracking-wider uppercase block px-1">Recent Projects</span>
            
            <div className="flex items-center justify-between p-3.5 bg-[#141724]/60 border border-zinc-800/30 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
                <span className="text-xs font-medium text-zinc-300">Acme Branding Refresh</span>
              </div>
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 uppercase">Active</span>
            </div>

            <div className="flex items-center justify-between p-3.5 bg-[#141724]/60 border border-zinc-800/30 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                <span className="text-xs font-medium text-zinc-300">Retro Static Website</span>
              </div>
              <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 uppercase">Review</span>
            </div>

            <div className="flex items-center justify-between p-3.5 bg-[#141724]/60 border border-zinc-800/30 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-500"></div>
                <span className="text-xs font-medium text-zinc-300">Tailor Mode Campaign</span>
              </div>
              <span className="text-[10px] font-bold text-zinc-400 bg-zinc-500/10 px-2 py-0.5 rounded border border-zinc-500/20 uppercase">Draft</span>
            </div>
          </div>

          {/* Storage capacity indicator at the bottom */}
          <div className="mt-6 pt-4 border-t border-zinc-900">
            <div className="flex justify-between text-[10px] font-medium text-zinc-500 mb-1.5">
              <span>TEAM CAPACITY</span>
              <span>80% — 4.2GB remaining</span>
            </div>
            <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-brand-purple to-indigo-500 h-full w-[80%] rounded-full"></div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}