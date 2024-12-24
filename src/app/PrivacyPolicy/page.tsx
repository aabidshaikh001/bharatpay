'use client';

import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 pt-24">
      <h1 className="text-5xl font-semibold mb-8 text-blue-900">Privacy Policy</h1>

      <p className="text-base text-gray-950 leading-relaxed mb-6">
        At BharatPay, we value your trust and are committed to safeguarding your personal information. This
        Privacy Policy outlines how we collect, use, disclose, and protect your data when you use our
        website and services.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">1. Information We Collect</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Personal Information:</strong> Name, email address, phone number, address, date of birth,
            and other details provided during registration. Additionally, your Aadhaar, PAN card, and bank
            details may be collected for KYC purposes. Please ensure you do not provide confidential
            details such as debit card numbers, PINs, or other sensitive information.
          </li>
          <li>
            <strong>Transaction Information:</strong> Details of transactions carried out using BharatPay
            services.
          </li>
          <li>
            <strong>Device Information:</strong> IP address, browser type, operating system, and other
            technical details.
          </li>
          <li>
            <strong>Usage Data:</strong> Information about how you interact with our website and services.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Provide and improve our services.</li>
          <li>Process transactions and send confirmations.</li>
          <li>Respond to customer support requests.</li>
          <li>Notify you about updates, offers, and promotions.</li>
          <li>Comply with legal and regulatory requirements.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">3. Data Sharing and Disclosure</h2>
        <p className="text-base text-gray-950 leading-relaxed">
          We do not sell your personal information. However, we may share your data with:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Service Providers:</strong> Trusted third parties who assist in providing our services.
          </li>
          <li>
            <strong>Regulatory Authorities:</strong> As required by law or to protect our rights.
          </li>
          <li>
            <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">4. Data Security</h2>
        <p className="text-base text-gray-950 leading-relaxed">
          We implement appropriate technical and organizational measures to protect your data from
          unauthorized access, alteration, disclosure, or destruction. However, no system is completely
          secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">5. Your Rights</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Access, update, or delete your personal information.</li>
          <li>Opt-out of receiving marketing communications.</li>
          <li>Request a copy of the data we hold about you.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">6. Cookies and Tracking Technologies</h2>
        <p className="text-base text-gray-950 leading-relaxed">
          BharatPay uses cookies to enhance your browsing experience. You can manage your cookie
          preferences through your browser settings.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">7. Third-Party Links</h2>
        <p className="text-base text-gray-950 leading-relaxed">
          BharatPay's website does not have any connections with third-party entities. We provide direct
          access to official government and essential links only. If you choose to visit any other
          third-party link, you do so at your own responsibility.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">8. Children’s Privacy</h2>
        <p className="text-base text-gray-950 leading-relaxed">
          BharatPay does not knowingly collect personal information from children under 18. If we become
          aware of such data, we will delete it promptly.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">9. Changes to This Policy</h2>
        <p className="text-base text-gray-950 leading-relaxed">
          We may update this Privacy Policy periodically. Any changes will be posted on this page, and
          significant updates will be communicated to you via email or website notifications.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">10. Contact Us</h2>
        <p className="text-base text-gray-950 leading-relaxed">
          For questions or concerns about this Privacy Policy, please contact us at
          <a href="mailto:support@bharatpay.com" className="text-blue-500"> support@bharatpay.com</a>.
        </p>
      </section>

      <footer className="mt-8">
        <p className="text-base text-gray-950 leading-relaxed">
          By using BharatPay, you consent to the terms of this Privacy Policy.
        </p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
