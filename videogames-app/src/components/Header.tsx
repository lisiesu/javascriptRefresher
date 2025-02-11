import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <header>
      <nav>
        <h1>Game Explorer</h1>
        {/* Hamburger icon - only visible on Mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          &#9776; {/* Unicode hamburger icon */}
        </div>
        <ul className={isMenuOpen ? "nav-links open" : "nav-links"}>
          <li>Home</li>
          <li>Games</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
