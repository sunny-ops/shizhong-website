import MyNavbar from "./components/MyNavbar";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <div>
      <MyNavbar />
      {/* <Home /> */}
      <About />
      <Work />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
