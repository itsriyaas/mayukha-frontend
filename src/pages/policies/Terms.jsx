import ShoppingHeader from '@/components/shopping-view/header'
import React from 'react'

function Terms() {
  return (
    <>
    <ShoppingHeader/>
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Terms and Conditions & Payment Policy
        </h1>

        {/* Terms and Conditions */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">1. General Information</h2>
          <p className="mb-4">
            When you visit our site or make a purchase, you are engaging in our "Service" 
            and agree to comply with these Terms and Conditions, including any additional 
            policies referred to in this document.
          </p>

          <h2 className="text-2xl font-semibold mb-4">2. Products and Services</h2>
          <p className="mb-4">
            We aim to present our women's fashion collections which encompass sarees, kurtis, 
            salwar sets, and accessories with the utmost accuracy. Nevertheless, colors and 
            textures may differ slightly due to variations in screens. All products are subject 
            to availability. We retain the right to alter, discontinue, or substitute items 
            without prior notification.
          </p>

          <h2 className="text-2xl font-semibold mb-4">3. Pricing and Payment</h2>
          <p className="mb-4">
            All prices displayed on the website are in Indian Rupees (INR) and encompass applicable 
            taxes unless specified otherwise. We retain the right to modify prices or promotional 
            offers at any moment. Payments should be processed through secure and authorized gateways 
            (UPI, credit/debit cards, or net banking). Mayukha Fashion Store is not liable for any 
            transaction errors or failures that occur due to third-party payment processors.
          </p>

          <h2 className="text-2xl font-semibold mb-4">4. Third-Party Links</h2>
          <p className="mb-4">
            Our website may feature links to third-party websites for convenience. We are not liable 
            for their content, privacy practices, or services.
          </p>
        </section>

        {/* Payment Policy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Payment Policy</h2>

          <h3 className="text-xl font-semibold mb-2">1. Accepted Payment Methods</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Credit / Debit Cards (Visa, MasterCard, RuPay, etc.)</li>
            <li>UPI Payments (Google Pay, PhonePe, Paytm, BHIM UPI, etc.)</li>
            <li>Net Banking from all major Indian banks</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">2. Online Payment Security</h3>
          <p className="mb-4">
            Your privacy and financial security are our highest priority. All online transactions 
            are managed through secure and encrypted payment gateways. Mayukha Fashion Store does not 
            retain or access your card or banking information.
          </p>

          <h3 className="text-xl font-semibold mb-2">3. Order Confirmation</h3>
          <p className="mb-4">
            After your payment has been processed successfully, an order confirmation will be sent 
            to you via email, which will include the details of your order. If you do not receive 
            this confirmation within 24 hours, please contact our support team.
          </p>

          <h3 className="text-xl font-semibold mb-2">4. Payment Failures</h3>
          <p className="mb-4">
            In case of a failed or incomplete payment: the order will not be confirmed until the 
            payment is successfully received. If an amount is deducted but does not appear in your 
            order, your bank will automatically process a refund within 5–7 business days. Contact 
            your bank or payment provider for further assistance.
          </p>

          <h3 className="text-xl font-semibold mb-2">5. Refunds and Cancellations</h3>
          <p className="mb-4">
            Refunds, if applicable, are executed following our Return & Refund Policy. Refunds will 
            be processed using the original payment method within 7–10 business days following approval.
          </p>

          <h3 className="text-xl font-semibold mb-2">6. Pricing and Taxes</h3>
          <p className="mb-4">
            All prices for products are presented in INR and include any applicable taxes (GST), unless 
            specified differently. Shipping costs determined by the product and its weight will be calculated 
            and shown at checkout prior to the completion of your order.
          </p>

          <h3 className="text-xl font-semibold mb-2">7. Contact Us</h3>
          <p className="mb-2">📩 Email: support@mayukhafashionstore.com</p>
          <p className="mb-2">
            📍 Address: Mayukha Fashion Store, Thekkenada, Thiruvullakkavu, Cherpu, Thrissur, Kerala 680561
          </p>
          <p className="mb-2">📞 Phone: +91 9447447701</p>
        </section>
      </div>
    </div>
    </>
  )
}

export default Terms