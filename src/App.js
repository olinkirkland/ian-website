import { createClient } from 'contentful';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Post from './components/pages/Post';
import SiteDataModel from './models/SiteDataModel';

export const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
});

export default function App() {
  const [siteData, setSiteData] = useState();

  useEffect(() => {
    fetchSiteData();
  });

  function fetchSiteData() {
    // Get home page content
    const query = { content_type: 'homePage' };
    client.getEntries(query).then(function(untypedHomePage) {
      try {
        const data = untypedHomePage.items[0];
        setSiteData(new SiteDataModel(data));
      } catch (error) {
        // Redirect to NotFound page
        console.error('Error:', error);
      }
    });
  }

  if (!siteData)
    return (
      <div className="loading">
        <span>Loading ...</span>
      </div>
    );
  return (
    <>
      <Header logo={siteData.logo} />
      <div className="page">
        <Routes>
          <Route
            path={`${process.env.PUBLIC_URL}/`}
            element={<Home illustration={siteData.illustration} />}
          />
          <Route path={`${process.env.PUBLIC_URL}/about`} element={<About />} />
          <Route
            path={`${process.env.PUBLIC_URL}/contact`}
            element={<Contact />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/blog/:id`}
            element={<Post />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
