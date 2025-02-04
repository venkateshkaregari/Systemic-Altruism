import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Hero from './components/Hero';

function App() {
  return (
    <Router>
      {/* <div> */}
        <Header />
        {/* <main> */}
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/hero" element={<Hero/>} />
          </Routes>
        {/* </main> */}
        <Footer />
      {/* </div> */}
    </Router>
  );
}

export default App;
