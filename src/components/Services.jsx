export default function Services() {
  const services = [
    {
      icon: "fa-home",
      title: "Roof Terrace",
      description: "Professional roof and terrace waterproofing to protect against monsoon damage."
    },
    {
      icon: "fa-bath",
      title: "Bathroom",
      description: "Complete bathroom waterproofing to prevent leaks and moisture damage."
    },
    {
      icon: "fa-seedling",
      title: "Garden Areas",
      description: "Waterproofing solutions for gardens and landscaped areas."
    },
    {
      icon: "fa-swimming-pool",
      title: "Swimming Pool",
      description: "Specialized waterproofing for swimming pools and water features."
    },
    {
      icon: "fa-building",
      title: "External Walls",
      description: "External wall waterproofing to protect against weather damage."
    },
    {
      icon: "fa-water",
      title: "Water Tank",
      description: "Water tank waterproofing and structural protection services."
    },
    {
      icon: "fa-fill-drip",
      title: "Epoxy Grouting",
      description: "Advanced epoxy grouting solutions for crack sealing and structural repairs."
    },
    {
      icon: "fa-tint",
      title: "PU Grouting",
      description: "Polyurethane grouting for flexible waterproofing and crack injection."
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">
            <span className="section__title-main">Our Waterproofing Services</span>
            <span className="section__title-sub">Complete Protection Solutions</span>
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
                <a href="#contact" className="service-card__link">Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
