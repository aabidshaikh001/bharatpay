'use client'
import React from "react";

const BharPayDistribution = () => {
  return (
    <div className="bg-gray-100 text-gray-800 pt-20">
      <header className=" text-blue-900 p-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center">BharPay ID Distribution System</h1>
      </header>

      <main className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Section 1: Retailer ID */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl text-blue-900 font-bold mb-4">Retailer ID</h2>
          <p className="mb-2">
            <strong>Purpose:</strong> Self-use for services like AEPS, bill payments, and other financial transactions.
          </p>
          <ul className="list-disc list-inside mb-2">
            <li>Directly acquire a Retailer ID and start using services for personal or customer transactions.</li>
            <li>Ideal for individuals who work independently.</li>
          </ul>
          <p>
            <strong>Charges:</strong> Free.
          </p>
          <p>
            <strong>Conditions:</strong> No minimum balance required.
          </p>
        </section>

        {/* Section 2: Distributor ID */}
        <section className="bg-white p-6 rounded-lg shadow-md ">
          <h2 className="text-xl text-blue-900 font-bold mb-4">Distributor ID</h2>
          <p className="mb-2">
            <strong>Purpose:</strong> Manage and create Retailer IDs for your downline. Earn commissions from transactions done by retailers under your network.
          </p>
          <ul className="list-disc list-inside mb-2">
            <li>Distribute Retailer IDs to other users.</li>
            <li>Earn commission on every transaction done by your retailers.</li>
            <li>Earn 1% of the monthly average balance maintained by all downline members (Retailers under you).</li>
          </ul>
          <p>
            <strong>Charges:</strong> Free to create a Distributor ID. ₹100 + GST per Retailer ID issued.
          </p>
          <p>
            <strong>Conditions:</strong> Maintain a monthly average balance of ₹10,000 or more. If the balance goes below ₹10,000, the Distributor ID will be downgraded to a Retailer ID.
          </p>
        </section>

        {/* Section 3: Master Distributor ID */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl text-blue-900 font-bold mb-4">Master Distributor ID</h2>
          <p className="mb-2">
            <strong>Purpose:</strong> Manage Distributor IDs and Retailer IDs in your network. Earn commission from all transactions within your downline network.
          </p>
          <ul className="list-disc list-inside mb-2">
            <li>Add and manage both Distributors and Retailers in your downline.</li>
            <li>Earn commission on:
              <ul className="list-disc list-inside ml-6">
                <li>Transactions by Retailers added by you or your Distributors.</li>
                <li>Transactions by Distributors in your network.</li>
              </ul>
            </li>
            <li>Earn 1% of the monthly average balance maintained by all downline members (both Distributors and Retailers).</li>
          </ul>
          <p>
            <strong>Charges:</strong> Free to create a Master Distributor ID. ₹500 + GST per Distributor ID issued.
          </p>
          <p>
            <strong>Conditions:</strong> Maintain a monthly average balance of ₹20,000 or more. If the balance goes below ₹20,000, the Master Distributor ID will be downgraded to a Distributor ID.
          </p>
        </section>

        {/* Comparison Table */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-blue-900">Comparison Table</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2">Feature</th>
                  <th className="px-4 py-2">Retailer</th>
                  <th className="px-4 py-2">Distributor</th>
                  <th className="px-4 py-2">Master Distributor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Purpose</td>
                  <td className="border px-4 py-2">Self-use</td>
                  <td className="border px-4 py-2">Add Retailers</td>
                  <td className="border px-4 py-2">Add Distributors & Retailers</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Transaction Commission</td>
                  <td className="border px-4 py-2">No Downline Commission</td>
                  <td className="border px-4 py-2">From Retailers</td>
                  <td className="border px-4 py-2">From Distributors & Retailers</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Average Balance Bonus</td>
                  <td className="border px-4 py-2">None</td>
                  <td className="border px-4 py-2">1% from Downline Retailers</td>
                  <td className="border px-4 py-2">1% from Downline Distributors & Retailers</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">ID Issuance Charges</td>
                  <td className="border px-4 py-2">Not Applicable</td>
                  <td className="border px-4 py-2">₹100 + GST per ID</td>
                  <td className="border px-4 py-2">₹500 + GST per ID</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Downgrade Condition</td>
                  <td className="border px-4 py-2">Not Applicable</td>
                  <td className="border px-4 py-2">Balance &lt; ₹10,000</td>
                  <td className="border px-4 py-2">Balance &lt; ₹20,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Why Choose BharPay */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-blue-900">Why Choose BharPay Distribution System?</h2>
          <ul className="list-disc list-inside">
            <li>Transparent Earnings: Enjoy clear commissions and a unique monthly average balance bonus system.</li>
            <li>Network Growth: Expand your business by adding Retailers and Distributors under your downline.</li>
            <li>Lucrative Opportunities: Earn both transactional commissions and balance-based bonuses.</li>
            <li>Ease of Management: A user-friendly dashboard to track your network’s performance and earnings.</li>
          </ul>
          <p className="mt-4 text-center font-semibold">Start building your network today and maximize your earnings with BharPay!</p>
        </section>
      </main>

      
    </div>
  );
};

export default BharPayDistribution;
