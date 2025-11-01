import React from "react";

export default function WhatsAppButton() {
  const phone = "+919901856358"; // your full number

  return (
    <div className="whatsapp-wrapper">
      <a
        href={`https://wa.me/${phone}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <i className="fab fa-whatsapp"></i>
        <span className="whatsapp-tooltip">Chat on WhatsApp</span>
      </a>

      <span className="whatsapp-ping"></span>
    </div>
  );
}
