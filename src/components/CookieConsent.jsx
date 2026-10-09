
import { useState } from "react";

// ==========================================
// COOKIE CONFIGURATION
// ==========================================

// Cookie name used to store user acknowledgment
const COOKIE_NAME = "schnell-sauber-cookie-consent";

// Cookie expiration time: 1 year (in seconds)
const COOKIE_MAX_AGE = 31536000;

// ==========================================
// COOKIE CONSENT COMPONENT
// ==========================================

export default function CookieConsent() {

  // ----------------------------------------
  // COOKIE VISIBILITY STATE
  // ----------------------------------------

  // Show the banner if the acknowledgment
  // cookie has not been saved.
  const [visible, setVisible] = useState(() => {
    return !document.cookie
      .split("; ")
      .some((cookie) => cookie === `${COOKIE_NAME}=accepted`);
  });

  // ----------------------------------------
  // COOKIE ACCEPTANCE HANDLER
  // ----------------------------------------

  // Save the acknowledgment cookie and
  // hide the cookie banner.
  const acceptCookies = () => {
    document.cookie =
      `${COOKIE_NAME}=accepted; ` +
      `max-age=${COOKIE_MAX_AGE}; ` +
      `path=/; ` +
      `SameSite=Lax`;

    setVisible(false);
  };

  // ----------------------------------------
  // CONDITIONAL RENDERING
  // ----------------------------------------

  // Do not render the banner if already accepted
  if (!visible) {
    return null;
  }

  // ----------------------------------------
  // COMPONENT RENDERING
  // ----------------------------------------

  return (
    <aside
      className="cookie-banner"
      role="dialog"
      aria-label="Cookie-Hinweis"
    >

      {/* ======================================
          COOKIE INFORMATION
      ====================================== */}

      <div>

        {/* Cookie Banner Title */}
        <strong>Cookies</strong>

        {/* Cookie Information Text */}
        <p>
          Wir verwenden nur technisch notwendige
          Cookies, damit diese Website zuverlässig
          funktioniert.
        </p>

      </div>

      {/* ======================================
          COOKIE ACKNOWLEDGMENT BUTTON
      ====================================== */}

      <button
        type="button"
        className="button button-gold"
        onClick={acceptCookies}
      >
        Verstanden
      </button>

    </aside>
  );
}
