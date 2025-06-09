import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const count = localStorage.getItem('cartCount') || 0;

  return (
    <header className="header">
      <Link to="/">📱 Mobile Store</Link>
      <nav>
        {location.pathname !== '/' && <Link to="/">Home</Link>}
        <span>Cart: {count}</span>
      </nav>
    </header>
  );
}

export default Header;