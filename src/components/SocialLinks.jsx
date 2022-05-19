import React from 'react';
export default function SocialLinks() {
  return (
    <ul className="social-links">
      <li>
        <a href="https://www.linkedin.com/in/" target="_blank">
          <i className="fab fa-linkedin"></i>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/" target="_blank">
          <i className="fab fa-instagram"></i>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/" target="_blank">
          <i className="fab fa-twitter"></i>
        </a>
      </li>
      <li>
        <a href="mailto:me@iankirk.land" target="_blank">
          <i className="fas fa-envelope"></i>
        </a>
      </li>
    </ul>
  );
}
