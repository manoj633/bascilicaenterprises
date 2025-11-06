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
• UV-resistant coating for extended durability
• Proper drainage system integration
• Joint and crack sealing treatment
• Thermal insulation options available

Benefits:
✓ Complete protection against water ingress
✓ Extends roof life by 10-15 years
✓ Prevents internal wall dampness
✓ Energy-efficient cooling due to heat reflection
✓ 1-year warranty on workmanship

Additional Expertise:
Our organization is one of the leading and most promising service providers for water leakage solutions. We have established strong business rapport with trusted sanitary and leakage solution partners, known for high-grade quality service and timely completion. We ensure every terrace waterproofing project is completed with the same commitment to quality and precision.`,
      image: "/images/optimized/terrace-waterproofing-1-600x450.webp",
    },
    {
      icon: "fa-bath",
      title: "Bathroom",
      description:
        "Complete bathroom waterproofing to prevent leaks and moisture damage.",
      details: `Our Bathroom Waterproofing Solutions include:

• Under-tile waterproofing membrane application
• Shower area special treatmen
• Pipe penetration sealing
• Floor-wall joint waterproofing
• Drain area reinforcement
• Anti-fungal coating application

Benefits:
✓ Zero seepage guarantee
✓ Prevents tile debonding
✓ Stops mold and mildew growth
✓ Protects underlying structure
✓ 1-year performance warranty

Additional Details:
We offer professional bathroom waterproofing services in Pune, Mumbai, Bangalore, Delhi (Opening Shortly), Aurangabad, Nashik, and Hyderabad.  
Wet and damp areas, bathrooms, and laundries are critical zones that must be waterproofed to prevent serious damage to nearby bedrooms or living areas.  
We specialize in backflow water removal technology and ensure complete sanitary waterproofing as part of our comprehensive home waterproofing solution.  
Our commitment: fully water-tight bathrooms, engineered to deliver durable, value-for-money results.`,
      image: "/images/optimized/bathroom-waterproofing-1-600x450.webp",
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
✓ 1-year protection guarantee

Note:
Our leak detection and wall seepage repair process is informed by our expertise in leakage root cause analysis, ensuring precise treatment and long-term protection.`,
      image: "/images/optimized/external-wall-1-600x450.webp",
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
✓ 1-year durability guarantee`,
      image:
        "/images/optimized/Professional_waterproofing_tools_and_equipment_c54a2057-600x450.webp",
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
✓ 1-year service life`,
      image:
        "/images/optimized/Professional_waterproofing_tools_and_equipment_c54a2057-600x450.webp",
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
✓ 1-year durability guarantee`,
      image:
        "/images/optimized/Professional_waterproofing_tools_and_equipment_c54a2057-600x450.webp",
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
✓ 1-year warranty

Additional Expertise:
Our leakage solution division ensures every epoxy repair aligns with site-specific seepage and crack patterns, leading to superior and long-lasting results.`,
      image:
        "/images/optimized/Professional_waterproofing_tools_and_equipment_c54a2057-600x450.webp",
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
✓ 1-year warranty

This service complements our full range of leakage repair and waterproofing solutions, addressing both active and passive water ingress efficiently.`,
      image:
        "/images/optimized/Professional_waterproofing_tools_and_equipment_c54a2057-600x450.webp",
    },
    {
      icon: "fa-utensils",
      title: "Kitchen & Utility Area",
      description:
        "Waterproofing solutions for kitchen, sink, and utility wash areas to prevent leakage and dampness.",
      details: `Our Kitchen & Utility Area Waterproofing includes:

• Under-tile waterproof membrane application  
• Sink and countertop joint sealing  
• Pipe outlet & inlet penetration waterproofing  
• Floor trap & drain area reinforcement  
• High-moisture zone chemical coating  
• Anti-fungal & anti-bacterial protection  

Benefits:  
✓ Prevents seepage to lower floors  
✓ Stops mold formation behind kitchen tiles  
✓ Protects cabinets from moisture damage  
✓ Ensures long-term hygiene  
✓ 1-year leakage protection warranty`,
      image:
        "/images/optimized/Professional_waterproofing_tools_and_equipment_c54a2057-600x450.webp",
    },
    {
      icon: "fa-door-open",
      title: "Balcony",
      description:
        "Professional balcony waterproofing to prevent seepage, cracks, and dripping issues.",
      details: `Our Balcony Waterproofing System includes:

• Slope correction for proper drainage  
• Crack filling & joint sealing  
• Waterproof coating under tile system  
• Drain area sealing & reinforcement  
• UV-resistant top coat application  
• Anti-skid protective finishing  

Benefits:  
✓ Eliminates balcony-to-wall seepage  
✓ Prevents dampness in adjacent rooms  
✓ UV and weather resistant  
✓ Ensures proper water flow  
✓ 1-year waterproofing warranty`,
      image:
        "/images/optimized/Professional_waterproofing_tools_and_equipment_c54a2057-600x450.webp",
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
