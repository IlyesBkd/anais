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

    // Cleanup: remove scripts when component unmounts
    return () => {
      if (script1.parentNode) {
        script1.parentNode.removeChild(script1);
      }
      if (script2.parentNode) {
        script2.parentNode.removeChild(script2);
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

