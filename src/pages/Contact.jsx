import React from "react";
import ContactForm from "../components/shared/ContactForm";
import FeaturedProducts from "../components/shared/FeaturedProducts";
import Hero from "../components/shared/Hero";

const Contact = () => {
  return (
    <div>
      <Hero
        title="Contact Us"
        text="There are many variations of passages of Lorem Ipsum available,  have suffered alteration in some form."
        name="Contact"
      />
      <ContactForm />
      <FeaturedProducts />
    </div>
  );
};

export default Contact;
