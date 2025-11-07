export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__main">
            <div className="footer__brand">
              <h3>BASILICA ENTERPRISES</h3>
              <p className="footer__tagline">Your Building Doctor</p>
              <p className="footer__description">
                Professional waterproofing services across India. Protecting
                your buildings from water damage with expert solutions and
                quality materials.
              </p>
            </div>

            <div className="footer__links">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="footer__services">
              <h4>Our Services</h4>
              <ul>
                <li>Roof Waterproofing</li>
                <li>Bathroom Waterproofing</li>
                <li>External Wall Protection</li>
                <li>Water Tank Sealing</li>
                <li>Swimming Pool Waterproofing</li>
              </ul>
            </div>

            <div className="footer__contact">
              <h4>Contact Info</h4>
              <div className="footer__contact-item">
                <i className="fas fa-phone"></i>
                <span>9901856358 / 6360797525</span>
              </div>
              <div className="footer__contact-item">
                <i className="fas fa-envelope"></i>
                <span>basilicaenterprises@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <p>
              &copy; 2024 Basilica Enterprises. All rights reserved. |
              Professional Waterproofing Services
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
