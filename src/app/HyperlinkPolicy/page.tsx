'use client';

import React from "react";

const HyperlinkPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 pt-24">
      <h1 className="text-5xl font-semibold mb-8 text-blue-900">Hyperlink Policy</h1>

      <p className="text-base text-gray-950 leading-relaxed mb-6">
        BharatPay is committed to providing a seamless experience for its users by including links to
        external websites that are either government-related or serve other relevant purposes. These links
        are provided solely for your convenience, allowing you direct access to such websites.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">Purpose of External Links</h2>
        <p className="text-base text-gray-950 leading-relaxed">
          The external links provided on our website are meant to:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Offer quick access to official government portals and services.</li>
          <li>Redirect to other essential resources that may benefit our users.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">No Copyright or Affiliation</h2>
        <p className="text-base text-gray-950 leading-relaxed">
          Please note that:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>BharatPay does not claim any copyright over the content of the government or other linked websites.</li>
          <li>
            BharatPay does not have any affiliation, partnership, or connection with the linked websites unless
            explicitly mentioned.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">User Responsibility</h2>
        <p className="text-base text-gray-950 leading-relaxed">
          By clicking on an external link:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>You acknowledge that you are leaving BharatPay’s website.</li>
          <li>
            BharatPay is not responsible for the content, accuracy, or reliability of the linked websites.
          </li>
          <li>
            Any interaction, data sharing, or transactions performed on third-party websites are solely your
            responsibility.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">Disclaimer</h2>
        <p className="text-base text-gray-950 leading-relaxed">
          The inclusion of a link on BharatPay’s website does not imply endorsement or approval of the linked
          website or its content. Users are advised to review the privacy policies and terms of use of the
          linked websites before engaging with them.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">Contact Us</h2>
        <p className="text-base text-gray-950 leading-relaxed">
          For any questions or concerns regarding this policy, please contact us at
          <a href="mailto:Support@bharatpay.agency" className="text-blue-500"> Support@bharatpay.agency</a>.
        </p>
      </section>

      <footer className="mt-8">
        <p className="text-base text-gray-950 leading-relaxed">
          By using BharatPay’s hyperlinks, you agree to the terms of this Hyperlink Policy.
        </p>
      </footer>
    </div>
  );
};

export default HyperlinkPolicy;
