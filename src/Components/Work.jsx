import React from 'react';

const Work = ({ image, title, description }) => {
  return (
    <div className="flex flex-col p-4 border rounded-lg shadow-md w-64 h-80">
      <img className="mb-4 w-16 h-16" src={image} alt={title} />
      <h3 className="text-2xl font-bold text-indigo-900 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default Work;
