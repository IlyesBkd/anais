import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="w-full px-4 sm:px-6 py-6 sm:py-8 text-center h-[50vh] sm:h-[60vh] flex flex-col justify-center relative">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-heycash-green/10 via-transparent to-black/20"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6 sm:mb-8 tracking-tight">
          <span className="text-heycash-green drop-shadow-lg">Earn Money</span>
          <br />
          <span className="text-white drop-shadow-lg">Playing Games & Surveys</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 sm:mb-10 max-w-3xl mx-auto font-semibold px-2 drop-shadow-md">
          Play fun games, complete quick surveys, and get paid instantly!
        </p>
        
        {/* CTA Button */}
        <div className="flex justify-center items-center">
          <a 
            href="https://9ud2s.bemobtrcks.com/click/1?ns=c%3D58dbf534-b09a-4c4f-981d-6fb7a879f616..l%3D2..a%3D0..b%3D0"
            className="bg-heycash-green hover:bg-heycash-green/90 text-black font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-full shadow-2xl hover:shadow-heycash-green/50 transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Start Earning Now
          </a>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-white/80">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-heycash-green" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm sm:text-base">100% Free to Join</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-heycash-green" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm sm:text-base">Instant Payouts</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-heycash-green" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm sm:text-base">No Experience Required</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;