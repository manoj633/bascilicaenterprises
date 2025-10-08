import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.pageYOffset + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const targetPosition = targetElement.offsetTop - headerHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      closeMenu();
    }
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <div className="container">
          <div className="header__content">
            <div className="header__logo">
              <h1>BASILICA ENTERPRISES</h1>
              <span className="header__tagline">Your Building Doctor</span>
            </div>

            <div className={`header__menu ${isMenuOpen ? 'active' : ''}`} id="mobileMenu">
              <ul className="header__nav-list">
                <li><a href="#home" className={`header__nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, '#home')}>Home</a></li>
                <li><a href="#about" className={`header__nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, '#about')}>About</a></li>
                <li><a href="#services" className={`header__nav-link ${activeSection === 'services' ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, '#services')}>Services</a></li>
                <li><a href="#portfolio" className={`header__nav-link ${activeSection === 'portfolio' ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, '#portfolio')}>Portfolio</a></li>
                <li><a href="#gallery" className={`header__nav-link ${activeSection === 'gallery' ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, '#gallery')}>Gallery</a></li>
                <li><a href="#testimonials" className={`header__nav-link ${activeSection === 'testimonials' ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, '#testimonials')}>Testimonials</a></li>
                <li><a href="#contact" className={`header__nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, '#contact')}>Contact</a></li>
              </ul>
            </div>

            <div className="header__actions">
              <a href="tel:6360797525" className="header__phone">
                <i className="fas fa-phone"></i>
                <span>6360797525</span>
              </a>
              <button 
                className="header__menu-toggle" 
                id="menuToggle"
                onClick={toggleMenu}
              >
                <span style={{ transform: isMenuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none' }}></span>
                <span style={{ opacity: isMenuOpen ? '0' : '1' }}></span>
                <span style={{ transform: isMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none' }}></span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
