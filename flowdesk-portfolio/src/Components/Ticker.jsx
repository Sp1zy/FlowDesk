export default function Ticker() {
  const agencies = ["Archive", "Mellore Co", "Stroka Studio", "Puls Bird", "Purena Labs"];

  return (
    <div className="py-12 border-y border-zinc-900 bg-brand-bg/30 w-full mt-12">
      <div className="text-center">
        {/* Small header text */}
        <p className="text-[10px] tracking-[0.2em] font-bold uppercase text-zinc-500 mb-8 font-body">
          Trusted by agencies worldwide
        </p>
        
        {/* Agency row wrapper */}
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-6 px-4">
          {agencies.map((agency, idx) => (
            <span 
              key={idx} 
              className="text-zinc-400 hover:text-zinc-200 transition-colors duration-300 text-lg md:text-xl font-semibold tracking-tight font-heading"
            >
              {agency}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}