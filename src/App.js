import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

export default function App() {
  return (
    <>
      {/* <Header logo={null} /> */}
      <div className="page">
        <Routes>
          <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
          <Route path={`${process.env.PUBLIC_URL}/about`} element={<About />} />
          <Route
            path={`${process.env.PUBLIC_URL}/contact`}
            element={<Contact />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
