import React from 'react';
  
const MainContent = ({Image}) => {
  return (
    
  <div className="container mx-auto mt-4 px-4 md:px-0">
  <div className="flex flex-col md:flex-row bg-blue-800 items-center">
  <div className="w-full md:w-1/2 text-white p-4 md:p-8">
    <p className="leading-7 text-slate-200 text-sm md:text-lg font-medium">
      WE OFFER PROFESSIONAL PROOFREADING
    </p>
    <p className="mt-8 max-w-lg leading-tight md:leading-tight text-slate-200 text-2xl md:text-5xl font-semibold">
      Professional Editing & <br/> Proofreading Services<br/> at Your Fingertips
    </p>
  <div className="mt-12 flex flex-col md:flex-row gap-4">
           <button className="bg-white text-blue-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-200">
             Calculate Price  
           </button>
           <button className="bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700">
             Free Samples
           </button>
  </div>
  </div>
  <div className="w-full md:w-1/2 p-4 md:p-8">
    <img className="w-full h-auto object-cover" src={Image} alt="Image2" />
  </div>
  </div>
  </div>
  );
};

export default MainContent;
