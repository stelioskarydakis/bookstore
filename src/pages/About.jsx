import DummyText from "../components/shared/DummyText";
import FeaturedProducts from "../components/shared/FeaturedProducts";
import Hero from "../components/shared/Hero";
const About = () => {
  return (
    <>
      <Hero
        title="About the Author"
        text="There are many variations of passages of Lorem Ipsum available,  have suffered alteration in some form."
        name="About"
      />
      <section>
        <div className="container">
          <h2 className="title entry-title">My Story</h2>
          <DummyText />
        </div>
        <FeaturedProducts />
      </section>
    </>
  );
};

export default About;
