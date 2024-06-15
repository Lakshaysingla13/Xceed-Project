import React from 'react';
import FormatCard from './Components/FormatCard.jsx';
import docxImage from './Images/docx.png';
import pdfImage from './Images/pdf.png';
import texImage from './Images/tex.png';
import xlsxImage from './Images/xlsx.png';
import txtImage from './Images/txt.png';
import pptxImage from './Images/pptx.png';
import rtfImage from './Images/rtf.png';
import pagesImage from './Images/pages.png';
import keyImage from './Images/key.png';
import gslideImage from './Images/gslide.png';
import odtImage from './Images/odt.png';
import jpgImage from './Images/jpg.png';

const FormatsSection = () => {
  const formats = [
    { image: docxImage, title: 'MS Word' },
    { image: pdfImage, title: 'PDF' },
    { image: texImage, title: 'LaTex' },
    { image: xlsxImage, title: 'MS Excel' },
    { image: txtImage, title: 'Plain Text' },
    { image: pptxImage, title: 'MS Powerpoint' },
    { image: rtfImage, title: 'Rich Text' },
    { image: pagesImage, title: 'Pages' },
    { image: keyImage, title: 'Keynote' },
    { image: gslideImage, title: 'Google Slides' },
    { image: odtImage, title: 'ODT' },
    { image: jpgImage, title: 'JPG' },
  ];

  return (
    <div className="container mx-auto my-10 px-4">
      <h2 className="text-center text-green-600 text-xl md:text-2xl mb-2">FORMAT</h2>
      <h1 className="text-center text-indigo-900 text-2xl md:text-4xl font-semibold mb-6">
        We Work With Every Major Format
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
        {formats.map((format, index) => (
          <FormatCard key={index} image={format.image} title={format.title} />
        ))}
      </div>
    </div>
  );
};

export default FormatsSection;
