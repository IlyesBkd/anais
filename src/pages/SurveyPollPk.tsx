import { useEffect } from "react";
import HeroPk from "../components/HeroPk";
import FeatureCardsPk from "../components/FeatureCardsPk";

const SurveyPollPk = () => {
  useEffect(() => {
    // Google tag (gtag.js) for Pakistan page
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=AW-17742555886';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.textContent = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-17742555886');
    `;
    document.head.appendChild(script2);

    // Event snippet for Page view (1) conversion page
    const script3 = document.createElement('script');
    script3.textContent = `
      function gtag_report_conversion(url) {
        var callback = function () {
          if (typeof(url) != 'undefined') {
            window.location = url;
          }
        };
        gtag('event', 'conversion', {
            'send_to': 'AW-17742555886/z-zFCN7izcIbEO7Vp4xC',
            'value': 1.0,
            'currency': 'EUR',
            'event_callback': callback
        });
        return false;
      }
    `;
    document.head.appendChild(script3);

    // Cleanup: remove scripts when component unmounts
    return () => {
      if (script1.parentNode) {
        script1.parentNode.removeChild(script1);
      }
      if (script2.parentNode) {
        script2.parentNode.removeChild(script2);
      }
      if (script3.parentNode) {
        script3.parentNode.removeChild(script3);
      }
    };
  }, []);

  return (
    <div className="h-screen overflow-hidden bg-heycash-dark text-foreground flex flex-col">
      <HeroPk />
      <FeatureCardsPk />
    </div>
  );
};

export default SurveyPollPk;

