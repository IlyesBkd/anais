import { useEffect, useState } from "react";
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
  Sparkles,
  CheckCircle2,
  Award,
  Timer
} from "lucide-react";
const HeyCash = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    document.title = "HeyCash – Spiele spielen, Umfragen beantworten & Geld verdienen";
    
    // Google tag (gtag.js)
    // Add first script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=AW-17857724447';
    document.head.appendChild(script1);

    // Add second script with gtag configuration
    const script2 = document.createElement('script');
    script2.textContent = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-17857724447');
    `;
    document.head.appendChild(script2);

    // Cleanup
    return () => {
      if (script1.parentNode) {
        script1.parentNode.removeChild(script1);
      }
      if (script2.parentNode) {
        script2.parentNode.removeChild(script2);
      }
    };
  }, []);

  const handleSignUp = () => {
    // Lien d'affiliation
    window.open("https://9ud2s.bemobtrcks.com/click/1?ns=c%3Dd095771b-9969-428f-96e5-bc7688bd9795..l%3D2..a%3D0..b%3D0", "_blank");
  };

  const trustBadges = [
    { icon: CheckCircle2, text: "100% kostenlos beitreten", color: "text-green-400" },
    { icon: Shield, text: "Sicher & vertrauenswürdig", color: "text-emerald-400" },
    { icon: Timer, text: "Sofortige Auszahlungen", color: "text-green-300" },
    { icon: Award, text: "Keine Erfahrung nötig", color: "text-emerald-300" }
  ];

  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden relative">
      {/* Enhanced background with subtle effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(255 255 255) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}
        ></div>
        {/* Subtle glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section - Improved */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            {/* Badge */}
            <Badge className="mb-6 bg-green-500/20 text-green-400 border-green-500/30 px-4 py-1.5 text-sm font-semibold">
              <Sparkles className="w-3 h-3 mr-2" />
              Werde Teil von über 2 Mio. aktiven Nutzer:innen
            </Badge>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 bg-clip-text text-transparent animate-gradient">
                Geld verdienen
              </span>
              <br />
              <span className="text-white">durch Spielen & Beantworten</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-10 text-gray-300 font-medium max-w-3xl mx-auto leading-relaxed">
              Schließe dich Tausenden an, die bis zu <span className="text-green-400 font-bold">120 $ pro Spiel</span> und <span className="text-emerald-400 font-bold">6 $ pro Umfrage</span> verdienen
            </p>

            {/* CTA Button - Enhanced */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                onClick={handleSignUp}
                size="lg" 
                className="bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:from-green-400 hover:via-emerald-400 hover:to-green-500 text-white text-xl px-12 py-7 rounded-2xl font-black shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300 group border-2 border-green-400/30 hover:border-green-300/50 relative overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                <Zap className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                Jetzt Geld verdienen
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>

            {/* Trust Badges - Enhanced */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {trustBadges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-center gap-2 bg-gray-800/60 backdrop-blur-sm px-4 py-2.5 rounded-full border border-gray-700/50 hover:border-green-500/50 transition-all duration-300"
                  >
                    <Icon className={`w-4 h-4 ${badge.color}`} />
                    <span className="text-sm text-gray-300 font-medium">{badge.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Stats - Enhanced */}
            <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
              <Card className="bg-gray-800/60 backdrop-blur-sm border-gray-700/50 p-6 text-center group hover:border-green-500/50 hover:bg-gray-800/80 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-black text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">$2.5M+</div>
                <div className="text-gray-400 text-sm font-medium">Insgesamt ausgezahlt</div>
              </Card>
              <Card className="bg-gray-800/60 backdrop-blur-sm border-gray-700/50 p-6 text-center group hover:border-emerald-500/50 hover:bg-gray-800/80 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-black text-emerald-400 mb-2 group-hover:scale-110 transition-transform duration-300">2M+</div>
                <div className="text-gray-400 text-sm font-medium">Aktive Nutzer:innen</div>
              </Card>
              <Card className="bg-gray-800/60 backdrop-blur-sm border-gray-700/50 p-6 text-center group hover:border-green-500/50 hover:bg-gray-800/80 transition-all duration-300">
                <div className="flex items-center justify-center gap-1 text-3xl md:text-4xl font-black text-green-300 mb-2 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  4.8
                </div>
                <div className="text-gray-400 text-sm font-medium">Bewertung</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Completely Redesigned */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Wähle deine <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Verdienstmethode</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Mehrere Wege, Geld zu verdienen – wähle, was am besten zu dir passt
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Play Games - Enhanced */}
            <Card className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border-gray-700/50 rounded-3xl p-8 text-center group hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:to-green-500/10 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="w-full h-64 rounded-2xl mx-auto mb-6 group-hover:scale-105 transition-transform duration-500 overflow-hidden bg-gray-900/50 p-4">
                  <img 
                    src="/games.png" 
                    alt="Games"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Play className="w-5 h-5 text-green-400" />
                  <h3 className="text-2xl font-black text-green-400 tracking-wide">SPIELE SPIELEN</h3>
                </div>
                <p className="text-gray-400 mb-4 text-base">Verdiene Geld, während du Spaß hast</p>
                <div className="bg-gray-900/50 rounded-xl p-4 mb-4">
                  <div className="text-4xl font-black text-white mb-1">$0.30 - $120</div>
                  <div className="text-sm text-gray-400">pro abgeschlossenem Spiel</div>
                </div>
                <Button 
                  onClick={handleSignUp}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl py-6 group-hover:scale-105 transition-transform duration-300"
                >
                  Jetzt spielen
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>

            {/* Take Surveys - Enhanced */}
            <Card className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border-gray-700/50 rounded-3xl p-8 text-center group hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:to-emerald-500/10 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="w-full h-64 rounded-2xl mx-auto mb-6 group-hover:scale-105 transition-transform duration-500 overflow-hidden bg-gray-900/50 p-4">
                  <img 
                    src="/surveys.png" 
                    alt="Surveys"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <FileText className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-2xl font-black text-emerald-400 tracking-wide">UMFRAGEN</h3>
                </div>
                <p className="text-gray-400 mb-4 text-base">Teile deine Meinung und werde bezahlt</p>
                <div className="bg-gray-900/50 rounded-xl p-4 mb-4">
                  <div className="text-4xl font-black text-white mb-1">$0.50 - $6.00</div>
                  <div className="text-sm text-gray-400">pro 2–10 Min. Umfrage</div>
                </div>
                <Button 
                  onClick={handleSignUp}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl py-6 group-hover:scale-105 transition-transform duration-300"
                >
                  Jetzt starten
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>

            {/* Complete Offers - Enhanced */}
            <Card className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border-gray-700/50 rounded-3xl p-8 text-center group hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:to-purple-500/10 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="w-full h-64 rounded-2xl mx-auto mb-6 group-hover:scale-105 transition-transform duration-500 overflow-hidden bg-gray-900/50 p-4">
                  <img 
                    src="/netflix.png" 
                    alt="Offers"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Gift className="w-5 h-5 text-purple-400" />
                  <h3 className="text-2xl font-black text-purple-400 tracking-wide">ANGEBOTE ABSCHLIEßEN</h3>
                </div>
                <p className="text-gray-400 mb-4 text-base">Teste Apps und Services und sammle Belohnungen</p>
                <div className="bg-gray-900/50 rounded-xl p-4 mb-4">
                  <div className="text-4xl font-black text-white mb-1">$1.00 - $75</div>
                  <div className="text-sm text-gray-400">pro abgeschlossenem Angebot</div>
                </div>
                <Button 
                  onClick={handleSignUp}
                  className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-xl py-6 group-hover:scale-105 transition-transform duration-300"
                >
                  Angebote ansehen
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional CTA Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border-green-500/30 p-12 text-center">
            <Crown className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-3xl font-black text-white mb-4">
              Bereit, Geld zu verdienen?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Werde Teil von Millionen Nutzer:innen, die bereits täglich Geld verdienen. Die Anmeldung ist kostenlos und dauert weniger als eine Minute!
            </p>
            <Button 
              onClick={handleSignUp}
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white text-lg px-12 py-6 rounded-xl font-black shadow-xl hover:shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Kostenlos starten
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Card>
        </div>
      </section>

    </div>
  );
};

export default HeyCash;
