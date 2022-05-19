import React from 'react';

export default function Header() {
  return (
    <header>
      <span className="logo">Ian Kirkland</span>
      <nav>
        <ul>
          <li>
            <button>About</button>
          </li>
          <li>
            <button>Projects</button>
          </li>
          <li>
            <button>Contact</button>
          </li>
        </ul>
        <ul>
          <li>
            <button>
              <i className="fas fa-rss"></i>
              Subscribe
            </button>
          </li>
          <li>
            <button>
              <i className="fa-solid fa-download"></i>
              Resume/CV
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
