
import {
  ArrowRight,
  Check,
  Clock3,
  FileCheck2,
  Leaf,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
} from "lucide-react";

// ==========================================
// SERVICES DATA
// ==========================================

// List of company services, descriptions,
// and their corresponding Lucide icons.

const services = [
  [
    "Entrümpelung & Entsorgung",
    "Wir schaffen Platz und entsorgen fachgerecht.",
    Truck,
  ],
  [
    "Umzug & Transport",
    "Sicher, planbar und mit dem Blick fürs Detail.",
    Truck,
  ],
  [
    "Büroreinigung",
    "Saubere Arbeitsplätze für konzentriertes Arbeiten.",
    Sparkles,
  ],
  [
    "Treppenhausreinigung",
    "Gepflegte Eingänge und Gemeinschaftsflächen.",
    ShieldCheck,
  ],
  [
    "Praxisreinigung",
    "Hygienisch und zuverlässig für Ihre Praxis.",
    FileCheck2,
  ],
  [
    "Glasreinigung",
    "Klare Fenster für einen starken ersten Eindruck.",
    Star,
  ],
  [
    "Grundreinigung",
    "Gründliche Reinigung für stark genutzte Räume.",
    Leaf,
  ],
  [
    "Endreinigung",
    "Besenrein nach Umzug, Renovierung oder Bau.",
    Check,
  ],
  [
    "Unterhaltsreinigung",
    "Regelmäßige Pflege nach Ihrem Rhythmus.",
    Clock3,
  ],
  [
    "Gartenpflege & Grünanlagen",
    "Ordentliche Außenbereiche, die Eindruck machen.",
    Leaf,
  ],

];

// ==========================================
// WHATSAPP CONFIGURATION
// ==========================================

// Company WhatsApp number in international format
const whatsappNumber = "4915906652411";

// Generate a personalized WhatsApp URL
// based on the selected service.
const getWhatsAppUrl = (serviceName) => {
  const message =
    `Hallo Schnell und Sauber, ` +
    `ich interessiere mich für Ihre Dienstleistung ` +
    `"${serviceName}" und möchte gerne ein kostenloses ` +
    `und unverbindliches Angebot erhalten.`;

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
};

// ==========================================
// SERVICES COMPONENT
// ==========================================

export default function Services() {
  return (
    <section className="section cream" id="leistungen">
      <div className="container">

        {/* ======================================
            SERVICES SECTION HEADER
        ====================================== */}

        <div className="section-heading">

          {/* Section Label and Title */}
          <div>
            <p className="eyebrow dark">
              <span />
              UNSERE LEISTUNGEN
            </p>

            <h2>Alles aus einer Hand.</h2>
          </div>

          {/* Section Description */}
          <p>
            Ein Ansprechpartner für gepflegte Räume,
            zuverlässige Abläufe und ein Ergebnis,
            das sich sehen lassen kann.
          </p>

        </div>

        {/* ======================================
            SERVICES GRID
        ====================================== */}

        <div className="service-grid">

          {/* Generate a card for each service */}
          {services.map(([title, text, Icon], index) => (

            <article className="service-card" key={title}>

              {/* ==================================
                  SERVICE NUMBER
              ================================== */}

              <div className="service-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* ==================================
                  SERVICE ICON
              ================================== */}

              <div className="icon-box">
                <Icon />
              </div>

              {/* ==================================
                  SERVICE TITLE
              ================================== */}

              <h3>{title}</h3>

              {/* ==================================
                  SERVICE DESCRIPTION
              ================================== */}

              <p>{text}</p>

              {/* ==================================
                  WHATSAPP CONTACT BUTTON
              ================================== */}

              <a
                href={getWhatsAppUrl(title)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} über WhatsApp anfragen`}
              >
                <ArrowRight />
              </a>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}

// ==========================================
// SERVICES DATA EXPORT
// ==========================================

// Export services for reuse in other components.
export { services };
