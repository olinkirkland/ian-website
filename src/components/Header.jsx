import React from 'react';

export default function Header() {
  return (
    <header>
      <span>
        Public URL: <span>{process.env.PUBLIC_URL}</span>
      </span>
    </header>
  );
}
