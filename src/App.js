import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Gallery';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([
    { name: 'About Me'},
    { name: 'Portfolio'},
    { name: 'resume' },
    { name: 'Contact' }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        <About currentCategory={currentCategory}></About>
        <Portfolio currentCategory={currentCategory}></Portfolio>
        <ContactForm currentCategory={currentCategory}></ContactForm>
      </main>
    </div>
  );
}

export default App;
