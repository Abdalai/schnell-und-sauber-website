
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import "./Legal.css";

// ==========================================
// IMPRESSUM COMPONENT
// ==========================================

// Displays the company's legal notice,
// business information, and contact details.

export default function Impressum() {
  return (
    <Layout>

      {/* ======================================
          LEGAL NOTICE PAGE
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
          <h1>Impressum</h1>

          {/* Back to Homepage */}
          <Link
            className="legal-back"
            to="/"
          >
            ← Zurück zur Startseite
          </Link>

          {/* Legal Reference */}
          <p className="legal-lead">
            Angaben gemäß § 5 DDG
          </p>

          {/* ==================================
              COMPANY INFORMATION
          ================================== */}

          {/* Company Name */}
          <h2>SCHNELL UND SAUBER</h2>

          {/* Business Name */}
          <p>
            <strong>
              Gebrüder Zaidan – Facility Service
            </strong>
          </p>

          {/* Business Owner */}
          <p>
            <strong>Inhaber:</strong>{" "}
            Abdulrahman Zaidan
          </p>

          {/* Business Address */}
          <p>
            Charlottenstraße 57
            <br />
            40210 Düsseldorf
            <br />
            Deutschland
          </p>

          {/* ==================================
              CONTACT INFORMATION
          ================================== */}

          <h2>Kontakt</h2>

          <p>
            {/* Phone and WhatsApp */}
            <strong>Telefon / WhatsApp:</strong>{" "}
            <a href="tel:+4915906652411">
              +49 159 06652411
            </a>

            <br />

            {/* Email Address */}
            <strong>E-Mail:</strong>{" "}
            <a href="mailto:schnellundsauber.z@gmail.com">
              schnellundsauber.z@gmail.com
            </a>
          </p>

          {/* ==================================
              COMPANY SERVICES
          ================================== */}

          <h2>Unsere Dienstleistungen</h2>

          {/* Services Introduction */}
          <p>
            SCHNELL UND SAUBER bietet professionelle
            Dienstleistungen für Privatkunden,
            Unternehmen und Hausverwaltungen in
            Düsseldorf und Umgebung an.
          </p>

          {/* Services List */}
          <ul>
            <li>
              Entrümpelungen und Haushaltsauflösungen
            </li>

            <li>
              Wohnungs-, Keller- und Dachbodenräumungen
            </li>

            <li>
              Gebäudereinigung und Büroreinigung
            </li>

            <li>
              Treppenhaus- und Wohnungsreinigung
            </li>

            <li>
              Umzüge und Transporte
            </li>

            <li>
              Abtransport und fachgerechte Entsorgung
            </li>

            <li>
              Besenreine Objektübergaben
            </li>

            <li>
              Gartenpflege
            </li>
          </ul>

          {/* ==================================
              VAT IDENTIFICATION NUMBER
          ================================== */}

         

          {/* ==================================
              CONSUMER DISPUTE RESOLUTION
          ================================== */}

          <h2>Verbraucherstreitbeilegung</h2>

          <p>
            Wir sind weder bereit noch verpflichtet,
            an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          {/* ==================================
              COPYRIGHT INFORMATION
          ================================== */}

          <h2>Urheberrecht</h2>

          <p>
            Die auf dieser Website veröffentlichten
            Inhalte, Texte, Bilder und Grafiken sind,
            soweit gesetzlich geschützt,
            urheberrechtlich geschützt.
            Jede Verwertung außerhalb der Grenzen
            des Urheberrechts bedarf der Zustimmung
            des jeweiligen Rechteinhabers.
          </p>

        </div>
      </main>

    </Layout>
  );
}
