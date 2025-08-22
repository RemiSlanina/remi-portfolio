/* import { useState } from "react";
 */ import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Section } from "./components/Section";

// TO DO
// tighten up odds and evens design (less margin+padding)
// snail trail vercel
// memory game React
// coffee
// and so on...
// make form

function App() {
  /* const [count, setCount] = useState(0); */

  return (
    <>
      <Header />

      <Section id="snail-trail" title="Snail Trail">
        <p>coming soon</p>
        <div className="container-project">
          <iframe
            src="https://snail-trail.vercel.app/"
            title="Parallax Demo"
            style={{ width: "100%", height: "100%", border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </Section>

      {/* Demo Game: Odds and Evens */}
      <Section id="odds-evens" title="Odds and Evens">
        <div
          className="container-project"
          /* style={{ width: "100vw", aspectRatio: "5/3" }} */
        >
          <iframe
            src="https://remislanina.com/odds-evens"
            /* src="https://test-sandy-one-88.vercel.app/" */
            title="Demo"
            style={{ width: "100%", height: "100%", border: 0 }}
            loading="lazy"
          />
        </div>
      </Section>
      <Section id="memory-game" title="Memory Game">
        <p>
          Or visit here:{" "}
          <a href="https://remislanina.com/memory/" target="_blank">
            Memory
          </a>
        </p>
        <div className="container-project">
          <iframe
            src="https://remislanina.com/memory/"
            title="Memory Demo"
            style={{ width: "100%", height: "100%", border: 0 }}
            loading="lazy"
          />
        </div>
      </Section>
      <Section id="more-projects" title="Further Projects">
        <p>coming soon</p>
      </Section>
      <Section id="portraits" title="Portraiture">
        <p></p>
      </Section>
      <Section id="about" title="About">
        <p></p>
      </Section>
      <Section id="contact" title="Contact">
        <p></p>
      </Section>
      <Footer />
    </>
  );
}

export default App;
