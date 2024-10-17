import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import "./App.css";
import Special from "./Components/Special/Special";
import Products from "./Components/Products/Products";

import Blog from "./Components/Blog/Blog";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Components/About us/AboutUs";
function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <Hero />
        <AboutUs />
        <Special />
        <Products />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
