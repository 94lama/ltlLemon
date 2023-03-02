import './App.css';
import React from 'react';
import {Suspense, lazy} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import {day, date, Options} from './comopnents/data'

const Home = lazy(() => import('./Home'));
const Nav = lazy(() => import('./components/Nav'));
const Highlight = lazy(() => import('./components/Highlight'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const About = lazy(() => import('./components/About'));
const Description = lazy(() => import('./components/Description'));
const Footer = lazy(() => import('./components/Footer'));
const Data = lazy(() => import('./components/data'));


const App = () => {

  const headerRef = useRef(null);

  return(
    <Router>
      <Suspense fallback={<div>...Loading</div>}>
        <Routes>
          <Route path='/' element={<Layout />} >
          <Route index element={<Home />} ref={headerRef} />
          <Nav />
          <Route path="/Description" element={<Description />} ref={headerRef} />
          <center><hr width="90%"/></center>
          <Route path="/Highlight" element={<Highlight />} ref={headerRef} />
          <center><hr width="90%"/></center>
          <Route path="/Testimonials" element={<Testimonials />} />
          <Route path="/About" element={<About />} ref={headerRef} />
          <Route path="/Footer" element={<Footer />} />
          </Route>
        </Routes>
        </Suspense>
    </Router>
    )}

    export default App;