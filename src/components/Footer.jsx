import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 mt-12">
      <div className="container mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              India 360
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm">
              Discover India’s beauty with curated destinations, guided tours,
              and unforgettable experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[var(--primary)] transition">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--primary)] transition">
                  Tours
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--primary)] transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--primary)] transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-white mb-3">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-[var(--primary)] hover:text-white transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-[var(--primary)] hover:text-white transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-[var(--primary)] hover:text-white transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-[var(--primary)] hover:text-white transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 dark:border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} India 360. All rights reserved.</p>
          <div className="flex gap-4 mt-3 md:mt-0">
            <a href="#" className="hover:text-[var(--primary)] transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[var(--primary)] transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[var(--primary)] transition">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
