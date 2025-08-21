// Works in both TS and JS projects
export const openContactModal = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-contact-modal"));
  }
};
