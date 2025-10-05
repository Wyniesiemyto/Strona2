/// <reference types="vite/client" />

declare global {
  function gtag_report_conversion(url?: string): boolean;
}

export {};