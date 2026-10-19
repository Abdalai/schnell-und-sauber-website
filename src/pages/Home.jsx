
import {
  ArrowRight,
  Check,
  Clock3,
  Sparkles,
  Users,
} from "lucide-react";

// ==========================================
// LAYOUT AND COMPONENT IMPORTS
// ==========================================

import Layout from "../components/layout/Layout";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import WhatsAppContact from "../components/sections/WhatsAppContact";
import CookieConsent from "../components/CookieConsent";

// ==========================================
// PAGE STYLES
// ==========================================

import "./Home.css";

// ==========================================
// COMPANY BENEFITS DATA
// ==========================================

// List of key advantages displayed in the
// "Why Choose Us" section.

const benefits = [
  "Qualifiziertes & freundliches Team",
  "Pünktlich, gründlich & zuverlässig",
  "Faire & transparente Preise",
  "Umweltfreundliche Reinigungsmittel",
  "Flexibel – auch abends & am Wochenende",
  "Zufriedenheitsgarantie",
];

// ==========================================
// DECLUTTERING SERVICES DATA
// ==========================================

// Services included in the decluttering section.

const declutteringServices = [
  "Wohnungs- und Haushaltsauflösungen",
  "Keller, Dachboden & Garage",
  "Messie-Wohnungen",
  "Abtransport & fachgerechte Entsorgung",
  "Besenreine Übergabe",
];

// ==========================================
// WORK PROCESS DATA
// ==========================================

// Four steps describing the customer journey.

const processSteps = [
  [
    "01",
    "Anfrage senden",
    "Kontaktieren Sie uns per Telefon oder WhatsApp.",
  ],
  [
    "02",
    "Kostenlose Besichtigung",
    "Wir sehen uns das Objekt an und besprechen Ihre Anforderungen.",
  ],
  [
    "03",
    "Transparentes Angebot",
    "Sie erhalten ein klares und faires Angebot ohne versteckte Kosten.",
  ],
  [
    "04",
    "Professionelle Durchführung",
    "Unser Team erledigt den Auftrag zuverlässig und sauber.",
  ],
];

// ==========================================
// GALLERY DATA
// ==========================================

// Images displayed in the references section.

const gallery = [
  {
    src: "/images/clean-office.png",
    alt: "Gereinigte Bürofläche",
    label: "Reinigung",
  },
  {
    src: "/images/facility-team.png",
    alt: "Unser Facility-Service-Team",
    label: "Unser Team",
  },
  {
    src: "/images/moving-service.png",
    alt: "Unsere Leistungen",
    label: "Leistungen",
  },
];

// ==========================================
// WHATSAPP CONFIGURATION
// ==========================================

// Company WhatsApp number in international format.
const whatsappNumber = "4915906652411";

// Predefined message for general inquiries.
const whatsappMessage =
  "Hallo Schnell und Sauber, ich interessiere mich für Ihre Dienstleistungen und möchte gerne ein unverbindliches Angebot erhalten.";

// Generate the WhatsApp contact URL.
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

// ==========================================
// HOME PAGE COMPONENT
// ==========================================

