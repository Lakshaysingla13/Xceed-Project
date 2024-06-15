import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between">
        {/* Company Description */}
        <div className="mb-6 md:mb-0  ">
          <h2 className="text-2xl font-bold mb-2 text-green-600">LOGOHERE</h2>
          <p className="text-gray-300">
            Proofers offer a wide variety of tailor-made services <br/> to meet your individual needs. Proofers offer a<br/> number of core services which include proofreading <br/> and copy-editing (thesis, dissertations, essays, <br/> reports), document formatting and plagiarism.
          </p>
          <p className="mt-4 text-slate-300">
            &copy; 2022 | All Rights Reserved
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Services</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Pricing</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Submit Order</a></li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Subscribe Newsletter</h3>
          <form className="flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              className="px-4 py-2 rounded-md text-gray-700" 
              placeholder="Your Email" 
            />
            <button 
              type="submit" 
              className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-700"
            >
              &#x27A4;
            </button>
          </form>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-8 text-center mt-6">
        <p className="text-slate-300">
          <a href="#" className="hover:text-white">Privacy Policy</a> | <a href="#" className="hover:text-white">Terms & Conditions</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
