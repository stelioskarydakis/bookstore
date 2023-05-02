import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <div className="left">
          <Logo />
        </div>
        <div className="right">
          <a
            href="https://github.com/stelioskarydakis/bookstore"
            className="headerlink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/stylianos-karydakis/"
            className="headerlink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin />
          </a>
        </div>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  background-color: var(--color-blue);
  .container {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 15px;
  }
`;

export default Footer;
