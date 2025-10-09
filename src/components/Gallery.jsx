import { useState } from "react";
import { projects, categories } from "../data/galleryData";
import BeforeAfterSlider from "./BeforeAfterSlider";
import "../styles/Gallery.css";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">
            <span className="section__title-main">Our Project Gallery</span>
            <span className="section__title-sub">
              Before & After Transformations
            </span>
          </h2>

          <div className="gallery__filters">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`gallery__filter-btn ${
                  selectedCategory === category.id
                    ? "gallery__filter-btn--active"
                    : ""
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {selectedProject ? (
          <div className="gallery__project-details">
            <button
              className="gallery__back-btn"
              onClick={() => setSelectedProject(null)}
            >
              ← Back to Gallery
            </button>

            <h3 className="gallery__project-title">{selectedProject.title}</h3>
            <p className="gallery__project-description">
              {selectedProject.description}
            </p>

            <div className="gallery__slider-container">
              {selectedProject.type === "comparison" ? (
                <BeforeAfterSlider
                  beforeImage={selectedProject.beforeImage}
                  afterImage={selectedProject.afterImage}
                />
              ) : (
                <div className="gallery__single-image">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    loading="lazy"
                  />
                </div>
              )}
            </div>

            <div className="gallery__project-info">
              <div className="gallery__project-details-grid">
                <div className="gallery__detail-item">
                  <span className="gallery__detail-label">Location:</span>
                  <span className="gallery__detail-value">
                    {selectedProject.details.location}
                  </span>
                </div>
                <div className="gallery__detail-item">
                  <span className="gallery__detail-label">Area Covered:</span>
                  <span className="gallery__detail-value">
                    {selectedProject.details.area}
                  </span>
                </div>
                <div className="gallery__detail-item">
                  <span className="gallery__detail-label">Duration:</span>
                  <span className="gallery__detail-value">
                    {selectedProject.details.duration}
                  </span>
                </div>
              </div>

              <div className="gallery__features">
                <h4>Key Features:</h4>
                <ul>
                  {selectedProject.details.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="gallery__grid">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="gallery__item"
                data-type={project.type}
                onClick={() => handleProjectClick(project)}
              >
                <div className="gallery__image">
                  <img
                    src={
                      project.type === "comparison"
                        ? project.thumbnailAfter
                        : project.thumbnail
                    }
                    alt={project.title}
                    loading="lazy"
                  />
                  <div className="gallery__overlay">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <button
                      className="gallery__view-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProjectClick(project);
                      }}
                    >
                      {project.type === "comparison" ? (
                        <>
                          <i className="fas fa-sync-alt"></i>
                          View Transformation
                        </>
                      ) : (
                        <>
                          <i className="fas fa-search"></i>
                          View Details
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
