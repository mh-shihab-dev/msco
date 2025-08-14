const Contact = () => {
  return (
    <section className="section">
      <div>
        {/* left */}
        <div className="bg-[#264646] p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h3 className="text-[#c39b6a] text-center text-sm mb-1">
          Have Any Questions?
        </h3>
        <h2 className="text-white text-center text-2xl font-semibold mb-6">
          Get in Touch with Us
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-gray-50 focus:ring-2 focus:ring-[#c39b6a] outline-none"
          />

          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Your Email"
              className="w-1/2 p-3 rounded-md bg-gray-50 focus:ring-2 focus:ring-[#c39b6a] outline-none"
            />
            <input
              type="tel"
              placeholder="Telephone"
              className="w-1/2 p-3 rounded-md bg-gray-50 focus:ring-2 focus:ring-[#c39b6a] outline-none"
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 rounded-md bg-gray-50 focus:ring-2 focus:ring-[#c39b6a] outline-none"
          />

          <textarea
            placeholder="Your message (Optional)"
            rows="4"
            className="w-full p-3 rounded-md bg-gray-50 focus:ring-2 focus:ring-[#c39b6a] resize-none outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#c39b6a] text-white py-3 rounded-full font-medium hover:bg-[#b08a5f] transition"
          >
            Submit
          </button>
        </form>
      </div>
      {/* right */}
       <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center bg-white rounded-xl shadow-md p-6">
        
        {/* Left: Contact Details */}
        <div className="space-y-6">
          {/* Location */}
          <div>
            <h3 className="text-[#c39b6a] font-semibold text-lg">Location</h3>
            <div className="flex items-start gap-3 mt-2">
              <div className="bg-[#264646] p-3 rounded-full">
                {/* <MapPin className="text-white w-5 h-5" /> */}
              </div>
              <div className="text-gray-700 text-sm leading-relaxed">
                <p>Bank House, 209 Merton Road, London, SW19 1EE</p>
                <p>Suda House, 100 Mile End Road, London, E1 4UN</p>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div>
            <h3 className="text-[#c39b6a] font-semibold text-lg">Phone</h3>
            <div className="flex items-start gap-3 mt-2">
              <div className="bg-[#264646] p-3 rounded-full">
                {/* <Phone className="text-white w-5 h-5" /> */}
              </div>
              <div className="text-gray-700 text-sm">
                <p>0208 543 9128</p>
                <p>0207 790 0793</p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div>
            <h3 className="text-[#c39b6a] font-semibold text-lg">Email</h3>
            <div className="flex items-start gap-3 mt-2">
              <div className="bg-[#264646] p-3 rounded-full">
                {/* <Mail className="text-white w-5 h-5" /> */}
              </div>
              <div className="text-gray-700 text-sm">
                <p>info@msaccountants.co.uk</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/contact-lady.png"
            alt="Contact"
            className="rounded-lg max-h-[320px] object-cover"
          />
        </div>
      </div>
    </div>
      </div>
    </section>
  );
};

export default Contact;
