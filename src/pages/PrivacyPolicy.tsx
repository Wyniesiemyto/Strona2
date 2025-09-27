import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Polityka Prywatności
          </h1>
          
          <div className="prose max-w-none text-gray-700 leading-relaxed">
            <p className="text-sm text-gray-500 mb-8">
              Ostatnia aktualizacja: 27 września 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Informacje ogólne</h2>
              <p className="mb-4">
                Niniejsza Polityka Prywatności określa zasady przetwarzania danych osobowych użytkowników strony internetowej WyniesiemyTo.pl oraz korzystających z usług świadczonych przez:
              </p>
              
              <div className="bg-orange-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Administratorzy danych osobowych:</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-600 mb-3">Kacper Zagermann WyniesiemyTo</h4>
                    <ul className="space-y-1 text-sm">
                      <li><strong>NIP:</strong> 6511751354</li>
                      <li><strong>REGON:</strong> 542555209</li>
                      <li><strong>Adres:</strong> Osiedle Powstańców Śląskich 13B/17, 44-240 Żory</li>
                      <li><strong>Telefon:</strong> 531 124 500</li>
                      <li><strong>Email:</strong> zagermannkacper@gmail.com</li>
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
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Podstawa prawna przetwarzania danych</h2>
              <p className="mb-4">Przetwarzanie danych osobowych odbywa się na podstawie:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Art. 6 ust. 1 lit. a) RODO (zgoda) - w przypadku zapisania się do newslettera</li>
                <li>Art. 6 ust. 1 lit. b) RODO (wykonanie umowy) - w przypadku świadczenia usług</li>
                <li>Art. 6 ust. 1 lit. f) RODO (uzasadniony interes) - w przypadku obsługi zapytań i kontaktu</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Jakie dane przetwarzamy</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">3.1 Dane zbierane przez formularz kontaktowy:</h3>
                  <ul className="list-disc pl-4 space-y-1 text-sm">
                    <li>Imię i nazwisko</li>
                    <li>Numer telefonu</li>
                    <li>Treść wiadomości</li>
                    <li>Preferencje dotyczące wywozu odpadów</li>
                    <li>Preferowane godziny kontaktu</li>
                    <li>Adres IP (automatycznie)</li>
                    <li>Data i godzina wysłania formularza</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">3.2 Dane zbierane automatycznie:</h3>
                  <ul className="list-disc pl-4 space-y-1 text-sm">
                    <li>Adres IP</li>
                    <li>Informacje o przeglądarce i systemie operacyjnym</li>
                    <li>Data i czas odwiedzin</li>
                    <li>Strony odwiedzane w serwisie</li>
                    <li>Pliki cookies (zgodnie z Polityką Cookies)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Cele przetwarzania danych</h2>
              <p className="mb-4">Dane osobowe przetwarzamy w następujących celach:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Obsługa zapytań i kontakt z klientami</li>
                <li>Świadczenie usług przeprowadzkowych i transportowych</li>
                <li>Wystawianie faktur i rozliczenia</li>
                <li>Wypełnienie obowiązków prawnych (ewidencja BDO)</li>
                <li>Poprawa jakości świadczonych usług</li>
                <li>Marketing bezpośredni (za zgodą)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Okres przechowywania danych</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Dane z formularza kontaktowego:</strong> 3 lata od ostatniego kontaktu</li>
                <li><strong>Dane klientów korzystających z usług:</strong> 5 lat (wymogi podatkowe)</li>
                <li><strong>Dane dotyczące ewidencji odpadów:</strong> zgodnie z wymogami prawa o odpadach (minimum 5 lat)</li>
                <li><strong>Dane marketingowe:</strong> do czasu wycofania zgody</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Odbiorcy danych</h2>
              <p className="mb-4">Dane osobowe mogą być przekazywane:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Punktom Selektywnej Zbiórki Odpadów Komunalnych (PSZOK)</li>
                <li>Organom kontroli w zakresie gospodarki odpadami</li>
                <li>Firmom obsługującym infrastrukturę IT (Supabase)</li>
                <li>Biurom rachunkowym (w przypadku prowadzenia księgowości)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Prawa użytkowników</h2>
              <p className="mb-4">Zgodnie z RODO, przysługują Pani/Panu następujące prawa:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Prawo dostępu</strong> - można żądać informacji o przetwarzanych danych</li>
                  <li><strong>Prawo sprostowania</strong> - można żądać poprawienia nieprawidłowych danych</li>
                  <li><strong>Prawo do usunięcia</strong> - można żądać usunięcia danych</li>
                  <li><strong>Prawo do ograniczenia przetwarzania</strong></li>
                </ul>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Prawo do przenoszenia danych</strong> - można otrzymać dane w ustrukturyzowanym formacie</li>
                  <li><strong>Prawo sprzeciwu</strong> - można wnieść sprzeciw wobec przetwarzania</li>
                  <li><strong>Prawo do wycofania zgody</strong> - w przypadku przetwarzania na podstawie zgody</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Aby skorzystać z powyższych praw, należy skontaktować się:</h3>
                <ul className="space-y-1">
                  <li><strong>Email:</strong> zagermannkacper@gmail.com</li>
                  <li><strong>Telefon:</strong> 531 124 500</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Prawo do skargi</h2>
              <p className="mb-4">
                W przypadku naruszenia przepisów o ochronie danych osobowych, przysługuje Pani/Panu prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Urząd Ochrony Danych Osobowych</strong></p>
                <p>ul. Stawki 2, 00-193 Warszawa</p>
                <p>Telefon: 22 531 03 00</p>
                <p>https://uodo.gov.pl</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Kontakt</h2>
              <p className="mb-4">W sprawach dotyczących ochrony danych osobowych prosimy o kontakt:</p>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Kacper Zagermann WyniesiemyTo</h3>
                <ul className="space-y-1">
                  <li><strong>Email:</strong> zagermannkacper@gmail.com</li>
                  <li><strong>Telefon:</strong> 531 124 500</li>
                  <li><strong>Adres:</strong> Osiedle Powstańców Śląskich 13B/17, 44-240 Żory</li>
                </ul>
              </div>
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

export default PrivacyPolicy;