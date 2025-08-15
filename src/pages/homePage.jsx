import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Aboutus from "./aboutus";
import Services from "./services";
import Doctors from "./doctors";
import Contact from "./contact";
import Testimonial from "./testimonial";
import Bestseller from "./bestSeller";

const HomePage = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);

  const Section = ({ id, children }) => {
    return (
      <motion.div
        id={id}
        className="scroll-mt-[4rem]" // Adjusts scroll positioning without extra space
        initial={{ opacity: 0, y: 90 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <>
      <Section id="home">
        <Hero/>
      </Section>
      <Section id="home">
        <Bestseller/>
      </Section>
      <Section id="aboutus">
        <Aboutus/>
      </Section>
       <Section id="services">
        <Services/>
      </Section>
      <Section id="doctors">
      <Doctors/>
      </Section>
       <Section id="testimonials">
      <Testimonial/>
      </Section>
       <Section id="contact">
        <Contact/>
      </Section>

    </>
  );
};

export default HomePage;

