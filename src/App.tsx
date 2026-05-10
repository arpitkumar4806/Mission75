import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <header className="h-16 w-screen flex items-center justify-center">
        <Navbar />
      </header>
      <main></main>
      <Footer />
    </>
  );
};

export default App;
