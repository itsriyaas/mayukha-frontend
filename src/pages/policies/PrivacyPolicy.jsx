import ShoppingHeader from "@/components/shopping-view/header"


function PrivacyPolicy() {
  return (
    <>
    <ShoppingHeader/>
     <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-gray-800">
          Privacy Policy
        </h1>
        <p className="mb-6 text-gray-700 leading-relaxed">
          The <strong>Mayukha Fashion Store</strong> values your privacy and is dedicated to protecting it. The purpose of this Privacy Policy is to inform you of how we collect, use, and safeguard the data you provide us when you visit our site, make a purchase, or interact with our brand online or in person.
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">1. Information We Collect</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Personal Information:</strong> Name, email address, phone number, shipping and billing address.</li>
            <li><strong>Payment Details:</strong> Information required for securely processing payments (we do not retain card or payment credentials).</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">2. How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Process and execute your orders.</li>
            <li>Send confirmations of orders, invoices, and delivery notifications.</li>
            <li>Provide assistance to customers and reply to questions.</li>
            <li>Refine our website, products, and customer satisfaction.</li>
            <li>Deliver marketing messages, offers, and updates (only if you consent to receive them).</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">3. Data Protection & Security</h2>
          <p className="text-gray-700 leading-relaxed">
            We implement security measures that meet industry standards to safeguard your data against unauthorized access, loss, or misuse. All online transactions are conducted via secure and encrypted payment gateways.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">4. Sharing of Information</h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            We do not sell, trade, or rent customer data to third parties. We may disclose limited information to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Delivery partners for order fulfillment.</li>
            <li>Payment processors to facilitate secure transactions.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">5. Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any inquiries or issues pertaining to this Privacy Policy, please reach out to us at:
          </p>
          <ul className="mt-3 text-gray-700 space-y-1">
            <li>📩 Email: <a href="mailto:support@mayukhafashionstore.com" className="text-blue-600 underline">support@mayukhafashionstore.com</a></li>
            <li>📍 Address: Mayukha Fashion Store, Thekkenada, Thiruvullakkavu, Cherpu, Thrissur, Kerala 680561</li>
            <li>📞 Phone: +91 9447447701</li>
          </ul>
        </section>
      </div>
    </div>
    </>
  )
}

export default PrivacyPolicy