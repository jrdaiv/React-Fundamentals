import React from 'react';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import '../src/Components/App.css'

function App() {
  return (
    <>
      <div className='App'>
        <Header>
        </Header>
        <About></About>
        <Contact></Contact>
      </div>
    </>
  );
};

export default App
