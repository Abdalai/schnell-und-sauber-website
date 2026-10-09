
import { useEffect } from "react";

import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

// ==========================================
// PAGE IMPORTS
// ==========================================

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";

// ==========================================
// SCROLL TO TOP COMPONENT
// ==========================================

// Automatically scrolls to the top of the page
// whenever the route pathname changes.

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

// ==========================================
// MAIN APPLICATION COMPONENT
// ==========================================

// Configures the application's routing system
// and connects all available pages.

export default function App() {
  return (
    <BrowserRouter>

      {/* ======================================
          AUTOMATIC SCROLL MANAGEMENT
      ====================================== */}

      <ScrollToTop />

      {/* ======================================
          APPLICATION ROUTES
      ====================================== */}

      <Routes>

        {/* Homepage */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Legal Notice Page */}
        <Route
          path="/impressum"
          element={<Impressum />}
        />

        {/* Privacy Policy Page */}
        <Route
          path="/datenschutz"
          element={<Datenschutz />}
        />

        {/* 404 - Page Not Found */}
        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

    </BrowserRouter>
  );
}
