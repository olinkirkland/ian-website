import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  HashRouter,
  Route,
  Router,
  Routes
} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Post from './components/pages/Post';
import './css/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Header />
    <BrowserRouter>
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
    </BrowserRouter>
    <Footer />
  </StrictMode>
);
