import Link from 'next/link';
import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-teal-700 text-white p-8 max-w-screen-2xl mx-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        {/* Social Media Links */}
        <div className="social-media mb-6 md:mb-0">
          <h3 className="text-2xl font-semibold">HG.</h3>
          <div className="flex space-x-4 mt-4">
            <Link
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-600"
              aria-label="Follow us on Twitter"
            >
              <FaTwitter size={28} />
            </Link>
            <Link
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400"
              aria-label="Follow us on Facebook"
            >
              <FaFacebookF size={28} />
            </Link>
            <Link
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
              aria-label="Follow us on Instagram"
            >
              <FaInstagram size={28} />
            </Link>
          </div>
        </div>

        {/* Shop Links */}
        <div className="shop mb-6 md:mb-0">
          <h3 className="text-lg font-semibold">SHOP</h3>
          <ul className="mt-2 space-y-1">
            <li><a href="#" className="hover:text-gray-400">Products</a></li>
            <li><a href="#" className="hover:text-gray-400">Overview</a></li>
            <li><a href="#" className="hover:text-gray-400">Pricing</a></li>
            <li><a href="#" className="hover:text-gray-400">Releases</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="company mb-6 md:mb-0">
          <h3 className="text-lg font-semibold">Company</h3>
          <ul className="mt-2 space-y-1">
            <li><a href="#" className="hover:text-gray-400">About us</a></li>
            <li><a href="#" className="hover:text-gray-400">Stay up to date</a></li>
            <li><a href="#" className="hover:text-gray-400">Support</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>

       {/* Newsletter Subscription */}
       <div className="newsletter mb-6 md:mb-0 w-full md:w-auto">
          <h3 className="text-lg font-semibold">News</h3>
          <form className="flex flex-col md:flex-row mt-2 space-y-2 md:space-y-0 md:space-x-2 bg-teal-700 p-2 rounded-md border-2 border-gray-400">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 flex-grow"
              required
              aria-label="Enter your email"
            />
            <button
              type="submit"
              className="bg-teal-500 text-white p-2 rounded-md hover:bg-teal-600 transition-colors md:w-auto"
            >
              SUBMIT
            </button>
          </form>
        </div>
      
      </div>

      {/* Horizontal Rule and Terms List */}
      <div className="flex flex-col items-center mt-8 md:mt-12">
        <hr className="border-t-4 border-gray-400 w-3/4 mb-4" />
        <ul className="flex space-x-4 text-sm font-bold">
          <li className="hover:text-gray-400"><a href="#">Term</a></li>
          <li className="hover:text-gray-400"><a href="#">Privacy</a></li>
          <li className="hover:text-gray-400"><a href="#">Cookies</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;