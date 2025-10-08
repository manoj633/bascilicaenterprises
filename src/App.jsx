import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import GoogleReviews from "./components/GoogleReviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  useEffect(() => {
    // Setup scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-up");
        }
      });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
      ".service-card, .about__feature, .why-choose__item, .testimonial, .portfolio__item"
    );

    animatedElements.forEach((el) => {
      observer.observe(el);
    });

    // Header scroll effect
    const header = document.querySelector(".header");
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 100) {
        header.style.background = "rgba(255, 255, 255, 0.98)";
        header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
      } else {
        header.style.background = "rgba(255, 255, 255, 0.95)";
        header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      animatedElements.forEach((el) => {
        observer.unobserve(el);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Portfolio />
      <Testimonials />
      <GoogleReviews />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
