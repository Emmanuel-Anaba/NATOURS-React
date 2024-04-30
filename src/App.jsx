import About from "./sections/About";
import Book from "./sections/Book";
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
      <Book />
      <Footer />
    </>
  );
};

export default App;
