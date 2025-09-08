import React, { useState } from 'react';
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
  CheckCircle,
  ArrowRight,
  AlertCircle
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const validateForm = () => {
    if (!formData.name.trim()) {
      alert('Proszę podać imię i nazwisko');
      return false;
    }
    if (!formData.phone.trim()) {
      alert('Proszę podać numer telefonu');
      return false;
    }
    if (!formData.message.trim()) {
      alert('Proszę napisać wiadomość');
      return false;
    }
    
    // Basic phone validation
    const phoneRegex = /^[+]?[\d\s\-()]{9,}$/;
    if (!phoneRegex.test(formData.phone.trim())) {
      alert('Proszę podać prawidłowy numer telefonu');
      return false;
    }
    
    return true;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Send via Formspree with enhanced data
      const response = await fetch('https://formspree.io/f/xdkogkvo', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: `🚚 Nowe zgłoszenie od ${formData.name} - WyniesiemyTo.pl`,
          name: formData.name,
          phone: formData.phone,
          message: formData.message,
          _replyto: `noreply@wyniesiemyto.pl`,
          _subject: `🚚 Nowe zgłoszenie od ${formData.name}`,
          _format: 'plain',
          timestamp: new Date().toLocaleString('pl-PL', { 
            timeZone: 'Europe/Warsaw' 
          }),
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', message: '' });
        
        // Auto-hide success message after 8 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 8000);
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('Formspree error:', errorData);
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Network error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Truck className="h-8 w-8 text-orange-500 mr-3" />
              <span className="text-xl font-bold text-gray-900">WyniesiemyTo.pl</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <button onClick={() => scrollToSection('home')} className="hover:text-orange-500 px-3 py-2 text-sm font-medium text-gray-700 transition duration-200">Start</button>
                <button onClick={() => scrollToSection('services')} className="hover:text-orange-500 px-3 py-2 text-sm font-medium text-gray-700 transition duration-200">Usługi</button>
                <button onClick={() => scrollToSection('why-us')} className="hover:text-orange-500 px-3 py-2 text-sm font-medium text-gray-700 transition duration-200">Dlaczego my</button>
                <button onClick={() => scrollToSection('reviews')} className="hover:text-orange-500 px-3 py-2 text-sm font-medium text-gray-700 transition duration-200">Opinie</button>
                <button onClick={() => scrollToSection('contact')} className="hover:text-orange-500 px-3 py-2 text-sm font-medium text-gray-700 transition duration-200">Kontakt</button>
                <a href="tel:531124500" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-200">
                  531 124 500
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-900 hover:text-orange-500 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg border-t">
              <button onClick={() => scrollToSection('home')} className="block hover:text-orange-500 hover:bg-orange-50 px-3 py-2 text-base font-medium w-full text-left text-gray-700 rounded">Start</button>
              <button onClick={() => scrollToSection('services')} className="block hover:text-orange-500 hover:bg-orange-50 px-3 py-2 text-base font-medium w-full text-left text-gray-700 rounded">Usługi</button>
              <button onClick={() => scrollToSection('why-us')} className="block hover:text-orange-500 hover:bg-orange-50 px-3 py-2 text-base font-medium w-full text-left text-gray-700 rounded">Dlaczego my</button>
              <button onClick={() => scrollToSection('reviews')} className="block hover:text-orange-500 hover:bg-orange-50 px-3 py-2 text-base font-medium w-full text-left text-gray-700 rounded">Opinie</button>
              <button onClick={() => scrollToSection('contact')} className="block hover:text-orange-500 hover:bg-orange-50 px-3 py-2 text-base font-medium w-full text-left text-gray-700 rounded">Kontakt</button>
              <a href="tel:531124500" className="block bg-orange-500 text-white px-3 py-2 text-base font-medium rounded mx-3 mt-2 text-center">
                Zadzwoń: 531 124 500
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-orange-50 via-white to-gray-50 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-500 rounded-full mb-6">
                <Truck className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-orange-500">Wynosimy</span><br />
                Twoje problemy!
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Profesjonalne usługi przeprowadzkowe, transport i wywóz w Żorach i okolicy. 
              <br className="hidden md:block" />
              <strong>Szybko, uczciwie i w dobrej cenie.</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a 
                href="tel:531124500" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition duration-300 flex items-center gap-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <Phone className="h-6 w-6" />
                Zadzwoń teraz: 531 124 500
              </a>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-4 px-8 rounded-xl text-lg transition duration-300 flex items-center gap-3"
              >
                Umów termin
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            
            <div className="text-gray-500 space-y-2">
              <p>Drugi numer: <a href="tel:884753295" className="text-orange-500 hover:underline font-semibold">884 753 295</a></p>
              <p className="text-sm">Właściciele: Kacper Zagermann / Patryk Sylwerski</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nasze Usługi</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Kompleksowa obsługa w zakresie przeprowadzek, transportu i porządkowania</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Home className="h-12 w-12" />,
                title: "Wynoszenie mebli i rzeczy",
                description: "Profesjonalne wynoszenie mebli, AGD i innych przedmiotów z każdego piętra. Bezpiecznie i szybko."
              },
              {
                icon: <Truck className="h-12 w-12" />,
                title: "Przeprowadzki",
                description: "Kompleksowe przeprowadzki mieszkań, domów i biur. Od pakowania po ustawienie w nowym miejscu."
              },
              {
                icon: <Trash2 className="h-12 w-12" />,
                title: "Wywóz śmieci do PSZOK",
                description: "Odbieramy i wieziemy odpady do Punktu Selektywnej Zbiórki Odpadów. All-inclusive."
              },
              {
                icon: <Hammer className="h-12 w-12" />,
                title: "Rozbiórki i opróżnianie",
                description: "Profesjonalne rozbiórki i opróżnianie pomieszczeń. Zostawiamy przestrzeń gotową do remontu."
              },
              {
                icon: <Clock className="h-12 w-12" />,
                title: "Ekspresowa obsługa",
                description: "W nagłych przypadkach jesteśmy w stanie przyjechać tego samego dnia. Dzwonisz - jedziemy!"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition duration-300 hover:bg-orange-50 group">
                <div className="text-orange-500 mb-4 group-hover:scale-110 transition duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Dlaczego wybierają nas?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">To, co wyróżnia nas na rynku usług transportowych</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-16 w-16" />,
                title: "Uczciwa wycena",
                description: "Bez ukrytych kosztów i dopłat. Cena ustalona na początku to cena końcowa. Słowo dajemy!"
              },
              {
                icon: <Clock className="h-16 w-16" />,
                title: "Szybki czas reakcji",
                description: "Odbieramy telefon, przyjeżdżamy punktualnie. W nagłych przypadkach - tego samego dnia."
              },
              {
                icon: <Users className="h-16 w-16" />,
                title: "Dojazd do klienta",
                description: "Przyjeżdżamy na miejsce, oceniamy sytuację i przedstawiamy konkretną ofertę. Bez zobowiązań."
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="text-orange-500 mb-6 flex justify-center group-hover:scale-110 transition duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-orange-500 p-8 rounded-xl inline-block max-w-2xl">
              <h3 className="text-2xl font-bold mb-4">Nasze motto</h3>
              <p className="text-xl italic">"Traktujemy każdą przeprowadzkę jak swoją własną. Jesteśmy tutaj, żeby pomóc - po sąsiedzku, uczciwie i profesjonalnie."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Co mówią nasi klienci</h2>
            <p className="text-xl text-gray-600">Opinie osób, które nam zaufały</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-orange-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">"{review.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900">{review.name}</p>
                  <p className="text-gray-500">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skontaktuj się z nami</h2>
            <p className="text-xl text-gray-600">Zadzwoń lub napisz - odpowiemy szybko!</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Wyślij wiadomość</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3 animate-pulse">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <div>
                      <p className="text-green-700 font-semibold">✅ Wiadomość wysłana pomyślnie!</p>
                      <p className="text-green-600 text-sm mt-1">
                        Dziękujemy za kontakt. Oddzwonimy w ciągu 24 godzin lub wcześniej.
                      </p>
                    </div>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <div>
                      <p className="text-red-700 font-semibold">❌ Błąd wysyłania</p>
                    </div>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Imię i nazwisko *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    minLength={2}
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-200"
                    placeholder="Jak się do Ciebie zwracać?"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Numer telefonu *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    minLength={9}
                    maxLength={20}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-200"
                    placeholder="np. 531 124 500"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Wiadomość *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    minLength={10}
                    maxLength={1000}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-200"
                    placeholder="Opisz czego potrzebujesz: przeprowadzka, wynoszenie mebli, wywóz śmieci..."
                    disabled={isSubmitting}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    {formData.message.length}/1000 znaków
                  </p>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2 transform hover:scale-105 disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Wysyłanie...
                    </>
                  ) : (
                    <>
                      <Mail className="h-5 w-5" />
                      Wyślij wiadomość
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-orange-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Dane kontaktowe</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-orange-500" />
                    <div>
                      <p className="font-semibold text-gray-900">Telefony</p>
                      <p className="text-gray-600">
                        <a href="tel:531124500" className="hover:text-orange-500">531 124 500</a>
                        <span className="mx-2">•</span>
                        <a href="tel:884753295" className="hover:text-orange-500">884 753 295</a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="h-6 w-6 text-orange-500" />
                    <div>
                      <p className="font-semibold text-gray-900">Lokalizacja</p>
                      <p className="text-gray-600">Żory i okolice</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Users className="h-6 w-6 text-orange-500" />
                    <div>
                      <p className="font-semibold text-gray-900">Właściciele</p>
                      <p className="text-gray-600">Kacper Zagermann / Patryk Sylwerski</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="bg-gray-200 rounded-xl overflow-hidden h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41325.89219986205!2d18.6266159!3d50.0472273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716f3c0c8fa1f75%3A0x4009e8c4b2c8b20e!2s44-240%20%C5%BBory!5e0!3m2!1spl!2spl!4v1635000000000!5m2!1spl!2spl"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
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
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Truck className="h-8 w-8 text-orange-500 mr-3" />
              <span className="text-2xl font-bold">WyniesiemyTo.pl</span>
            </div>
            <p className="text-xl text-orange-500 font-semibold mb-4">
              "Wynosimy Twoje problemy!"
            </p>
            <p className="text-gray-400 mb-6">
              Profesjonalne usługi transportowe w Żorach i okolicy
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="tel:531124500" className="flex items-center gap-2 hover:text-orange-500 transition duration-200">
                <Phone className="h-5 w-5" />
                531 124 500
              </a>
              <a href="tel:884753295" className="flex items-center gap-2 hover:text-orange-500 transition duration-200">
                <Phone className="h-5 w-5" />
                884 753 295
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-orange-500" />
                Żory
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400 text-sm">
              <p>&copy; 2025 WyniesiemyTo.pl - Kacper Zagermann / Patryk Sylwerski. Wszystkie prawa zastrzeżone.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
