import Header from './components/Header';
import Nav from './components/Nav'
import Highlight from './components/Highlight'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Description from './components/Description'
import Footer from './components/Footer'

const Home = () => {
  <Header />
  return (
    <div>
        <Nav />
        <Description />
        <center><hr width="90%"/></center>
        <Highlight />
        <center><hr width="90%"/></center>
        <Testimonials />
        <About />
        <Footer />
    </div>
    )}

    export default Home;