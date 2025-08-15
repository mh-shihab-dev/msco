import { assets } from "@/assets/assets";
import { contactInfo } from "@/data/Data";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#011c1a] py-16">
      <div className="w-[90%] max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[0.6fr_0.9fr_1.6fr_1.3fr] gap-10 relative">
        {/* Pages */}
        <div className="relative">
          <h3 className="font-semibold text-xl text-white mb-4">Pages</h3>
          <ul className="space-y-2 text-[#99a4a3] font-inter">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Why Choose Us</li>
            <li>Contact</li>
          </ul>
          <div className="hidden lg:block absolute top-0 right-0 w-px h-[75%] bg-[#264646]"></div>
        </div>

        {/* Our Services */}
        <div className="relative">
          <h3 className="font-semibold text-xl text-white mb-4">
            Our Services
          </h3>
          <ul className="space-y-3 text-[#99a4a3] text-base font-inter">
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
          <div className="hidden lg:block absolute top-0 -right-2 w-px h-[75%] bg-[#264646]"></div>
        </div>

        {/* Logo & Description */}
        <div className="relative text-left md:text-center space-y-[22px]">
          <Image
            src={assets.mscoLight}
            alt="msco-logo"
            className="mx-0 md:mx-auto"
          />
          <p className="text-gray-300 text-base leading-[26px] font-inter">
            MSCO Accountants is a trusted firm offering expert services in tax,
            bookkeeping, payroll, and business advisory—helping clients stay
            compliant and grow with confidence.
          </p>
          <Image src={assets.accaFooter} alt="footer-img" className="mx-auto" />
          <div className="flex gap-4 bg-[#011c1a] p-6 justify-center">
            {/* Facebook */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-10 h-10 rounded-full bg-[#0d2c28] flex items-center justify-center hover:bg-[#b68c5a] transition-colors duration-300 cursor-pointer"
            >
              <Image
                src={assets.fb}
                alt="Facebook"
                width={20}
                height={20}
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </a>

            {/* Twitter */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-10 h-10 rounded-full bg-[#0d2c28] flex items-center justify-center hover:bg-[#b68c5a] transition-colors duration-300 cursor-pointer"
            >
              <Image
                src={assets.twitter}
                alt="Twitter"
                width={20}
                height={20}
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </a>

            {/* Instagram */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-10 h-10 rounded-full bg-[#0d2c28] flex items-center justify-center hover:bg-[#b68c5a] transition-colors duration-300 cursor-pointer"
            >
              <Image
                src={assets.insta}
                alt="Instagram"
                width={20}
                height={20}
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-10 h-10 rounded-full bg-[#0d2c28] flex items-center justify-center hover:bg-[#b68c5a] transition-colors duration-300 cursor-pointer"
            >
              <Image
                src={assets.linkedin}
                alt="LinkedIn"
                width={20}
                height={20}
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </a>
          </div>
          <div className="hidden lg:block absolute top-0 -right-5 w-px h-[75%] bg-[#264646]"></div>
        </div>

        {/* Location & Contact */}
        <div>
          <div className="space-y-6">
            {contactInfo.map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-[#314e52] mt-2 rounded-full flex items-center justify-center flex-shrink-0 group p-4 shadow-lg">
                  <Image
                    src={item.icon}
                    width={18}
                    alt={item.title}
                    className="transition-transform duration-500 group-hover:scale-x-[-1]"
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="text-white text-lg sm:text-xl font-bold">
                    {item.title}
                  </h4>
                  <p className="max-w-[240px] text-[#868686] text-sm  font-inter font-normal">
                    {item.text1}
                  </p>
                  {item.text2 && (
                    <p className="max-w-[240px] text-[#868686] text-sm  font-inter font-normal">
                      {item.text2}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
