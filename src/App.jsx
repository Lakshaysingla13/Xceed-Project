import { useState } from 'react';
import Header from './Components/Header.jsx';
import Button from './Components/button.jsx';
import MainContent from './Components/MainContent.jsx';
import Img1 from './Images/Img1.png';
import Img2 from './Images/Img2.png';
import SectionCenter from './Images/SectionCenter.png';
import Card from './Components/Card.jsx';
import './App.css';
import Card1 from './Images/Card1.png';
import Card2 from './Images/Card2.png';
import Card3 from './Images/Card3.png';
import Work from './Components/Work.jsx';
import Image1 from './Images/Image1.png';
import Image2 from './Images/Image2.png';
import Image3 from './Images/Image3.png';
import FormatsSection from './FormatsSection.jsx';
import Footer from './Components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <MainContent Image={Img2} />
      </div>
  
      <div className="container mx-auto flex flex-col items-center justify-between px-4 md:px-0">
        <h1 className="text-2xl md:text-4xl mt-7 mb-5 text-green-600">Services</h1>
        <p className="text-2xl md:text-5xl pb-1 text-indigo-900">We Provide Best Proofreading</p>
        <p className="text-2xl md:text-5xl mb-11 text-indigo-900">& Editing Services</p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-9 items-center">
          <Card
            image={Card1}
            title="Proofreading"
            description="Our Proofreaders correct grammatical errors that you may have overlooked including punctuation verb tense, spelling, and........"
            linkText="Find Out More"
          />
          <Card
            image={Card2}
            title="Copy Editing"
            description="Our Editors will enhance the clarity of your English and re-write your text where necessary. We will help ensure, your argument........."
            linkText="Find Out More"
          />
          <Card
            image={Card3}
            title="Document Formatting"
            description="Dynamic table of references (Contents Page, List of Figures, List of tables), page numbering, consistent text, headings etc..."
            linkText="Find Out More"
          />
        </div>
        <br/>
          <Button ButtonName="View All" position="center" />
      </div>
      
      <section className="container mx-auto px-4 mt-24 md:px-0">
        <h2 className="text-4xl font-bold text-center mb-10 text-indigo-900">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <Work
            image={Image1}
            title="Submit your document"
            description="Complete the form displayed on our 'Submit Document' page."
          />
          <Work
            image={Image2}
            title="We proofread & edit your text"
            description="An appropriate editor will set to work on your document as soon as your payment has been approved."
          />
          <Work
            image={Image3}
            title="We return your document"
            description="You will be sent two different electronic versions of your document via email along with separate 'comments' document."
          />
        </div>
      </section>

      <main>
        <br/>
        <FormatsSection />
        <br/>
      </main>

      <Footer/>
    </>
  );
}

export default App;
