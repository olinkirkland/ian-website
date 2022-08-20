import React, { useState } from 'react';

export default function Home() {
  const [posts, setPosts] = useState([]);

  return (
    <section className="home">
      <div className="text-box">
        <div className="header">
          <img
            id="profile"
            src="assets/profile.png"
            alt="An illustration of Ian Kirkland"
          />
          <h1>
            Hi, I'm Ian Kirkland<span class="theme">.</span>
          </h1>
        </div>
        <h2>
          Young professional looking for <span class="theme">writing</span> and
          <span class="theme"> publishing</span> opportunities in London, UK.
        </h2>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <ul id="home-links">
          <li>
            <a
              className="button"
              href="assets/ian-kirkland-cv.pdf"
              download="ian-kirkland-cv.pdf"
            >
              <i className="fa-solid fa-download"></i>
              Curriculum Vitae (.pdf)
            </a>
          </li>
          <li>
            <a className="button" href="mailto:me@iankirk.land">
              <i className="fa-solid fa-envelope"></i>
              me@iankirk.land
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
