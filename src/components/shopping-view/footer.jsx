import { FaYoutube, FaFacebookF, FaPinterestP, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#1c222c] text-white py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">

        {/* Logo & Description */}
        <div className="sm:col-span-2">
          <img src="/logo.png" alt="footer_logo" width={'200'} />
          <p className="text-gray-300 text-sm leading-relaxed mt-2">
            Introducing Mayukha Fashion Store - your complete ladies' store!
            We offer a unique selection of ladies fashion wear, ethnic collections, bridal wear, designer sarees, kurtis, churidars, western outfits, handbags, and accessories at Kaimals Associates' Mayukha Fashion Store.
          </p>
        </div>

        {/* About Us */}
        <div>
          <h4 className="font-semibold mb-3">About Us</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <Link to={"about-us"}><li>About Us</li></Link>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Privacy Policy */}
        <div>
          <h4 className="font-semibold mb-3">Privacy Policy</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <Link to={"privacy-policy"}><li>Privacy Policy</li></Link>
            <Link to={"termsandconditions"}><li>Terms & Conditions</li></Link>
            <Link to={"shipping-policy"}><li>Shipping Policy</li></Link>
            <Link to={"return-policy"}><li>Return Policy</li></Link>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h4 className="font-semibold mb-3">Customer Care</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <Link to={"contact-us"}><li>Contact Us</li></Link>
            <Link to={"/shop/account"}><li>Track Your Order</li></Link>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        © 2025 Mayukha Fashion. All Rights Reserved. Developed by <a href="https://theaitsolutions.net/" target="_blank" className="hover:text-blue-500">Thea IT Solutions</a>.
      </div>
    </footer>
  );
}
