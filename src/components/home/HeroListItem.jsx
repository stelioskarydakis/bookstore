import React from "react";
import styled from "styled-components";

const HeroListItem = ({ title, text }) => {
  return (
    <LiItem>
      <h4>{title}</h4>
      <p>{text}</p>
    </LiItem>
  );
};

const LiItem = styled.li`
  h4 {
    margin-bottom: 5px;
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
  }
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 170%;
    letter-spacing: -0.01em;
  }
`;

export default HeroListItem;
