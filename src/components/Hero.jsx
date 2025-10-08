export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__background">
        <div className="hero__video-overlay"></div>
      </div>

      <div className="container">
        <div className="main-content hero__content">
          <div className="hero__text">
            <h1 className="hero__title">
              <span className="hero__title-main">Professional Waterproofing</span>
              <span className="hero__title-sub">Services in India</span>
            </h1>
            <p className="hero__description">
              Say goodbye to all your leakage problems with our professional
              waterproofing services. Protect your building from water damage
              with cutting-edge solutions.
            </p>
            <div className="hero__cta">
              <a href="#contact" className="btn btn--primary">Get Free Consultation</a>
              <a href="tel:6360797525" className="btn btn--secondary">
                <i className="fas fa-phone"></i>
                Call Now
              </a>
            </div>
          </div>

          <div className="hero__image">
            <div className="hero__image-container">
              <img
                src="/attached_assets/generated_images/Hero_waterproofing_professional_image_66817831.png"
                alt="Professional waterproofing services"
                className="hero__img"
                id="heroImage"
              />
              <div className="hero__image-overlay">
                <div className="hero__stats">
                  <div className="hero__stat">
                    <span className="hero__stat-number">500+</span>
                    <span className="hero__stat-label">Projects Completed</span>
                  </div>
                  <div className="hero__stat">
                    <span className="hero__stat-number">10</span>
                    <span className="hero__stat-label">Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <span>Scroll Down</span>
        <i className="fas fa-arrow-down"></i>
      </div>
    </section>
  );
}
