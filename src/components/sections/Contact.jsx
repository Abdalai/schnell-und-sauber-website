
import { Mail, MapPin, Phone, MessageCircle, ArrowRight } from "lucide-react";

// ==========================================
// CONTACT INFORMATION
// ==========================================

const phone = "0159 06652411";
const email = "schnellundsauber.z@gmail.com";
const whatsappNumber = "4915906652411";

// ==========================================
// WHATSAPP MESSAGE CONFIGURATION
// ==========================================

// Predefined message for customer inquiries
const whatsappMessage =
  "Hallo Schnell und Sauber, ich interessiere mich für Ihre Dienstleistungen und möchte gerne ein unverbindliches Angebot erhalten.";

// Generate WhatsApp URL with encoded message
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

// ==========================================
// CONTACT COMPONENT
// ==========================================

export default function Contact() {
  return (
    <section className="section contact" id="kontakt">
      <div className="container contact-grid">

        {/* ======================================
            CONTACT INTRODUCTION
        ====================================== */}

        <div>
          {/* Section Label */}
          <p className="eyebrow dark">
            <span /> KONTAKT
          </p>

          {/* Section Heading */}
          <h2>
            Lassen Sie uns über Ihren Auftrag sprechen.
          </h2>

          {/* Section Description */}
          <p>
            Sie benötigen eine professionelle Reinigung,
            Entrümpelung oder einen zuverlässigen
            Facility Service? Kontaktieren Sie uns
            direkt über WhatsApp.
          </p>

          {/* ==================================
              CONTACT DETAILS
          ================================== */}

          <div className="contact-details">

            {/* Phone Number */}
            <a href={`tel:+${whatsappNumber}`}>
              <Phone />

              <span>
                <small>Telefon</small>
                {phone}
              </span>
            </a>

            {/* Email Address */}
            <a href={`mailto:${email}`}>
              <Mail />

              <span>
                <small>E-Mail</small>
                {email}
              </span>
            </a>

            {/* Company Location */}
            <div>
              <MapPin />

              <span>
                <small>Standort</small>
                Charlottenstr. 57, 40210 Düsseldorf
              </span>
            </div>

          </div>
        </div>

        {/* ======================================
            WHATSAPP CONTACT SECTION
        ====================================== */}

        <div className="contact-form">

          {/* WhatsApp Icon */}
          <MessageCircle size={42} />

          {/* WhatsApp Heading */}
          <h3>
            Schnell & einfach Kontakt aufnehmen
          </h3>

          {/* WhatsApp Description */}
          <p>
            Haben Sie Fragen oder möchten Sie ein
            kostenloses Angebot erhalten?
            Schreiben Sie uns direkt auf WhatsApp.
          </p>

          {/* ==================================
              WHATSAPP CALL TO ACTION
          ================================== */}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-navy"
            aria-label="Jetzt über WhatsApp Kontakt aufnehmen"
          >
            Jetzt per WhatsApp anfragen
            <ArrowRight />
          </a>

          {/* Additional Information */}
          <p className="whatsapp-note">
            Kostenlos & unverbindlich anfragen.
          </p>

        </div>

      </div>
    </section>
  );
}
