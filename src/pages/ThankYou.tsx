import React from 'react';
import { CheckCircle, Home, Phone, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center px-4">
      <div className="max-w-lg w-full">
        {/* Success Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          {/* Success Icon */}
          <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          {/* Main Message */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Dziękujemy!
          </h1>
          
          <p className="text-lg text-gray-600 mb-6">
            Twoja wiadomość została wysłana pomyślnie. Skontaktujemy się z Tobą w ciągu <strong>24 godzin</strong>.
          </p>

          {/* Additional Info */}
          <div className="bg-orange-50 rounded-lg p-4 mb-8">
            <p className="text-sm text-gray-700">
              <strong>Co dalej?</strong><br />
              Przeanalizujemy Twoje zapytanie i przygotujemy konkretną ofertę. 
              W nagłych przypadkach możesz zadzwonić bezpośrednio.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            {/* Back to Home */}
            <button
              onClick={() => navigate('/')}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" />
              Powrót do strony głównej
            </button>

            {/* Contact Options */}
            <div className="flex gap-3">
              <a
                href="tel:504729105"
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4" />
                504 729 105
              </a>
              <a
                href="tel:798598993"
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4" />
                798 598 993
              </a>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-sm">
            <Mail className="w-4 h-4 inline mr-1" />
            wyniesiemyto@gmail.com
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Kacper Zagermann / Patryk Sylwerski
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
