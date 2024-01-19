import './App.css';
// import './components/responsive/responsive.css'
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Feedback from './components/Feedback/Feedback';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import SiteHeader from './components/SiteHeader/SiteHeader';
import Responsive from './components/responsive/responsive';
import Footer from './components/footer/Footer';


function App() {
  return (
    <>
      <Responsive />
      <Nav />
      <SiteHeader />
      <Projects />
      <Services />
      <Blog />
      <About />
      <Feedback />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
