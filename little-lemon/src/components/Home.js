import React from 'react';
import '../App.css';
import Nav from './Nav';
import Description from './Description';
import Highlight from './Highlight';
import Testimonials from './Testimonials';
import About from './About';
import Footer from './Footer';
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine"></link>

function Home()  {
  return (
    <div>
      <Nav />
      <Description />
      <hr length="80%"/>
      <Highlight />
      {/* <Testimonials />
      <About />
      <Footer /> */}
    </div>
    )}

export default Home;