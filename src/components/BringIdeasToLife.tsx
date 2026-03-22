
export default function BringIdeasToLife() {
  return (
    <div className="w-[calc(100vw-3rem)] md:w-[calc(100vw-12rem)] h-[80vh] flex-shrink-0 flex flex-col justify-center items-center relative text-center">
      <h2 className="text-6xl md:text-[8rem] lg:text-[10rem] font-heading font-black leading-[0.85] tracking-tighter text-white uppercase mix-blend-overlay">
        Bring Ideas
      </h2>
      <h2 className="text-6xl md:text-[8rem] lg:text-[10rem] font-heading font-black leading-[0.85] tracking-tighter text-white uppercase mix-blend-overlay">
        To Life
      </h2>

      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-full max-w-sm text-brand-dark font-sans text-xl font-medium">
        <p>weloveweb is a digital marketing agency based in Durgapur.</p>
      </div>

      <div className="absolute top-1/4 right-1/4 w-32 h-32 border-4 border-brand-yellow rounded-none opacity-50" />
      <div className="absolute bottom-1/3 right-1/3 w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[60px] border-b-brand-green opacity-50 rotate-45" />
    </div>
  );
}

