
import "./NotFound.css";

// ==========================================
// 404 NOT FOUND PAGE COMPONENT
// ==========================================

// Displays a custom error page when the
// requested route does not exist.

export default function NotFound() {
  return (
    <main className="not-found">

      {/* ======================================
          ERROR CODE
      ====================================== */}

      <p className="eyebrow dark">
        <span />
        404
      </p>

      {/* ======================================
          ERROR MESSAGE
      ====================================== */}

      <h1>
        Diese Seite wurde nicht gefunden.
      </h1>

      {/* ======================================
          BACK TO HOMEPAGE BUTTON
      ====================================== */}

      <a
        className="button button-navy"
        href="/"
      >
        Zur Startseite
      </a>

    </main>
  );
}
