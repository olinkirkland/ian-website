import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Get all elements with 'hidden' class
    const hiddenEls = document.getElementsByClassName('hidden');
    // Loop through all elements and remove the 'hidden' class every 0.2s
    for (let i = 0; i < hiddenEls.length; i++) {
      setTimeout(() => {
        console.log(hiddenEls[i]);
        // Remove hidden class from hiddenEls[i]
        hiddenEls[i].classList.remove('hidden');
      }, i * 200);
    }
  }, []);

  return (
    <section className="home">
      <div className="text-box hidden">
        <div className="header">
          <img
            id="profile"
            src="assets/profile.png"
            alt="An illustration of Ian Kirkland"
          />
          <h1>
            Hi, I'm Ian Kirkland<span className="theme">.</span>
          </h1>
        </div>
        <h2>
          Young professional looking for <span className="theme">writing</span>{' '}
          and
          <span className="theme"> publishing</span> opportunities in London,
          UK.
        </h2>
        <p>
          Recent graduate of the University of Edinburgh with a{' '}
          <span className="theme">First Class</span> MA in English Literature
          and Linguistics
        </p>
        <ul className="skills">
          <li>Storytelling</li>
          <li>Researching</li>
          <li>Editing</li>
        </ul>
        <hr />
        <p>
          As both a diligent creative and a scholar of the creative process
          itself, I continually pursue new methods to foster expression and
          collaboration with and among others. I have found engagement — on the
          page, through a screen, or in person, is an integral component in the
          social project of teaching, and a skill I have carefully honed.
        </p>
        <p>
          I admire the practice of analysis and instructive critique, greatly
          benefit from it personally, and ensure that whenever I am asked to
          give it myself, both the insight and earnestness of my voice encourage
          growth.
        </p>
        <ul id="home-links">
          <li>
            <a
              className="button cta"
              href="assets/ian-kirkland-cv.pdf"
              download="ian-kirkland-cv.pdf"
            >
              <i className="fa-solid fa-download"></i>
              Curriculum Vitae (.pdf)
            </a>
          </li>
          <li>
            <a className="button" href="mailto:iankirkland00@gmail.com">
              <i className="fa-solid fa-envelope"></i>
              iankirkland00@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
