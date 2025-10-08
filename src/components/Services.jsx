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
      details: `Our Roof Terrace Waterproofing Service includes:

• Advanced membrane application using high-grade polymeric materials
• Anti-root barrier installation for terrace gardens
• UV-resistant coating for extended durability
• Proper drainage system integration
• Joint and crack sealing treatment
• Thermal insulation options available

Benefits:
✓ Complete protection against water ingress
✓ Extends roof life by 10-15 years
✓ Prevents internal wall dampness
✓ Energy-efficient cooling due to heat reflection
✓ 5-year warranty on workmanship`,
      image:
        "/attached_assets/gallery/optimized/terrace-waterproofing-1-600x450.webp",
    },
    {
      icon: "fa-bath",
      title: "Bathroom",
      description:
        "Complete bathroom waterproofing to prevent leaks and moisture damage.",
      details: `Our Bathroom Waterproofing Solutions include:

• Under-tile waterproofing membrane application
• Shower area special treatment
• Pipe penetration sealing
• Floor-wall joint waterproofing
• Drain area reinforcement
• Anti-fungal coating application

Benefits:
✓ Zero seepage guarantee
✓ Prevents tile debonding
✓ Stops mold and mildew growth
✓ Protects underlying structure
✓ 7-year performance warranty`,
      image:
        "/attached_assets/gallery/optimized/bathroom-waterproofing-1-600x450.webp",
    },
    {
      icon: "fa-building",
      title: "External Walls",
      description:
        "External wall waterproofing to protect against weather damage.",
      details: `Our External Wall Protection System includes:

• Weather-resistant coating application
• Crack bridging treatment
• Silicone-based water repellent
• Breathable membrane installation
• Joint sealing and caulking
• High-durability paint finish

Benefits:
✓ Prevents water penetration
✓ Allows wall breathing
✓ Reduces maintenance costs
✓ Improves building aesthetics
✓ 3-year protection guarantee`,
      image: "/attached_assets/gallery/optimized/external-wall-1-600x450.webp",
    },
    {
      icon: "fa-water",
      title: "Water Tank",
      description:
        "Water tank waterproofing and structural protection services.",
      details: `Our Water Tank Waterproofing includes:

• Food-grade waterproof coating
• Structural crack repair
• Joint and corner reinforcement
• Chemical-resistant treatment
• Surface preparation and cleaning
• Quality testing post-application

Benefits:
✓ Safe for drinking water
✓ Prevents water contamination
✓ Stops leakage completely
✓ Easy maintenance
✓ 5-year durability guarantee`,
      image:
        "/attached_assets/gallery/optimized/Professional_waterproofing_tools_and_equipment_c54a2057-600x450.webp",
    },
    {
      icon: "fa-swimming-pool",
      title: "Swimming Pool",
      description:
        "Specialized waterproofing for swimming pools and water features.",
      details: `Our Swimming Pool Waterproofing includes:

• High-performance membrane application
• Tile bed waterproofing
• Expansion joint treatment
• Filter room waterproofing
• Chemical-resistant coating
• Pool deck treatment

Benefits:
✓ Prevents water loss
✓ Chemical-resistant finish
✓ UV and chlorine resistant
✓ Crack-bridging capability
✓ 10-year service life`,
      image:
        "/attached_assets/gallery/optimized/Professional_waterproofing_tools_and_equipment_c54a2057-600x450.webp",
    },
    {
      icon: "fa-seedling",
      title: "Garden Areas",
      description: "Waterproofing solutions for gardens and landscaped areas.",
      details: `Our Garden Waterproofing System includes:

• Root-resistant membrane installation
• Drainage layer placement
• Protection board application
• Soil retention system
• Filter fabric installation
• Irrigation system integration

Benefits:
✓ Prevents root damage
✓ Proper water drainage
✓ Supports healthy plant growth
✓ Protects building structure
✓ Long-term durability`,
      image:
        "/attached_assets/gallery/optimized/Professional_waterproofing_tools_and_equipment_c54a2057-600x450.webp",
    },
    {
      icon: "fa-fill-drip",
      title: "Epoxy Grouting",
      description:
        "Advanced epoxy grouting solutions for crack sealing and structural repairs.",
      details: `Our Epoxy Grouting Service includes:

• High-strength epoxy injection
• Structural crack repair
• Void filling and sealing
• Foundation stabilization
• Concrete bonding
• Load-bearing support

Benefits:
✓ Structural strengthening
✓ Permanent crack solution
✓ Chemical resistant
✓ Fast curing time
✓ Lifetime warranty`,
      image:
        "/attached_assets/gallery/optimized/Professional_waterproofing_tools_and_equipment_c54a2057-600x450.webp",
    },
    {
      icon: "fa-tint",
      title: "PU Grouting",
      description:
        "Polyurethane grouting for flexible waterproofing and crack injection.",
      details: `Our PU Grouting Solutions include:

• Flexible polyurethane injection
• Active leak stopping
• Expansion joint treatment
• Curtain wall grouting
• Soil stabilization
• Water cut-off systems

Benefits:
✓ Instant leak stopping
✓ Flexible after curing
✓ Deep penetration
✓ Non-destructive application
✓ 3-year warranty`,
      image:
        "/attached_assets/gallery/optimized/Professional_waterproofing_tools_and_equipment_c54a2057-600x450.webp",
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
        image={active?.image}
      >
        <div style={{ whiteSpace: "pre-line" }}>{active?.details}</div>
      </Modal>
    </section>
  );
}
