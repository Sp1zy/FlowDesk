export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-zinc-800/50 bg-brand-bg/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-purple inline-block"></span>
          <span className="font-heading lowercase">flowdesk</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400 font-medium">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#docs" className="hover:text-white transition-colors">Docs</a>
        </div>

        {/* CTA Button */}
        <div>
          <button className="bg-brand-purple hover:bg-purple-700 text-white font-medium text-sm px-5 py-2.5 rounded-lg transition-all duration-200 shadow-[0_0_20px_rgba(124,58,237,0.3)]">
            Start For Free
          </button>
        </div>

      </div>
    </nav>
  );
}