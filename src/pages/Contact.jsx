import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Get in Touch
        </h2>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
              Send us a Message
            </h3>
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-[var(--primary)] text-white rounded-lg font-semibold hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right - Contact Info */}
          <div className="flex flex-col justify-center space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Contact Information
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Feel free to reach out to us via phone, email, or visit our
              office. We’d love to hear from you!
            </p>
            <div className="space-y-4">
              <p className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <FaPhoneAlt className="text-[var(--primary)]" /> +91 1234567890
              </p>
              <p className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <FaEnvelope className="text-[var(--primary)]" /> india360.com
              </p>
              <p className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <FaMapMarkerAlt className="text-[var(--primary)]" /> 123 Road,
                Coimbatore, TamilNadu, India
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-[var(--primary)] hover:text-white transition"
              >
                <FaFacebook />
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
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="mt-12">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.959178435823!2d77.59456231482243!3d12.97159879085739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c1f3f2f1%3A0x4b77d8e90e3f68d9!2sMG%20Road%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1694367890123!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-2xl shadow"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
