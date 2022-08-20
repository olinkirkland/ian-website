import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ logo }) {
  return (
    <header>
      <Link to="/">
        <span className="logo">Ian Kirkland</span>
      </Link>
    </header>
  );
}
