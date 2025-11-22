import { useEffect } from "react";
import HeroUs from "../components/HeroUs";
import FeatureCardsUs from "../components/FeatureCardsUs";

const SurveyPollUs = () => {
  useEffect(() => {
    // Add delegate-ch meta tag for this page
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
    var re = new RegExp(t+'?(\\\\d*)');
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
    bemobTrackingScript.textContent = `!function(){var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://9ud2s.bemobtrcks.com/landing/b6193c7c-9e5c-4d77-843f-149b8f0ea64a?callback=bemobCb&rule=1&path=1&landing=1&"+window.location.search.substring(1);var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)}();`;

    // Add noscript fallback
    const noscript = document.createElement('noscript');
    const noscriptImg = document.createElement('img');
    noscriptImg.src = 'https://9ud2s.bemobtrcks.com/landing/b6193c7c-9e5c-4d77-843f-149b8f0ea64a?rule=1&path=1&landing=1';
    noscriptImg.alt = '';
    noscript.appendChild(noscriptImg);
    document.body.appendChild(noscript);

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
    };
  }, []);

  return (
    <div className="h-screen overflow-hidden bg-heycash-dark text-foreground flex flex-col">
      <HeroUs />
      <FeatureCardsUs />
    </div>
  );
};

export default SurveyPollUs;

