'use client';

import React from "react";

const WebsitePolicy = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 pt-24">
      <h1 className="text-5xl font-semibold mb-8 text-blue-900">BharatPay Website Policy</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">1. Introduction</h2>
        <p className="text-base text-gray-950 leading-relaxed">
          Welcome to BharatPay. This policy outlines the terms and conditions governing the use of our
          website, services, and products. By accessing or using BharatPay, you agree to comply with and
          be bound by the terms outlined herein.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">2. Privacy Policy</h2>
        <p className="text-base text-gray-950 leading-relaxed">
          We value your privacy and are committed to protecting your personal information. Please review
          our Privacy Policy to understand how we collect, use, and safeguard your data. Key points
          include:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Collection of personal information such as name, contact details, and transaction data.</li>
          <li>Use of data for service improvement, fraud prevention, and marketing.</li>
          <li>Sharing information with third parties only when necessary and legally permissible.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">3. User Eligibility</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Be at least 18 years of age.</li>
          <li>Provide accurate and up-to-date information during registration.</li>
          <li>Not use the platform for any illegal or unauthorized purposes.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">4. Services Offered</h2>
        <p className="text-base text-gray-950 leading-relaxed">
          BharatPay provides a range of financial services, including but not limited to:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>AEPS (Aadhaar Enabled Payment System)</li>
          <li>Bill payments and recharges (BBPS)</li>
          <li>Digital wallet services with competitive returns.</li>
        </ul>
        <p className="text-base text-gray-950 leading-relaxed">
          Specific terms for each service will be communicated during usage or registration.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">5. Fees and Charges</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>BharatPay services are subject to fees as outlined during transaction confirmation.</li>
          <li>Charges may vary based on service type and usage.</li>
          <li>BharatPay reserves the right to modify fees with prior notice to users.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">6. User Responsibilities</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Ensure the confidentiality of login credentials.</li>
          <li>Use the platform for lawful purposes only.</li>
          <li>Report any unauthorized transactions or security breaches immediately.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">7. Intellectual Property</h2>
        <p className="text-base text-gray-950 leading-relaxed">
          All content, logos, and trademarks displayed on the BharatPay website are the property of
          BharatPay. Unauthorized use of any intellectual property is strictly prohibited.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">8. Limitation of Liability</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>BharatPay is not liable for losses arising from unauthorized transactions or user negligence.</li>
          <li>
            We are not responsible for service interruptions caused by technical issues, maintenance, or
            external factors.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">9. Refund and Dispute Resolution</h2>
        <p className="text-base text-gray-950 leading-relaxed">
          Refunds will be processed as per the Refund Policy. Users can raise disputes through our support
          channels. Efforts will be made to resolve disputes promptly and fairly.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">10. Termination</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            BharatPay reserves the right to suspend or terminate user accounts for violating terms or
            engaging in fraudulent activities.
          </li>
          <li>Users can also terminate their accounts by contacting customer support.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">11. Governing Law</h2>
        <p className="text-base text-gray-950 leading-relaxed">
          This policy is governed by Indian laws. Any disputes will be subject to the jurisdiction of
          courts in Jaipur, Rajasthan.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">12. Amendments</h2>
        <p className="text-base text-gray-950 leading-relaxed">
          BharatPay reserves the right to update this policy at any time. Users will be notified of
          significant changes via email or website notifications.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">13. Contact Us</h2>
        <p className="text-base text-gray-950 leading-relaxed">
          For queries or concerns, please contact us:
        </p>
        <p className="text-base text-gray-950 leading-relaxed">
          Email: <a href="mailto:support@bharatpay.in" className="text-blue-500">support@bharatpay.in</a>
        </p>
      </section>

      <footer className="mt-8">
        <p className="text-base text-gray-950 leading-relaxed">
          Thank you for choosing BharatPay, your trusted financial partner.
        </p>
      </footer>
    </div>
  );
};

export default WebsitePolicy;
