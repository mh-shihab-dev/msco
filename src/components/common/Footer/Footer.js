import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#011c1a] py-12">
      <div className="w-[90%] max-w-[1300px] mx-auto">
        {/* Pages */}
        <div>
          <h3 className="font-semibold text-xl text-white mb-4">Pages</h3>
          <ul className="space-y-2 text-[#99a4a3] font-inter">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Why Choose Us</li>
            <li>Contact</li>
          </ul>
        </div>
        {/* Our Services */}
        <div>
          <h3 className="font-semibold text-xl text-white mb-4">
            Our Services
          </h3>
          <ul className="space-y-2 text-[#99a4a3] font-inter">
            <li>Business Startups</li>
            <li>Company Formation</li>
            <li>Company Secretarial Services</li>
            <li>Accounts Preparation</li>
            <li>Bookkeeping</li>
            <li>Payroll Processing</li>
            <li>VAT Support</li>
            <li>Self-Assessment</li>
            <li>Tax Planning & Returns</li>
            <li>Inheritance Tax (IHT)</li>
          </ul>
        </div>
        {/* Center Logo & Description */}
        <div className="text-center md:text-left">
          <Image src={assets.mscoLight} alt="msco-logo" />
          <p className="text-gray-300 text-sm">
            MSCO Accountants is a trusted firm offering expert services in tax,
            bookkeeping, payroll, and business advisory—helping clients stay
            compliant and grow with confidence.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4 mt-4">
            {/* <img src="/acca.png" alt="ACCA" className="h-10" />
            <img src="/icaew.png" alt="ICAEW" className="h-10" /> */}
          </div>
          <div className="flex gap-3 justify-center md:justify-start mt-4"></div>
        </div>
          {/* Location & Contact */}
          <div>
            
          </div>
         
      </div>
    </footer>
  );
};

export default Footer;
