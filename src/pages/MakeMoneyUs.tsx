import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Check, 
  DollarSign, 
  Star, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  Shield, 
  Gift,
  Target,
  CreditCard,
  Play,
  Users
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";



const MakeMoneyUs = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentBalance] = useState(10.6);
  const [targetAmount] = useState(10.6);
  const [progress] = useState(80);
  const { toast } = useToast();

  // Add delegate-ch meta tag and bemob scripts only for this page
  useEffect(() => {
    // Set page title
    document.title = "Up to $10 per Survey!";
    
    // Add delegate-ch meta tag
    const meta = document.createElement('meta');
    meta.httpEquiv = 'delegate-ch';
    meta.content = 'sec-ch-ua https://9ud2s.bemobtrcks.com; sec-ch-ua-mobile https://9ud2s.bemobtrcks.com; sec-ch-ua-arch https://9ud2s.bemobtrcks.com; sec-ch-ua-model https://9ud2s.bemobtrcks.com; sec-ch-ua-platform https://9ud2s.bemobtrcks.com; sec-ch-ua-platform-version https://9ud2s.bemobtrcks.com; sec-ch-ua-bitness https://9ud2s.bemobtrcks.com; sec-ch-ua-full-version-list https://9ud2s.bemobtrcks.com; sec-ch-ua-full-version https://9ud2s.bemobtrcks.com';
    document.head.appendChild(meta);

    // Add bemobCb function
    const bemobCbScript = document.createElement('script');
    bemobCbScript.type = 'text/javascript';
    bemobCbScript.textContent = `
function bemobCb(params) {
    var t = params.trackingDomain+'/click/';
    var re = new RegExp(t+'?(\\d*)');
    var e = document.querySelectorAll('a[href*="'+t+'"]');
    for (var i = 0; i < e.length; i++) {
        var ex = re.exec(e[i].href);
        if (ex) {
            e[i].href = params.ctaSecureUrl.replace('%%OFFER_NUMBER%%', ex[1] || 1);
        }
    }
}`;
    document.head.appendChild(bemobCbScript);

    // Add bemob tracking script
    const bemobTrackingScript = document.createElement('script');
    bemobTrackingScript.type = 'text/javascript';
    bemobTrackingScript.textContent = `
!function(){var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://9ud2s.bemobtrcks.com/landing/023a181e-fd41-4ee7-b91d-9d989bfd0ed2?callback=bemobCb&rule=1&path=1&landing=1&"+window.location.search.substring(1);var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)}();`;

    // Add noscript fallback
    const noscript = document.createElement('noscript');
    const noscriptImg = document.createElement('img');
    noscriptImg.src = 'https://9ud2s.bemobtrcks.com/landing/023a181e-fd41-4ee7-b91d-9d989bfd0ed2?rule=1&path=1&landing=1';
    noscriptImg.alt = '';
    noscript.appendChild(noscriptImg);
    document.body.appendChild(noscript);

    // Add Google Ads conversion tracking event snippet for Page view conversion
    const gtagEventScript = document.createElement('script');
    gtagEventScript.type = 'text/javascript';
    gtagEventScript.textContent = `
      function gtag_report_conversion(url) {
        var callback = function () {
          if (typeof(url) != 'undefined') {
            window.location = url;
          }
        };
        gtag('event', 'conversion', {
            'send_to': 'AW-17513417585/7WoqCJDppY8bEPGWhp9B',
            'value': 1.0,
            'currency': 'EUR',
            'event_callback': callback
        });
        return false;
      }
    `;
    document.head.appendChild(gtagEventScript);

    // Cleanup: remove all added elements when component unmounts
    return () => {
      if (meta.parentNode) {
        meta.parentNode.removeChild(meta);
      }
      if (bemobCbScript.parentNode) {
        bemobCbScript.parentNode.removeChild(bemobCbScript);
      }
      if (bemobTrackingScript.parentNode) {
        bemobTrackingScript.parentNode.removeChild(bemobTrackingScript);
      }
      if (noscript.parentNode) {
        noscript.parentNode.removeChild(noscript);
      }
      if (gtagEventScript.parentNode) {
        gtagEventScript.parentNode.removeChild(gtagEventScript);
      }
    };
  }, []);

  const handleAnyClick = () => {
    toast({
      title: "Redirecting...",
      description: "You will be redirected to the exclusive offer",
    });
    
    // Lien Bemob pour la page /make-money-us avec suivi Google Ads
    if (typeof (window as any).gtag_report_conversion === 'function') {
      (window as any).gtag_report_conversion("https://9ud2s.bemobtrcks.com/click/1?ns=c%3D023a181e-fd41-4ee7-b91d-9d989bfd0ed2..l%3D2..a%3D0..b%3D0");
    } else {
      window.location.href = "https://9ud2s.bemobtrcks.com/click/1?ns=c%3D023a181e-fd41-4ee7-b91d-9d989bfd0ed2..l%3D2..a%3D0..b%3D0";
    }
  };

  const featuredOffers = [
    {
      id: 1,
      title: "Age of Coins: Master",
      reward: "4.2",
      currency: "$",
      type: "Game",
      gradient: "from-orange-400 to-red-500"
    },
    {
      id: 2,
      title: "[NEW] Solitaire Joy: Mobile",
            reward: "6.0",
      currency: "$",
      type: "Game",
      gradient: "from-green-400 to-blue-500"
    },
    {
      id: 3,
      title: "Lords Mobile: Kingdom",
      reward: "3.2",
      currency: "$",
      type: "Game", 
      gradient: "from-purple-400 to-pink-500"
    },
    {
      id: 4,
      title: "Clash Of Clans",
      reward: "4.2",
      currency: "$",
      type: "Game",
      gradient: "from-blue-400 to-indigo-500"
    }
  ];

  const availableSurveys = [
    {
      id: 1,
      title: "Consumer habits",
      description: "5 minutes • Consumer preferences",
      duration: "5 min",
      reward: "2.6",
      rating: 4.5,
      participants: 245
    },
    {
      id: 2,
      title: "Technology usage", 
      description: "8 minutes • Technology preferences",
      duration: "8 min",
      reward: "4.2",
      rating: 4.6,
      participants: 189
    },
    {
      id: 3,
      title: "Travel preferences",
      description: "10 minutes • Travel and leisure",
      duration: "10 min", 
      reward: "6.0",
      rating: 4.3,
      participants: 156
    },
    {
      id: 4,
      title: "Lifestyle and leisure",
      description: "6 minutes • Daily activities",
      duration: "6 min",
      reward: "3.2",
      rating: 4.4,
      participants: 198
    }
  ];

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-100">

      {/* Mobile version - mockup style */}
      <div className="md:hidden h-screen bg-gradient-to-br from-green-900 via-green-800 to-green-700 p-4 overflow-y-auto">
        <div className="space-y-4">
          {/* Balance Card - Like mockup */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-400/10 rounded-full -translate-y-8 translate-x-8"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-400/5 rounded-full translate-y-8 -translate-x-8"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-gray-300 text-sm">Current Balance</p>
                  <p className="text-4xl font-bold">${currentBalance}</p>
                </div>
                <Button 
                  className="bg-gradient-to-r from-green-400 to-green-500 text-gray-900 hover:from-green-300 hover:to-green-400 font-bold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-green-300 hover:border-green-200"
                  size="default"
                  onClick={handleAnyClick}
                >
                  <Gift className="w-4 h-4 mr-2" />
                  Claim Reward
                  <Sparkles className="w-3 h-3 ml-2 animate-pulse" />
                </Button>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                                     <span className="text-gray-300 text-sm">Sign up now and get $10.6</span>
                  <span className="text-white font-semibold">{progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="h-full bg-gradient-to-r from-green-400 to-green-300 rounded-full transition-all duration-300" 
                       style={{ width: `${progress}%` }} />
                </div>
              </div>
              

            </div>
          </div>
          
          {/* Featured Offers Section - Like mockup */}
          <div>
            <div className="mb-4">
              <h3 className="text-white text-xl font-bold">Featured Offers</h3>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {featuredOffers.slice(0, 3).map((offer) => (
                <Card key={offer.id} className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group" onClick={handleAnyClick}>
                  <div>
                    {offer.id === 1 ? (
                      <div className="w-full h-32 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                        <img 
                          src="/ageofcoins.jpg" 
                          alt="Age of Coins Master"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : offer.id === 2 ? (
                      <div className="w-full h-32 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                        <img 
                          src="/solitaire.jpg" 
                          alt="Solitaire Joy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : offer.id === 3 ? (
                      <div className="w-full h-32 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                        <img 
                          src="/kinglords.jpg" 
                          alt="Lords Mobile: Kingdom"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className={`w-full h-32 bg-gradient-to-br ${offer.gradient} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                        <Play className="w-8 h-8 text-white" />
                      </div>
                    )}
                    <div className="p-3">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">{offer.title}</h4>
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-green-600 font-bold text-sm">{offer.currency}{offer.reward}</p>
                      </div>
                      <Button size="sm" className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold text-xs h-7" onClick={handleAnyClick}>
                        Earn
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Featured Surveys Section - Like mockup */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Featured Surveys</h3>
            
            <div className="grid grid-cols-2 gap-3">
              {availableSurveys.map((survey) => (
                <Card key={survey.id} className="bg-white/95 backdrop-blur-sm rounded-xl p-4 hover:shadow-lg transition-all duration-300 cursor-pointer group" onClick={handleAnyClick}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{survey.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{survey.participants}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className={`w-3 h-3 ${star <= Math.floor(survey.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="text-xs text-gray-500 ml-1">({survey.participants})</span>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-lg font-bold text-green-600">${survey.reward}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>


        </div>
      </div>

      {/* Desktop version with improved layout */}
      <div className="hidden md:block max-w-7xl mx-auto p-6 h-screen overflow-hidden">
        <div className="flex space-x-6 h-full">
          {/* Left Column - Dashboard & Stats */}
          <div className="flex-1 space-y-3 pr-2">
            <h2 className="text-3xl font-bold text-white">Earn up to $13.8 by Poll!</h2>
            
            {/* User Stats Cards */}
            <div className="grid grid-cols-1 gap-3">
              <Card className="bg-gradient-to-br from-green-400 to-green-600 text-white p-4 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100 text-sm">Balance</p>
                    <p className="text-xl font-bold">${currentBalance}</p>
                  </div>
                  <DollarSign className="w-6 h-6 text-green-200" />
                </div>
              </Card>
            </div>

            {/* Balance & Progress Card */}
            <Card className="bg-white p-3 rounded-xl">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Current Balance</h3>
                    <p className="text-2xl font-bold text-green-600">${currentBalance}</p>
                  </div>
                  <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold px-6 py-3 text-base rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-green-400 hover:border-green-300" onClick={handleAnyClick}>
                    <DollarSign className="w-4 h-4 mr-2" />
                    Withdraw
                  </Button>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                                         <span className="text-gray-600 text-sm">Sign up now and get $10.6</span>
                    <span className="text-green-600 font-semibold">3/5</span>
                  </div>
                  <Progress value={60} className="h-2" />
                  <div className="text-center">
                                         <p className="text-gray-600 mb-1 text-sm">Earn $10.6 by completing the goal</p>
                    <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 p-3 rounded-lg">
                                              <p className="text-2xl font-bold text-gray-800">$47.6</p>
                      <p className="text-xs text-gray-600">Daily potential</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Main CTA Card */}
            <Card className="bg-white p-3 rounded-xl">
              <div className="space-y-2 text-center">
                <h2 className="text-lg font-bold text-gray-800">
                  Tired of filling surveys for{" "}
                  <span className="text-red-500">pennies</span>?
                </h2>
                <p className="text-base font-bold text-gray-900">
                  <span className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-2 py-1 rounded-lg shadow-md text-sm">
                    Sign up
                  </span>{" "}
                  and earn{" "}
                  <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-2 py-1 rounded-lg shadow-md text-sm">
                                         $47.6/day
                  </span>
                </p>
                
                {/* Payment Methods */}
                <div className="flex justify-center space-x-2 my-2">
                  <Badge variant="outline" className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-3 py-1 rounded-full font-medium cursor-pointer hover:scale-105 transition-transform duration-300 text-xs" onClick={handleAnyClick}>
                    <CreditCard className="w-3 h-3 mr-1" />
                    Amazon
                  </Badge>
                  <Badge variant="outline" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full font-medium cursor-pointer hover:scale-105 transition-transform duration-300 text-xs" onClick={handleAnyClick}>
                    <DollarSign className="w-3 h-3 mr-1" />
                    PayPal
                  </Badge>
                  <Badge variant="outline" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1 rounded-full font-medium cursor-pointer hover:scale-105 transition-transform duration-300 text-xs" onClick={handleAnyClick}>
                    <Shield className="w-3 h-3 mr-1" />
                    Bank Transfer
                  </Badge>
                </div>

                <Button
                  className="w-full h-10 text-sm font-bold bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 group"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={handleAnyClick}
                >
                  <Sparkles className="w-4 h-4 group-hover:animate-pulse" />
                  <span>Start earning now</span>
                  <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`} />
                </Button>
              </div>
            </Card>
          </div>

          {/* Right Column - Surveys & Offers */}
          <div className="flex-1 space-y-3 pl-2">
            {/* Available Surveys Section - PRIORITY */}
            <Card className="bg-white p-3 rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-bold text-gray-800 flex items-center">
                  <Target className="w-4 h-4 mr-2 text-blue-500" />
                  Available Surveys
                </h4>
                <Badge variant="outline" className="text-green-600 border-green-600 text-xs">
                  {availableSurveys.length} available
                </Badge>
              </div>
              
              <div className="space-y-2">
                {availableSurveys.map((survey) => (
                  <div key={survey.id} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer group" onClick={handleAnyClick}>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-800 group-hover:text-green-600 transition-colors text-sm">{survey.title}</h5>
                      <p className="text-xs text-gray-600">{survey.description}</p>
                      <div className="flex items-center space-x-3 mt-1">
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1 text-gray-400" />
                          <span className="text-xs text-gray-500">{survey.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="w-3 h-3 mr-1 text-yellow-400 fill-current" />
                          <span className="text-xs text-gray-500">{survey.rating} ({survey.participants})</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600 text-base">${survey.reward}</p>
                      <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white mt-1 group-hover:scale-105 transition-transform duration-300 text-xs h-7" onClick={handleAnyClick}>
                        Start
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <h3 className="text-xl font-bold text-white">Featured Offers</h3>
            
            {/* Featured Offers Grid - Only 2 games */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {featuredOffers.slice(0, 2).map((offer) => (
                <Card key={offer.id} className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group" onClick={handleAnyClick}>
                  <div className="p-3">
                    {offer.id === 1 ? (
                      <div className="w-full h-28 rounded-lg mb-2 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                        <img 
                          src="/ageofcoins.jpg" 
                          alt="Age of Coins Master"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : offer.id === 2 ? (
                      <div className="w-full h-28 rounded-lg mb-2 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                        <img 
                          src="/solitaire.jpg" 
                          alt="Solitaire Joy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className={`w-full h-28 bg-gradient-to-br ${offer.gradient} rounded-lg mb-2 flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                        <Play className="w-6 h-6 text-white" />
                      </div>
                    )}
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">{offer.title}</h4>
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-green-600 font-bold text-sm">{offer.currency}{offer.reward}</p>
                      <Badge variant="secondary" className="text-xs">{offer.type}</Badge>
                    </div>
                    <Button size="sm" className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold text-xs h-8" onClick={handleAnyClick}>
                      Earn
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeMoneyUs;
