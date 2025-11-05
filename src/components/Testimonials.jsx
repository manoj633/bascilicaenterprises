import { useState } from "react";

export default function Testimonials() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const testimonials = [
    {
      type: "text",
      text: "Basilica Enterprises solved our persistent roof leakage problem. Their professional approach and quality work impressed us. Highly recommended!",
      name: "Rajesh Kumar",
      location: "Homeowner, Bangalore",
    },
    {
      type: "text",
      text: "Excellent service for our apartment complex waterproofing. The team was professional and completed the work on time. No leakage issues since then!",
      name: "Priya Sharma",
      location: "Property Manager, Mumbai",
    },
    {
      type: "text",
      text: "Basilica Enterprises is truly the building doctor. They diagnosed our water seepage issues correctly and provided a permanent solution.",
      name: "Amit Patel",
      location: "Business Owner, Delhi",
    },
    {
      type: "certificate",
      image: "/images/testimonials/certificate-1.png",
      alt: "Client Testimonial Certificate 1",
    },
    {
      type: "certificate",
      image: "/images/testimonials/certificate-2.png",
      alt: "Client Testimonial Certificate 2",
    },
  ];

  const openModal = (image) => {
    setSelectedCertificate(image);
    document.body.classList.add("body-no-scroll"); // disable scroll when modal open
  };

  const closeModal = () => {
    setSelectedCertificate(null);
    document.body.classList.remove("body-no-scroll");
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">
            <span className="section__title-main">What Our Clients Say</span>
            <span className="section__title-sub">Customer Testimonials</span>
          </h2>
        </div>

        <div className="testimonials__slider">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              {testimonial.type === "text" ? (
                <div className="testimonial__content">
                  <div className="testimonial__text">"{testimonial.text}"</div>
                  <div className="testimonial__author">
                    <div className="testimonial__avatar">
                      <i className="fas fa-user"></i>
                    </div>
                    <div className="testimonial__info">
                      <h4>{testimonial.name}</h4>
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="testimonial__certificate"
                  onClick={() => openModal(testimonial.image)}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.alt}
                    className="testimonial__certificate-image"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal overlay for certificate preview */}
      {selectedCertificate && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-dialog"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
          >
            <div className="modal-header">
              <h3 className="modal-title">
                <i className="fas fa-certificate modal-title-icon"></i>
                Testimonial Certificate
              </h3>
              <button className="modal-close" onClick={closeModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-image">
                <img src={selectedCertificate} alt="Full certificate view" />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
