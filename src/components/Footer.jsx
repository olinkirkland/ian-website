import React from 'react';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer>
      <SocialLinks />
      <p>&copy; {new Date().getFullYear()} by Ian Kirkland</p>
    </footer>
  );
}
