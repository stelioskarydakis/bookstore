import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../responsive";

const Hero = ({ title, text, name, product }) => {
  return (
    <HeroContainer>
      <Container>
        <Title className="title title-center">{title}</Title>
        <Text>{text}</Text>
        <h3>
          <Link to="/" className="headerlink">
            Home
          </Link>
          {product && (
            <Link to="/store" className="headerlink">
              &gt;Store
            </Link>
          )}
          <span className="breadcrump">&gt;{name}</span>
        </h3>
      </Container>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  padding: 80px 0;
  background-color: var(--color-blue);
  color: var(--color-white);
  text-align: center;
  ${mobile({ padding: "50px 0" })};

  .breadcrump {
    font-weight: 500;
    font-size: 17px;
    line-height: 125%;
    font-family: var(--font-primary);
    color: var(--color-white);
    background-color: transparent;
    border: none;
    padding: 10px;
  }
`;
const Container = styled.div`
  max-width: 1299px;
  margin: 0 auto;
`;
const Title = styled.h1``;
const Text = styled.p`
  max-width: 633px;
  margin: 0 auto;
  padding-top: 28px;
  color: var(--color-lightblue);
`;

export default Hero;
