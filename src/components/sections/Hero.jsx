
import { ArrowRight, Check } from "lucide-react";

// ==========================================
// WHATSAPP CONFIGURATION
// ==========================================

// Company WhatsApp number in international format
const whatsapp = "4915906652411";

// Predefined WhatsApp inquiry message
const message = encodeURIComponent(
  "Hallo Schnell und Sauber, ich interessiere mich für Ihre Dienstleistungen."
);

// Generate the WhatsApp contact URL
const whatsappUrl = `https://wa.me/${whatsapp}?text=${message}`;

// ==========================================
// HERO COMPONENT
// ==========================================

export default function Hero() {
  return (
    <section className="hero" id="start">
      <div className="container hero-content">

        {/* ======================================
            HERO SECTION LABEL
        ====================================== */}

        <p className="eyebrow">
          <span />
          FACILITY SERVICE · Düsseldorf
        </p>

        {/* ======================================
            HERO MAIN HEADING
        ====================================== */}

        <h1>
          Professionelle Umzugs &amp;{" "}
          <em>Reinigung Service</em> in Deutschland
        </h1>

        {/* ======================================
            HERO DESCRIPTION
        ====================================== */}

        <p className="hero-copy">
          Schnell, gründlich und zuverlässig.
          Wir sind Ihr zuverlässiger Partner für Umzüge, Facility Services, Reinigung und Entrümpelung in Deutschland.
        </p>

        {/* ======================================
            HERO CALL TO ACTION BUTTONS
        ====================================== */}

        <div className="hero-actions">

          {/* Free Consultation Button */}
          <a
            className="button button-gold"
            href="#kontakt"
          >
            Kostenlose Besichtigung
            <ArrowRight />
          </a>

          {/* WhatsApp Contact Button */}
          <a
            className="button button-outline"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp kontaktieren
          </a>

        </div>

        {/* ======================================
            TRUST AND BENEFITS SECTION
        ====================================== */}

        <div className="trust-row">

          {/* Fair Pricing */}
          <span>
            <Check />
            Faire Preise
          </span>

          {/* Short-Notice Availability */}
          <span>
            <Check />
            Kurzfristig verfügbar
          </span>

          {/* Flexible Appointments */}
          <span>
            <Check />
            Flexible Termine
          </span>

        </div>

      </div>

      {/* ======================================
          SCROLL INDICATOR
      ====================================== */}

      <div className="hero-scroll">
        SCROLLEN
        <span />
      </div>

    </section>
  );
}
