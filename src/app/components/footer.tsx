'use client'
import React, { useState } from 'react';
import { IconBrandFacebook, IconBrandTwitter, IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube } from '@tabler/icons-react';
import { IconMail, IconPhone } from '@tabler/icons-react';

import GoogleTranslate from './google';

const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
     {/* Feedback Modal */}
{isModalOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="relative bg-white rounded-lg w-[60%] h-[90%]">
      {/* Iframe Container */}
      <div className="relative w-full h-full">
        {/* Close Button inside iframe container */}
        <button
          className="absolute top-4 right-10  hover:text-gray-100 text-3xl z-10 text-white  font-extralight bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-gray-700 focus:outline-none"
          onClick={handleCloseModal}
          aria-label="Close"
        >
          x
        </button>

        {/* Iframe with increased height */}
        <iframe
          className="absolute inset-0 w-full h-full rounded-lg shadow-md"
          src="https://bharatpay.dialofy.com/webform/embed/6769380974f5b616845897"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
)}

      {/* Footer Section */}
      <footer
        className="relative text-white py-16 px-6 md:px-20 mt-16"
        id="contact"
        style={{
          backgroundImage: 'url(/bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Contact Us Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="text-base flex items-center border p-4 rounded-lg">
                <span className="mr-2">
                  <IconPhone className="w-6 h-6" />
                </span>
                +91 9660030177
              </li>
              <li className="text-base flex items-center border p-4 rounded-lg">
                <span className="mr-2">
                  <IconMail className="w-6 h-6" />
                </span>
                <a
                  href="mailto:support@bharatpay.agency"
                  className="hover:text-orange-300 transition duration-300"
                >
                  support@bharatpay.agency
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={handleOpenModal}
                  className="text-base text-white hover:text-orange-300 transition duration-300"
                >
                  Feedback
                </button>
              </li>
              <li>
                <a
                  href="/WebsitePolicy"
                  className="text-base text-white hover:text-orange-300 transition duration-300"
                >
                  Website Policy
                </a>
              </li>
              <li>
                <a
                  href="/TermsAndConditions"
                  className="text-base text-white hover:text-orange-300 transition duration-300"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/PrivacyPolicy"
                  className="text-base text-white hover:text-orange-300 transition duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/HyperlinkPolicy"
                  className="text-base text-white hover:text-orange-300 transition duration-300"
                >
                  Hyperlinking Policy
                </a>
              </li>
              <li>
                <a
                  href="/CopyrightPolicy"
                  className="text-base text-white hover:text-orange-300 transition duration-300"
                >
                  Copyright Policy
                </a>
              </li>
              <li>
                <a
                  href="/Disclaimer"
                  className="text-base text-white hover:text-orange-300 transition duration-300"
                >
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>

          {/* Help & Resources Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Government of India</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://www.mygov.in/"
                  className="text-base text-white hover:text-orange-300 transition duration-300"
                >
                  My Gov
                </a>
              </li>
              <li>
                <a
                  href="https://www.india.gov.in/"
                  className="text-base text-white hover:text-orange-300 transition duration-300"
                >
                  National Portal of India
                </a>
              </li>
              <li>
                <a
                  href="http://www.digitalindia.gov.in/"
                  className="text-base text-white hover:text-orange-300 transition duration-300"
                >
                  Digital India
                </a>
              </li>
              <li>
                <a
                  href="https://www.gst.gov.in/"
                  className="text-base text-white hover:text-orange-300 transition duration-300"
                >
                  GST.gov.in
                </a>
              </li>
              <li>
                <a
                  href="https://dbtbharat.gov.in/"
                  className="text-base text-white hover:text-orange-300 transition duration-300"
                >
                  DBT Bharat
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61570206142163&mibextid=ZbWKwL"
                className="text-white hover:text-blue-800 transition duration-300"
              >
                <IconBrandFacebook size={28} />
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-400 transition duration-300"
              >
                <IconBrandTwitter size={28} />
              </a>
              <a
                href="https://www.instagram.com/bharatpay.agency/profilecard/?igsh=ZWJhMGRscGE2anIw"
                className="text-white hover:text-pink-400 transition duration-300"
              >
                <IconBrandInstagram size={28} />
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-500 transition duration-300"
              >
                <IconBrandLinkedin size={28} />
              </a>
              <a
                href="https://www.youtube.com/@BharatpayAgency"
                className="text-white hover:text-red-600 transition duration-300"
              >
                <IconBrandYoutube size={28} />
              </a>
            </div>
            <div className="flex mt-4">
              <GoogleTranslate />
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Bottom Section */}
      <div className="text-center md:text-left border-t border-gray-700 bg-blue-900 pt-8 p-10">
        <p className="text-sm text-white">
          Copyright © 2024 BharatPay Agency. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
