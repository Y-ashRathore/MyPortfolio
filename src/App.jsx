import { BrowserRouter } from "react-router-dom";

import { About, Contact, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;


// "predeploy": "npm run build",
// "deploy": "gh-pages -d build",
// "homepage": "https://Y-ashRathore.github.com/My_Portfolio",
