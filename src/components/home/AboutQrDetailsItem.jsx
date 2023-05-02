import React from "react";
import styled from "styled-components";

const AboutQrDetailsItem = ({ title, href, link }) => {
  return (
    <DetailsInner>
      <span>{title}</span>
      <a href={href}>{link}</a>
    </DetailsInner>
  );
};

const DetailsInner = styled.div`
  padding-top: 5px;
  a {
    text-transform: lowercase;
    background-color: transparent;
    color: var(--color-lightblue);
    padding: 0;
    border: none;
    font-weight: 400;
    font-size: 19px;
    line-height: 180%;
    padding-left: 5px;
  }
  span {
    font-size: 19px;
    line-height: 180%;
    letter-spacing: -0.01em;
    color: var(--color-lightblue);
  }
`;

export default AboutQrDetailsItem;
