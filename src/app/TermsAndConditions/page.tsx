'use client';

import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 pt-24">
      <h1 className="text-5xl font-semibold mb-8 text-blue-900">Terms and Conditions</h1>

      <p className="text-base text-gray-950 leading-relaxed mb-6">
        Welcome to BharatPay! By accessing or using our services, you agree to abide by the following terms
        and conditions. Please read these terms carefully. If you do not agree, you may not use our
        services.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">1. Acceptance of Terms</h2>
        <p className="text-base text-gray-950 leading-relaxed">
          By using BharatPay’s website or services, you acknowledge that you have read, understood, and
          agree to be bound by these terms, along with any future updates.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">2. Eligibility</h2>
        <p className="text-base text-gray-950 leading-relaxed">
          You must be at least 18 years of age to use BharatPay services. By registering, you represent that
          you have the legal capacity to enter into a binding agreement.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">3. Account Registration</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>You are responsible for maintaining the confidentiality of your account and password.</li>
          <li>
            You agree to provide accurate and complete information during registration and update it
            promptly if it changes.
          </li>
          <li>
            BharatPay reserves the right to terminate or suspend accounts if any misuse or fraudulent
            activity is detected.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">4. Services Provided</h2>
        <p className="text-base text-gray-950 leading-relaxed">
          BharatPay offers financial technology services, including AEPS, BBPS, recharges, and other digital
          financial solutions. The services provided are subject to change at our sole discretion.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">5. Fees and Charges</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>BharatPay services are subject to applicable fees as outlined on our website.</li>
          <li>Fees may vary based on the type of service and are subject to change without prior notice.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">6. User Conduct</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>You agree not to use BharatPay for any unlawful purposes.</li>
          <li>Do not interfere with the operation or security of the website or services.</li>
          <li>Provide false or misleading information during registration or transactions.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">7. Intellectual Property</h2>
        <p className="text-base text-gray-950 leading-relaxed">
          All content, logos, trademarks, and designs on the BharatPay platform are the property of
          BharatPay and protected by intellectual property laws. Unauthorized use is prohibited.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">8. Privacy Policy</h2>
        <p className="text-base text-gray-950 leading-relaxed">
          Your use of BharatPay is governed by our Privacy Policy, which outlines how we collect, use, and
          protect your personal information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">9. Limitation of Liability</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            BharatPay will not be held liable for any loss or damage arising from unauthorized access to
            your account.
          </li>
          <li>
            Interruptions in service due to technical issues or force majeure events are beyond our control.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">10. Indemnification</h2>
        <p className="text-base text-gray-950 leading-relaxed">
          You agree to indemnify and hold BharatPay harmless from any claims, damages, or expenses arising
          from your misuse of the platform or violation of these terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">11. Termination</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            BharatPay reserves the right to suspend or terminate your account without prior notice if you
            violate these terms or engage in fraudulent activities.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">12. Governing Law</h2>
        <p className="text-base text-gray-950 leading-relaxed">
          These terms and conditions are governed by the laws of India. Any disputes will be resolved
          exclusively in the courts of [your jurisdiction].
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">13. Amendments</h2>
        <p className="text-base text-gray-950 leading-relaxed">
          BharatPay reserves the right to modify these terms at any time. Users will be notified of
          significant changes via the website or email.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">14. Contact Us</h2>
        <p className="text-base text-gray-950 leading-relaxed">
          For questions or concerns, please contact us at
          <a href="mailto:support@bharatpay.com" className="text-blue-500"> support@bharatpay.com</a>.
        </p>
      </section>

      <footer className="mt-8">
        <p className="text-base text-gray-950 leading-relaxed">
          By using BharatPay, you acknowledge that you have read, understood, and agree to these Terms and
          Conditions.
        </p>
      </footer>
    </div>
  );
};

export default TermsAndConditions;
