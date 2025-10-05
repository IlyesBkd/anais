import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  FileText, 
  Gift, 
  ArrowRight,
  Clock,
  Star,
  DollarSign,
  TrendingUp,
  Users,
  Shield,
  Zap,
  Crown,
  Sparkles
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const HeyCash = () => {
  const { toast } = useToast();

  useEffect(() => {
    document.title = "HeyCash - Play games, take surveys & Earn Money";
  }, []);

  const handleSignUp = () => {
    toast({
      title: "Redirection...",
      description: "Vous allez être redirigé vers l'offre exclusive",
    });
    
    // Lien vers HeyCash
    window.open("https://www.heycash.com/en-gb", "_blank");
  };


  return (
    <div className="h-screen bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900 overflow-hidden flex flex-col">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
        
         {/* Blurred background SVG - positioned at the top */}
         <div className="absolute top-0 left-0 w-full h-[45%] z-5">
           <img 
             src="/blurred-bg.svg" 
             alt="Background" 
             className="w-full h-full object-cover opacity-80"
             style={{ filter: 'blur(2px)' }}
           />
         </div>
      </div>

      {/* Hero Section */}
      <section className="relative flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-7xl mx-auto text-center relative z-20 w-full">

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-white leading-tight">
            <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 bg-clip-text text-transparent">
              Earn Money
            </span>
            <br />
            <span className="text-white">Playing & Answering</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-gray-200 font-medium max-w-3xl mx-auto">
            Join 2M+ users earning up to $120 per game
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
            <Button 
              onClick={handleSignUp}
              size="lg" 
              className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 hover:from-green-300 hover:via-emerald-300 hover:to-green-400 text-white text-xl px-16 py-6 rounded-3xl font-black shadow-2xl hover:shadow-green-400/50 transform hover:scale-110 transition-all duration-300 group border-2 border-green-300/30 hover:border-green-200/50"
            >
              <Zap className="w-6 h-6 mr-3 group-hover:animate-pulse" />
              Start Earning
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-black text-green-400 mb-1">$2.5M+</div>
              <div className="text-gray-300 text-xs">Paid Out</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-black text-emerald-400 mb-1">2M+</div>
              <div className="text-gray-300 text-xs">Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-black text-green-300 mb-1">4.8★</div>
              <div className="text-gray-300 text-xs">Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative flex-1 flex items-center px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-7xl mx-auto w-full relative z-20">
          

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {/* Play Games */}
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 text-center group hover:border-green-400/50 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500">
              <div className="w-full h-64 rounded-2xl mx-auto mb-6 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                <img 
                  src="/games.png" 
                  alt="Games"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-black text-green-400 mb-3 tracking-wide">PLAY GAMES</h3>
              <p className="text-gray-300 mb-3 text-base">Earn per game</p>
              <div className="text-3xl font-black text-white mb-4">$0.30 - $120</div>
            </div>

            {/* Take Surveys */}
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 text-center group hover:border-emerald-400/50 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500">
              <div className="w-full h-64 rounded-2xl mx-auto mb-6 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                <img 
                  src="/surveys.png" 
                  alt="Surveys"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-black text-emerald-400 mb-3 tracking-wide">TAKE SURVEYS</h3>
              <p className="text-gray-300 mb-3 text-base">Earn per 2-10 min survey</p>
              <div className="text-3xl font-black text-white mb-4">$0.50 - $6.00</div>
            </div>

            {/* Complete Offers */}
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 text-center group hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
              <div className="w-full h-64 rounded-2xl mx-auto mb-6 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                <img 
                  src="/netflix.png" 
                  alt="Offers"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-black text-purple-400 mb-3 tracking-wide">COMPLETE OFFERS</h3>
              <p className="text-gray-300 mb-3 text-base">Earn per app</p>
              <div className="text-3xl font-black text-white mb-4">$1.00 - $75</div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default HeyCash;
