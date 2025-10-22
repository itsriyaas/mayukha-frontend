import ShoppingHeader from '@/components/shopping-view/header'
import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'

function Contact() {
  return (
    <>
    <ShoppingHeader/>
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Contact Details */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Contact Us
          </h2>
          <p className="text-dark-300 mb-6 leading-relaxed">
            Have a question or need assistance? We’re here to help!  
            Feel free to reach out through any of the methods below.
          </p>

          <div className="text-sm">
            <p>
              <strong className="text-white">Address:</strong><br />
              Mayukha Fashion Store<br />
              Mayukha fashion store Thekkenada, Thiruvullakkavu, Cherpu, Thrissur, Kerala 680561
            </p>

            <p>
              <strong className="text-white">Email:</strong>{" "}
              <a
                href="mailto:support@mayukhafashionstore.com"
                className="underline hover:text-blue-400"
              >
                support@mayukhafashionstore.com
              </a>
            </p>

            <p>
              <strong className="text-white">Phone:</strong>{" "}
              <span className="hover:text-green-400">+91 9447447701</span>
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-5 mt-6">
            <a
              href="#"
              className="text-gray-400 hover:text-red-500 text-xl transition-colors"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61572458038897"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue-500 text-xl transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/mayukha_fashion_store/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-pink-500 text-xl transition-colors"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-5">
          <h3 className="text-2xl font-semibold mb-4">Send Us a Message</h3>

          <form className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Optional Google Map */}
      <div className="mt-12">
        <iframe
          title="Mayukha Fashion Store Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.7283574852663!2d76.215197!3d10.4431171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7f1444f0a6b07%3A0xa8feb50dc8d7c7e6!2sMayukha%20Fashion%20Store!5e0!3m2!1sen!2sin!4v1761133042239!5m2!1sen!2sin"
          width="100%"
          height="300"
          className="rounded-lg border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </>
  )
}

export default Contact