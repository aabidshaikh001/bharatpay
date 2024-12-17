'use client'
import React from 'react';

const AccountBenefits = () => {
  return (
    <div className="bg-gray-100 p-6 pt-16">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white shadow-md rounded p-6 mb-8">
          <h1 className="md:text-5xl text-blue-900 text-4xl font-bold text-center mb-8">BharatPay Investment Account Benefits</h1>
          
          <h2 className="text-xl font-bold mb-6 text-blue-900">What is BharatPay Investment Account?</h2>
          <p className="text-lg text-gray-800 mb-6">
            BharatPay Investment Account is designed to address merchants' needs by offering a smarter alternative to traditional wallets. Instead of storing unused funds in regular wallets without benefits, merchants can now earn monthly interest on their average balance, making their money work for them.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-blue-900">Key Features</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Interest Earnings</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Get 12% annual interest (calculated monthly) on the average balance maintained in the account.</li>
              <li>Interest is credited directly to your account without any extra processes.</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Ease of Use</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Functions like a regular wallet, allowing instant payouts anytime.</li>
              <li>No restrictions on accessing your funds; use them freely as needed.</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Zero-Risk Investment</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Funds in your BharatPay account are invested in government-backed projects and schemes.</li>
              <li>Merchants face no risk, ensuring security and steady returns.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-blue-900">How to Open a BharatPay Investment Account?</h2>
          <ol className="list-decimal list-inside text-gray-700 mb-8">
            <li className="mb-4"><span className="font-semibold">Register on BharatPay:</span> Sign up on the BharatPay platform by providing your details.</li>
            <li className="mb-4"><span className="font-semibold">Verification:</span> Once your documents are verified, your investment account is automatically activated.</li>
            <li className="mb-4"><span className="font-semibold">Start Using:</span> Begin depositing funds and maintaining an average balance to earn monthly interest.</li>
          </ol>

          <h2 className="text-2xl font-bold mb-6 text-blue-900">Why Does BharatPay Offer 12% Interest?</h2>
          <p className="text-lg text-gray-800 mb-6">
            The average balance in your BharatPay account is strategically invested in secure projects and schemes. These investments generate returns, a portion of which is shared with account holders as interest. This win-win approach ensures merchants benefit without additional risks or effort.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-blue-900">Benefits of BharatPay Investment Account</h2>
          <ul className="list-disc list-inside text-gray-700 mb-8">
            <li className="mb-4">Maximized Earnings: Your idle funds earn while you continue regular transactions.</li>
            <li className="mb-4">Instant Liquidity: Withdraw your funds anytime without penalties.</li>
            <li className="mb-4">No Extra Fees: No maintenance charges or hidden fees for the account.</li>
            <li className="mb-4">Enhanced Financial Planning: Build savings effortlessly while running your business.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6">Note</h2>
          <ul className="list-decimal list-inside text-gray-700 mb-8">
            <li className="mb-4">The BharatPay Investment Account is free to open and use.</li>
            <li className="mb-4">Ensure to maintain a higher average balance to maximize your monthly returns.</li>
            <li className="mb-4">Contact BharatPay support for any queries or assistance related to account setup and benefits.</li>
          </ul>

          <p className="text-lg text-gray-950 text-bold">
            With the BharatPay Investment Account, merchants not only secure their financial future but also actively participate in India's economic growth by supporting reliable investment schemes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountBenefits;
