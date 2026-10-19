
import { Link } from "react-router-dom";

// ==========================================
// CONTACT INFORMATION
// ==========================================

const phone = "0159 06652411";
const email = "schnellundsauber.z@gmail.com";

// ==========================================
// FOOTER COMPONENT
// ==========================================

export default function Footer() {
  return (
    <footer>
      {/* ======================================
          MAIN FOOTER CONTENT
      ====================================== */}

      <div className="container footer-grid">

        {/* Company Branding Section */}
        <div>
          <Link className="brand footer-brand" to="/#start">
            <img
              src="/images/brand-logo.png"
              alt="Schnell und Sauber Logo"
            />

            <span>
              <strong>SCHNELL UND SAUBER</strong>
              <small>Facility Service · Düsseldorf</small>
            </span>
          </Link>

          <p>Schnell. Sauber. Zuverlässig.</p>
        </div>

        {/* Services Navigation Section */}
        <div>
          <h4>Leistungen</h4>

          <a href="/#leistungen">Büroreinigung</a>
          <a href="/#leistungen">Grundreinigung</a>
          <a href="/#entruempelung">Entrümpelung</a>
          <a href="/#leistungen">Umzug &amp; Transport</a>
        </div>

        {/* Contact Information Section */}
        <div>
          <h4>Kontakt</h4>

          <a href="tel:+4915906652411">
            {phone}
          </a>

          <a href={`mailto:${email}`}>
            {email}
          </a>

          <span>Charlottenstr. 57, 40210 Düsseldorf</span>
        </div>
      </div>

      {/* ======================================
          FOOTER BOTTOM SECTION
      ====================================== */}

      <div className="container footer-bottom">

        {/* Copyright Information */}
        <span>
          © {new Date().getFullYear()} Schnell und Sauber.
          Alle Rechte vorbehalten.
        </span>

        {/* Legal Navigation Links */}
        <span>
          <Link to="/impressum">Impressum</Link>
          {" · "}
          <Link to="/datenschutz">Datenschutz</Link>
        </span>

      </div>
    </footer>
  );
}
