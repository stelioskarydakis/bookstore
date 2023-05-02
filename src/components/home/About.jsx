import React from "react";
import styled from "styled-components";
import { mobile, tablet } from "../../responsive";
import AboutNumberItem from "./AboutNumberItem";
import AboutQrDetailsItem from "./AboutQrDetailsItem";
import qrcode from "../../assets/qr.svg";
const About = () => {
  return (
    <Wrapper>
      <section>
        <div className="container">
          <div className="left">
            <div className="img-container">
              <span></span>
              <img
                src="https://assets.website-files.com/615aa2992a14b77739e3c502/61f39c444d4ff4671ce09348_about-author-image.jpg"
                alt="author"
              />
            </div>
          </div>
          <div className="right">
            <h2 className="title">About Author</h2>
            <p>
              All the Lorem Ipsum generators on the Internet tend to repeated
              predefined chunks as necessary, making this the first true value
              generator on the Internet. It uses a dictionary of over 200 Latin
              words, combined with a handful.
            </p>
            <div className="numbers">
              <AboutNumberItem number="02" text="Books Published" />
              <AboutNumberItem number="4.5" text="User Reviews" />
              <AboutNumberItem number="04" text="Best Seller Awards" />
            </div>
            <div className="qr-holder">
              <img src={qrcode} alt="qr code" />
              <div className="details">
                <h4 className="name">John Abraham , Ph.d</h4>
                <AboutQrDetailsItem
                  title="Mail :"
                  href="mailto:stelioskarydakis1988@gmail.com"
                  link="stelioskarydakis1988@gmail.com"
                />
                <AboutQrDetailsItem
                  title="Phone :"
                  href="tel:+2123123123"
                  link="(+2) 123 123 123"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--color-bg-gray);
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    ${tablet({ flexDirection: "column" })}

    .left {
      .img-container {
        max-width: 550px;
        position: relative;
        margin-right: 30px;
        ${tablet({ maxWidth: "300px", width: "300px" })}
        img {
          box-shadow: 0px 35px 25px rgba(4, 11, 20, 0.15);
          position: relative;
        }
        span {
          border: 12px solid var(--color-yellow);
          height: 100%;
          width: 100%;
          position: absolute;
          left: 28px;
          top: 28px;
          z-index: 0;
        }
      }
    }

    .right {
      h2 {
        font-size: 45px;
        text-align: left;
        margin-top: 40px;
      }
      p {
        color: var(--color-text-dark);
        line-height: 130%;
        padding: 22px 0 44px;
        max-width: 568px;
      }
      .numbers {
        display: flex;
        justify-content: space-between;
        ${mobile({ flexDirection: "column" })}
      }
      .qr-holder {
        margin-top: 40px;
        display: flex;
        align-items: center;
        padding: 15px 18px;
        background-color: var(--color-blue);
        max-width: fit-content;
        ${mobile({ flexDirection: "column", padding: "14px" })}

        img {
          width: 98px;
        }

        .details {
          padding-left: 53px;
          ${mobile({ paddingLeft: 0, paddingTop: "20px" })}
          h4 {
            font-weight: 700;
            font-size: 22px;
            line-height: 120%;
            color: var(--color-yellow);

            letter-spacing: -0.02em;
          }
        }
      }
    }
  }
`;

export default About;
