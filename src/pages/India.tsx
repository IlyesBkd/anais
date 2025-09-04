import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, DollarSign, TrendingUp, Users, Star, ArrowRight, Zap, Menu, Sparkles, Clock, Shield, CreditCard } from "lucide-react";
import { useToast } from "@/hooks/use-toast";



const India = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { toast } = useToast();

  // Add delegate-ch meta tag and bemob scripts only for this page
  useEffect(() => {
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
!function(){var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://9ud2s.bemobtrcks.com/landing/9a1c9d01-1091-43b3-aa26-b47659b5db3f?callback=bemobCb&rule=1&path=1&landing=1&"+window.location.search.substring(1);var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)}();`;

    // Add noscript fallback
    const noscript = document.createElement('noscript');
    const noscriptImg = document.createElement('img');
    noscriptImg.src = 'https://9ud2s.bemobtrcks.com/landing/9a1c9d01-1091-43b3-aa26-b47659b5db3f?rule=1&path=1&landing=1';
    noscriptImg.alt = '';
    noscript.appendChild(noscriptImg);
    document.body.appendChild(noscript);

    // Add Google Ads conversion tracking event snippet for "Surveoo Lead Signup"
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
            'send_to': 'AW-17453641573/FUW4COLP0oMbEOXexYJB',
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

  const handleCtaClick = () => {
    toast({
      title: "Redirecting...",
      description: "You will be redirected to the exclusive offer",
    });
    
    // Lien Bemob pour la page /india avec suivi Google Ads
    if (typeof gtag_report_conversion === 'function') {
      gtag_report_conversion("https://9ud2s.bemobtrcks.com/click/1?ns=c%3D9a1c9d01-1091-43b3-aa26-b47659b5db3f..l%3D2..a%3D0..b%3D0");
    } else {
      window.location.href = "https://9ud2s.bemobtrcks.com/click/1?ns=c%3D9a1c9d01-1091-43b3-aa26-b47659b5db3f..l%3D2..a%3D0..b%3D0";
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-400/20 to-pink-400/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="w-full max-w-md mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden md:max-w-2xl border border-white/20 relative z-10">
        <div className="md:flex">
          <div className="p-4 sm:p-6 flex flex-col items-center text-center w-full space-y-4">
            

            {/* Payment Methods with enhanced design */}
            <div className="flex justify-center space-x-3 mb-4">
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
            <div className="space-y-3">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-800 leading-tight">
                Tired of filling surveys for{" "}
                <span className="text-red-500">pennies</span>?
              </h1>
              <div className="space-y-2">
                <div className="flex flex-col items-center space-y-1">
                  <span className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-6 py-3 rounded-xl shadow-lg text-2xl font-bold">
                    Sign up
                  </span>
                  <span className="text-2xl font-bold text-gray-900">and earn</span>
                  <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-6 py-3 rounded-xl shadow-lg text-2xl font-bold">
                    ₹3800/day
                  </span>
                </div>
              </div>
            </div>

            {/* Enhanced Features with icons */}
            <div className="w-full space-y-2 text-left text-gray-700">
              <Card className="flex items-center p-3 rounded-xl shadow-md bg-gradient-to-r from-white to-gray-50 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="p-2 bg-green-100 rounded-lg mr-3">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="font-medium text-sm">No minimum payout</span>
              </Card>
              <Card className="flex items-center p-3 rounded-xl shadow-md bg-gradient-to-r from-white to-gray-50 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="p-2 bg-blue-100 rounded-lg mr-3">
                  <Clock className="w-4 h-4 text-blue-600" />
                </div>
                <span className="font-medium text-sm">Instant payouts</span>
              </Card>
              <Card className="flex items-center p-3 rounded-xl shadow-md bg-gradient-to-r from-white to-gray-50 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="p-2 bg-purple-100 rounded-lg mr-3">
                  <Shield className="w-4 h-4 text-purple-600" />
                </div>
                <span className="font-medium text-sm">Secure platform</span>
              </Card>
            </div>

            {/* Enhanced Call to Action Button */}
            <Button
              className="w-full h-12 text-base font-bold bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3 mt-4 group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handleCtaClick}
            >
              <Sparkles className="w-5 h-5 group-hover:animate-pulse" />
              <span>Start earning now</span>
              <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`} />
            </Button>

            {/* Enhanced Footer/Trust Indicators */}
            <div className="text-sm text-gray-600 mt-4 space-y-2">
              <p className="font-medium text-xs">Join +15,000 members earning daily</p>
              <div className="flex items-center justify-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className="w-3 h-3 text-yellow-400 fill-current" 
                  />
                ))}
                <span className="ml-2 text-gray-500 text-xs">(2,847 reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default India;
