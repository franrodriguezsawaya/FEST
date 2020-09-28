/**
 * Initialize the web application immediately if the DOM is ready or add a
 * listener for when it is.
 */
export function init(app) {
  if (document.readyState === "complete" || document.readyState !== "loading") {
    app();
  } else {
    document.addEventListener("DOMContentLoaded", app);
  }
}