export default function Home() {
  return (
    <Layout>

      {/* ======================================
          MAIN PAGE CONTENT
      ====================================== */}

      <main>

        {/* ======================================
            HERO SECTION
        ====================================== */}

        <Hero />

        {/* ======================================
            SERVICES SECTION
        ====================================== */}

        <Services />

        {/* ======================================
            DECLUTTERING SECTION
        ====================================== */}

        <section
          className="split-section"
          id="entruempelung"
        >

          {/* Section Image */}
          <div className="split-image">
            <img
              src="/images/team.jpeg"
              alt="Aufgeräumte Bürofläche"
            />
          </div>

          {/* Section Content */}
          <div className="split-copy">

            {/* Section Label */}
            <p className="eyebrow dark">
              <span />
              ENTRÜMPELUNG &amp; HAUSHALTSAUFLÖSUNG
            </p>

            {/* Section Heading */}
            <h2>Entrümpelung ohne Stress.</h2>

            {/* Section Description */}
            <p>
              Von Keller, Dachboden und Garage bis
              zur kompletten Wohnungsauflösung –
              wir übernehmen die gesamte Arbeit.
            </p>

            {/* Decluttering Services List */}
            <ul>
              {declutteringServices.map((item) => (
                <li key={item}>
                  <Check />
                  {item}
                </li>
              ))}
            </ul>

            {/* Consultation Button */}
            <a
              className="button button-navy"
              href="/#kontakt"
            >
              Besichtigung vereinbaren
              <ArrowRight />
            </a>

            {/* Availability Notice */}
            <div className="notice">
              <Clock3 />
              Kurzfristige Termine möglich
            </div>

          </div>
        </section>

        {/* ======================================
            WHY CHOOSE US SECTION
        ====================================== */}

        <section
          className="section navy"
          id="warum"
        >
          <div className="container why-grid">

            {/* Benefits Content */}
            <div>

              {/* Section Label */}
              <p className="eyebrow">
                <span />
                WARUM SCHNELL UND SAUBER?
              </p>

              {/* Section Heading */}
              <h2>
                Darum entscheiden sich Kunden für uns.
              </h2>

              {/* Benefits Grid */}
              <div className="benefit-grid">
                {benefits.map((item) => (
                  <div
                    className="benefit"
                    key={item}
                  >
                    <Check />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* ==================================
                CUSTOMER SATISFACTION BADGE
            ================================== */}

            <div className="trust-badge">
              <div className="badge-inner">

                <strong>100%</strong>

                <span>ZUFRIEDENHEIT</span>

                <small>
                  Top Service
                  <br />
                  in Düsseldorf
                </small>

              </div>
            </div>

          </div>
        </section>

        {/* ======================================
            BUSINESS SERVICES SECTION
        ====================================== */}

        <section className="section business">

          <div className="container business-grid">

            {/* Business Section Heading */}
            <div>

              <p className="eyebrow dark">
                <span />
                FÜR UNTERNEHMEN &amp; HAUSVERWALTUNGEN
              </p>

              <h2>
                Ein Ansprechpartner.
                <br />
                <em>Alles zuverlässig erledigt.</em>
              </h2>

            </div>

            {/* Business Section Description */}
            <div>

              <p>
                SCHNELL UND SAUBER übernimmt
                Entrümpelungen, Reinigungen und
                Umzüge für Hausverwaltungen,
                Wohnungsgesellschaften und Unternehmen.
              </p>

              {/* Business Contact Link */}
              <a
                className="text-link"
                href="/#kontakt"
              >
                Zusammenarbeit anfragen
                <ArrowRight />
              </a>

            </div>

          </div>

          {/* ==================================
              COMPANY HIGHLIGHTS
          ================================== */}

          <div className="container stats">

            {/* Team Capacity */}
            <div>
              <Users />

              <strong>
                Mehrere Mitarbeiter
              </strong>

              <span>
                Auch für größere Aufträge
              </span>
            </div>

            {/* Availability */}
            <div>
              <Clock3 />

              <strong>
                Kurzfristig verfügbar
              </strong>

              <span>
                Besichtigung nach Absprache
              </span>
            </div>

            {/* Flexible Scheduling */}
            <div>
              <Sparkles />

              <strong>
                Flexible Planung
              </strong>

              <span>
                Auch abends &amp; am Wochenende
              </span>
            </div>

          </div>

        </section>

        {/* ======================================
            WORK PROCESS SECTION
        ====================================== */}

        <section className="section cream process">
          <div className="container">

            {/* Section Heading */}
            <div className="center-heading">

              <p className="eyebrow dark">
                <span />
                SO EINFACH GEHT'S
              </p>

              <h2>
                In vier Schritten zum sauberen Ergebnis.
              </h2>

            </div>

            {/* ==================================
                FOUR-STEP PROCESS GRID
            ================================== */}

            <div className="process-grid">

              {processSteps.map(([number, title, text]) => (

                <div
                  className="step"
                  key={number}
                >

                  {/* Step Number */}
                  <span>{number}</span>

                  {/* Step Title */}
                  <h3>{title}</h3>

                  {/* Step Description */}
                  <p>{text}</p>

                </div>

              ))}

            </div>

          </div>
        </section>

        {/* ======================================
            REFERENCES AND GALLERY SECTION
        ====================================== */}

        <section
          className="section gallery"
          id="referenzen"
        >
          <div className="container">

            {/* Gallery Section Heading */}
            <div className="section-heading">

              <div>

                <p className="eyebrow dark">
                  <span />
                  REFERENZEN
                </p>

                <h2>
                  Einblicke in unsere Arbeit.
                </h2>

              </div>

              <p>
                Saubere Ergebnisse, auf die
                Sie sich verlassen können.
              </p>

            </div>

            {/* ==================================
                GALLERY IMAGE GRID
            ================================== */}

            <div className="gallery-grid">

              {gallery.map((item) => (

                <figure key={item.label}>

                  {/* Gallery Image */}
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                  />

                  {/* Image Caption */}
                  <figcaption>
                    {item.label}
                  </figcaption>

                </figure>

              ))}

            </div>

          </div>
        </section>

        {/* ======================================
            FINAL CALL TO ACTION SECTION
        ====================================== */}

        <section className="cta">
          <div className="container cta-content">

            {/* Section Label */}
            <p className="eyebrow">
              <span />
              BEREIT FÜR DEN NÄCHSTEN SCHRITT?
            </p>

            {/* CTA Heading */}
            <h2>
              Sie nennen uns das Objekt –
              <br />
              <em>wir kümmern uns um den Rest.</em>
            </h2>

            {/* CTA Description */}
            <p>
              Erhalten Sie jetzt ein transparentes
              und unverbindliches Angebot.
            </p>

            {/* CTA Button */}
            <div className="hero-actions">

              <a
                className="button button-gold"
                href="/#kontakt"
              >
                Kostenlose Besichtigung anfragen
                <ArrowRight />
              </a>

            </div>

          </div>
        </section>

        {/* ======================================
            WHATSAPP CONTACT SECTION
        ====================================== */}

        <WhatsAppContact />

      </main>

      {/* ======================================
          FLOATING WHATSAPP BUTTON
      ====================================== */}

      <a
        className="floating-whatsapp"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp kontaktieren"
      >
        WhatsApp
      </a>

      {/* ======================================
          COOKIE CONSENT BANNER
      ====================================== */}

      <CookieConsent />

    </Layout>
  );
}
