import { useState } from "react";
import Modal from "./Modal";

export default function Services() {
  const [active, setActive] = useState(null);
  const [open, setOpen] = useState(false);

  const services = [
    {
      icon: "fa-home",
      title: "Roof Terrace",
      description:
        "Professional roof and terrace waterproofing to protect against monsoon damage.",
      details: `WATERPROOFING / WATER TIGHTENING SOLUTIONS
Wet2Dry Solutions Pvt. Ltd. provides roof and terrace waterproofing across major cities. We use modern membranes and coatings to prevent ingress, extend roof life and avoid costly repairs.`,
    },
    {
      icon: "fa-bath",
      title: "Bathroom",
      description:
        "Complete bathroom waterproofing to prevent leaks and moisture damage.",
      details: `Wet basement, concrete, Basement, Foundation waterproofing service
Our bathroom services cover sanitary waterproofing under tiles, joints and wet areas to eliminate leak paths. We use proven systems compatible with tiles and drains.`,
    },
    {
      icon: "fa-seedling",
      title: "Garden Areas",
      description: "Waterproofing solutions for gardens and landscaped areas.",
      details: `SEEPAGE SOLUTIONS
For landscaped and planter areas we offer root-friendly waterproofing, drainage, and protection layers to keep soil moisture controlled while protecting the structure.`,
    },
    {
      icon: "fa-swimming-pool",
      title: "Swimming Pool",
      description:
        "Specialized waterproofing for swimming pools and water features.",
      details: `We provide durable pool-grade membrane systems and crack management to keep water contained and surfaces protected for long-term performance.`,
    },
    {
      icon: "fa-building",
      title: "External Walls",
      description:
        "External wall waterproofing to protect against weather damage.",
      details: `External wall systems include breathable coatings, crack sealing and protective membranes that prevent moisture intrusion while allowing trapped moisture to escape.`,
    },
    {
      icon: "fa-water",
      title: "Water Tank",
      description:
        "Water tank waterproofing and structural protection services.",
      details: `We waterproof potable and non-potable tanks using food-safe coatings and leak-tight systems designed for full immersion.`,
    },
    {
      icon: "fa-fill-drip",
      title: "Epoxy Grouting",
      description:
        "Advanced epoxy grouting solutions for crack sealing and structural repairs.",
      details: `Epoxy grouting is used for structural crack repair, anchoring and sealing. Our systems restore integrity and prevent water migration.`,
    },
    {
      icon: "fa-tint",
      title: "PU Grouting",
      description:
        "Polyurethane grouting for flexible waterproofing and crack injection.",
      details: `Polyurethane grouting offers flexible, fast-reacting injections to stop active leaks, ideal for joints and voids where movement exists.`,
    },
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">
            <span className="section__title-main">
              Our Waterproofing Services
            </span>
            <span className="section__title-sub">
              Complete Protection Solutions
            </span>
          </h2>
          <p className="section__description">
            We provide comprehensive waterproofing services for all areas of
            your building, ensuring complete protection against water damage.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-card__icon">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__description">{service.description}</p>
              <div className="service-card__cta">
                <button
                  className="service-card__link btn--secondary"
                  onClick={() => {
                    setActive(service);
                    setOpen(true);
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={active?.title || "Service"}
      >
        <div style={{ whiteSpace: "pre-line" }}>{active?.details}</div>
      </Modal>
    </section>
  );
}
