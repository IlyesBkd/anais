import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="w-full px-4 sm:px-6 py-6 sm:py-8 text-center h-[50vh] sm:h-[60vh] flex flex-col justify-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black leading-tight mb-3 sm:mb-4 tracking-tight">
          <span className="text-foreground">Play games, take surveys</span>
          <br />
          <span className="text-heycash-green">& Earn Money</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto font-medium px-2">
          Want to earn money within minutes? Sign up for free!
        </p>
        
        <Button variant="heycash" size="heycash" className="relative overflow-hidden group">
          <span className="relative z-10 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            Start Earning
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Button>
      </div>
    </section>
  );
};

export default Hero;