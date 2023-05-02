import DummyText from "../components/shared/DummyText";
import Hero from "../components/shared/Hero";
const Privacy = () => {
  return (
    <>
      <Hero
        title="Privacy Policy"
        text="There are many variations of passages of Lorem Ipsum available,  have suffered alteration in some form."
        name="Privacy Policy"
      />
      <section>
        <div className="container">
          <h2 className="title entry-title">Privacy</h2>
          <DummyText />
        </div>
      </section>
    </>
  );
};

export default Privacy;
