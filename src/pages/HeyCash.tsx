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
      </div>

      {/* Hero Section */}
      <section className="relative flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-400/30 px-3 py-1 text-xs font-medium">
              <Shield className="w-3 h-3 mr-1" />
              100% Sécurisé
            </Badge>
            <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-400/30 px-3 py-1 text-xs font-medium">
              <Users className="w-3 h-3 mr-1" />
              2M+ Utilisateurs
            </Badge>
            <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-400/30 px-3 py-1 text-xs font-medium">
              <Crown className="w-3 h-3 mr-1" />
              #1 Plateforme
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-white leading-tight">
            <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 bg-clip-text text-transparent">
              Gagnez de l'argent
            </span>
            <br />
            <span className="text-white">en jouant & répondant</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-3 text-gray-200 font-medium max-w-3xl mx-auto">
            Transformez votre temps libre en revenus réels
          </p>
          
          <p className="text-sm md:text-base mb-8 text-gray-300 max-w-2xl mx-auto">
            Rejoignez plus de 2 millions d'utilisateurs qui gagnent jusqu'à £120 par jeu
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
            <Button 
              onClick={handleSignUp}
              size="lg" 
              className="bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:from-green-400 hover:via-emerald-400 hover:to-green-500 text-white text-lg px-10 py-4 rounded-2xl font-black shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 group"
            >
              <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Commencer à gagner
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="flex items-center text-gray-300">
              <Sparkles className="w-4 h-4 mr-1 text-yellow-400" />
              <span className="text-xs">Inscription gratuite • Paiement instantané</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-black text-green-400 mb-1">£2.5M+</div>
              <div className="text-gray-300 text-xs">Payé aux utilisateurs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-black text-emerald-400 mb-1">2M+</div>
              <div className="text-gray-300 text-xs">Utilisateurs actifs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-black text-green-300 mb-1">4.8★</div>
              <div className="text-gray-300 text-xs">Note moyenne</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative flex-1 flex items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
              Comment <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">gagner</span> ?
            </h2>
            <p className="text-sm text-gray-300 max-w-2xl mx-auto">
              Trois façons simples et rapides de transformer votre temps en argent
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {/* Play Games */}
            <Card className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border-gray-700/50 p-4 hover:border-green-400/50 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 transform hover:-translate-y-1">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-black text-green-400 mb-2 tracking-wide">JOUER</h3>
                <p className="text-gray-300 mb-2 text-sm">Gagnez par partie</p>
                <div className="text-2xl font-black text-white mb-2">£0.50 - £120</div>
                <Badge className="bg-green-500/20 text-green-300 border-green-400/30 text-xs">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Populaire
                </Badge>
              </div>
              
              {/* Game examples */}
              <div className="space-y-2">
                <div className="bg-gradient-to-r from-gray-700/60 to-gray-800/60 rounded-xl p-3 flex items-center space-x-3 hover:bg-gray-700/80 transition-colors">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                    <Play className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-bold text-sm">Age of Coins</p>
                    <p className="text-green-400 font-black text-sm">£ 14.00</p>
                  </div>
                  <Badge variant="outline" className="border-green-400/50 text-green-300 text-xs">
                    Nouveau
                  </Badge>
                </div>
                
                <div className="bg-gradient-to-r from-gray-700/60 to-gray-800/60 rounded-xl p-3 flex items-center space-x-3 hover:bg-gray-700/80 transition-colors">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <Play className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-bold text-sm">Lords Mobile</p>
                    <p className="text-green-400 font-black text-sm">£ 21.90</p>
                  </div>
                  <Badge variant="outline" className="border-yellow-400/50 text-yellow-300 text-xs">
                    Hot
                  </Badge>
                </div>
              </div>
            </Card>

            {/* Take Surveys */}
            <Card className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border-gray-700/50 p-4 hover:border-emerald-400/50 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 transform hover:-translate-y-1">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-black text-emerald-400 mb-2 tracking-wide">SONDAGES</h3>
                <p className="text-gray-300 mb-2 text-sm">2-10 min par sondage</p>
                <div className="text-2xl font-black text-white mb-2">£0.50 - £6.00</div>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/30 text-xs">
                  <Clock className="w-3 h-3 mr-1" />
                  Rapide
                </Badge>
              </div>
              
              {/* Survey examples */}
              <div className="space-y-2">
                <div className="bg-gradient-to-r from-gray-700/60 to-gray-800/60 rounded-xl p-3 relative hover:bg-gray-700/80 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-gray-400" />
                      <span className="text-gray-300 text-xs">5 min</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="w-3 h-3 text-yellow-400 fill-current" />
                      ))}
                      <span className="text-gray-400 text-xs">(392)</span>
                    </div>
                  </div>
                  <p className="text-emerald-400 font-black text-lg">£ 3.30</p>
                  <Badge className="absolute top-1 right-1 bg-emerald-500/20 text-emerald-300 border-emerald-400/30 text-xs">
                    Disponible
                  </Badge>
                </div>
                
                <div className="bg-gradient-to-r from-gray-700/60 to-gray-800/60 rounded-xl p-3 relative hover:bg-gray-700/80 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-gray-400" />
                      <span className="text-gray-300 text-xs">2 min</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="w-3 h-3 text-yellow-400 fill-current" />
                      ))}
                      <span className="text-gray-400 text-xs">(991)</span>
                    </div>
                  </div>
                  <p className="text-emerald-400 font-black text-lg">£ 1.80</p>
                  <Badge className="absolute top-1 right-1 bg-green-500/20 text-green-300 border-green-400/30 text-xs">
                    Populaire
                  </Badge>
                </div>
              </div>
            </Card>

            {/* Complete Offers */}
            <Card className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border-gray-700/50 p-4 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 transform hover:-translate-y-1">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-black text-purple-400 mb-2 tracking-wide">OFFRES</h3>
                <p className="text-gray-300 mb-2 text-sm">Gagnez par app</p>
                <div className="text-2xl font-black text-white mb-2">£1.00 - £75</div>
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-400/30 text-xs">
                  <DollarSign className="w-3 h-3 mr-1" />
                  Rentable
                </Badge>
              </div>
              
              {/* Offer examples */}
              <div className="space-y-2">
                <div className="bg-gradient-to-r from-gray-700/60 to-gray-800/60 rounded-xl p-3 flex items-center space-x-3 hover:bg-gray-700/80 transition-colors">
                  <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-black text-sm">N</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-bold text-sm">Start a trial</p>
                    <p className="text-purple-400 font-black text-sm">£ 2.60</p>
                  </div>
                  <Badge variant="outline" className="border-red-400/50 text-red-300 text-xs">
                    Limité
                  </Badge>
                </div>
                
                <div className="bg-gradient-to-r from-gray-700/60 to-gray-800/60 rounded-xl p-3 flex items-center space-x-3 hover:bg-gray-700/80 transition-colors">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-black text-sm">IG</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-bold text-sm">Download app</p>
                    <p className="text-purple-400 font-black text-sm">£ 1.90</p>
                  </div>
                  <Badge variant="outline" className="border-pink-400/50 text-pink-300 text-xs">
                    Facile
                  </Badge>
                </div>
              </div>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-8">
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-6 border border-green-400/20">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                Prêt à commencer ?
              </h2>
              <p className="text-sm text-gray-300 mb-6 max-w-xl mx-auto">
                Rejoignez des milliers d'utilisateurs qui gagnent déjà de l'argent chaque jour
              </p>
              <Button 
                onClick={handleSignUp}
                size="lg" 
                className="bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:from-green-400 hover:via-emerald-400 hover:to-green-500 text-white text-lg px-12 py-4 rounded-2xl font-black shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 group"
              >
                <Crown className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Commencer maintenant
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HeyCash;
