import React, { useState, useEffect } from 'react';
import { X, Settings, Check } from 'lucide-react';

interface CookieSettings {
  necessary: boolean;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
}

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState<CookieSettings>({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    functional: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    } else {
      const savedSettings = JSON.parse(cookieConsent);
      setSettings(savedSettings);
    }
  }, []);

  const handleAcceptAll = () => {
    const acceptAllSettings = {
      necessary: true,
      analytics: true,
      functional: true,
      marketing: true,
    };
    setSettings(acceptAllSettings);
    saveSettings(acceptAllSettings);
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const rejectAllSettings = {
      necessary: true, // Cannot be disabled
      analytics: false,
      functional: false,
      marketing: false,
    };
    setSettings(rejectAllSettings);
    saveSettings(rejectAllSettings);
    setShowBanner(false);
  };

  const handleSaveSettings = () => {
    saveSettings(settings);
    setShowBanner(false);
    setShowSettings(false);
  };

  const saveSettings = (cookieSettings: CookieSettings) => {
    localStorage.setItem('cookieConsent', JSON.stringify(cookieSettings));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    
    // Here you would typically implement actual cookie management
    if (cookieSettings.analytics) {
      // Enable Google Analytics
      console.log('Analytics cookies enabled');
    }
    if (cookieSettings.functional) {
      // Enable functional cookies
      console.log('Functional cookies enabled');
    }
    if (cookieSettings.marketing) {
      // Enable marketing cookies
      console.log('Marketing cookies enabled');
    }
  };

  const updateSetting = (key: keyof CookieSettings, value: boolean) => {
    if (key === 'necessary') return; // Cannot disable necessary cookies
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl border-t-4 border-orange-500 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                🍪 Używamy plików cookies
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Nasza strona używa plików cookies, aby zapewnić najlepsze doświadczenia. 
                Cookies niezbędne są zawsze aktywne, ale możesz dostosować preferencje 
                dotyczące cookies analitycznych, funkcjonalnych i marketingowych.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 min-w-fit">
              <button
                onClick={() => setShowSettings(true)}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm"
              >
                <Settings size={16} />
                Ustawienia
              </button>
              <button
                onClick={handleRejectAll}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm"
              >
                Odrzuć wszystkie
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
              >
                Akceptuj wszystkie
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Ustawienia cookies
                </h2>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-6">
                {/* Necessary Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900">Cookies niezbędne</h3>
                    <div className="bg-gray-100 px-3 py-1 rounded-full">
                      <span className="text-xs font-medium text-gray-600">Zawsze aktywne</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Te pliki cookies są niezbędne do prawidłowego funkcjonowania strony. 
                    Obejmują bezpieczeństwo, sesje użytkownika i podstawową funkcjonalność.
                  </p>
                  <div className="text-xs text-gray-500">
                    Przykłady: session_id, csrf_token, security_cookies
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900">Cookies analityczne</h3>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.analytics}
                        onChange={(e) => updateSetting('analytics', e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-11 h-6 rounded-full ${settings.analytics ? 'bg-orange-500' : 'bg-gray-200'} relative transition-colors`}>
                        <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${settings.analytics ? 'translate-x-5' : 'translate-x-0.5'}`} />
                      </div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Pomagają nam zrozumieć, jak odwiedzający korzystają ze strony. 
                    Wszystkie informacje są anonimowe i używane do poprawy strony.
                  </p>
                  <div className="text-xs text-gray-500">
                    Przykłady: Google Analytics (_ga, _gid), performance_tracking
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900">Cookies funkcjonalne</h3>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.functional}
                        onChange={(e) => updateSetting('functional', e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-11 h-6 rounded-full ${settings.functional ? 'bg-orange-500' : 'bg-gray-200'} relative transition-colors`}>
                        <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${settings.functional ? 'translate-x-5' : 'translate-x-0.5'}`} />
                      </div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Umożliwiają zapamiętywanie wyborów i personalizację doświadczeń, 
                    takich jak język czy preferencje formularza.
                  </p>
                  <div className="text-xs text-gray-500">
                    Przykłady: language_preference, contact_preferences
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900">Cookies marketingowe</h3>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.marketing}
                        onChange={(e) => updateSetting('marketing', e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-11 h-6 rounded-full ${settings.marketing ? 'bg-orange-500' : 'bg-gray-200'} relative transition-colors`}>
                        <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${settings.marketing ? 'translate-x-5' : 'translate-x-0.5'}`} />
                      </div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Służą do wyświetlania spersonalizowanych reklam i śledzenia 
                    skuteczności kampanii marketingowych.
                  </p>
                  <div className="text-xs text-gray-500">
                    Przykłady: Facebook Pixel (_fbp), Google Ads (_gcl_*)
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <button
                  onClick={handleRejectAll}
                  className="flex-1 px-4 py-3 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Odrzuć wszystkie opcjonalne
                </button>
                <button
                  onClick={handleSaveSettings}
                  className="flex-1 bg-orange-500 text-white px-4 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium flex items-center justify-center gap-2"
                >
                  <Check size={18} />
                  Zapisz ustawienia
                </button>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center">
                  Więcej informacji znajdziesz w naszej{' '}
                  <button 
                    onClick={() => window.open('/polityka-cookies', '_blank')}
                    className="text-orange-600 hover:text-orange-700 underline"
                  >
                    Polityce Cookies
                  </button>
                  {' '}i{' '}
                  <button 
                    onClick={() => window.open('/polityka-prywatnosci', '_blank')}
                    className="text-orange-600 hover:text-orange-700 underline"
                  >
                    Polityce Prywatności
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;
