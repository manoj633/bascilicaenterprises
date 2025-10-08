import { useEffect, useState } from "react";

export default function Modal({ open, onClose, title, image, children }) {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (open) {
      setIsClosing(false);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") handleClose();
    }
    if (open) {
      window.addEventListener("keydown", onKey);
    }
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function handleClose() {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300); // Match CSS transition duration
  }

  if (!open) return null;

  return (
    <div
      className={`modal-overlay ${isClosing ? "modal-closing" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={handleClose}
    >
      <div
        className={`modal-dialog ${isClosing ? "modal-closing" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="modal-header">
          <h3 className="modal-title">
            <i className="fas fa-info-circle modal-title-icon"></i>
            {title}
          </h3>
          <button
            className="modal-close"
            aria-label="Close dialog"
            title="Close dialog"
            onClick={handleClose}
          >
            <span className="modal-close-icon">
              <i className="fas fa-circle-xmark"></i>
            </span>
          </button>
        </header>
        <div className="modal-body">
          <div className="modal-content">
            {image && (
              <div className="modal-image">
                <img src={image} alt={title} />
              </div>
            )}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
