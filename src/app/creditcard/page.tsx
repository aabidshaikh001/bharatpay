'use client'
import Image from "next/image";
import React from "react";
import { IconArrowRight, IconLogin } from '@tabler/icons-react';


function Creditcard() {
  return (
    <div className="bg-gray-50 pt-14">
      {/* Main Container */}
      <div className="max-w-full mx-0 bg-white shadow-lg">
        <div className="p-6 lg:p-12">
          {/* Page Title */}
          <h1 className="text-4xl font-bold text-blue-900 mb-6 text-center">
            Credit Card Services by Bharat Pay
          </h1>
          <p className="text-gray-700 mb-8">
            Welcome to Bharat Pay’s Credit Card Assistance Page! Here, we help
            individuals who face difficulties in obtaining credit cards directly
            from banks. Bharat Pay serves as a bridge between you and leading
            banks, ensuring access to credit cards with ease. Explore our
            services below:
          </p>

          {/* Section 1: BharatPay Content */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
            {/* Left Content */}
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-semibold mb-4">
                BharatPay: Your Partner for Credit Card Approval
              </h2>
              <ul className="list-disc ml-6 text-gray-700 space-y-4">
                <li>
                  <strong>Guaranteed Credit Card Approval:</strong> If you're
                  struggling to get a credit card or facing issues after
                  application, BharatPay provides a seamless way to apply for a
                  credit card directly through our platform. We guarantee your
                  credit card approval with full support and guidance.
                </li>
                <li>
                  <strong>We Act as a Bridge to Banks:</strong> BharatPay does
                  not directly issue credit cards. Instead, we ensure that your
                  application is processed by forwarding it to partner banks
                  with complete documentation. Banks then evaluate and issue
                  the credit card.
                </li>
                <li>
                  <strong>End-to-End Responsibility:</strong> From submitting
                  your credit card application to getting it approved, BharatPay
                  takes full responsibility for every step of the process.
                </li>
                <li>
                  <strong>Flexible Credit Limits:</strong> With BharatPay, you
                  can get a credit card offering a transaction limit ranging
                  from ₹25,000 to ₹2,00,000.
                </li>
              </ul>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/3 flex justify-center">
              <img
                src="/card1.png"
                alt="Credit Cards"
                className="h-auto w-auto"
              />
            </div>
          </div>

          {/* Section 2: Why Choose BharatPay */}
          <div className="mt-16">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              {/* Left Content */}
              <div className="lg:w-2/3">
                <h2 className="text-2xl font-semibold mb-4">
                  Why Choose BharatPay?
                </h2>
                <ul className="list-disc ml-6 text-gray-700 space-y-4">
                  <li>
                    <strong>For Rejected Applications:</strong> We assist
                    individuals whose credit card applications are not approved
                    due to various reasons.
                  </li>
                  <li>
                    <strong>Guaranteed Approval:</strong> Our team ensures all
                    issues are resolved and your credit card is approved
                    through partner banks.
                  </li>
                  <li>
                    <strong>Trusted Partner:</strong> BharatPay ensures your
                    application reaches the right bank, securing your card
                    without hassle.
                  </li>
                  <li>
                    <strong>Complete Assistance:</strong> Our process ensures
                    you are guided through every step, with full transparency.
                  </li>
                </ul>
              </div>

              {/* Right Image */}
              <div className="lg:w-1/3 flex justify-center">
                <img
                  src="/card2.png"
                  alt="Person Holding Credit Card"
                  className="h-auto w-auto"
                />
              </div>
            </div>
          </div>

          {/* Section 3: How to Apply */}
          <div className="">
            <h2 className="text-2xl font-semibold mb-4">How to Apply</h2>
            <p className="text-gray-700 mb-4">
              Applying for a credit card through BharatPay is simple and
              hassle-free. Follow these steps to ensure a smooth application
              process:
            </p>
            <ol className="list-decimal ml-6 text-gray-700 space-y-4">
              <li>
                <strong>Click on "Apply Now":</strong> Begin by clicking the
                "Apply Now" button provided below to start your application
                process.
              </li>
              <li>
                <strong>Fill in Your Details:</strong> Enter your personal and
                contact details as required in the application form. Ensure all
                information is accurate and up-to-date.
              </li>
              <li>
                <strong>Attach Required Documents:</strong> Upload the
                necessary documents, such as identity proof, address proof, and
                income statements, as per the requirements mentioned on the
                form.
              </li>
              <li>
                <strong>Submit Your Application:</strong> Review your details
                carefully, then submit your application.
              </li>
              <li>
                <strong>Pay the Processing Fees:</strong> After submitting the
                form, you will be required to pay a minimal processing fee to
                move your application forward.
              </li>
              <li>
                <strong>Track Your Application:</strong> Once your application
                is submitted, it will be processed by our team. You can track
                the status of your credit card application directly through the
                BharatPay platform.
              </li>
              <li>
                <strong>Respond to Additional Requests:</strong> If any
                additional information or documents are required during the
                process, you will be notified. Make sure to provide the
                requested details promptly to avoid delays.
              </li>
              <li>
                <strong>Receive Your Credit Card:</strong> Upon successful
                approval of your application, your credit card will be issued
                and delivered to your address.
              </li>
            </ol>

            <p className="text-gray-900 font-semibold mt-6">
              Apply today with BharatPay and enjoy a seamless, stress-free
              journey to owning your credit card!
            </p>
          </div>

          {/* Apply Now Button */}
          <div className="mt-8 text-center">
            <a href="https://login.bharatpay.agency/register" className="bg-blue-600 text-white px-6 py-3 text-lg font-semibold rounded-lg hover:bg-blue-700">
              APPLY NOW
            </a>
          </div>
          {/* Note Section */}
          <div className="mt-6 text-gray-700 text-center text-sm">
            <p>
              <strong>Note:</strong> BharatPay does not directly issue credit
              cards. It acts as a facilitator, forwarding your application and
              ensuring banks issue your card. Our goal is to provide you with a
              hassle-free experience and a guaranteed solution for your credit
              card needs. Ensure all details provided are accurate to avoid
              rejections or delays. BharatPay guarantees a smooth process by
              coordinating with banks on your behalf.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 mt-10">
      <div className="max-w-full mx-0 bg-white shadow-lg">
        <div className="p-6 lg:p-12">
          {/* Section Title */}
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-6">
            Offer Credit Card Services with BharatPay
          </h2>
          <p className="text-gray-700 mb-8">
            If you run a CSC center, Jan Seva Kendra, Emitra, or any other
            digital store, BharatPay has an exciting opportunity for you. Along
            with our complete range of financial services, we now offer a
            Credit Card Service feature, enabling you to assist people in your
            area with credit card applications. This service can also become an
            additional source of income for you, with no extra charges for
            activation.
          </p>

          {/* Main Content: Two columns */}
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Left Content */}
            <div className="lg:w-2/3">
              <h3 className="text-2xl font-semibold mb-4">
                What You Can Do with BharatPay Credit Card Services:
              </h3>
              <ol className="list-decimal ml-6 text-gray-700 space-y-6">
                <li>
                  <strong>Help Others Apply for Credit Cards:</strong>
                  <ul className="list-disc ml-6 mt-2 space-y-2">
                    <li>
                      With BharatPay, you can assist individuals in your area
                      to get their credit cards issued, even if they face
                      difficulties applying directly through banks.
                    </li>
                    <li>
                      This service is seamlessly integrated into your BharatPay
                      ID along with other financial services.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Credit Card Cash Services:</strong>
                  <ul className="list-disc ml-6 mt-2 space-y-2">
                    <li>
                      If someone needs to transfer their credit card balance to
                      their bank account or withdraw it as cash, you can
                      provide this service through BharatPay at competitive
                      charges.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>
                    Low Commission Credit Card Payments for Your Business:
                  </strong>
                  <ul className="list-disc ml-6 mt-2 space-y-2">
                    <li>
                      If you own a shop where customers frequently pay using
                      credit cards, BharatPay offers you a solution to reduce
                      the high commission charges (up to 5%). By accepting
                      payments through BharatPay, you can enjoy the lowest
                      transaction fees, saving your business money.
                    </li>
                  </ul>
                </li>
              </ol>

              <h3 className="text-2xl font-semibold mt-10 mb-4">
                Why Choose BharatPay for Credit Card Services?
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-4">
                <li>
                  <strong>No Additional Charges:</strong> These services are
                  included with your BharatPay ID.
                </li>
                <li>
                  <strong>Additional Income Source:</strong> By offering credit
                  card services, you can earn extra income.
                </li>
                <li>
                  <strong>Seamless Integration:</strong> All services, including
                  credit card applications, are managed from a single BharatPay
                  platform.
                </li>
                <li>
                  <strong>Low Commission on Transactions:</strong> Enjoy the
                  lowest charges on credit card payments for your business.
                </li>
              </ul>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/3 flex justify-center">
              <img
                src="/card3.png"
                alt="Credit Card Terminal"
                className="h-auto w-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 ">
      <div className="max-w-full mx-0 bg-white shadow-lg">
        <div className="p-6 lg:p-12">
          {/* Title and Content Wrapper */}
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Left Content */}
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-semibold mb-6">How to Get Started:</h2>
              <ol className="list-decimal ml-6 text-gray-700 space-y-6">
                <li>
                  <strong>Register or Log in to BharatPay:</strong>
                  <ul className="list-disc ml-6 mt-2 space-y-2">
                    <li>
                      If you don’t already have a BharatPay ID, register and log in
                      to the platform.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Go to the Credit Card Section:</strong>
                  <ul className="list-disc ml-6 mt-2 space-y-2">
                    <li>
                      Navigate to the Credit Card Services section in your BharatPay
                      account.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Apply for Activation:</strong>
                  <ul className="list-disc ml-6 mt-2 space-y-2">
                    <li>Enter your details and upload the required documents.</li>
                  </ul>
                </li>
                <li>
                  <strong>Verification Process:</strong>
                  <ul className="list-disc ml-6 mt-2 space-y-2">
                    <li>
                      Once your application is submitted, the BharatPay team will
                      verify your documents.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Start Providing Services:</strong>
                  <ul className="list-disc ml-6 mt-2 space-y-2">
                    <li>
                      After successful verification, the credit card services will
                      be activated on your BharatPay ID, allowing you to start
                      assisting customers.
                    </li>
                  </ul>
                </li>
              </ol>

              {/* Footer Note */}
              <p className="mt-8 text-gray-800 font-semibold">
                Start offering credit card services today and expand your business
                opportunities with BharatPay!
              </p>

              {/* Buttons */}
              <div className="mt-8 flex space-x-4">
                {/* Apply Now Button */}
                <a href="https://login.bharatpay.agency/register" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg flex items-center">
                  Apply Now <IconArrowRight className="ml-2" />
                </a>

                {/* Login Button */}
                <a href="https://login.bharatpay.agency/login" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg flex items-center">
                  Login <IconLogin className="ml-2" />
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/3 flex justify-center">
              <img
                src="/card4.png"
                alt="Get Started Illustration"
                className="h-auto w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Creditcard;
