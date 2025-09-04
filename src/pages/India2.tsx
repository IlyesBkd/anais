import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, DollarSign, TrendingUp, Users, Star, ArrowRight, Zap, Menu, Sparkles, Clock, Shield, CreditCard } from "lucide-react";
import { useToast } from "@/hooks/use-toast";



const India2 = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { toast } = useToast();

  const handleCtaClick = () => {
    toast({
      title: "Redirecting...",
      description: "You will be redirected to the exclusive offer",
    });
    
    // Lien d'affiliation pour la page /india2
    window.location.href = "https://afflat3d3.com/trk/lnk/895E33EB-DA15-472C-9258-4221C5BE41C1/?o=28224&c=918273&a=277245&k=578AC6CCBA91C68601950B50135B7711&l=30960&s1=india2";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-100">
      {/* Header */}
      <header className="bg-gray-900 text-white p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-green-500 text-black px-2 py-1 rounded font-bold text-sm">5</div>
            <span className="text-xl font-semibold">surveys</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-3a1 1 0 011-1h2a1 1 0 011 1v3a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              <span>Home</span>
            </div>
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Surveys</span>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile version - centered card */}
      <div className="md:hidden min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-400/20 to-pink-400/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="w-full max-w-md mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/20 relative z-10">
          <div className="p-6 flex flex-col items-center text-center w-full space-y-6">
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
                Tired of filling surveys for{" "}
                <span className="text-red-500">pennies</span>?
              </h1>
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-2 space-y-1 sm:space-y-0">
                  <span className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-3 py-1 rounded-lg shadow-md text-lg font-bold">
                    Sign up
                  </span>
                  <span className="text-xl font-bold text-gray-900">and earn</span>
                  <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1 rounded-lg shadow-md text-lg font-bold">
                    ₹3800/day
                  </span>
                </div>
              </div>
            </div>

            {/* Enhanced Features with icons */}
            <div className="w-full space-y-3 text-left text-gray-700">
              <Card className="flex items-center p-4 rounded-xl shadow-md bg-gradient-to-r from-white to-gray-50 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="p-2 bg-green-100 rounded-lg mr-3">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <span className="font-medium">No minimum payout</span>
              </Card>
              <Card className="flex items-center p-4 rounded-xl shadow-md bg-gradient-to-r from-white to-gray-50 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="p-2 bg-blue-100 rounded-lg mr-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <span className="font-medium">Instant payouts</span>
              </Card>
              <Card className="flex items-center p-4 rounded-xl shadow-md bg-gradient-to-r from-white to-gray-50 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="p-2 bg-purple-100 rounded-lg mr-3">
                  <Shield className="w-5 h-5 text-purple-600" />
                </div>
                <span className="font-medium">Secure platform</span>
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
              <span>Start earning now</span>
              <ArrowRight className={`w-6 h-6 transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`} />
            </Button>

            {/* Enhanced Footer/Trust Indicators */}
            <div className="text-sm text-gray-600 mt-6 space-y-3">
              <p className="font-medium">Join +15,000 members earning daily</p>
              <div className="flex items-center justify-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className="w-4 h-4 text-yellow-400 fill-current" 
                  />
                ))}
                <span className="ml-2 text-gray-500">(2,847 reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop version with two-column layout */}
      <div className="hidden md:block max-w-7xl mx-auto p-6">
        <div className="flex space-x-6">
          {/* Left Column - Dashboard */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold text-white">Dashboard</h2>
            
            {/* User Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="bg-gradient-to-br from-green-400 to-green-600 text-white p-6 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100">Today's Earnings</p>
                    <p className="text-2xl font-bold">₹245</p>
                  </div>
                  <DollarSign className="w-8 h-8 text-green-200" />
                </div>
              </Card>
              
              <Card className="bg-gradient-to-br from-blue-400 to-blue-600 text-white p-6 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100">Surveys Completed</p>
                    <p className="text-2xl font-bold">12</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-blue-200" />
                </div>
              </Card>
              
              <Card className="bg-gradient-to-br from-purple-400 to-purple-600 text-white p-6 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-100">Total Earned</p>
                    <p className="text-2xl font-bold">₹12,450</p>
                  </div>
                  <Users className="w-8 h-8 text-purple-200" />
                </div>
              </Card>
            </div>

            {/* Progress Card */}
            <Card className="bg-white p-6 rounded-2xl">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800">Daily Goal Progress</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Complete 5 surveys</span>
                    <span className="text-green-600 font-semibold">2/5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                  <div className="text-center space-y-2">
                    <p className="text-gray-600">Earn ₹400 for completing goal</p>
                    <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 p-3 rounded-lg">
                      <p className="text-3xl font-bold">₹3,800</p>
                    </div>
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-3 rounded-xl">
                      Claim Reward
                    </Button>
                    <div className="space-y-2">
                      <p className="text-gray-400 text-sm">Complete 5 surveys and get ₹5</p>
                      <div className="flex space-x-1 justify-center">
                        <div className="w-8 h-2 bg-green-500 rounded"></div>
                        <div className="w-8 h-2 bg-green-500 rounded"></div>
                        <div className="w-8 h-2 bg-gray-600 rounded"></div>
                        <div className="w-8 h-2 bg-gray-600 rounded"></div>
                        <div className="w-8 h-2 bg-gray-600 rounded"></div>
                      </div>
                      <p className="text-right text-green-400 font-bold">₹5.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Main CTA */}
            <Card className="bg-white p-6 rounded-2xl">
              <div className="space-y-4 text-center">
                <h2 className="text-2xl font-bold text-gray-800">
                  Tired of filling surveys for{" "}
                  <span className="text-red-500">pennies</span>?
                </h2>
                <p className="text-2xl font-bold text-gray-900">
                  <span className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-3 py-1 rounded-lg shadow-md">
                    Sign up
                  </span>{" "}
                  and earn{" "}
                  <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1 rounded-lg shadow-md">
                    ₹3800/day
                  </span>
                </p>
                
                {/* Payment Methods */}
                <div className="flex justify-center space-x-3 my-4">
                  <Badge variant="outline" className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5.5 21h13c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-13c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2zm0-16h13v14h-13V5z"/>
                    </svg>
                    Amazon
                  </Badge>
                  <Badge variant="outline" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                    </svg>
                    PayPal
                  </Badge>
                  <Badge variant="outline" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1 rounded-full text-xs font-medium">
                    <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M2 5v14h20V5H2zm18 12H4V7h16v10z"/>
                    </svg>
                    Bank
                  </Badge>
                </div>

                <Button
                  className="w-full h-14 text-lg font-bold bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3 group"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={handleCtaClick}
                >
                  <Sparkles className="w-6 h-6 group-hover:animate-pulse" />
                  <span>Start earning now</span>
                  <ArrowRight className={`w-6 h-6 transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`} />
                </Button>
              </div>
            </Card>
          </div>

          {/* Right Column - Featured Offers */}
          <div className="flex-1 space-y-6">
            <h3 className="text-2xl font-bold text-white">Featured Offers</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Game Offers */}
              <Card className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={handleCtaClick}>
                <div className="p-4">
                  <div className="w-full h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg mb-3 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Age of Coins</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">Age of Coins Master</h4>
                  <p className="text-green-600 font-bold">₹410 <span className="text-gray-500 text-sm">USD</span></p>
                </div>
              </Card>

              <Card className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={handleCtaClick}>
                <div className="p-4">
                  <div className="w-full h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg mb-3 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Solitaire Joy</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">Solitaire Joy</h4>
                  <p className="text-green-600 font-bold">₹900 <span className="text-gray-500 text-sm">USD</span></p>
                </div>
              </Card>

              <Card className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={handleCtaClick}>
                <div className="p-4">
                  <div className="w-full h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg mb-3 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Survey Pro</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">High-Paying Surveys</h4>
                  <p className="text-green-600 font-bold">₹1,500 <span className="text-gray-500 text-sm">USD</span></p>
                </div>
              </Card>

              <Card className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={handleCtaClick}>
                <div className="p-4">
                  <div className="w-full h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg mb-3 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Quick Tasks</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">Micro Tasks</h4>
                  <p className="text-green-600 font-bold">₹250 <span className="text-gray-500 text-sm">USD</span></p>
                </div>
              </Card>
            </div>

            {/* Quick Survey Section */}
            <Card className="bg-white p-6 rounded-xl">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Available Surveys</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer" onClick={handleCtaClick}>
                  <div>
                    <h5 className="font-semibold text-gray-800">Shopping Habits Survey</h5>
                    <p className="text-sm text-gray-600">5 minutes • Consumer Preferences</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-600">₹120</p>
                    <p className="text-xs text-gray-500">Est. time: 5 min</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer" onClick={handleCtaClick}>
                  <div>
                    <h5 className="font-semibold text-gray-800">Technology Usage Survey</h5>
                    <p className="text-sm text-gray-600">8 minutes • Tech Preferences</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-600">₹200</p>
                    <p className="text-xs text-gray-500">Est. time: 8 min</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer" onClick={handleCtaClick}>
                  <div>
                    <h5 className="font-semibold text-gray-800">Travel Preferences Survey</h5>
                    <p className="text-sm text-gray-600">10 minutes • Travel & Leisure</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-600">₹300</p>
                    <p className="text-xs text-gray-500">Est. time: 10 min</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default India2;