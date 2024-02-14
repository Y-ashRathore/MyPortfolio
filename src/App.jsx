import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Footer from "./components/Footer";

const sections = [
  { component: <Hero />, starsCanvas: true },
  { component: <About />, starsCanvas: true },
  { component: <Tech />, starsCanvas: true },
  { component: <Works />, starsCanvas: true },
  { component: <Experience />, starsCanvas: true },
  { component: <Contact />, starsCanvas: true },
];

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
      <Navbar />
        {sections.map(({ component: Component, starsCanvas }, index) => (
          <div key={index} className="relative z-0">
            {Component}
            {starsCanvas && <StarsCanvas />}
          </div>
        ))}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

// "predeploy": "npm run build",
// "deploy": "gh-pages -d build",
// "homepage": "https://Y-ashRathore.github.com/My_Portfolio",
