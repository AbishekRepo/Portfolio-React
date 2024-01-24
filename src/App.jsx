import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Teams from "./components/Teams";
import ScrollUpBtn from "./components/ScrollUpBtn";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Skills />
      <Teams />
      <Contact />
      <Footer />
      <ScrollUpBtn />
    </>
  );
}

export default App;
