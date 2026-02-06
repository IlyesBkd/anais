import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight,
  Clock,
  Star,
  Users,
  Shield,
  CheckCircle2,
  Award,
  Timer,
  BarChart3,
  Globe,
  Wallet,
  MessageSquare,
  ChevronRight,
  BadgeCheck
} from "lucide-react";

 const GOOGLE_ADS_CONVERSION_SEND_TO = "AW-17857724447/0ILFCJ_oufMbEJ-AncNC";
 
const HeyCash = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    document.title = "LifePoints – Deine Meinung zählt. Werde belohnt.";
    
    // Google tag (gtag.js)
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=AW-17857724447';
    document.head.appendChild(script1);

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
      if (script1.parentNode) script1.parentNode.removeChild(script1);
      if (script2.parentNode) script2.parentNode.removeChild(script2);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSignUp = () => {
    const url = "https://9ud2s.bemobtrcks.com/click/1?ns=c%3Dd095771b-9969-428f-96e5-bc7688bd9795..l%3D2..a%3D0..b%3D0";

    const gtag = (window as any)?.gtag as ((...args: any[]) => void) | undefined;

    if (typeof gtag === "function") {
      gtag("event", "conversion", {
        send_to: GOOGLE_ADS_CONVERSION_SEND_TO,
        value: 1.0,
        currency: "EUR",
        event_callback: () => window.open(url, "_blank"),
      });
      setTimeout(() => window.open(url, "_blank"), 800);
      return;
    }

    window.open(url, "_blank");
  };

  const testimonials = [
    {
      name: "Anna M.",
      location: "Berlin",
      text: "Ich nutze LifePoints seit 3 Monaten und habe bereits 240 € ausgezahlt bekommen. Die Umfragen sind kurz und einfach!",
      rating: 5,
      avatar: "A"
    },
    {
      name: "Thomas K.",
      location: "München",
      text: "Endlich eine seriöse Plattform! Auszahlung innerhalb von 24 Stunden. Kann ich nur weiterempfehlen.",
      rating: 5,
      avatar: "T"
    },
    {
      name: "Sarah L.",
      location: "Hamburg",
      text: "Perfekt für nebenbei – in der Bahn oder auf dem Sofa. Habe letzten Monat über 80 € verdient.",
      rating: 4,
      avatar: "S"
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Kostenlos registrieren",
      description: "Erstelle dein Profil in weniger als 60 Sekunden. Keine Kreditkarte erforderlich.",
      icon: BadgeCheck
    },
    {
      number: "2",
      title: "Umfragen beantworten",
      description: "Wähle aus verfügbaren Umfragen und teile deine Meinung zu Produkten und Marken.",
      icon: MessageSquare
    },
    {
      number: "3",
      title: "Belohnungen erhalten",
      description: "Sammle Punkte und tausche sie gegen Bargeld, Gutscheine oder PayPal-Guthaben ein.",
      icon: Wallet
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-100 px-4 sm:px-6 lg:px-8 py-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">LifePoints</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
            <span className="flex items-center gap-1"><Globe className="w-4 h-4" /> 2 Mio.+ Mitglieder</span>
            <span className="flex items-center gap-1"><Shield className="w-4 h-4 text-blue-600" /> SSL-verschlüsselt</span>
          </div>
          <Button 
            onClick={handleSignUp}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg text-sm transition-colors"
          >
            Jetzt anmelden
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-5 bg-blue-100 text-blue-700 border-blue-200 px-3 py-1 text-xs font-semibold tracking-wide uppercase">
                Vertraut von über 2 Millionen Nutzern
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold mb-6 text-gray-900 leading-[1.15] tracking-tight">
                Deine Meinung ist <span className="text-blue-600">bares Geld</span> wert.
              </h1>
              
              <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed max-w-xl">
                Beantworte kurze Umfragen zu Produkten und Marken, die du kennst – und werde dafür belohnt. Seriös, kostenlos und jederzeit auszahlbar.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  onClick={handleSignUp}
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-10 py-6 rounded-xl font-bold shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 transform hover:scale-[1.02] transition-all duration-200 group"
                >
                  Kostenlos registrieren
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Keine Kreditkarte nötig</span>
                </div>
              </div>

              {/* Trust row */}
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-blue-600" />
                  DSGVO-konform
                </span>
                <span className="flex items-center gap-1.5">
                  <Timer className="w-4 h-4 text-blue-600" />
                  Auszahlung in 24h
                </span>
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-blue-600" />
                  100% kostenlos
                </span>
              </div>
            </div>

            {/* Right side - Stats card */}
            <div className="relative">
              <Card className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 relative z-10">
                <div className="text-center mb-6">
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">Bereits ausgezahlt</p>
                  <p className="text-5xl font-extrabold text-gray-900">2,5 Mio. €</p>
                  <p className="text-sm text-gray-400 mt-1">an unsere Community</p>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-blue-50 rounded-xl">
                    <p className="text-2xl font-bold text-blue-600">2M+</p>
                    <p className="text-xs text-gray-500 mt-1">Mitglieder</p>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-xl">
                    <p className="text-2xl font-bold text-green-600">4.8</p>
                    <p className="text-xs text-gray-500 mt-1 flex items-center justify-center gap-0.5">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /> Bewertung
                    </p>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-xl">
                    <p className="text-2xl font-bold text-purple-600">24h</p>
                    <p className="text-xs text-gray-500 mt-1">Auszahlung</p>
                  </div>
                </div>
                <Button 
                  onClick={handleSignUp}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl text-base transition-colors"
                >
                  Jetzt kostenlos starten
                  <ChevronRight className="w-5 h-5 ml-1" />
                </Button>
                <p className="text-center text-xs text-gray-400 mt-3">Anmeldung dauert weniger als 60 Sekunden</p>
              </Card>
              {/* Decorative blobs */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-100 rounded-full blur-2xl opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-indigo-100 rounded-full blur-2xl opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-gray-100 text-gray-700 border-gray-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
              So einfach geht's
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              In 3 Schritten zu deiner ersten Belohnung
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Kein Haken, keine versteckten Kosten. Registriere dich, beantworte Umfragen und werde bezahlt.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative group">
                  <Card className="bg-white border border-gray-100 rounded-2xl p-8 text-center hover:shadow-lg hover:border-blue-100 transition-all duration-300 h-full">
                    <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Schritt {step.number}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{step.description}</p>
                  </Card>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ChevronRight className="w-6 h-6 text-gray-300" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-green-100 text-green-700 border-green-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
              Echte Erfahrungen
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Was unsere Mitglieder sagen
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Über 2 Millionen zufriedene Nutzer vertrauen LifePoints
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <Card 
                key={index} 
                className={`bg-white border rounded-2xl p-6 transition-all duration-300 ${
                  index === activeTestimonial ? 'border-blue-200 shadow-lg scale-[1.02]' : 'border-gray-100 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < t.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-5 leading-relaxed italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">{t.avatar}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.location}</p>
                  </div>
                  <BadgeCheck className="w-5 h-5 text-blue-500 ml-auto" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Earning Breakdown */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Verdienstmöglichkeiten
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Verschiedene Wege, Punkte zu sammeln – wähle, was zu dir passt
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Surveys */}
            <Card className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="bg-blue-50 p-6 text-center">
                <MessageSquare className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-900">Umfragen</h3>
                <p className="text-sm text-gray-500 mt-1">2–15 Minuten pro Umfrage</p>
              </div>
              <div className="p-6">
                <div className="text-center mb-4">
                  <span className="text-3xl font-extrabold text-gray-900">0,50 € – 6,00 €</span>
                  <p className="text-sm text-gray-400 mt-1">pro abgeschlossener Umfrage</p>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Neue Umfragen täglich verfügbar
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Themen, die dich interessieren
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Sofortige Gutschrift der Punkte
                  </li>
                </ul>
                <Button 
                  onClick={handleSignUp}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl py-3 transition-colors"
                >
                  Umfragen starten
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>

            {/* Product Tests */}
            <Card className="border-2 border-blue-200 rounded-2xl overflow-hidden shadow-lg relative group">
              <div className="absolute top-4 right-4">
                <Badge className="bg-blue-600 text-white text-xs font-bold px-2 py-0.5">Beliebt</Badge>
              </div>
              <div className="bg-blue-600 p-6 text-center">
                <BarChart3 className="w-10 h-10 text-white mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white">Produkttests</h3>
                <p className="text-sm text-blue-100 mt-1">Teste Produkte und bewerte sie</p>
              </div>
              <div className="p-6">
                <div className="text-center mb-4">
                  <span className="text-3xl font-extrabold text-gray-900">1,00 € – 25,00 €</span>
                  <p className="text-sm text-gray-400 mt-1">pro abgeschlossenem Test</p>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Exklusive Produkte vorab testen
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Höhere Vergütung als Umfragen
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Kostenlose Produktproben
                  </li>
                </ul>
                <Button 
                  onClick={handleSignUp}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl py-3 transition-colors"
                >
                  Jetzt testen
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>

            {/* Daily Rewards */}
            <Card className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="bg-purple-50 p-6 text-center">
                <Wallet className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-900">Tägliche Aufgaben</h3>
                <p className="text-sm text-gray-500 mt-1">Kleine Aufgaben, schnelle Belohnungen</p>
              </div>
              <div className="p-6">
                <div className="text-center mb-4">
                  <span className="text-3xl font-extrabold text-gray-900">0,10 € – 3,00 €</span>
                  <p className="text-sm text-gray-400 mt-1">pro abgeschlossener Aufgabe</p>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Tägliche Login-Boni
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Schnelle 1-Minuten-Aufgaben
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Bonus-Punkte für Treue
                  </li>
                </ul>
                <Button 
                  onClick={handleSignUp}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl py-3 transition-colors"
                >
                  Aufgaben ansehen
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust & Security Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <Shield className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-bold text-gray-900 mb-1">SSL-verschlüsselt</h4>
              <p className="text-sm text-gray-500">Deine Daten sind sicher geschützt</p>
            </div>
            <div className="p-6">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-bold text-gray-900 mb-1">2 Mio.+ Nutzer</h4>
              <p className="text-sm text-gray-500">Weltweit vertraut</p>
            </div>
            <div className="p-6">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-bold text-gray-900 mb-1">Schnelle Auszahlung</h4>
              <p className="text-sm text-gray-500">Innerhalb von 24 Stunden</p>
            </div>
            <div className="p-6">
              <CheckCircle2 className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-bold text-gray-900 mb-1">DSGVO-konform</h4>
              <p className="text-sm text-gray-500">Datenschutz nach EU-Standard</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">
            Bereit, deine Meinung in Geld zu verwandeln?
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Werde Teil von über 2 Millionen Nutzern, die bereits mit LifePoints Geld verdienen. Die Anmeldung ist kostenlos und dauert weniger als eine Minute.
          </p>
          <Button 
            onClick={handleSignUp}
            size="lg"
            className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-12 py-6 rounded-xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-200 group"
          >
            Jetzt kostenlos anmelden
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-blue-200">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Kostenlos</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Keine Kreditkarte</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Jederzeit kündbar</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-bold">LifePoints</span>
          </div>
          <p className="text-sm text-center md:text-left">© 2026 LifePoints. Alle Rechte vorbehalten. Datenschutz & Impressum.</p>
          <div className="flex gap-4 text-xs">
            <span className="hover:text-white cursor-pointer transition-colors">Datenschutz</span>
            <span className="hover:text-white cursor-pointer transition-colors">AGB</span>
            <span className="hover:text-white cursor-pointer transition-colors">Impressum</span>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default HeyCash;
