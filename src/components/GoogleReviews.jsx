import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { reviews } from "../data/reviewsData";

export default function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedReviews, setExpandedReviews] = useState({});
  const trackRef = useRef(null);
  const autoScrollRef = useRef(null);

  // --- Derived data ---
  const summary = useMemo(() => {
    const count = reviews.length;
    const avg =
      Math.round(
        (reviews.reduce((sum, r) => sum + (r.rating || 0), 0) / count) * 10
      ) / 10;
    return { count, avg };
  }, []);

  // --- Handlers ---
  const toggleReadMore = useCallback(
    (index) =>
      setExpandedReviews((prev) => ({
        ...prev,
        [index]: !prev[index],
      })),
    []
  );

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : reviews.length - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  }, []);

  // --- Auto-scroll ---
  useEffect(() => {
    autoScrollRef.current = setInterval(handleNext, 5000); // every 5s
    return () => clearInterval(autoScrollRef.current);
  }, [handleNext]);

  // Pause auto-scroll on hover
  const handleMouseEnter = () => clearInterval(autoScrollRef.current);
  const handleMouseLeave = () =>
    (autoScrollRef.current = setInterval(handleNext, 5000));

  return (
    <section
      className="google-reviews"
      id="google-reviews"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container">
        {/* Header */}
        <div className="google-reviews__header">
          <div className="google-reviews__heading-row">
            <img
              className="google-reviews__logo"
              src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
              alt="Google Reviews"
            />
            <div className="google-reviews__rating">
              <div className="google-review-card__stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i
                    key={i}
                    className={`fas fa-star ${
                      i < Math.round(summary.avg) ? "filled" : ""
                    }`}
                  ></i>
                ))}
              </div>
              <span>
                {summary.avg} · {summary.count} reviews
              </span>
            </div>
          </div>
          <a
            href="https://www.google.com/search?q=Basilica+Enterprises+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="google-review__cta"
          >
            <img
              src="https://www.google.com/images/branding/product/1x/gsa_64dp.png"
              alt="Google icon"
              className="google-review__cta-icon"
            />
            <span className="google-review__cta-text">
              Leave a Google Review
            </span>
          </a>
        </div>

        {/* Carousel */}
        <div className="google-carousel">
          <button
            className="google-carousel__btn google-carousel__btn--prev"
            onClick={handlePrev}
            aria-label="Previous review"
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <div
            className="google-carousel__track"
            ref={trackRef}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 0.6s var(--transition-medium)",
              display: "flex",
            }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="google-review-card"
                style={{
                  flex: "0 0 100%",
                  scrollSnapAlign: "center",
                }}
              >
                <div className="google-review-card__header">
                  <div className="google-review-card__avatar">
                    {review.initial}
                  </div>
                  <div className="google-review-card__user-info">
                    <div className="google-review-card__user">
                      {review.name}
                    </div>
                    <div className="google-review-card__date">
                      {review.date}
                    </div>
                  </div>
                </div>

                <div className="google-review-card__stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <i
                      key={i}
                      className={`fas fa-star ${
                        i < review.rating ? "filled" : ""
                      }`}
                    ></i>
                  ))}
                </div>

                <div className="google-review-card__content">
                  {review.text ? (
                    <>
                      <p
                        className={`google-review-card__text ${
                          expandedReviews[index] ? "expanded" : ""
                        }`}
                      >
                        {review.text}
                      </p>
                      {review.text.length > 120 && (
                        <button
                          className="google-review-card__read-more"
                          onClick={() => toggleReadMore(index)}
                        >
                          {expandedReviews[index] ? "Show less" : "Read more"}{" "}
                          <i
                            className={`fas fa-chevron-${
                              expandedReviews[index] ? "up" : "down"
                            }`}
                          ></i>
                        </button>
                      )}
                    </>
                  ) : (
                    <p className="google-review-card__text google-review-card__text--empty">
                      No comment provided.
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button
            className="google-carousel__btn google-carousel__btn--next"
            onClick={handleNext}
            aria-label="Next review"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        {/* Dots */}
        <div className="google-carousel__dots">
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`google-carousel__dot ${
                index === currentIndex ? "active" : ""
              }`}
              aria-label={`Go to review ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
