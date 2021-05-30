import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [categories] = useState([
    { name: 'About Me'},
    { name: 'Portfolio'},
    { name: 'Resume' },
    { name: 'Contact' }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <About currentCategory={currentCategory}></About>
        <Portfolio currentCategory={currentCategory}></Portfolio>
        <ContactForm currentCategory={currentCategory}></ContactForm>
        <Resume currentCategory={currentCategory}></Resume>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
