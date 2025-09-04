import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, DollarSign, TrendingUp, Users, Star, ArrowRight, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";



const SideHustle = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { toast } = useToast();

  const handleCtaClick = () => {
    toast({
      title: "Redirecting...",
      description: "You will be redirected to the exclusive offer",
    });
    
    // Lien d'affiliation pour la page /side-hustle avec suivi Google Ads
    if (typeof (window as any).gtag_report_conversion === 'function') {
      (window as any).gtag_report_conversion("https://afflat3d2.com/trk/lnk/895E33EB-DA15-472C-9258-4221C5BE41C1/?o=28224&c=918273&a=277245&k=578AC6CCBA91C68601950B50135B7711&l=30960&s1=side-hustle");
    } else {
      window.location.href = "https://afflat3d2.com/trk/lnk/895E33EB-DA15-472C-9258-4221C5BE41C1/?o=28224&c=918273&a=277245&k=578AC6CCBA91C68601950B50135B7711&l=30960&s1=side-hustle";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 flex flex-col justify-center p-2 md:p-4 overflow-hidden">
      <div className="w-full max-w-sm md:max-w-xl mx-auto">
        {/* Badge */}
        <div className="text-center mb-2 md:mb-5">
          <Badge className="bg-yellow-400 text-black font-bold text-xs md:text-sm px-2 md:px-5 py-1 md:py-2">
            <Zap className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
            EXCLUSIVE OFFER - LIMITED TIME
          </Badge>
        </div>

        {/* Titre principal */}
        <div className="text-center mb-3 md:mb-6">
          <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-3">
            Earn <span className="text-yellow-300">₱300</span> per survey !
          </h1>
          <p className="text-blue-100 text-sm md:text-xl">
            Join members who earn up to <span className="text-yellow-300 font-bold">₱90,000</span> per month
          </p>
        </div>

        {/* Carte principale */}
        <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl md:shadow-2xl p-3 md:p-6 mb-3 md:mb-6">
          <div className="text-center space-y-2 md:space-y-5">
            {/* Statistiques */}
            <div className="grid grid-cols-3 gap-1 md:gap-5 mb-2 md:mb-5">
              <div className="text-center">
                <div className="text-base md:text-2xl lg:text-3xl font-bold text-green-600">₱300</div>
                <div className="text-xs md:text-sm text-gray-600">Per survey</div>
              </div>
              <div className="text-center">
                <div className="text-base md:text-2xl lg:text-3xl font-bold text-blue-600">15min</div>
                <div className="text-xs md:text-sm text-gray-600">Average time</div>
              </div>
              <div className="text-center">
                <div className="text-base md:text-2xl lg:text-3xl font-bold text-purple-600">24h</div>
                <div className="text-xs md:text-sm text-gray-600">Payment</div>
              </div>
            </div>

            {/* Avantages */}
            <div className="space-y-1 md:space-y-3 mb-2 md:mb-5">
              <div className="flex items-center gap-2 md:gap-3">
                <Check className="w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-xs md:text-base lg:text-lg">Surveys available 24/7</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <Check className="w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-xs md:text-base lg:text-lg">Instant GCash payment</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <Check className="w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-xs md:text-base lg:text-lg">No hidden fees</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <Check className="w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-xs md:text-base lg:text-lg">24/7 customer support</span>
              </div>
            </div>

            {/* Bouton CTA - Plus grand sur mobile */}
            <Button 
              onClick={handleCtaClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="w-full h-14 md:h-14 lg:h-16 text-base md:text-lg lg:text-xl font-bold bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              <DollarSign className="w-5 h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 mr-2 md:mr-2 lg:mr-3" />
              Start earning now
              <ArrowRight className={`w-5 h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 ml-2 md:ml-2 lg:ml-3 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
            </Button>
          </div>
        </Card>

        {/* Indicateurs de confiance */}
        <div className="text-center space-y-1 md:space-y-4">
          {/* Note et avis */}
          <div className="flex items-center justify-center gap-1 md:gap-3 text-white">
            <div className="flex items-center gap-1 md:gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star} 
                  className={`w-2 h-2 md:w-4 md:h-4 lg:w-5 lg:h-5 ${star <= 4 ? 'text-yellow-300 fill-yellow-300' : 'text-gray-400'}`} 
                />
              ))}
            </div>
            <span className="font-semibold text-xs md:text-base lg:text-lg">4.9/5</span>
            <span className="text-blue-200 text-xs md:text-sm lg:text-base">(2,847 reviews)</span>
          </div>

          {/* Statistiques de membres */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-blue-200 text-xs md:text-sm lg:text-base">
            <div className="flex items-center gap-1 md:gap-2 lg:gap-2">
              <Users className="w-2 h-2 md:w-4 md:h-4 lg:w-5 lg:h-5" />
              <span>+15,000 Filipino members</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2 lg:gap-2">
              <TrendingUp className="w-2 h-2 md:w-4 md:h-4 lg:w-5 lg:h-5" />
              <span>Guaranteed earnings</span>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-xs md:text-xs lg:text-sm text-blue-200/80">
            * Individual results may vary. Limited time offer for new members only.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideHustle; 