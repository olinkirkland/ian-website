import React from 'react';
export default function SocialLinks() {
  return (
    <ul className="social-links">
      <li>
        <a
          href="https://www.linkedin.com/in/ian-kirkland-6595ab215/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </li>
      <li>
        <a
          href="mailto:me@iankirk.land"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-envelope"></i>
        </a>
      </li>
    </ul>
  );
}
