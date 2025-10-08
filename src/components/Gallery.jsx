import { useState, useEffect } from 'react';
import { galleryImages } from '../data/galleryData';

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;

      switch (e.key) {
        case 'Escape':
          setLightboxOpen(false);
          document.body.style.overflow = '';
          break;
        case 'ArrowLeft':
          if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
          break;
        case 'ArrowRight':
          if (currentIndex < galleryImages.length - 1) setCurrentIndex(currentIndex + 1);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, currentIndex]);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    setScale(1);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setScale(1);
    }
  };

  const handleNext = () => {
    if (currentIndex < galleryImages.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setScale(1);
    }
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setScale(Math.min(Math.max(1, scale + delta), 3));
  };

  return (
    <>
      <section className="gallery" id="gallery">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">
              <span className="section__title-main">Our Work Gallery</span>
              <span className="section__title-sub">Before & After Results</span>
            </h2>
            <p className="section__description">
              See the transformation in our waterproofing projects through these before and after photos
            </p>
          </div>
          <div className="gallery__grid">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`gallery__item ${image.isWide ? 'gallery__item--wide' : ''} ${image.isTall ? 'gallery__item--tall' : ''}`}
                data-index={index}
                onClick={() => openLightbox(index)}
              >
                <img src={image.src} alt={image.title} className="gallery__img" />
                <div className="gallery__overlay">
                  <h3 className="gallery__title">{image.title}</h3>
                  <p className="gallery__category">{image.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <div className={`lightbox ${lightboxOpen ? 'active' : ''}`}>
        <div className="lightbox__controls">
          <div className="lightbox__counter">{currentIndex + 1}/{galleryImages.length}</div>
          <button className="lightbox__close" onClick={closeLightbox}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="lightbox__content" onClick={(e) => e.target.classList.contains('lightbox__content') && closeLightbox()}>
          <div className="lightbox__img-container" onWheel={handleWheel}>
            <img
              src={galleryImages[currentIndex]?.src}
              alt={galleryImages[currentIndex]?.title}
              className="lightbox__img"
              style={{ transform: `scale(${scale})` }}
            />
          </div>
        </div>
        <button className="lightbox__nav lightbox__prev" onClick={handlePrev}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="lightbox__nav lightbox__next" onClick={handleNext}>
          <i className="fas fa-chevron-right"></i>
        </button>
        <div className="lightbox__caption">
          <h3 className="lightbox__title">{galleryImages[currentIndex]?.title}</h3>
          <p className="lightbox__category">{galleryImages[currentIndex]?.category}</p>
        </div>
      </div>
    </>
  );
}
