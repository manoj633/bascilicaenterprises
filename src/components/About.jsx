export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__content">
          <div className="about__text">
            <h2 className="section__title">
              <span className="section__title-main">
                About Basilica Enterprises
              </span>
              <span className="section__title-sub">
                Your Trusted Building Doctor
              </span>
            </h2>
            <p className="about__description">
              With years of experience in the waterproofing industry, Basilica
              Enterprises has established itself as a leading provider of
              comprehensive waterproofing solutions across India. We understand
              that water damage can be devastating to your property, which is
              why we're committed to providing reliable, long-lasting protection
              for your buildings.
            </p>

            <div className="about__features">
              <div className="about__feature">
                <div className="about__feature-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div className="about__feature-content">
                  <h3>Professional Expertise</h3>
                  <p>
                    Our team of certified professionals brings years of
                    experience to every project.
                  </p>
                </div>
              </div>

              <div className="about__feature">
                <div className="about__feature-icon">
                  <i className="fas fa-tools"></i>
                </div>
                <div className="about__feature-content">
                  <h3>Advanced Technology</h3>
                  <p>
                    We use the latest waterproofing technologies and premium
                    materials.
                  </p>
                </div>
              </div>

              <div className="about__feature">
                <div className="about__feature-icon">
                  <i className="fas fa-medal"></i>
                </div>
                <div className="about__feature-content">
                  <h3>Quality Guarantee</h3>
                  <p>
                    All our work comes with comprehensive warranty and quality
                    assurance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about__images">
            <div className="about__image">
              <img
                src="/images/team/About_us_team_photo_119d9b8a.png"
                alt="Professional waterproofing team"
                className="about__img"
                id="aboutImage"
              />
            </div>
            <div className="about__image">
              <img
                src="/images/equipment/Professional_waterproofing_tools_and_equipment_c54a2057.png"
                alt="Professional waterproofing tools and equipment"
                className="about__img"
                id="aboutImage2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
