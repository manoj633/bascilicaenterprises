import { useState, useRef, useEffect } from "react";
import "../styles/BeforeAfterSlider.css";

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const position = (x / rect.width) * 100;

    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseUp);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseUp);
    };
  }, []);

  return (
    <div
      className="before-after-slider"
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onTouchMove={(e) => {
        const touch = e.touches[0];
        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        const x = touch.clientX - rect.left;
        const position = (x / rect.width) * 100;
        setSliderPosition(Math.min(Math.max(position, 0), 100));
      }}
    >
      <div
        className="before-image"
        style={{
          backgroundImage: `url(${beforeImage})`,
          width: "100%",
        }}
      >
        <span className="image-label image-label-before">{beforeLabel}</span>
      </div>

      <div
        className="after-image"
        style={{
          backgroundImage: `url(${afterImage})`,
          width: `${sliderPosition}%`,
        }}
      >
        <span className="image-label image-label-after">{afterLabel}</span>
      </div>

      <div className="slider-handle" style={{ left: `${sliderPosition}%` }}>
        <div className="slider-button">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M8 5v14l8-7z" fill="currentColor" />
            <path d="M16 5v14l-8-7z" fill="currentColor" />
          </svg>
        </div>
      </div>
    </div>
  );
}
