import DummyText from "../components/shared/DummyText";
import Hero from "../components/shared/Hero";
const Cookies = () => {
  return (
    <>
      <Hero
        title="Cookies Policy"
        text="There are many variations of passages of Lorem Ipsum available,  have suffered alteration in some form."
        name="Cookies Policy"
      />
      <section>
        <div className="container">
          <h2 className="title entry-title">Cookies</h2>
          <DummyText />
        </div>
      </section>
    </>
  );
};

export default Cookies;
