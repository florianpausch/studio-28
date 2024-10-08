import React, { useEffect, useState } from "react";
import { logoImg } from "../assets/img";
import { hamburgerIcon, closeIcon } from "../assets/icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  return (
    <section id="header" className="bg-bg font-montserrat">
      <div className="flex flex-row justify-between items-center px-4 md:px-14">
        <div>
          <img src={logoImg} alt="Logo" className="w-40 md:w-52" />
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex nav-links">
          <li>Gutscheine</li>
          <li>Services</li>
          <li>Preise</li>
          <li>Über Uns</li>
        </div>
        {/* Mobile Hamburger Menu */}
        <div className="flex gap-x-5 items-center">
          <a href="/" className="btn btn-hover text-[10px] md:text-[16px]">
            Termin Buchen
          </a>
          <div className="text-2xl hidden max-md:block">|</div>
          <button onClick={toggleMenu} className="md:hidden z-50 relative">
            <img
              src={isMenuOpen ? closeIcon : hamburgerIcon}
              alt="Menu Icon"
              className="w-8 md:w-12"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40">
          <div className="bg-white w-64 h-full shadow-lg flex flex-col p-6 relative">
            <nav>
              <ul className="space-y-6 text-xl">
                <li>
                  <a href="/" onClick={toggleMenu}>
                    Gutscheine
                  </a>
                </li>
                <li>
                  <a href="/" onClick={toggleMenu}>
                    Services
                  </a>
                </li>
                <li>
                  <a href="/" onClick={toggleMenu}>
                    Preise
                  </a>
                </li>
                <li>
                  <a href="/" onClick={toggleMenu}>
                    Über Uns
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </section>
  );
};

export default Header;
