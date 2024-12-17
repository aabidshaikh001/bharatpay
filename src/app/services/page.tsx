'use client'
import React from 'react';

const Services = () => {
  return (
    <div className="bg-gray-100 p-6 pt-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="md:text-5xl text-4xl font-bold text-center mb-8 text-blue-900">BharatPay Services</h1>
        <div className="bg-white shadow-md rounded p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-green-600">Note:</h2>
          <p className="text-green-600">
            BharatPay provides all its services free of cost. We do not charge any additional fees for using our platform. If someone demands payment for service approvals, please report it immediately to our helpline. Stay cautious and avoid such fraudulent activities.
          </p>
        </div>

        <div className="bg-white shadow-md rounded p-6">
          <h1 className="text-3xl font-bold mb-6 text-blue-900">Complete BharatPay Services Overview</h1>
          <p className="text-lg text-gray-800 mb-6">
            BharatPay empowers merchants and individuals across India by providing easy access to essential services while ensuring high commissions and a seamless process. Here&apos;s a detailed look at all the services BharatPay offers:
          </p>

          <div className="service mb-8">
            <h2 className="text-2xl font-bold mb-4">1. AEPS (Aadhaar Enabled Payment System)</h2>
            <h3 className="text-xl font-semibold mb-2">What is AEPS?</h3>
            <p className="text-gray-700 mb-4">
              AEPS enables financial transactions like withdrawals, deposits, and balance inquiries using Aadhaar-linked accounts. It was introduced for areas where banking access is limited.
            </p>

            <h3 className="text-xl font-semibold mb-2">Benefits with BharatPay:</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Direct BharatPay AEPS access ensures 1% commission on every transaction.</li>
              <li>No intermediaries, ensuring transparent earnings.</li>
              <li>Simplifies banking for underserved areas.</li>
            </ul>
          </div>

          <div className="service mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Recharge Services</h2>
            <h3 className="text-xl font-semibold mb-2">What is Recharge?</h3>
            <p className="text-gray-700 mb-4">
              A platform to handle mobile and DTH recharges for customers quickly and efficiently.
            </p>

            <h3 className="text-xl font-semibold mb-2">Benefits with BharatPay:</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Enjoy a 5% commission on recharges across all operators like Jio, Airtel, and Vi.</li>
              <li>A reliable solution for telecom and entertainment recharges.</li>
              <li>Increase customer engagement by offering daily-need services.</li>
            </ul>
          </div>

          <div className="service mb-8">
            <h2 className="text-2xl font-bold mb-4">3. BBPS (Bharat Bill Payment System)</h2>
            <h3 className="text-xl font-semibold mb-2">What is BBPS?</h3>
            <p className="text-gray-700 mb-4">
              BBPS allows consumers to pay all types of utility bills like electricity, water, and gas from one platform.
            </p>

            <h3 className="text-xl font-semibold mb-2">Benefits with BharatPay:</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Earn 1% commission on every successful transaction.</li>
              <li>Manage multiple utility bills in one place.</li>
              <li>Empower customers with a hassle-free bill payment solution.</li>
            </ul>
          </div>

          <div className="service mb-8">
            <h2 className="text-2xl font-bold mb-4">6. BharatPay Investment Account</h2>
            <h3 className="text-xl font-semibold mb-2">What is BharatPay Account?</h3>
            <p className="text-gray-700 mb-4">
              BharatPay Investment Accounts are designed for merchants to manage transactions and earn interest on their account balance.
            </p>

            <h3 className="text-xl font-semibold mb-2">Benefits with BharatPay:</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Earn 12% annual interest on average account balances without risk.</li>
              <li>Support national growth as funds are invested in government-backed schemes.</li>
              <li>Accessible without any prior investment knowledge.</li>
            </ul>
          </div>

          <div className="bg-white shadow-md rounded p-6 mt-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Important Notes</h2>
            <ul className="list-decimal list-inside text-gray-700">
              <li>Free Services: BharatPay does not charge for any service.</li>
              <li>If someone asks for payment for services or approvals, report them to our helpline immediately.</li>
              <li>Indian-only Services: All services are valid only in Indian states.</li>
              <li>Verification Process: After registration, you must apply for each service individually. Services will activate only after document verification and approval.</li>
              <li>Reliable Earnings: Each service offers unmatched benefits to help you grow your business with no hidden costs or risks.</li>
            </ul>
            <p className="text-gray-950 font-bold mt-4">
              By choosing BharatPay, you not only gain access to the most competitive commissions but also support the vision of &quot;Digital Bharat&quot;.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
