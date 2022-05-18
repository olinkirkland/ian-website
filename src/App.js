import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Post from './components/pages/Post';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route path={`${process.env.PUBLIC_URL}/about`} element={<About />} />
        <Route
          path={`${process.env.PUBLIC_URL}/contact`}
          element={<Contact />}
        />
        <Route path={`${process.env.PUBLIC_URL}/blog/:id`} element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
