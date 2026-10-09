
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import "./Legal.css";

// ==========================================
// PRIVACY POLICY COMPONENT
// ==========================================

// Displays the website's privacy policy
// and information about personal data processing.

export default function Datenschutz() {
  return (
    <Layout>

      {/* ======================================
          PRIVACY POLICY PAGE
      ====================================== */}

      <main className="legal-page">
        <div className="container legal-content">

          {/* ==================================
              PAGE HEADER
          ================================== */}

          {/* Section Label */}
          <p className="eyebrow dark">
            <span />
            RECHTLICHE INFORMATIONEN
          </p>

          {/* Main Page Title */}
          <h1>Datenschutzerklärung</h1>

          {/* Back to Homepage */}
          <Link
            className="legal-back"
            to="/"
          >
            ← Zurück zur Startseite
          </Link>

          {/* Page Introduction */}
          <p className="legal-lead">
            Informationen zum Datenschutz
            auf unserer Website
          </p>

          {/* ==================================
              SECTION 1: DATA CONTROLLER
          ================================== */}

          <h2>1. Verantwortlicher</h2>

          <p>
            Verantwortlicher für die Datenverarbeitung
            auf dieser Website ist:
          </p>

          {/* Company Owner and Contact Details */}
          <p>
            <strong>Abdulrahman Zaidan</strong>
            <br />
            Charlottenstraße 57
            <br />
            40210 Düsseldorf
            <br />
            Deutschland
            <br />

            <a href="mailto:schnellundsauber.z@gmail.com">
              schnellundsauber.z@gmail.com
            </a>
          </p>

          {/* ==================================
              SECTION 2: CONTACT AND DATA
              PROCESSING
          ================================== */}

          <h2>2. Kontaktaufnahme</h2>

          <p>
            Wenn Sie uns per WhatsApp, Telefon oder
            E-Mail kontaktieren, verarbeiten wir Ihre
            Angaben ausschließlich zur Bearbeitung
            Ihrer Anfrage und zur Kommunikation mit Ihnen.
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO,
            soweit Ihre Anfrage mit einem Auftrag
            zusammenhängt, oder unser berechtigtes
            Interesse gemäß Art. 6 Abs. 1 lit. f DSGVO.
          </p>

          {/* ==================================
              SECTION 3: COOKIES
          ================================== */}

          <h2>3. Cookies</h2>

          <p>
            Unsere Website verwendet ein technisch
            notwendiges Cookie, um zu speichern, ob Sie
            den Cookie-Hinweis bestätigt haben.
            Dieses Cookie enthält keine Analyse- oder
            Werbeinformationen und wird nach einem
            Jahr automatisch gelöscht.
          </p>

        </div>
      </main>

    </Layout>
  );
}
