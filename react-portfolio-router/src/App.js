import Cloud from "./Components/Cloud/Cloud";
import Contact from "./Components/Contact/Contact";
import Data from "./Components/Data/Data";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/NavBar/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Data />
      <Cloud />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
