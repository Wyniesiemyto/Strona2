import React, { useState } from 'react';
import { OptimizedImage  } from '@/components/OptimizedImage';



import { 
  Phone, 
  Mail, 
  MapPin, 
  Truck, 
  Home, 
  Trash2, 
  Hammer, 
  Clock, 
  Shield, 
  Users,
  Star,
  Menu,
  X,
  ArrowRight,
  FileText,
  ExternalLink
} from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import CookieBanner from '@/components/CookieBanner';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      {/* Cookie Banner */}
      <CookieBanner />
      
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Truck className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold text-gray-900">WyniesiemyTo</span>
            </div>
            
            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-orange-600 transition">Usługi</button>
              <button onClick={() => scrollToSection('why-us')} className="text-gray-700 hover:text-orange-600 transition">O nas</button>
              <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-orange-600 transition">Opinie</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-orange-600 transition">Kontakt</button>
              <a href="tel:504729105" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition font-medium">
                Zadzwoń
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3">
                <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-orange-600 transition text-left">Usługi</button>
                <button onClick={() => scrollToSection('why-us')} className="text-gray-700 hover:text-orange-600 transition text-left">O nas</button>
                <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-orange-600 transition text-left">Opinie</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-orange-600 transition text-left">Kontakt</button>
                <a href="tel:531124500" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition font-medium text-center">
                  Zadzwoń
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

     {/* Hero Section */}
{/* Hero Section */}
<section className="relative pt-16 pb-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <div className="mb-8">
        <Truck className="h-20 w-20 text-orange-500 mx-auto mb-4" />
      </div>
      
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
        Wynosimy Twoje problemy!
      </h1>
      
      <p className="text-xl md:text-2xl text-gray-600 mb-4">
        Profesjonalne usługi przeprowadzkowe, transport i wywóz w Żorach i okolicy.
      </p>
      <p className="text-lg md:text-xl font-semibold text-orange-600 mb-12">
        <strong>Szybko, uczciwie i w dobrej cenie.</strong>
      </p>

      {/* Duży przycisk Darmowa wycena */}
      <div className="flex justify-center mb-4">
        <button
          onClick={() => scrollToSection('contact')}
          className="flex items-center justify-center w-full sm:w-[492px] bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-2xl text-xl transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Darmowa wycena
          <ArrowRight className="h-6 w-6 ml-3" />
        </button>
      </div>

      {/* Dwa przyciski telefoniczne */}
      <div className="flex justify-center gap-4">
        <a
          href="tel:504729105"
          className="flex items-center bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium py-3 px-6 rounded-xl text-lg transition duration-300 shadow-sm hover:shadow-md"
        >
          <Phone className="h-5 w-5 mr-2" />
          504 729 105
        </a>
        <a
          href="tel:798598993"
          className="flex items-center bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium py-3 px-6 rounded-xl text-lg transition duration-300 shadow-sm hover:shadow-md"
        >
          <Phone className="h-5 w-5 mr-2" />
          798 598 993
        </a>
      </div>

      <p className="text-gray-700 text-lg mt-4">
        <strong>Właściciele:</strong> Kacper Zagermann / Patryk Sylwerski
      </p>
    </div>
  </div>
