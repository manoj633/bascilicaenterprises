export default function WhyChoose() {
  const reasons = [
    {
      icon: "fa-user-md",
      title: "Expert Diagnosis",
      description: "Like a doctor diagnoses health issues, we identify and treat all water-related problems in your building."
    },
    {
      icon: "fa-clock",
      title: "Quick Response",
      description: "Emergency waterproofing services available 24/7 for urgent leakage problems."
    },
    {
      icon: "fa-certificate",
      title: "Certified Materials",
      description: "We use only premium, certified waterproofing materials for long-lasting results."
    },
    {
      icon: "fa-handshake",
      title: "Warranty Protection",
      description: "All our waterproofing work comes with comprehensive warranty coverage."
    },
    {
      icon: "fa-rupee-sign",
      title: "Competitive Pricing",
      description: "Transparent and fair pricing with no hidden costs. Best value for professional waterproofing services."
    },
    {
      icon: "fa-leaf",
      title: "Eco-Friendly Solutions",
      description: "Environment-friendly waterproofing products that are safe for your family and the planet."
    }
  ];

  return (
    <section className="why-choose">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">
            <span className="section__title-main">Why Choose Basilica Enterprises?</span>
            <span className="section__title-sub">Your Building Doctor</span>
          </h2>
        </div>

        <div className="why-choose__grid">
          {reasons.map((reason, index) => (
            <div key={index} className="why-choose__item">
              <div className="why-choose__icon">
                <i className={`fas ${reason.icon}`}></i>
              </div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
