
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

// ==========================================
// NAVIGATION LINKS
// ==========================================

// Main navigation items and their section IDs
const links = [
  ["Leistungen", "leistungen"],
  ["Entrümpelung", "entruempelung"],
  ["Warum wir?", "warum"],
  ["Referenzen", "referenzen"],
  ["Kontakt", "kontakt"],
];

// ==========================================
// HEADER COMPONENT
// ==========================================

export default function Header() {

  // ----------------------------------------
  // MOBILE MENU STATE
  // ----------------------------------------

  // Controls whether the mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  // Closes the mobile navigation menu
  const closeMenu = () => setMenuOpen(false);

  // ----------------------------------------
  // COMPONENT RENDERING
  // ----------------------------------------

  return (
    <header className="site-header">
      <div className="container nav-wrap">

        {/* ======================================
            COMPANY LOGO AND BRANDING
        ====================================== */}

        <a
          href="/#start"
          className="brand"
          onClick={closeMenu}
          aria-label="Schnell und Sauber Startseite"
        >
          <img
            src="/images/brand-logo.png"
            alt="Schnell und Sauber Logo"
          />

          <span>
            <strong>SCHNELL UND SAUBER</strong>
            <small>Facility Service · Charlottenstr. 57, 40210 Düsseldorf</small>
          </span>
        </a>

        {/* ======================================
            MOBILE MENU TOGGLE BUTTON
        ====================================== */}

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü öffnen"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        {/* ======================================
            MAIN NAVIGATION
        ====================================== */}

        <nav
          className={menuOpen ? "main-nav open" : "main-nav"}
          aria-label="Hauptnavigation"
        >

          {/* Navigation Links */}
          {links.map(([label, href]) => (
            <a
              key={href}
              href={`/#${href}`}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}

          {/* ==================================
              CALL TO ACTION BUTTON
          ================================== */}

          <a
            className="button button-gold nav-cta"
            href="/#kontakt"
            onClick={closeMenu}
          >
            Kostenlose Besichtigung
            <ArrowRight />
          </a>

        </nav>
      </div>
    </header>
  );
}
