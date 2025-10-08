export default function Gallery() {
  const projects = [
    {
      image:
        "/attached_assets/generated_images/Portfolio_roof_project_dbcad76b.png",
      title: "Residential Roof Waterproofing",
      description: "Complete terrace waterproofing solution",
    },
    {
      image:
        "/attached_assets/generated_images/Portfolio_bathroom_project_82620521.png",
      title: "Bathroom Waterproofing",
      description: "Premium bathroom leak protection",
    },
    {
      image:
        "/attached_assets/generated_images/Portfolio_commercial_project_61d4165c.png",
      title: "Commercial Building",
      description: "Large-scale waterproofing project",
    },
  ];

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">
            <span className="section__title-main">Our Project Gallery</span>
            <span className="section__title-sub">Quality Work Showcase</span>
          </h2>
        </div>

        <div className="gallery__grid">
          {projects.map((project, index) => (
            <div key={index} className="gallery__item">
              <div className="gallery__image">
                <img
                  src={project.image}
                  alt={project.title}
                  id={`portfolioImage${index + 1}`}
                />
                <div className="gallery__overlay">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
