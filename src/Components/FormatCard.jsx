import React from 'react';

const FormatCard = ({ image, title }) => {
  return (
    <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md w-32 h-32 md:w-40 md:h-44">
      <img src={image} alt={title} className="w-16 h-16 md:w-24 md:h-24 mb-2" />
      <p className="text-center text-gray-700 font-medium">{title}</p>
    </div>
  );
};

export default FormatCard;