</section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nasze Usługi</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kompleksowa obsługa w zakresie przeprowadzek, transportu i porządkowania
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Home className="h-12 w-12 text-orange-500" />,
                title: "Wynoszenie mebli i rzeczy",
                description: "Profesjonalne wynoszenie mebli, AGD i innych przedmiotów z każdego piętra. Bezpiecznie i szybko."
              },
              {
                icon: <Truck className="h-12 w-12 text-orange-500" />,
                title: "Przeprowadzki",
                description: "Kompleksowe przeprowadzki mieszkań, domów i biur. Od pakowania po ustawienie w nowym miejscu."
              },
              {
                icon: <Trash2 className="h-12 w-12 text-orange-500" />,
                title: "Wywóz śmieci do PSZOK",
                description: "Odbieramy i wieziemy odpady do Punktu Selektywnej Zbiórki Odpadów. All-inclusive."
              },
              {
                icon: <Hammer className="h-12 w-12 text-orange-500" />,
                title: "Rozbiórki i opróżnianie",
                description: "Profesjonalne rozbiórki i opróżnianie pomieszczeń. Zostawiamy przestrzeń gotową do remontu."
              },
              {
                icon: <Clock className="h-12 w-12 text-orange-500" />,
                title: "Ekspresowa obsługa",
                description: "W nagłych przypadkach jesteśmy w stanie przyjechać tego samego dnia. Dzwonisz - jedziemy!"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-24 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Dlaczego wybierają nas?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To, co wyróżnia nas na rynku usług transportowych
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Shield className="h-12 w-12 text-orange-500" />,
                title: "Uczciwa wycena",
                description: "Bez ukrytych kosztów i dopłat. Cena ustalona na początku to cena końcowa. Słowo dajemy!"
              },
              {
                icon: <Clock className="h-12 w-12 text-orange-500" />,
                title: "Szybki czas reakcji",
                description: "Odbieramy telefon, przyjeżdżamy punktualnie. W nagłych przypadkach - tego samego dnia."
              },
              {
                icon: <Users className="h-12 w-12 text-orange-500" />,
                title: "Dojazd do klienta",
                description: "Przyjeżdżamy na miejsce, oceniamy sytuację i przedstawiamy konkretną ofertę. Bez zobowiązań."
              }
            ].map((feature, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-2xl shadow-lg">
                <div className="mb-6 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center bg-white p-12 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Nasze motto</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              "Traktujemy każdą przeprowadzkę jak swoją własną. Jesteśmy tutaj, żeby pomóc - po sąsiedzku, uczciwie i profesjonalnie."
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Co mówią nasi klienci</h2>
            <p className="text-xl text-gray-600">Opinie osób, które nam zaufały</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Anna Młynek",
                location: "Żory",
                rating: 5,
                text: "Fantastyczna ekipa! Przeprowadzka przebiegła sprawnie i bez stresu. Chłopaki są bardzo pomocni i punktualni. Polecam z całego serca!"
              },
              {
                name: "Marcin Gajewski",
                location: "Rybnik",
                rating: 5,
                text: "Wyniesienie starej kanapy z 4 piętra to nie lada wyzwanie, ale panowie poradzili sobie bez problemu. Szybko, tanio i profesjonalnie."
              },
              {
                name: "Magdalena Wiśniewska",
                location: "Jastrzębie-Zdrój",
                rating: 5,
                text: "Opróżnili cały strych w rekordowym czasie. Wszystko wynieśli, posprzątali i wywieźli niepotrzebne rzeczy do PSZOK. Super serwis!"
              }
            ].map((review, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{review.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-gray-600 text-sm">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skontaktuj się z nami</h2>
            <p className="text-xl text-gray-600">Zadzwoń lub napisz - odpowiemy szybko!</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <ContactForm />
            
            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Dane kontaktowe</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-orange-500" />
                    <div>
                      <p className="font-medium text-gray-900">Telefony</p>
                      <p className="text-gray-600">
                        504 729 105
                        <span className="mx-2">•</span>
                        798 598 993
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-orange-500" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a href="mailto:wyniesiemyto@gmail.com" className="text-orange-600 hover:text-orange-700">
                        wyniesiemyto@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-orange-500" />
                    <div>
                      <p className="font-medium text-gray-900">Lokalizacja</p>
                      <p className="text-gray-600">Żory i okolice</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-orange-500" />
                    <div>
                      <p className="font-medium text-gray-900">Właściciele</p>
                      <p className="text-gray-600">Kacper Zagermann / Patryk Sylwerski</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="bg-white p-2 rounded-2xl shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41325.89219986205!2d18.6266159!3d50.0472273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716f3c0c8fa1f75%3A0x4009e8c4b2c8b20e!2s44-240%20%C5%BBory!5e0!3m2!1spl!2spl!4v1635000000000!5m2!1spl!2spl"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa Żory"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Truck className="h-8 w-8 text-orange-500" />
                <span className="text-2xl font-bold">WyniesiemyTo</span>
              </div>
              <p className="text-gray-400">
                Profesjonalne usługi przeprowadzkowe i transportowe w Żorach i okolicy.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
              <div className="space-y-2 text-gray-400">
                <p>504 729 105</p>
                <p>798 598 993</p>
                <p>wyniesiemyto@gmail.com</p>
                <p>Żory i okolice</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Usługi</h3>
              <div className="space-y-2 text-gray-400">
                <p>Przeprowadzki</p>
                <p>Wynoszenie mebli</p>
                <p>Wywóz do PSZOK</p>
                <p>Rozbiórki</p>
                <p>Transport</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Dokumenty prawne</h3>
              <div className="space-y-2">
                <a 
                  href="/polityka-prywatnosci" 
                  className="text-gray-400 hover:text-orange-400 transition flex items-center gap-1"
                >
                  <FileText size={16} />
                  Polityka Prywatności
                </a>
                <a 
                  href="/regulamin" 
                  className="text-gray-400 hover:text-orange-400 transition flex items-center gap-1"
                >
                  <FileText size={16} />
                  Regulamin
                </a>
                <a 
                  href="/polityka-cookies" 
                  className="text-gray-400 hover:text-orange-400 transition flex items-center gap-1"
                >
                  <FileText size={16} />
                  Polityka Cookies
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm">
                <p>© 2025 WyniesiemyTo. Wszystkie prawa zastrzeżone. Kacper Zagermann / Patryk Sylwerski</p>

              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
