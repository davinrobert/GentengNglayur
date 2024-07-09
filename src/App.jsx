import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Footer from "./pages/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Help from "./pages/help";
import Contactpage from "./pages/contactpage";

function App() {
  function MainPage() {
    return (
      <>
        <Header />
        <Home />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </>
    );
  }
  return (
    <section className="flex flex-col items-center justify-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/help" element={<Help />} />
          <Route path="/contactpage" element={<Contactpage />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
