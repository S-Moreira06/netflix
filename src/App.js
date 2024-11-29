import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Content from "./component/Content";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Content />
      <br />
      <Footer />
    </div>
  );
};

export default App;
