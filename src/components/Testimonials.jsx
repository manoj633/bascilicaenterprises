export default function Testimonials() {
  const testimonials = [
    {
      text: "Basilica Enterprises solved our persistent roof leakage problem. Their professional approach and quality work impressed us. Highly recommended!",
      name: "Rajesh Kumar",
      location: "Homeowner, Bangalore"
    },
    {
      text: "Excellent service for our apartment complex waterproofing. The team was professional and completed the work on time. No leakage issues since then!",
      name: "Priya Sharma",
      location: "Property Manager, Mumbai"
    },
    {
      text: "Basilica Enterprises is truly the building doctor. They diagnosed our water seepage issues correctly and provided a permanent solution.",
      name: "Amit Patel",
      location: "Business Owner, Delhi"
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">
            <span className="section__title-main">What Our Clients Say</span>
            <span className="section__title-sub">Customer Testimonials</span>
          </h2>
        </div>

        <div className="testimonials__slider">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <div className="testimonial__content">
                <div className="testimonial__text">
                  "{testimonial.text}"
                </div>
                <div className="testimonial__author">
                  <div className="testimonial__avatar">
                    <i className="fas fa-user"></i>
                  </div>
                  <div className="testimonial__info">
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
