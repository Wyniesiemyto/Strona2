import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Regulamin świadczenia usług drogą elektroniczną
          </h1>
          
          <div className="prose max-w-none text-gray-700 leading-relaxed">
            <p className="text-sm text-gray-500 mb-8">
              Ostatnia aktualizacja: 27 września 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Postanowienia ogólne</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">1.1 Definicje</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Serwis</strong> - serwis internetowy WyniesiemyTo.pl dostępny pod adresem https://wyniesiemyto.pl</li>
                <li><strong>Usługodawca</strong> - wspólnie: Kacper Zagermann WyniesiemyTo (NIP: 6511751354) oraz WYNIESIEMYTO PATRYK SYLWERSKI (NIP: 6511751360)</li>
                <li><strong>Użytkownik</strong> - każda osoba fizyczna, prawna lub jednostka organizacyjna nieposiadająca osobowości prawnej korzystająca z Serwisu</li>
                <li><strong>Usługi elektroniczne</strong> - usługi świadczone drogą elektroniczną przez Serwis</li>
              </ul>

              <div className="bg-orange-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">1.2 Dane Usługodawców</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-600 mb-3">Kacper Zagermann WyniesiemyTo</h4>
                    <ul className="space-y-1 text-sm">
                      <li><strong>NIP:</strong> 6511751354</li>
                      <li><strong>REGON:</strong> 542555209</li>
                      <li><strong>Adres:</strong> Osiedle Powstańców Śląskich 13B/17, 44-240 Żory</li>
                      <li><strong>Telefon:</strong> 531 124 500</li>
                      <li><strong>Email:</strong> zagermannkacper@gmail.com</li>
                      <li><strong>Strona:</strong> https://wyniesiemyto.pl</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-600 mb-3">WYNIESIEMYTO PATRYK SYLWERSKI</h4>
                    <ul className="space-y-1 text-sm">
                      <li><strong>NIP:</strong> 6511751360</li>
                      <li><strong>REGON:</strong> 542558290</li>
                      <li><strong>Adres:</strong> Osiedle Sikorskiego 34C/6, 44-240 Żory</li>
                    </ul>
                  </div>
                </div>
                
                <p className="mt-4 text-sm font-medium">
                  <strong>Działalność gospodarcza:</strong> 38.11.Z - Zbieranie odpadów innych niż niebezpieczne
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Rodzaje usług elektronicznych</h2>
              <p className="mb-4">Serwis świadczy następujące usługi elektroniczne:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Udostępnianie informacji o oferowanych usługach</li>
                <li>Możliwość kontaktu przez formularz elektroniczny</li>
                <li>Przesyłanie zapytań ofertowych</li>
                <li>Prezentacja oferty usług przeprowadzkowych i transportowych</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Warunki świadczenia usług elektronicznych</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">3.1 Wymagania techniczne</h3>
                  <p className="mb-3">Aby korzystać z Serwisu wymagane jest:</p>
                  <ul className="list-disc pl-4 space-y-1 text-sm">
                    <li>Urządzenie z dostępem do Internetu</li>
                    <li>Przeglądarka internetowa obsługująca JavaScript i CSS</li>
                    <li>Aktywny adres e-mail (dla kontaktu)</li>
                    <li>Telefon (dla bezpośredniego kontaktu)</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">3.2 Korzystanie z Serwisu</h3>
                  <ul className="list-disc pl-4 space-y-1 text-sm">
                    <li>Korzystanie z Serwisu jest bezpłatne</li>
                    <li>Nie wymagana jest rejestracja</li>
                    <li>Usługi świadczone są całodobowo z zastrzeżeniem przerw technicznych</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Zasady korzystania z formularza kontaktowego</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">4.1 Warunki wysłania zapytania</h3>
                  <ul className="list-disc pl-4 space-y-1 text-sm">
                    <li>Wypełnienie wszystkich pól oznaczonych jako obowiązkowe</li>
                    <li>Podanie prawdziwych danych kontaktowych</li>
                    <li>Akceptacja Polityki Prywatności</li>
                    <li>Zgodność treści z przepisami prawa</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">4.2 Przetwarzanie zapytań</h3>
                  <ul className="list-disc pl-4 space-y-1 text-sm">
                    <li>Zapytania są przetwarzane w dni robocze</li>
                    <li>Odpowiedź następuje telefonicznie lub e-mailowo</li>
                    <li>Czas odpowiedzi: do 24 godzin w dni robocze</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Obowiązki i uprawnienia</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">5.1 Użytkownik ma prawo do:</h3>
                  <ul className="list-disc pl-4 space-y-1 text-sm">
                    <li>Bezpłatnego korzystania z Serwisu</li>
                    <li>Otrzymania odpowiedzi na zapytanie</li>
                    <li>Wglądu w swoje dane osobowe</li>
                    <li>Żądania usunięcia danych osobowych</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">5.2 Użytkownik zobowiązuje się do:</h3>
                  <ul className="list-disc pl-4 space-y-1 text-sm">
                    <li>Podawania prawdziwych danych</li>
                    <li>Nienaruszania praw autorskich</li>
                    <li>Niewysyłania treści sprzecznych z prawem</li>
                    <li>Niepodejmowania działań zakłócających działanie Serwisu</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">6.1 Usługodawca zobowiązuje się do:</h3>
                  <ul className="list-disc pl-4 space-y-1 text-sm">
                    <li>Zapewnienia funkcjonalności Serwisu</li>
                    <li>Ochrony danych osobowych zgodnie z RODO</li>
                    <li>Udzielania odpowiedzi na zapytania</li>
                    <li>Informowania o przerwach technicznych</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">6.2 Usługodawca ma prawo do:</h3>
                  <ul className="list-disc pl-4 space-y-1 text-sm">
                    <li>Wprowadzania zmian w Serwisie</li>
                    <li>Czasowego zawieszenia dostępu (konserwacja)</li>
                    <li>Odmowy świadczenia usług w przypadku naruszenia Regulaminu</li>
                    <li>Usunięcia treści sprzecznych z prawem</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Postępowanie reklamacyjne</h2>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">7.1 Składanie reklamacji</h3>
                <p className="mb-3">Reklamacje dotyczące funkcjonowania Serwisu można składać:</p>
                <ul className="space-y-1 text-sm mb-4">
                  <li><strong>E-mail:</strong> zagermannkacper@gmail.com</li>
                  <li><strong>Telefon:</strong> 531 124 500</li>
                  <li><strong>Pisemnie na adres:</strong> Osiedle Powstańców Śląskich 13B/17, 44-240 Żory</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">7.2 Rozpatrywanie reklamacji</h3>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Reklamacje są rozpatrywane w ciągu 14 dni</li>
                  <li>Odpowiedź na reklamację następuje w formie e-mail lub pisemnie</li>
                  <li>W przypadku uwzględnienia reklamacji Usługodawca podejmie działania naprawcze</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Prawo właściwe i jurysdykcja</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Wszystkie sprawy związane z funkcjonowaniem Serwisu podlegają prawu polskiemu</li>
                <li>Sądem właściwym dla rozstrzygania sporów jest sąd właściwy dla siedziby Usługodawcy</li>
                <li>W sprawach z udziałem konsumentów właściwy jest sąd właściwy według przepisów Kodeksu postępowania cywilnego</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Zmiany Regulaminu</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">9.1 Wprowadzanie zmian</h3>
                <p className="mb-3">Usługodawca zastrzega sobie prawo do wprowadzania zmian w Regulaminie z ważnych przyczyn, takich jak:</p>
                <ul className="list-disc pl-4 space-y-1 text-sm mb-4">
                  <li>Zmiana przepisów prawa</li>
                  <li>Zmiana sposobu świadczenia usług</li>
                  <li>Wprowadzenie nowych funkcjonalności</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">9.2 Powiadamianie o zmianach</h3>
                <p className="text-sm">O zmianach w Regulaminie Użytkownicy będą informowani poprzez publikację nowej wersji na stronie Serwisu z 7-dniowym wyprzedzeniem.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Kontakt</h2>
              <p className="mb-4">We wszystkich sprawach związanych z Regulaminem należy kontaktować się:</p>
              <div className="bg-orange-50 p-6 rounded-lg">
                <ul className="space-y-1">
                  <li><strong>E-mail:</strong> zagermannkacper@gmail.com</li>
                  <li><strong>Telefon:</strong> 531 124 500</li>
                </ul>
              </div>
              
              <p className="mt-4 text-sm text-gray-600">
                <strong>Wejście w życie:</strong> Niniejszy Regulamin wchodzi w życie z dniem 27 września 2025 roku.
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

export default Terms;