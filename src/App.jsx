// import { Fragment } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Product from "./components/Product";

function App() {
  return(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product/:id" element={<Product/>} />
      <Route path="*" element={<div>Page Not Found 404!</div>} />
    </Routes>
    </Router>
  );
};

export default App;
