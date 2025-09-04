import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, DollarSign, TrendingUp, Users, Star, ArrowRight, Zap, Menu, Sparkles, Clock, Shield, CreditCard } from "lucide-react";
import { useToast } from "@/hooks/use-toast";



const Serbia2 = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredSecondary, setIsHoveredSecondary] = useState(false);
  const { toast } = useToast();

  const handleCtaClick = () => {
    toast({
      title: "Preusmeravanje...",
      description: "Bićete preusmereni na ekskluzivnu ponudu",
    });
    
    // Lien d'affiliation pour la page /serbia2
    window.location.href = "https://afflat3d3.com/trk/lnk/895E33EB-DA15-472C-9258-4221C5BE41C1/?o=28224&c=918273&a=277245&k=578AC6CCBA91C68601950B50135B7711&l=30960&s1=serbia2";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-400/20 to-pink-400/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="w-full max-w-md mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden md:max-w-2xl border border-white/20 relative z-10">
        <div className="md:flex">
          <div className="p-6 sm:p-8 flex flex-col items-center text-center w-full space-y-6">
            

            {/* Payment Methods with enhanced design */}
            <div className="flex justify-center space-x-3 mb-6">
              {/* Amazon */}
              <Badge variant="outline" className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-4 py-2 rounded-full text-xs font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5.5 21h13c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-13c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2zm0-16h13v14h-13V5z"/>
                  <path d="M12 18.5c-1.25 0-2.4-.2-3.6-.6l-.3-.1c-.2-.1-.3-.2-.3-.4 0-.3.2-.5.5-.5.1 0 .2 0 .3.1l.2.1c1.1.3 2.2.5 3.2.5 1 0 2.1-.2 3.2-.5l.2-.1c.1-.1.2-.1.3-.1.3 0 .5.2.5.5 0 .2-.1.3-.3.4l-.3.1c-1.2.4-2.35.6-3.6.6z"/>
                  <path d="M14.5 9.5c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5.7 1.5 1.5 1.5 1.5-.7 1.5-1.5z"/>
                  <path d="M18.5 11.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5z"/>
                </svg>
                Amazon
              </Badge>
              
              {/* PayPal */}
              <Badge variant="outline" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-xs font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  <path d="M9.5 8h5c1.38 0 2.5 1.12 2.5 2.5S15.88 13 14.5 13h-2l-.5 3H10l.5-3h-1L9.5 8z"/>
                  <path d="M11 10.5h2.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5H11v1z"/>
                </svg>
                PayPal
              </Badge>
              
              {/* Bank Transfer */}
              <Badge variant="outline" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-xs font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2 5v14h20V5H2zm18 12H4V7h16v10zM6 9h12v2H6V9zm0 4h8v2H6v-2z"/>
                </svg>
                Bank Transfer
              </Badge>
            </div>

            {/* Main Content with improved typography */}
            <div className="space-y-4">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 leading-tight">
                Umorni od popunjavanja anketa za{" "}
                <span className="text-red-500">sitniš</span>?
              </h1>
              <div className="space-y-2">
                <p className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                  Popunite{" "}
                  <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 px-3 py-1 rounded-lg shadow-md">
                    5 anketa
                  </span>
                  ,
                </p>
                <p className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                  Zaradite{" "}
                  <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1 rounded-lg shadow-md">
                    $5
                  </span>
                  . Tako je jednostavno.
                </p>
              </div>
            </div>

            {/* Enhanced Features with icons */}
            <div className="w-full space-y-3 text-left text-gray-700">
              <Card className="flex items-center p-4 rounded-xl shadow-md bg-gradient-to-r from-white to-gray-50 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="p-2 bg-green-100 rounded-lg mr-3">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <span className="font-medium">Bez minimalne isplate</span>
              </Card>
              <Card className="flex items-center p-4 rounded-xl shadow-md bg-gradient-to-r from-white to-gray-50 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="p-2 bg-blue-100 rounded-lg mr-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <span className="font-medium">Instant isplate</span>
              </Card>
              <Card className="flex items-center p-4 rounded-xl shadow-md bg-gradient-to-r from-white to-gray-50 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="p-2 bg-purple-100 rounded-lg mr-3">
                  <Shield className="w-5 h-5 text-purple-600" />
                </div>
                <span className="font-medium">Sigurna platforma</span>
              </Card>
            </div>

            {/* Enhanced Call to Action Button */}
            <Button
              className="w-full h-16 text-lg font-bold bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3 mt-8 group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handleCtaClick}
            >
              <Sparkles className="w-6 h-6 group-hover:animate-pulse" />
              <span>Započnite zaradu sada</span>
              <ArrowRight className={`w-6 h-6 transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`} />
            </Button>

            {/* Enhanced Footer/Trust Indicators */}
            <div className="text-sm text-gray-600 mt-6 space-y-3">
              <p className="font-medium">Pridružite se +15,000 članova koji zarađuju dnevno</p>
              <div className="flex items-center justify-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className="w-4 h-4 text-yellow-400 fill-current" 
                  />
                ))}
                <span className="ml-2 text-gray-500">(2,847 recenzija)</span>
              </div>
            </div>

            {/* Enhanced Bottom CTA Button */}
            <Button
              className="w-full h-14 text-base font-bold bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 mt-6 group"
              onMouseEnter={() => setIsHoveredSecondary(true)}
              onMouseLeave={() => setIsHoveredSecondary(false)}
              onClick={handleCtaClick}
            >
              <span>Log in / Sign up</span>
              <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHoveredSecondary ? 'translate-x-1' : ''}`} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serbia2; 