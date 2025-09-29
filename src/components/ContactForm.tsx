import React, { useState } from 'react';
import { Mail, CheckCircle, X, Paperclip } from 'lucide-react';
import { supabase as supabaseClient } from '@/integrations/supabase/client';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

interface ContactFormProps {
  onSubmitSuccess?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSubmitSuccess }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    needsWasteCollection: '',
    contactHours: ''
  });
  const [consent, setConsent] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const selected = Array.from(e.target.files).slice(0, 5);
    setFiles(selected);
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!consent) return alert('Musisz wyrazić zgodę.');

  setIsSubmitting(true);
  setSubmitStatus('idle');

  // Upload attachments
const attachmentUrls: string[] = [];
for (let i = 0; i < files.length; i++) {
  const file = files[i];
  const ext = file.name.split('.').pop();
  const fileName = `attachments/attach_${Date.now()}_${i}.${ext}`;
  const { data, error: uploadError } = await supabase
    .storage
    .from('attachments')
    .upload(fileName, file);

  if (uploadError) {
    console.error('Upload error:', uploadError);
  } else if (data) {
    const urlResponse = supabase.storage.from('attachments').getPublicUrl(data.path);
    const publicUrl = urlResponse.data?.publicUrl || '';
    attachmentUrls.push(publicUrl);
  }
}

// const { error } = await supabase.functions.invoke('send-contact-email', {
//   body: JSON.stringify({
//     name: formData.name,
//     phone: formData.phone,
//     message: formData.message,
//     needsWasteCollection: formData.needsWasteCollection,
//     contactHours: formData.contactHours,
//     attachments: attachmentUrls
//   }),
//   headers: { 'Content-Type': 'application/json' }
// });

const url = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/send-contact-email`;
const headers = {
  'Content-Type': 'application/json',
  apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}`
};

const response = await fetch(url, {
  method: 'POST',
  headers,
  body: JSON.stringify({
    name: formData.name,
    phone: formData.phone,
    message: formData.message,
    needsWasteCollection: formData.needsWasteCollection || 'nie określono',
    contactHours: formData.contactHours || 'dowolne',
    attachments: attachmentUrls
  })
});

if (!response.ok) {
  console.error('Edge Function error:', await response.json());
  setSubmitStatus('error');
} else {
  setSubmitStatus('success');
  setFormData({
    name: '',
    phone: '',
    message: '',
    needsWasteCollection: '',
    contactHours: ''
  });
  setFiles([]);
  setConsent(false);
  onSubmitSuccess?.();
}

 try {
      if (Error) {
        console.error(Error);
        setSubmitStatus('error');
      } else {
        setSubmitStatus('success');
        setFormData({
          name: '',
          phone: '',
          message: '',
          needsWasteCollection: '',
          contactHours: ''
        });
        setFiles([]);
        setConsent(false);
        onSubmitSuccess?.();
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 p-8 rounded-xl">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Wyślij wiadomość</h3>
      <div className="space-y-6">
        {submitStatus === 'success' && (
          <div className="bg-green-50 border border-green-200 p-4 flex items-center gap-3 rounded">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <span className="text-green-700">Dziękujemy! Skontaktujemy się wkrótce.</span>
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="bg-red-50 border border-red-200 p-4 flex items-center gap-3 rounded">
            <X className="h-5 w-5 text-red-500" />
            <span className="text-red-700">Błąd wysyłki. Spróbuj ponownie lub zadzwoń.</span>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Imię i nazwisko *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={e => handleChange('name', e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Telefon *</label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={e => handleChange('phone', e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:ring-orange-500"
          />
        </div>
        
         <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Wiadomość *</label>
          <textarea
          
            required
            maxLength={230}
            rows={6}
            value={formData.message}
            onChange={e => handleChange('message', e.target.value)}
            className="w-full px-4 py-3 pr-10 border rounded-lg focus:ring-orange-500"
            placeholder="Opisz, czego potrzebujesz..."
          />
          <button
            type="button"
            onClick={() => document.getElementById('attachment')?.click()}
            className="absolute top-10 right-3 text-gray-400 hover:text-orange-500 transition"
            aria-label="Dodaj załącznik"
          >
            <Paperclip className="h-5 w-5" />
          </button>
          <p className="text-xs text-gray-500 mt-1">{formData.message.length}/230 znaków</p>
        </div>

        <input
          type="file"
          id="attachment"
          multiple
          accept=".jpg,.png,.pdf"
          onChange={handleFileChange}
          className="hidden"
        />
        {files.length > 0 && (
          <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
            {files.map((f, i) => (
              <li key={i}>{f.name}</li>
            ))}
          </ul>
        )}

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={consent}
            onChange={e => setConsent(e.target.checked)}
            required
            className="h-4 w-4 text-orange-500 border-gray-300"
          />
          <label className="text-sm text-gray-700">
            Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z Polityką Prywatności.
          </label>
        </div>

        <button
          type="button"
          disabled={isSubmitting}
          onClick={handleSubmit}
          className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2"
        >
          {isSubmitting
            ? <div className="animate-spin h-5 w-5 border-b-2 border-white rounded-full" />
            : <Mail className="h-5 w-5" />}
          {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
        </button>
      </div>
    </div>
  );
};