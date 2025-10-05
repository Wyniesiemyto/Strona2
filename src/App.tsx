import React, { Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Statycznie importowany główny komponent
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Zamień statyczne importy podstron na lazy-loaded
import { LazyThankYou, LazyPrivacyPolicy, LazyTerms, LazyCookiePolicy } from '@/components/LazyComponents';

const queryClient = new QueryClient();

// Prosty loader dla lazy komponentów
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/polityka-prywatnosci" element={<LazyPrivacyPolicy />} />
            <Route path="/regulamin" element={<LazyTerms />} />
            <Route path="/polityka-cookies" element={<LazyCookiePolicy />} />
            <Route path="/thank-you" element={<LazyThankYou />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;