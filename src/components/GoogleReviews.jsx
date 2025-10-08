import { useState, useRef } from 'react';
import { reviews } from '../data/reviewsData';

export default function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedReviews, setExpandedReviews] = useState({});
  const trackRef = useRef(null);

  const toggleReadMore = (index) => {
    setExpandedReviews(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handlePrev = () => {
    setCurrentIndex(Math.max(currentIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex(Math.min(currentIndex + 1, reviews.length - 1));
  };

  return (
    <section className="google-reviews" id="google-reviews">
      <div className="container">
        <div className="google-reviews__header">
          <div className="google-reviews__heading-row">
            <img
              className="google-reviews__logo"
              src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
              alt="Google Reviews"
            />
            <div className="google-reviews__rating">
              <div className="google-review-card__stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <span>5.0 · 15 reviews</span>
            </div>
          </div>
        </div>

        <div className="google-carousel">
          <button className="google-carousel__btn google-carousel__btn--prev" onClick={handlePrev}>
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <div className="google-carousel__track" ref={trackRef} style={{ transform: `translateX(-${currentIndex * 25}%)` }}>
            {reviews.map((review, index) => (
              <div key={index} className="google-review-card">
                <div className="google-review-card__header">
                  <div className="google-review-card__avatar">{review.initial}</div>
                  <div className="google-review-card__user-info">
                    <div className="google-review-card__user">{review.name}</div>
                    <div className="google-review-card__date">{review.date}</div>
                  </div>
                </div>
                <div className="google-review-card__stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <div className="google-review-card__content">
                  <p className={`google-review-card__text ${expandedReviews[index] ? 'expanded' : ''}`}>
                    {review.text}
                  </p>
                  {review.text.length > 100 && (
                    <button 
                      className="google-review-card__read-more"
                      onClick={() => toggleReadMore(index)}
                    >
                      {expandedReviews[index] ? 'Show less' : 'Read more'} <i className={`fas fa-chevron-${expandedReviews[index] ? 'up' : 'down'}`}></i>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button className="google-carousel__btn google-carousel__btn--next" onClick={handleNext}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <div className="google-carousel__dots">
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`google-carousel__dot ${index === currentIndex ? 'active' : ''}`}
              aria-label={`Go to review ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
