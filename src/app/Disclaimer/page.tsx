'use client';

import React from "react";

const Disclaimer = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 pt-24">
      <h1 className="text-5xl font-semibold mb-8 text-blue-900">Disclaimer</h1>

      <p className="text-base text-gray-950 leading-relaxed mb-6">
        Welcome to BharatPay! The information provided on this website (the "Website") is for general
        informational purposes and highlights the various services and features offered by BharatPay. While
        we strive to ensure the accuracy and reliability of the information, BharatPay disclaims any
        warranties, express or implied, regarding the completeness, accuracy, or suitability of the content.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">1. Services Provided</h2>
        <p className="text-base text-gray-950 leading-relaxed">
          BharatPay offers a comprehensive range of services to cater to your financial and digital needs,
          including but not limited to:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>CSC Services:</strong> Seamless access to essential Common Service Centre (CSC) services
            to support your day-to-day requirements.
          </li>
          <li>
            <strong>Credit Card Services:</strong> Convenient credit card solutions designed to simplify your
            financial transactions.
          </li>
          <li>
            <strong>Wallet Features:</strong> Enjoy a 12% return on your monthly average wallet balance,
            helping you maximize your savings.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">2. No Professional Advice</h2>
        <p className="text-base text-gray-950 leading-relaxed">
          The information and services on this Website are provided for informational purposes only and do
          not constitute professional advice. Users are encouraged to consult qualified professionals for
          financial, legal, or technical guidance.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">3. External Links Disclaimer</h2>
        <p className="text-base text-gray-950 leading-relaxed">
          BharatPay may provide links to external websites for your convenience. While we aim to direct
          users to valuable resources, we do not guarantee the accuracy or reliability of content on
          third-party websites. Users access these links at their own discretion and risk.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">4. Limitation of Liability</h2>
        <p className="text-base text-gray-950 leading-relaxed">
          BharatPay will not be held responsible for any loss or damage arising from the use of this
          Website, including but not limited to indirect, incidental, or consequential damages. All usage is
          at the user’s own risk.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">5. Service Interruptions</h2>
        <p className="text-base text-gray-950 leading-relaxed">
          We endeavor to provide uninterrupted access to our services; however, occasional interruptions due
          to maintenance, technical issues, or unforeseen circumstances may occur. BharatPay is not liable
          for any inconvenience caused by such interruptions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">6. Updates to the Disclaimer</h2>
        <p className="text-base text-gray-950 leading-relaxed">
          BharatPay reserves the right to update or modify this Disclaimer at any time. Users are encouraged
          to review this section periodically to stay informed about changes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">7. Commitment to Security</h2>
        <p className="text-base text-gray-950 leading-relaxed">
          We prioritize the security and confidentiality of your data. BharatPay collects necessary details
          such as Aadhaar, PAN, and bank information for KYC purposes. Users are advised not to share
          confidential details such as debit card pins or passwords with anyone claiming to represent
          BharatPay.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">8. Contact Us</h2>
        <p className="text-base text-gray-950 leading-relaxed">
          For further assistance or inquiries about our services or this Disclaimer, please contact us at
          <a href="mailto:support@bharatpay.com" className="text-blue-500"> support@bharatpay.com</a>.
        </p>
      </section>

      <footer className="mt-8">
        <p className="text-base text-gray-950 leading-relaxed">
          By using the BharatPay Website, you acknowledge and agree to this Disclaimer. Thank you for
          choosing BharatPay for your financial and digital solutions.
        </p>
      </footer>
    </div>
  );
};

export default Disclaimer;
