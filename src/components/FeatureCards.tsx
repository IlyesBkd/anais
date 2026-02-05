import ageOfCoinsIcon from "@/assets/age-of-coins-icon.png";
import lordsMobileIcon from "@/assets/lords-mobile-icon.png";
import netflixIcon from "@/assets/netflix-icon.png";
import instagramIcon from "@/assets/instagram-icon.png";

const FeatureCards = () => {
  return (
    <section className="w-full px-4 sm:px-6 py-8 sm:py-12 flex-1 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-6">
          
          {/* Play Games Section */}
          <div className="text-center space-y-3 sm:space-y-4">
            {/* Game Cards Mockup */}
            <div className="relative h-48 sm:h-52 md:h-56 mb-3 sm:mb-4">
              {/* Age of Coins Card */}
              <div className="absolute left-2 sm:left-4 top-0 w-36 sm:w-40 md:w-44 h-48 sm:h-52 md:h-56 bg-heycash-card border border-border rounded-xl p-3 sm:p-4 transform -rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-heycash-green/20 group">
                <div className="relative">
                  <img src={ageOfCoinsIcon} alt="Age of Coins" className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -top-1 -right-1 w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 bg-heycash-green rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-white">★</span>
                  </div>
                </div>
                <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-1 group-hover:text-heycash-green transition-colors">Age of Coins: M...</h4>
                <p className="text-xs text-muted-foreground mb-2 sm:mb-4">Spiele</p>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                  <p className="text-sm sm:text-base md:text-lg font-bold text-heycash-green group-hover:text-white transition-colors">$ 14.00 <span className="text-xs font-normal text-muted-foreground">USD</span></p>
                </div>
              </div>
              
              {/* Lords Mobile Card */}
              <div className="absolute right-2 sm:right-4 top-4 sm:top-6 w-36 sm:w-40 md:w-44 h-48 sm:h-52 md:h-56 bg-heycash-card border border-border rounded-xl p-3 sm:p-4 transform rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-heycash-green/20 group">
                <div className="relative">
                  <img src={lordsMobileIcon} alt="Lords Mobile" className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -top-1 -right-1 w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 bg-heycash-green rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-white">★</span>
                  </div>
                </div>
                <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-1 group-hover:text-heycash-green transition-colors">Lords Mobile: Kin...</h4>
                <p className="text-xs text-muted-foreground mb-2 sm:mb-4">Spiele</p>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                  <p className="text-sm sm:text-base md:text-lg font-bold text-heycash-green group-hover:text-white transition-colors">$ 21.90 <span className="text-xs font-normal text-muted-foreground">USD</span></p>
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-heycash-green">SPIELE SPIELEN</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Verdienst pro Spiel</p>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">$0.50 - $120</p>
            </div>
          </div>

          {/* Take Surveys Section */}
          <div className="text-center space-y-3 sm:space-y-4">
            {/* Survey Cards Mockup */}
            <div className="relative h-48 sm:h-52 md:h-56 mb-3 sm:mb-4">
              {/* Survey Card 1 */}
              <div className="absolute left-2 sm:left-4 top-0 w-36 sm:w-40 md:w-44 h-32 sm:h-36 md:h-40 bg-heycash-card border border-border rounded-xl p-3 sm:p-4 transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-heycash-green/20 group">
                <div className="flex items-center justify-between mb-1 sm:mb-2">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-heycash-green transition-colors">
                    <svg className="w-2 sm:w-3 h-2 sm:h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12,6 12,12 16,14"/>
                    </svg>
                    <span className="text-xs">5 Min.</span>
                  </div>
                  <div className="w-3 sm:w-4 h-3 sm:h-4 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-white">★</span>
                  </div>
                </div>
                <div className="mb-1 sm:mb-2">
                  <p className="text-sm sm:text-base md:text-lg font-bold text-heycash-green group-hover:text-white transition-colors">$ 3.30 <span className="text-xs font-normal text-muted-foreground">USD</span></p>
                </div>
                <div className="flex gap-1 mb-1 sm:mb-2">
                  {[1,2,3,4,5].map((star) => (
                    <svg key={star} className="w-2 sm:w-3 h-2 sm:h-3 text-yellow-500 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">(392)</p>
              </div>
              
              {/* Survey Card 2 */}
              <div className="absolute right-2 sm:right-4 top-6 sm:top-8 w-36 sm:w-40 md:w-44 h-32 sm:h-36 md:h-40 bg-heycash-card border border-border rounded-xl p-3 sm:p-4 transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-heycash-green/20 group">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-heycash-green transition-colors">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12,6 12,12 16,14"/>
                    </svg>
                    2 Min.
                  </div>
                  <div className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-white">★</span>
                  </div>
                </div>
                <div className="mb-2">
                  <p className="text-lg font-bold text-heycash-green group-hover:text-white transition-colors">$ 1.80 <span className="text-xs font-normal text-muted-foreground">USD</span></p>
                </div>
                <div className="flex gap-1 mb-2">
                  {[1,2,3,4].map((star) => (
                    <svg key={star} className="w-3 h-3 text-yellow-500 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                  <svg className="w-3 h-3 text-gray-400 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">(991)</p>
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-heycash-green">UMFRAGEN</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Verdienst pro 2–10 Min. Umfrage</p>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">$0.50 - $6.00</p>
            </div>
          </div>

          {/* Complete Offers Section */}
          <div className="text-center space-y-3 sm:space-y-4">
            {/* Offer Cards Mockup */}
            <div className="relative h-48 sm:h-52 md:h-56 mb-3 sm:mb-4">
              {/* Netflix Offer */}
              <div className="absolute left-2 sm:left-4 top-0 w-36 sm:w-40 md:w-44 h-24 sm:h-28 md:h-32 bg-heycash-card border border-border rounded-xl p-3 sm:p-4 transform -rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-heycash-green/20 group">
                <div className="flex items-center justify-between">
                  <div className="relative">
                    <img src={netflixIcon} alt="Netflix" className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 rounded group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute -top-1 -right-1 w-3 sm:w-4 h-3 sm:h-4 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-white">N</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground mb-1 group-hover:text-heycash-green transition-colors">Probemonat starten</p>
                    <p className="text-sm sm:text-base font-bold text-heycash-green group-hover:text-white transition-colors">$ 2.60 <span className="text-xs font-normal text-muted-foreground">USD</span></p>
                  </div>
                </div>
              </div>
              
              {/* Facebook App Download Offer */}
              <div className="absolute right-2 sm:right-4 top-8 sm:top-12 w-36 sm:w-40 md:w-44 h-24 sm:h-28 md:h-32 bg-heycash-card border border-border rounded-xl p-3 sm:p-4 transform rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-heycash-green/20 group">
                <div className="flex items-center justify-between">
                  <div className="relative">
                    <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-white">f</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground mb-1 group-hover:text-heycash-green transition-colors">App herunterladen</p>
                    <p className="text-base font-bold text-heycash-green group-hover:text-white transition-colors">$ 1.90 <span className="text-xs font-normal text-muted-foreground">USD</span></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-heycash-green">ANGEBOTE ABSCHLIEßEN</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Verdienst pro App</p>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">$1.00 - $75</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureCards;