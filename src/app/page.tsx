'use client'
import React, { useState } from 'react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation,Autoplay  } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IconBrandGooglePlay } from '@tabler/icons-react';
import Image from 'next/image';

interface FAQ {
  question: string;
  answer: string;
}

export default function Home(): JSX.Element {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs: FAQ[] = [
    {
      question: "What is a RetailerID?",
      answer:
        "A RetailerID is a unique ID that allows individuals to use BharPay services like AEPS, bill payments, and other financial transactions. It is ideal for self-use or customer transactions.",
    },
    {
      question: "What is a DistributorID?",
      answer:
        "A DistributorID allows you to manage and create Retailer IDs for your network. You can earn commissions on transactions and a percentage of the monthly balance maintained by your downline members.",
    },
    {
      question: "Are there any charges for RetailerIDs?",
      answer: "No, acquiring a RetailerID is completely free of charge.",
    },
    {
      question: "What are the charges for DistributorIDs?",
      answer:
        "Creating a DistributorID is free. However, issuing a RetailerID under a DistributorID costs ₹100 + GST per ID.",
    },
    {
      question: "What happens if the Distributor balance falls below ₹10,000?",
      answer:
        "If the monthly average balance of ₹10,000 is not maintained, the DistributorID will be downgraded to a RetailerID.",
    },
    {
      question: "How can I reset my distributed IDs?",
      answer:
        "You can reset all distributed IDs by clicking the 'Reset IDs' button in the BharPay ID Distribution System interface.",
    },
  ]; 

  return (
    <div className='pt-20'>
    
      {/* hero */}
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation,Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full"
      >
        <SwiperSlide>
          <div className="flex flex-col md:flex-row justify-center items-center bg-white py-10 px-5 md:px-20">
            <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
              <h1 className="sm:text-5xl text-4xl text-blue-900 font-bold mb-4">
                Unlock the Best Financial Services with BharatPay!
              </h1>
              <p className="text-lg mb-6">
                Earn Up to 12% Monthly Interest on Your Account Balance & Get the Highest Commissions in CSC Services!
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                <a href='https://login.bharatpay.agency/register' className="bg-orange-500 text-white px-5 py-3 rounded-md font-semibold hover:bg-orange-600">
                  Apply Now
                </a>
                <a href='https://login.bharatpay.agency/login' className="bg-green-500 text-white px-5 py-3 rounded-md font-semibold hover:bg-green-600">
                  Login
                </a>
                <a href='https://bit.ly/bharatpay_download_app' className="bg-gray-900 text-white px-5 py-3 rounded-md font-semibold hover:bg-gray-950 flex items-center gap-1" download="https://bit.ly/bharatpay_download_app">
                  Download Apk <IconBrandGooglePlay/>
                </a>
              
              
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="/file.png"
                alt="Hero"
                className=""
                height="1500"
                width="400"
                priority
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col md:flex-row justify-center items-center bg-white py-10 px-5 md:px-20">
            <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
              <h1 className="sm:text-5xl text-4xl text-blue-900 font-bold mb-4">
              Direct Commission on All CSC Services
              </h1>
              <p className="text-lg mb-6">
              BharatPay provides direct commissions on all CSC-related services, such as
AEPS, BBPS, IRCTC bookings, and PAN card services. This ensures that
businesses and agents maximize their earnings without additional
intermediaries.
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                <a href='/#hero' className="bg-blue-500 text-white px-5 py-3 rounded-md font-semibold hover:bg-blue-600">
                  Get Started
                </a>
                <a href='/#faq' className="bg-green-500 text-white px-5 py-3 rounded-md font-semibold hover:bg-green-600">
                  Learn More
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="/fileo.png"
                alt="Payment Solutions"
                className=""
                height="800"
                width="400"
                priority
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col md:flex-row justify-center items-center bg-white py-10 px-5 md:px-20">
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
              <h1 className="sm:text-5xl text-4xl text-blue-900 font-bold mb-4">
              Secure Investment Account with 12% Interest

              </h1>
              <p className="text-lg mb-6">
              BharatPay offers a unique investment opportunity through its wallet
system, providing up to 12% confirmed interest on average monthly
balances. Users can securely invest their funds without needing extensive
market knowledge.

              </p>
              <div className="flex justify-center md:justify-start gap-4">
                <a href='https://login.bharatpay.agency/register' className="bg-orange-500 text-white px-5 py-3 rounded-md font-semibold hover:bg-orange-600">
                  Join Now
                </a>
                <a href='/#contact' className="bg-gray-500 text-white px-5 py-3 rounded-md font-semibold hover:bg-gray-600">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="/hero2.png"
                alt="Trusted Network"
                className="rounded-md sm:pt-28"
                height="800"
                width="350"
                priority
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
        {/* New Section After Swiper */}
<section className="bg-white py-16 px-10 md:px-20" id='hero'>
  <div className="text-center md:text-left mb-10">
    <h2 className="text-5xl font-bold text-center">BharatPay for Merchants</h2>
  </div>
  <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:space-x-16">
    <div className="md:w-1/2 flex justify-center md:justify-start">
      <Image
        src="/csc.png" // Replace with your image path
        alt="Common Service Centres"
        className="w-full max-w-lg rounded-md"
        height="1000"
                width="500"
                priority
      />
    </div>
    <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
      <p className="text-3xl font-semibold leading-relaxed mb-6">
        Empowering Merchants with Seamless Financial Solutions
      </p>
      <p className="text-xl text-gray-800 leading-relaxed mb-4">
        Join us today and leverage our innovative tools to streamline your business operations, maximize revenue, and simplify payments.
      </p>
      <p className="text-lg text-gray-800 leading-relaxed">
        At BharatPay, we understand the challenges faced by merchants, and our solutions are tailored to provide easy access to financial services, including instant settlements, better interest rates, and advanced tools for digital payments. We strive to empower your business with solutions that are not only effective but also simple to use. Experience seamless payment processing, comprehensive reporting, and an unmatched support system designed to help you succeed in every way.
      </p>
    </div>
  </div>
</section>
{/* New Detailed Section */}
<section className="bg-gray-50 py-16 px-10 md:px-20 mt-16">
  <div className="text-center md:text-left mb-10">
    <h2 className="text-4xl font-bold text-blue-900">1. Direct Commission on All CSC Services</h2>
  </div>
  <div className="md:w-full">
    <h3 className="text-2xl font-semibold mb-4">What is this?</h3>
    <p className="text-lg text-gray-800 leading-relaxed mb-6">
      BharatPay ensures direct earnings for agents and shopkeepers offering CSC (Common Service Center) services such as AEPS (Aadhaar Enabled Payment System), BBPS (Bharat Bill Payment System), PAN card services, and IRCTC ticket bookings.
    </p>

    <h3 className="text-2xl font-semibold mb-4">How does it benefit?</h3>
    <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed mb-6">
      <li><strong>Higher Earnings:</strong> No middleman cuts; you earn directly for every service transaction.</li>
      <li><strong>Transparency:</strong> Easy tracking of all commissions in real-time via the BharatPay portal.</li>
      <li><strong>Wide Range of Services:</strong> From utility bill payments to PAN card generation, all under one roof.</li>
    </ul>

    <h3 className="text-2xl font-semibold mb-4">Why it matters?</h3>
    <p className="text-lg text-gray-800 leading-relaxed">
      This simplifies the process for small businesses, agents, and entrepreneurs, ensuring they can earn maximum commissions from essential digital services. It&apos;s a one-stop solution for digital services, empowering local communities.
    </p>
  </div>
</section>
{/* New Detailed Section for Secure Investment Account */}
<section className="bg-white py-16 px-10 md:px-20 mt-16">
  <div className="text-center md:text-left mb-10">
    <h2 className="text-4xl font-bold text-blue-900">2. Secure Investment Account with 12% Confirmed Interest</h2>
  </div>
  <div className="md:w-full">
    <h3 className="text-2xl font-semibold mb-4">What is this?</h3>
    <p className="text-lg text-gray-800 leading-relaxed mb-6">
      BharatPay’s Account system acts as an investment account, offering up to 12% interest on the average monthly balance held in your account.
    </p>

    <h3 className="text-2xl font-semibold mb-4">How does it benefit?</h3>
    <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed mb-6">
      <li><strong>Guaranteed Returns:</strong> A fixed rate of interest ensures predictable earnings.</li>
      <li><strong>No Expertise Needed:</strong> Unlike traditional investments, no need to analyze markets or trends.</li>
      <li><strong>Safe & Reliable:</strong> Funds are invested in secure government-approved schemes.</li>
    </ul>

    <h3 className="text-2xl font-semibold mb-4">Why it matters?</h3>
    <p className="text-lg text-gray-800 leading-relaxed">
      For individuals or small businesses, this provides a stress-free way to grow their savings. With a significantly higher return compared to banks (typically offering 4-6%), BharatPay’s account becomes a competitive and trustworthy option.
    </p>
  </div>
</section>

{/* New Detailed Section for Access to CSC Services */}
<section className="bg-gray-50 py-16 px-10 md:px-20 mt-16">
  <div className="text-center md:text-left mb-10">
    <h2 className="text-4xl font-bold text-blue-900">3. Access to CSC Services for All</h2>
  </div>
  <div className="md:w-full">
    <h3 className="text-2xl font-semibold mb-4">What is this?</h3>
    <p className="text-lg text-gray-800 leading-relaxed mb-6">
      BharatPay offers access to all CSC-related services, even if you’ve been rejected by CSC or haven’t qualified through conventional methods.
    </p>

    <h3 className="text-2xl font-semibold mb-4">How does it benefit?</h3>
    <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed mb-6">
      <li><strong>Second Chance:</strong> Enables individuals who couldn’t register with CSC to access its services through BharatPay.</li>
      <li><strong>Seamless Application Process:</strong> Simplified steps to get started without lengthy approvals.</li>
      <li><strong>All-in-One Platform:</strong> Access AEPS, BBPS, IRCTC, and more without separate registrations.</li>
    </ul>

    <h3 className="text-2xl font-semibold mb-4">Why it matters?</h3>
    <p className="text-lg text-gray-800 leading-relaxed">
      This inclusivity ensures that no one is left out of India’s growing digital financial landscape. Whether you’re a new entrepreneur or an experienced agent, BharatPay bridges the gap for everyone.
    </p>
  </div>
</section>

{/* New Detailed Section for BharatPay Overview and Apply Now */}
<section className="bg-white py-16 px-10 md:px-20 mt-16">
  <div className="text-center md:text-left mb-10 text-blue-900">
    <h2 className="text-4xl font-bold">BharatPay: Simplifying Financial Services for All</h2>
  </div>
  <div className="md:w-full">
    <p className="text-lg font-semibold leading-relaxed mb-10">
      BharatPay not only simplifies financial services but also ensures higher earnings, smarter savings, and wider opportunities. It&apos;s the ultimate solution for individuals and businesses looking to thrive in today’s digital age.
    </p>

    <div className="text-center flex justify-center items-center md:text-left mb-10">
      <a href='https://login.bharatpay.agency/register' className="bg-orange-500 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-orange-600">
        Apply Now
      </a>
    </div>

    <h3 className="text-2xl font-semibold mb-4">Eligibility Criteria</h3>
    <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed mb-6">
      <li><strong>Service Validity:</strong> BharatPay services are exclusively available within India’s states and union territories. Applications from outside India or its states will not be processed.</li>
      <li><strong>Document Compliance:</strong> All documents submitted must be issued or approved by the Government of India. Applications will only be accepted if the documents align with the latest government regulations.</li>
      <li><strong>Residency Status:</strong> Applicants must be Indian residents with valid identification proof issued by Indian authorities.</li>
    </ul>
  </div>
</section>
<section id='faq'>
<div className="bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-3xl font-light mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white shadow-md p-4 rounded-lg cursor-pointer transition-transform transform hover:scale-105 duration-300 ${
                openFAQ === index ? "border-blue-900 border-2" : ""
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <span
                  className={`text-2xl font-bold transition-all duration-300 ${
                    openFAQ === index ? "text-gray-500" : "text-gray-500"
                  }`}
                >
                  {openFAQ === index ? "-" : "+"}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFAQ === index ? "max-h-screen mt-2" : "max-h-0"
                }`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>


    </div>
  );
}
