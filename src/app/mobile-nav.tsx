"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="mobile-navigation">
      <button
        className="mobile-menu"
        type="button"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
      </button>
      {isOpen && (
        <nav className="mobile-nav-panel" id="mobile-nav-panel" aria-label="Mobile navigation">
          <a href="/services" onClick={closeMenu}>Services</a>
          <a href="/work" onClick={closeMenu}>Our work</a>
          <a href="/about" onClick={closeMenu}>About</a>
          <a href="/subcontractors" onClick={closeMenu}>Subcontractors</a>
          <a href="/careers" onClick={closeMenu}>Careers</a>
          <a href="/contact" onClick={closeMenu}>Contact</a>
        </nav>
      )}
    </div>
  );
}
