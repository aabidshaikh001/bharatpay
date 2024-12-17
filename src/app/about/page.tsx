'use client';

import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 pt-24">
      <h3 className="text-5xl font-semibold mb-6 text-blue-900">About BharatPay</h3>
      <p className="text-base text-gray-950 leading-relaxed mb-6">
        BharatPay is an innovative financial platform built to empower merchants across India by providing seamless access to essential financial services. Our mission aligns with India’s vision of a robust digital economy, bridging the gap between traditional businesses and cutting-edge fintech solutions.
      </p>
      <h4 className="text-2xl font-semibold mb-4 text-blue-900">Why Choose BharatPay?</h4>
      <ul className="space-y-4 list-decimal list-inside">
        <li className="text-base text-gray-950 leading-relaxed">
          <strong>Comprehensive CSC Services:</strong> Gain direct commissions on all CSC (Common Service Center) services, ensuring transparent earnings for merchants.
        </li>
        <li className="text-base text-gray-950 leading-relaxed">
          <strong>Investment Opportunities:</strong> Our secure BharatPay account offers a confirmed 12% interest, making it India’s most lucrative investment option for small businesses.
        </li>
        <li className="text-base text-gray-950 leading-relaxed">
          <strong>All-India Validity:</strong> Whether in urban hubs or rural areas, our services are tailored for merchants across every state in India.
        </li>
        <li className="text-base text-gray-950 leading-relaxed">
          <strong>Government Approved Compliance:</strong> All registered merchants must meet the latest requirements set by the Indian government, ensuring secure and legitimate operations.
        </li>
        <li className="text-base text-gray-950 leading-relaxed">
          <strong>Simplified Registration:</strong> Merchants rejected by CSC or new applicants can effortlessly apply for services, simplifying the process for everyone.
        </li>
      </ul>
      <p className="text-base text-gray-950 leading-relaxed mt-6">
        At BharatPay, we connect India’s merchants with opportunities for financial growth, operational ease, and compliance with government guidelines. Together, we are building a stronger Bharat, one transaction at a time.
      </p>
    </div>
  );
};

export default About;
