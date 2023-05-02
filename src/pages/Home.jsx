import React from "react";
import About from "../components/home/About";
import HomeHero from "../components/home/HomeHero";
import FeaturedProducts from "../components/shared/FeaturedProducts";

const Home = () => {
  return (
    <>
      <HomeHero />
      <FeaturedProducts />
      <About />
    </>
  );
};

export default Home;
