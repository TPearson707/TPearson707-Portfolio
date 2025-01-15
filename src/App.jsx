import "./app.scss"
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Parallax from "./components/parallax/Parallax";

const App = () => {
  return (
        <div>
          <section id="Homepage">
              <Navbar/>
              <Hero/>
          </section>
          {/* <section id="Services"><Parallax type="services"/></section>
          <section>services</section>
          <section id="Portfolio"><Parallax type="portfolio"/>portfolio</section>
          <section>Portfolio2</section>
          <section>Portfolio3</section>
          <section id="Contact">Contacts</section>
          <section id="About">About</section> */}
        </div>
  )
}

export default App;