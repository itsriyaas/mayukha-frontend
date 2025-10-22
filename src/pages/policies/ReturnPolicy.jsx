import ShoppingHeader from '@/components/shopping-view/header'
import React from 'react'

function ReturnPolicy() {
  return (
    <>
    <ShoppingHeader/>
    <div className="max-w-5xl mx-auto p-4 sm:p-6 md:p-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
        Return Policy
      </h1>

      <p className="text-gray-700 mb-6 text-justify">
        Our top priority at <span className="font-semibold">Mayukha Fashion Store</span> is ensuring customer satisfaction. We hope you will love every outfit you buy from us. If something does not meet your expectations, our 15-day return policy makes it easy to initiate a return or exchange.
      </p>

      <div className="space-y-6">
        {/* 1. Eligibility for Returns */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">1. Eligibility for Returns</h2>
          <p className="text-gray-700 mb-2">
            You may initiate a return or exchange within 15 days from the date of delivery, as long as the following conditions are fulfilled:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>The product should be unused, unwashed, and unworn.</li>
            <li>All original tags, packaging, and labels must be intact.</li>
            <li>You must have a valid proof of purchase (invoice or order confirmation).</li>
            <li>Returns requested beyond 15 days from the delivery date will not be accepted.</li>
          </ul>
        </section>

        {/* 2. How to Process a Return */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">2. How to Process a Return</h2>
          <p className="text-gray-700 mb-2">
            To process a return or exchange:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Get in touch with our support team at <span className="font-medium">support@mayukhafashionstore.com</span> within 15 days of receiving your order.</li>
            <li>Share your order number, details about the item, and the reason for the return.</li>
            <li>Our team will assess your request and provide you with return instructions.</li>
            <li>Make sure to pack the item properly in its original condition and send it to the given address.</li>
          </ul>
        </section>

        {/* 3. Contact Us */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">3. Contact Us</h2>
          <p className="text-gray-700 mb-1">📩 Email: <span className="font-medium">support@mayukhafashionstore.com</span></p>
          <p className="text-gray-700 mb-1">📍 Address: <span className="font-medium">Mayukha Fashion Store, Thekkenada, Thiruvullakkavu, Cherpu, Thrissur, Kerala – 680561</span></p>
          <p className="text-gray-700">📞 Phone: <span className="font-medium">+91 9447447701</span></p>
        </section>
      </div>
    </div>
    </>
  )
}

export default ReturnPolicy