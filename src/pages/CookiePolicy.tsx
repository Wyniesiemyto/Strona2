import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Polityka Cookies
          </h1>
          
          <div className="prose max-w-none text-gray-700 leading-relaxed">
            <p className="text-sm text-gray-500 mb-8">
              Ostatnia aktualizacja: 27 września 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Informacje ogólne</h2>
              <p className="mb-4">
                Niniejsza Polityka Cookies wyjaśnia, jak strona internetowa WyniesiemyTo.pl wykorzystuje pliki cookies oraz podobne technologie.
              </p>
              
              <div className="bg-orange-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Administrator serwisu:</h3>
                <ul className="space-y-1">
                  <li>Kacper Zagermann WyniesiemyTo (NIP: 6511751354)</li>
                  <li>WYNIESIEMYTO PATRYK SYLWERSKI (NIP: 6511751360)</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Czym są pliki cookies?</h2>
              <p className="mb-4">
                Pliki cookies to małe pliki tekstowe zapisywane na urządzeniu użytkownika przez przeglądarkę internetową podczas odwiedzania stron internetowych. Cookies zawierają informacje, które mogą być odczytane przez serwer podczas kolejnych wizyt.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Jakie cookies używamy?</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">3.1 Cookies niezbędne (zawsze aktywne)</h3>
                  <p className="mb-4">Te pliki cookies są niezbędne do prawidłowego funkcjonowania strony i nie można ich wyłączyć:</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-orange-600 mb-2">Pliki cookies sesyjne:</h4>
                      <ul className="text-sm space-y-1">
                        <li><strong>Nazwa:</strong> session_id</li>
                        <li><strong>Cel:</strong> Identyfikacja sesji użytkownika</li>
                        <li><strong>Czas:</strong> Do zamknięcia przeglądarki</li>
                        <li><strong>Podmiot:</strong> WyniesiemyTo.pl</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-orange-600 mb-2">Pliki cookies bezpieczeństwa:</h4>
                      <ul className="text-sm space-y-1">
                        <li><strong>Nazwa:</strong> csrf_token</li>
                        <li><strong>Cel:</strong> Ochrona przed atakami CSRF</li>
                        <li><strong>Czas:</strong> 24 godziny</li>
                        <li><strong>Podmiot:</strong> WyniesiemyTo.pl</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">3.2 Cookies analityczne (opcjonalne)</h3>
                  <p className="mb-4">Te pliki cookies pomagają nam zrozumieć, jak użytkownicy korzystają ze strony:</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-blue-600 mb-2">Google Analytics:</h4>
                      <ul className="text-sm space-y-1">
                        <li><strong>Nazwy:</strong> _ga, _ga_*, _gid</li>
                        <li><strong>Cel:</strong> Analiza ruchu na stronie</li>
                        <li><strong>Czas:</strong> 2 lata (_ga), 24h (_gid)</li>
                        <li><strong>Podmiot:</strong> Google LLC</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-blue-600 mb-2">Cookies wydajności:</h4>
                      <ul className="text-sm space-y-1">
                        <li><strong>Nazwa:</strong> performance_tracking</li>
                        <li><strong>Cel:</strong> Monitor wydajności strony</li>
                        <li><strong>Czas:</strong> 30 dni</li>
                        <li><strong>Podmiot:</strong> WyniesiemyTo.pl</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">3.3 Cookies funkcjonalne (opcjonalne)</h3>
                  <p className="mb-4">Umożliwiają personalizację doświadczeń użytkownika:</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-green-600 mb-2">Preferencje językowe:</h4>
                      <ul className="text-sm space-y-1">
                        <li><strong>Nazwa:</strong> language_preference</li>
                        <li><strong>Cel:</strong> Zapamiętywanie języka</li>
                        <li><strong>Czas:</strong> 1 rok</li>
                        <li><strong>Podmiot:</strong> WyniesiemyTo.pl</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-green-600 mb-2">Preferencje kontaktu:</h4>
                      <ul className="text-sm space-y-1">
                        <li><strong>Nazwa:</strong> contact_preferences</li>
                        <li><strong>Cel:</strong> Zapamiętywanie preferencji</li>
                        <li><strong>Czas:</strong> 90 dni</li>
                        <li><strong>Podmiot:</strong> WyniesiemyTo.pl</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">3.4 Cookies marketingowe (opcjonalne)</h3>
                  <p className="mb-4">Służą do wyświetlania spersonalizowanych treści reklamowych:</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-purple-600 mb-2">Facebook Pixel:</h4>
                      <ul className="text-sm space-y-1">
                        <li><strong>Nazwa:</strong> _fbp, fr</li>
                        <li><strong>Cel:</strong> Remarketing i analiza konwersji</li>
                        <li><strong>Czas:</strong> 3 miesiące</li>
                        <li><strong>Podmiot:</strong> Meta Platforms Ireland Ltd.</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-purple-600 mb-2">Google Ads:</h4>
                      <ul className="text-sm space-y-1">
                        <li><strong>Nazwa:</strong> _gcl_*</li>
                        <li><strong>Cel:</strong> Śledzenie konwersji z reklam</li>
                        <li><strong>Czas:</strong> 90 dni</li>
                        <li><strong>Podmiot:</strong> Google LLC</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Podstawa prawna</h2>
              <p className="mb-4">Używanie plików cookies odbywa się na podstawie:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Art. 173 ustawy Prawo telekomunikacyjne (zgoda na cookies)</li>
                <li>Art. 6 ust. 1 lit. a) RODO (zgoda na przetwarzanie danych)</li>
                <li>Art. 6 ust. 1 lit. f) RODO (uzasadniony interes - cookies niezbędne)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Zarządzanie cookies</h2>
              
              <div className="bg-orange-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">5.1 Panel zgód</h3>
                <p className="mb-4">Na naszej stronie używamy panelu zgód, który pozwala:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Wyrazić zgodę na poszczególne kategorie cookies</li>
                  <li>Wycofać zgodę w każdym momencie</li>
                  <li>Zarządzać preferencjami dotyczącymi cookies</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">5.2 Ustawienia przeglądarki</h3>
              <p className="mb-4">Można również zarządzać cookies bezpośrednio w przeglądarce:</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Chrome:</h4>
                  <ol className="text-sm space-y-1 list-decimal pl-4">
                    <li>Menu > Ustawienia > Zaawansowane > Prywatność i bezpieczeństwo</li>
                    <li>Ustawienia strony > Pliki cookie i dane stron</li>
                  </ol>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Firefox:</h4>
                  <ol className="text-sm space-y-1 list-decimal pl-4">
                    <li>Menu > Opcje > Prywatność i bezpieczeństwo</li>
                    <li>Pliki cookie i dane stron</li>
                  </ol>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Safari:</h4>
                  <ol className="text-sm space-y-1 list-decimal pl-4">
                    <li>Safari > Preferencje > Prywatność</li>
                    <li>Zarządzaj danymi stron internetowych</li>
                  </ol>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Edge:</h4>
                  <ol className="text-sm space-y-1 list-decimal pl-4">
                    <li>Menu > Ustawienia > Pliki cookie i uprawnienia witryn</li>
                    <li>Zarządzaj plikami cookie i danymi witryn</li>
                  </ol>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Konsekwencje odmowy cookies</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">6.1 Cookies niezbędne</h3>
                  <p className="mb-3">Odmowa tych plików cookies może skutkować:</p>
                  <ul className="list-disc pl-4 space-y-1 text-sm">
                    <li>Nieprawidłowym działaniem formularza kontaktowego</li>
                    <li>Problemami z bezpieczeństwem</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">6.2 Cookies opcjonalne</h3>
                  <p className="mb-3">Odmowa tych plików cookies może skutkować:</p>
                  <ul className="list-disc pl-4 space-y-1 text-sm">
                    <li>Brakiem personalizacji doświadczeń</li>
                    <li>Mniejszą efektywnością reklam</li>
                    <li>Ograniczoną analizą korzystania ze strony</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cookies podmiotów trzecich</h2>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">7.1 Google Analytics</h3>
                  <ul className="text-sm space-y-1">
                    <li><strong>Podmiot:</strong> Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA</li>
                    <li><strong>Polityka prywatności:</strong> https://policies.google.com/privacy</li>
                    <li><strong>Opt-out:</strong> https://tools.google.com/dlpage/gaoptout</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">7.2 Facebook/Meta</h3>
                  <ul className="text-sm space-y-1">
                    <li><strong>Podmiot:</strong> Meta Platforms Ireland Ltd., 4 Grand Canal Square, Dublin 2, Irlandia</li>
                    <li><strong>Polityka prywatności:</strong> https://www.facebook.com/privacy/policy/</li>
                    <li><strong>Zarządzanie reklamami:</strong> https://www.facebook.com/ads/preferences/</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">7.3 Supabase</h3>
                  <ul className="text-sm space-y-1">
                    <li><strong>Podmiot:</strong> Supabase Inc.</li>
                    <li><strong>Cel:</strong> Obsługa formularza kontaktowego</li>
                    <li><strong>Polityka prywatności:</strong> https://supabase.com/privacy</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Kontakt</h2>
              <p className="mb-4">W sprawach dotyczących cookies można się kontaktować:</p>
              <div className="bg-orange-50 p-6 rounded-lg">
                <ul className="space-y-1">
                  <li><strong>E-mail:</strong> zagermannkacper@gmail.com</li>
                  <li><strong>Telefon:</strong> 531 124 500</li>
                  <li><strong>Adres:</strong> Osiedle Powstańców Śląskich 13B/17, 44-240 Żory</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Zmiany w polityce</h2>
              <p className="mb-4">O zmianach w Polityce Cookies informujemy poprzez:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Publikację nowej wersji na stronie</li>
                <li>Powiadomienie w panelu zgód</li>
                <li>Informację e-mail (jeśli to możliwe)</li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                Zmiany wchodzą w życie po 7 dniach od opublikowania.
              </p>
            </section>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex justify-center">
              <button 
                onClick={() => window.history.back()}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition duration-300"
              >
                Powrót do strony głównej
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;