
import { Link } from "react-router-dom";

// ==========================================
// BUTTON STYLE VARIANTS
// ==========================================

// Define the available button styles.
// These variants reuse the existing CSS
// classes from the website's global styles.

const buttonVariants = {
  default: "button-navy",
  primary: "button-gold",
  secondary: "button-navy",
  outline: "button-outline",
};

// ==========================================
// REUSABLE BUTTON COMPONENT
// ==========================================

// A reusable button component that supports:
// - Standard HTML buttons
// - Internal React Router navigation
// - External links
// - Custom CSS classes
// - Different visual variants

export default function Button({
  children,
  variant = "default",
  className = "",
  to,
  href,
  target,
  rel,
  type = "button",
  ...props
}) {
  // ========================================
  // BUTTON STYLE SELECTION
  // ========================================

  // Select the requested button variant.
  // Fall back to the default variant if
  // the provided variant does not exist.

  const variantClass =
    buttonVariants[variant] || buttonVariants.default;

  // ========================================
  // GENERATE BUTTON CLASS NAMES
  // ========================================

  // Combine the base button class,
  // selected variant, and optional
  // custom CSS classes.

  const buttonClassName = [
    "button",
    variantClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // ========================================
  // INTERNAL NAVIGATION BUTTON
  // ========================================

  // Use React Router Link when navigating
  // between pages within the application.

  if (to) {
    return (
      <Link
        to={to}
        className={buttonClassName}
        {...props}
      >
        {children}
      </Link>
    );
  }

  // ========================================
  // EXTERNAL LINK BUTTON
  // ========================================

  // Render an anchor element when an
  // external URL or regular link is provided.

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={
          rel ||
          (target === "_blank"
            ? "noopener noreferrer"
            : undefined)
        }
        className={buttonClassName}
        {...props}
      >
        {children}
      </a>
    );
  }

  // ========================================
  // STANDARD HTML BUTTON
  // ========================================

  // Render a standard button for actions
  // such as opening menus or triggering events.

  return (
    <button
      type={type}
      className={buttonClassName}
      {...props}
    >
      {children}
    </button>
  );
}


