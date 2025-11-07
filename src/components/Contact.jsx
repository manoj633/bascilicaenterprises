import { useState, useEffect } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [showVisitChargeModal, setShowVisitChargeModal] = useState(false);

  useEffect(() => {
    if (showVisitChargeModal) {
      document.body.classList.add("body-no-scroll");
    } else {
      document.body.classList.remove("body-no-scroll");
    }
  }, [showVisitChargeModal]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      showFormSuccess();
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 2000);

    console.log("Form submitted with data:", formData);
  };

  const showFormSuccess = () => {
    const successDiv = document.createElement("div");
    successDiv.innerHTML = `
      <div style="
        background: #28a745;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 1001;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        animation: slideInRight 0.3s ease;
      ">
        <i class="fas fa-check-circle" style="margin-right: 8px;"></i>
        Thank you! We'll contact you soon.
      </div>
    `;
    document.body.appendChild(successDiv);
    setTimeout(() => successDiv.remove(), 5000);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">
            <span className="section__title-main">Get In Touch</span>
            <span className="section__title-sub">
              Free Consultation Available
            </span>
          </h2>
        </div>

        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__details">
              <div className="contact__item">
                <div className="contact__icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact__text">
                  <h3>Call Us</h3>
                  <p>9901856358 / 6360797525</p>
                </div>
              </div>

              <div className="contact__item">
                <div className="contact__icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact__text">
                  <h3>Email Us</h3>
                  <p>basilicaenterprises@gmail.com</p>
                </div>
              </div>

              <div className="contact__item">
                <div className="contact__icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact__text">
                  <h3>Our Location</h3>
                  <p>
                    Mother Teresa Layout, Nagenahalli Cross, Bangalore - 560077
                  </p>
                </div>
              </div>
            </div>

            <div className="contact__map">
              <div className="map__container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5782982441974!2d77.64712737507375!3d13.08212978711484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19732ddf6dcd%3A0x8c438e967bc40bb2!2sNo.6%2C%20BASILICA%20ENTERPRISES%2C%20MOTHER%20TERASA%20LAYOUT%2C%20NAGENAHALLI%20CROSS%2C%20nr.%20KINGSTON%20RESIDENCY%2C%20Bengaluru%2C%20Karnataka%20560077!5e0!3m2!1sen!2sin!4v1725808800000!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0, borderRadius: "12px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          <div className="contact__form">
            <form
              className="form"
              id="contactForm"
              onSubmit={(e) => {
                e.preventDefault();
                setShowVisitChargeModal(true);
              }}
            >
              <div className="form__group">
                <label htmlFor="name" className="form__label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form__input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form__group">
                <label htmlFor="phone" className="form__label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form__input"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form__group">
                <label htmlFor="email" className="form__label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form__input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form__group">
                <label htmlFor="service" className="form__label">
                  Service Required
                </label>
                <select
                  id="service"
                  name="service"
                  className="form__input"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Service</option>
                  <option value="roof-terrace">Roof & Terrace</option>
                  <option value="bathroom">Bathroom</option>
                  <option value="external-wall">External Wall</option>
                  <option value="water-tank">Water Tank</option>
                  <option value="swimming-pool">Swimming Pool</option>
                  <option value="garden">Garden Areas</option>
                  <option value="epoxy-grouting">Epoxy Grouting</option>
                  <option value="pu-grouting">PU Grouting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form__group">
                <label htmlFor="message" className="form__label">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form__input form__textarea"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn--primary btn--full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Get Free Consultation"}
              </button>
              <p
                style={{
                  marginTop: "0.75rem",
                  fontSize: "0.9rem",
                  color: "var(--medium-gray)",
                  textAlign: "center",
                }}
              >
                * A visiting charge of ₹350 applies — fully deductible from
                project cost.
              </p>
            </form>
          </div>
        </div>
      </div>
      {showVisitChargeModal && (
        <div
          className="modal-overlay"
          onClick={() => setShowVisitChargeModal(false)}
        >
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">
                <i className="fas fa-info-circle modal-title-icon"></i>
                Important Notice
              </h3>
              <button
                className="modal-close"
                onClick={() => setShowVisitChargeModal(false)}
              >
                <span className="modal-close-icon">
                  <i className="fas fa-times"></i>
                </span>
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-content">
                <p>
                  A visiting charge of <strong>₹350</strong> applies for
                  inspection and consultation. This amount is{" "}
                  <strong>fully deductible</strong> from your total project cost
                  if you confirm the work with us.
                </p>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: "1rem",
                    marginTop: "2rem",
                  }}
                >
                  <button
                    className="btn btn--secondary"
                    onClick={() => setShowVisitChargeModal(false)}
                  >
                    Cancel
                  </button>

                  <button
                    className="btn btn--primary"
                    onClick={() => {
                      setShowVisitChargeModal(false);
                      handleSubmit({ preventDefault: () => {} });
                    }}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
