'use client';
import React, { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check if the script is already loaded
      if (!document.getElementById('google-translate-script')) {
        // Define the Google Translate initialization function
        window.googleTranslateElementInit = function () {
          if (window.google && window.google.translate) {
            new window.google.translate.TranslateElement(
              {
                pageLanguage: 'en', // Default language
                includedLanguages: 'as,bn,gu,hi,kn,ml,mr,ne,or,pa,ta,te,ur,sd,ks,sa', // List of Indian languages
                layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL, // Horizontal layout
              },
              'google_translate_element'
            );
          }
        };

        // Load the Google Translate script dynamically
        const script = document.createElement('script');
        script.id = 'google-translate-script'; // Add an ID to the script
        script.src =
          'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, []);

  return (
    <div className="flex items-center justify-center mt-4">
      {/* Google Translate Widget */}
      <div id="google_translate_element"></div>
    </div>
  );
};

export default GoogleTranslate;
