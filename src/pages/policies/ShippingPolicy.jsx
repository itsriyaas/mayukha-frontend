import ShoppingHeader from '@/components/shopping-view/header'
import React from 'react'

function ShippingPolicy() {
    return (
        <>
            <ShoppingHeader />
            <div className="max-w-5xl mx-auto p-4 sm:p-6 md:p-8">
                <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
                    Shipping Policy
                </h1>

                <p className="text-gray-700 mb-6 text-justify">
                    Thank you for visiting <span className="font-semibold">Mayukha Fashion Store</span>, your reliable destination for fashionable and affordable women's clothing. This Shipping & Delivery Policy describes the process and timing of your order's processing, shipping, and delivery.
                </p>

                <div className="space-y-6">
                    {/* 1. Order Processing */}
                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold mb-2">1. Order Processing</h2>
                        <p className="text-gray-700 mb-2">
                            All confirmed orders are managed within a timeframe of 1 to 3 business days (excluding Sundays and public holidays).
                        </p>
                        <p className="text-gray-700 mb-2">
                            Once your order is processed, a confirmation email or WhatsApp message with tracking details will be sent to you.
                        </p>
                        <p className="text-gray-700">
                            In the event of any unexpected delays, our support team will get in touch with you immediately.
                        </p>
                    </section>

                    {/* 2. Shipping Timeline */}
                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold mb-2">2. Shipping Timeline</h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li>Delivery within Kerala: 1 to 7 business days</li>
                            <li>Delivery to other states in India: 5 to 10 business days</li>
                            <li>For remote areas: Delivery schedules may vary slightly according to location and courier availability.</li>
                        </ul>
                    </section>

                    {/* 3. Shipping Charges */}
                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold mb-2">3. Shipping Charges</h2>
                        <p className="text-gray-700 mb-2">
                            Shipping costs determined by the product and its weight will be calculated and shown at checkout prior to the completion of your order.
                        </p>
                        <p className="text-gray-700">
                            Once your order has been dispatched, you will receive a tracking ID through email or WhatsApp. You can monitor your shipment on the courier partner’s website until it arrives at your home.
                        </p>
                    </section>

                    {/* 4. Damaged or Lost Packages */}
                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold mb-2">4. Damaged or Lost Packages</h2>
                        <p className="text-gray-700">
                            Please reach out to us promptly at <span className="font-semibold">+91 9447447701</span> along with your order number and accompanying photos. We will conduct an investigation and facilitate a replacement or refund as necessary.
                        </p>
                    </section>

                    {/* 5. Incorrect Address or Delivery Details */}
                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold mb-2">5. Incorrect Address or Delivery Details</h2>
                        <p className="text-gray-700">
                            Kindly verify that your shipping address, postal code, and contact number are accurately provided during the checkout process. Mayukha Fashion Store disclaims any responsibility for delays or lost packages resulting from incorrect or incomplete address information.
                        </p>
                    </section>

                    {/* 6. Contact Us */}
                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold mb-2">6. Contact Us</h2>
                        <p className="text-gray-700 mb-1">📩 Email: <span className="font-medium">support@mayukhafashionstore.com</span></p>
                        <p className="text-gray-700 mb-1">📍 Address: <span className="font-medium">Mayukha Fashion Store, Thekkenada, Thiruvullakkavu, Cherpu, Thrissur, Kerala – 680561</span></p>
                        <p className="text-gray-700">📞 Phone: <span className="font-medium">+91 9447447701</span></p>
                    </section>
                </div>
            </div>
        </>
    )
}

export default ShippingPolicy