import React from "react";
import { BrowserRouter, Routes, Route, link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <link to="/">Home</link>
            </li>
            <li>
              <link to="/about">About</link>
            </li>
            <li>
              <link to="/services">Services</link>
            </li>
            <li>
              <link to="/contact">Contact</link>
            </li>
          </ul>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </nav>
      </div>
      </BrowserRouter>
  );
}

export default App;