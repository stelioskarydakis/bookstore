import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";

const AboutNumberItem = ({ number, text }) => {
  return (
    <NumberItemContainer>
      <span className="big">{number}</span>
      <span className="small">{text}</span>
    </NumberItemContainer>
  );
};

const NumberItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 32px;
  flex-wrap: wrap;
  &:nth-child(2) {
    border-left: solid 1px var(--color-yellow);
    border-right: solid 1px var(--color-yellow);
    ${mobile({ border: "none" })}
  }
  span {
    display: block;
    &.big {
      font-weight: 700;
      font-size: 55px;
      line-height: 120%;
      color: var(--color-blue);
      padding-bottom: 5px;
    }
    &.small {
      font-weight: 400;
      font-size: 18px;
      line-height: 170%;
      color: var(--color-text-dark);
      min-width: 140px;
    }
  }
`;

export default AboutNumberItem;
