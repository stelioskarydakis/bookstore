import { Link } from "react-router-dom";
import styled from "styled-components";
import { tablet } from "../../responsive";
import HeroListItem from "./HeroListItem";

const HomeHero = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="left">
          <h3>
            <span className="line"></span>
            <span>
              <em>Welcome to Pages</em>
            </span>
          </h3>
          <h1>Books are uniquely portable magic </h1>
          <p className="desc">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
          <div className="flex">
            <div className="flexcol">
              <Link to="/store" className="small">
                Order Today
              </Link>
            </div>
            <div className="flexcol">
              <Link to="/store" className="link">
                Order Today
              </Link>
            </div>
          </div>
          <ul className="list">
            <HeroListItem title="Pages:" text="586 pages" />
            <HeroListItem title="Length:" text="10 Hours" />
            <HeroListItem title="Ratings:" text="4.5/5 (305 ratings)" />
          </ul>
        </div>
        <div className="right">
          <img
            src="https://assets.website-files.com/615aa2992a14b77739e3c502/61f3969ea11958180b4908ca_hero-book.png"
            alt="banner"
          />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--color-blue);
  color: var(--color-white);
  padding: 95px 0 110px;
  ${tablet({ padding: "50px 0" })};

  .container {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: center;
    ${tablet({ flexDirection: "column" })};
    .left {
      max-width: 600px;

      h3 {
        display: flex;
        align-items: center;
        gap: 15px;
        font-weight: 400;
        font-size: 24px;
        line-height: 154.5%;
        letter-spacing: -0.02em;
        padding-bottom: 16px;
        span {
          display: block;

          &.line {
            width: 34px;
            height: 1px;
            background-color: var(--color-yellow);
          }
        }
      }
      h1 {
        font-weight: 700;
        font-size: 65px;
        line-height: 110%;
        letter-spacing: -0.02em;
        padding-bottom: 32px;
        ${tablet({ fontSize: "40px", gap: "20px" })};
      }
      p {
        color: var(--color-lightblue);

        &.desc {
          padding-bottom: 50px;
        }
      }

      .flex {
        gap: 41px;
        padding-bottom: 49px;
        flex-wrap: wrap;
        ${tablet({ paddingBottom: "20px", gap: "20px" })};
      }

      ul {
        display: flex;
        gap: 80px;
        ${tablet({ flexDirection: "column", gap: "20px" })};
      }
    }
    .right {
      max-width: 592px;
      margin: 0 auto;
      ${tablet({ maxWidth: "300px" })};
      img {
        width: 100%;
      }
    }
  }
`;

export default HomeHero;
