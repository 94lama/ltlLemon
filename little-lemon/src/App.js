import './App.css';
import React from 'react';
import {Suspense, lazy} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
/* import Home from './components/Home'
import Nav from './components/Nav';
import Highlight from './components/Highlight';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Description from './components/Description';
import Footer from './components/Footer'; */
import Layout from './Layout';

const Home = lazy(() => import('./Home'));
const Nav = lazy(() => import('./components/Nav'));
const Highlight = lazy(() => import('./components/Highlight'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const About = lazy(() => import('./components/About'));
const Description = lazy(() => import('./components/Description'));
const Footer = lazy(() => import('./components/Footer'));


const App = () => {
  return(
    //<Home />
    <Router>
      <Suspense fallback={<div>...Loading</div>}>
        <Routes>
          <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Nav />
          <Route path="/Description" element={<Description />} />
          <center><hr width="90%"/></center>
          <Route path="/Highlight" element={<Highlight />} />
          <center><hr width="90%"/></center>
          <Route path="/Testimonials" element={<Testimonials />} />
          <Route path="/About" element={<About />} />
          <Route path="/Footer" element={<Footer />} />
          </Route>
        </Routes>
        </Suspense>
    </Router>
    )}

    export default App;