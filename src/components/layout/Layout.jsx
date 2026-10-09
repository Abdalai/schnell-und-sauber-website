
import Header from "./Header";
import Footer from "./Footer";

// ==========================================
// LAYOUT COMPONENT
// ==========================================

// Shared layout wrapper for all website pages.
// Renders the Header and Footer around page content.

export default function Layout({ children }) {
  return (
    <>
      {/* ======================================
          HEADER SECTION
          Displays the website navigation
          and company branding.
      ====================================== */}

      <Header />

      {/* ======================================
          MAIN CONTENT SECTION
          Renders the content of the
          currently active page.
      ====================================== */}

      <main id="main-content">
        {children}
      </main>

      {/* ======================================
          FOOTER SECTION
          Displays company information,
          contact details, and legal links.
      ====================================== */}

      <Footer />
    </>
  );
}
