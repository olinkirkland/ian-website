import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ logo }) {
  return (
    <header>
      <Link to="/">
        <span className="logo">
          <img src={logo.url} alt="" />
        </span>
      </Link>
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
