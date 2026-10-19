
import {
  Mail,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";

// ==========================================
// CONTACT INFORMATION
// ==========================================

// Company WhatsApp number in international format
const whatsappNumber = "4915906652411";

// Display phone number
const phone = "0159 06652411";

// Company email address
const email = "schnellundsauber.z@gmail.com";

// ==========================================
// WHATSAPP CONFIGURATION
// ==========================================

// Predefined WhatsApp message for booking
// a free on-site consultation.
const whatsappMessage =
  "Guten Tag, ich interessiere mich für Ihre Leistungen und möchte eine kostenlose Besichtigung vereinbaren.";

// Generate WhatsApp URL with encoded message
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

// ==========================================
// WHATSAPP CONTACT COMPONENT
// ==========================================

export default function WhatsAppContact() {
  return (
    <section className="section contact" id="kontakt">
      <div className="container whatsapp-contact-grid">

        {/* ======================================
            CONTACT INTRODUCTION
        ====================================== */}

        <div>

          {/* Section Label */}
          <p className="eyebrow dark">
            <span />
            DIREKTER KONTAKT
          </p>

          {/* Main Heading */}
          <h2>
            Am schnellsten erreichen Sie uns
            über WhatsApp.
          </h2>

          {/* Contact Description */}
          <p>
            Schreiben Sie uns kurz, worum es geht.
            Wir antworten persönlich und vereinbaren
            gerne einen passenden Besichtigungstermin.
          </p>

          {/* ==================================
              PRIMARY WHATSAPP BUTTON
          ================================== */}

          <a
            className="button whatsapp-button"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Jetzt per WhatsApp Kontakt aufnehmen"
          >
            <MessageCircle />
            Jetzt per WhatsApp schreiben
          </a>

        </div>

        {/* ======================================
            CONTACT INFORMATION CARD
        ====================================== */}

        <div className="contact-info-card">

          {/* Card Heading */}
          <p className="contact-card-kicker">
            KONTAKTINFORMATIONEN
          </p>

          {/* ==================================
              WHATSAPP CONTACT
          ================================== */}

          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Chat öffnen"
          >
            <MessageCircle />

            <span>
              <small>WhatsApp</small>
              {phone}
            </span>
          </a>

          {/* ==================================
              PHONE CONTACT
          ================================== */}

          <a href={`tel:+${whatsappNumber}`}>
            <Phone />

            <span>
              <small>Telefon</small>
              {phone}
            </span>
          </a>

          {/* ==================================
              EMAIL CONTACT
          ================================== */}

          <a href={`mailto:${email}`}>
            <Mail />

            <span>
              <small>E-Mail</small>
              {email}
            </span>
          </a>

          {/* ==================================
              COMPANY LOCATION
          ================================== */}

          <div>
            <MapPin />

            <span>
              <small>Standort</small>
              Charlottenstr. 57, 40210 Düsseldorf
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
