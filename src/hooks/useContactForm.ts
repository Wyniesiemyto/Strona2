import { useState } from 'react';

interface FormData {
  name: string;
  phone: string;
  message: string;
}

interface UseContactFormReturn {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  isSubmitting: boolean;
  submitStatus: 'idle' | 'success' | 'error';
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  resetForm: () => void;
}

export const useContactForm = (): UseContactFormReturn => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const resetForm = () => {
    setFormData({ name: '', phone: '', message: '' });
    setSubmitStatus('idle');
  };

  const validateForm = (data: FormData): string | null => {
    if (!data.name.trim()) return 'Imię i nazwisko jest wymagane';
    if (!data.phone.trim()) return 'Numer telefonu jest wymagany';
    if (!data.message.trim()) return 'Wiadomość jest wymagana';
    
    // Basic phone validation
    const phoneRegex = /^[+]?[\d\s\-()]{9,}$/;
    if (!phoneRegex.test(data.phone.trim())) {
      return 'Podaj prawidłowy numer telefonu';
    }
    
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const validationError = validateForm(formData);
    if (validationError) {
      alert(validationError);
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', message: '' });
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        setSubmitStatus('error');
        console.error('Form submission error:', result.error);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Network error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    setFormData,
    isSubmitting,
    submitStatus,
    handleSubmit,
    resetForm
  };
};