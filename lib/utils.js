
// ==========================================
// CSS CLASS NAME UTILITY
// ==========================================

// Combines multiple CSS class names
// into a single string without requiring
// external dependencies.

export function cn(...inputs) {
  return inputs
    .flat(Infinity)
    .filter((value) => {
      return (
        typeof value === "string" ||
        typeof value === "number"
      );
    })
    .filter(Boolean)
    .join(" ");
}

