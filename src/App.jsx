import About from "./sections/About";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Nav from "./sections/Nav";
import Stories from "./sections/Stories";
import Tours from "./sections/Tours";

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Features />
      <Tours />
      <Stories />
      <Footer />
    </>
  );
};

export default App;
