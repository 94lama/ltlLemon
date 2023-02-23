import React from 'react';
import './App.css';
import Head from './components/Header';
import Nav from './components/Nav';
import Description from './components/Description';
import Highlight from './components/Highlight';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
<link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Tangerine"></link>

function App()  {
  return (
    <main>
      <Nav />
      <Description />
      <Highlight />
      <Testimonials />
      <About />
      <Footer />
    </main>)
}

export default App;

