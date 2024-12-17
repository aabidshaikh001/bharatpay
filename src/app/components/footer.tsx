'use client'
import React from 'react'
import { IconBrandFacebook, IconBrandTwitter, IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube } from '@tabler/icons-react';
import { IconMail, IconPhone } from '@tabler/icons-react';

import GoogleTranslate from './google';
function Footer() {
  return (
    <div>{/* Footer Section */}
    <footer className="relative text-white py-16 px-6 md:px-20 mt-16" id="contact" style={{ backgroundImage: 'url(/bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', backgroundBlendMode: 'overlay'  }}>
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
              <a href="mailto:support@bharatpay.agency" className="hover:text-orange-300 transition duration-300">support@bharatpay.agency</a>
            </li>
          </ul>
        </div>
    
        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-4">
            <li><a  className="text-base text-white hover:text-orange-300 transition duration-300">Website Policy</a></li>
            <li><a  className="text-base text-white hover:text-orange-300 transition duration-300">Terms & Conditions</a></li>
            <li><a  className="text-base text-white hover:text-orange-300 transition duration-300">Privacy Policy</a></li>
            <li><a  className="text-base text-white hover:text-orange-300 transition duration-300">Hyperlinking Policy</a></li>
            <li><a  className="text-base text-white hover:text-orange-300 transition duration-300">Copyright Policy</a></li>
            <li><a  className="text-base text-white hover:text-orange-300 transition duration-300">Disclaimer</a></li>
          </ul>
        </div>
    
        {/* Help & Resources Section */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Help & Resources</h3>
          <ul className="space-y-4">
            <li><a className="text-base text-white hover:text-orange-300 transition duration-300">Feedback</a></li>
            <li><a className="text-base text-white hover:text-orange-300 transition duration-300">Government of India</a></li>
            <li><a className="text-base text-white hover:text-orange-300 transition duration-300">My Gov</a></li>
            <li><a className="text-base text-white hover:text-orange-300 transition duration-300">National Portal of India</a></li>
            <li><a className="text-base text-white hover:text-orange-300 transition duration-300">Digital India</a></li>
            <li><a className="text-base text-white hover:text-orange-300 transition duration-300">GST.gov.in</a></li>
            <li><a className="text-base text-white hover:text-orange-300 transition duration-300">DBT Bharat</a></li>
          </ul>
        </div>
    
        {/* Follow Us Section */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61570206142163&mibextid=ZbWKwL" className="text-white hover:text-blue-800 transition duration-300">
              <IconBrandFacebook size={28} />
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition duration-300">
              <IconBrandTwitter size={28} />
            </a>
            <a href="https://www.instagram.com/bharatpay.agency/profilecard/?igsh=ZWJhMGRscGE2anIw" className="text-white hover:text-pink-400 transition duration-300">
              <IconBrandInstagram size={28} />
            </a>
            <a href="#" className="text-white hover:text-blue-500 transition duration-300">
              <IconBrandLinkedin size={28} />
            </a>
            <a href="https://www.youtube.com/@BharatpayAgency" className="text-white hover:text-red-600 transition duration-300">
              <IconBrandYoutube size={28} />
            </a>
          </div>
          <div className='flex '>
          <GoogleTranslate/>
          </div>
        </div>
      </div>
    
     
    </footer>
     {/* Footer Bottom Section */}
     <div className=" text-center md:text-left border-t border-gray-700 bg-blue-900 pt-8 p-10">
       
       <p className="text-sm text-white">Copyright © 2024 BharatPay Agency. All Rights Reserved.</p>
      
     </div></div>
  )
}

export default Footer