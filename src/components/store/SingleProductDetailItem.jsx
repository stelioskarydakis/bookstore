import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";

const SingleProductDetailItem = ({ title, text }) => {
  return (
    <Item>
      <div className="item-title">{title}</div>
      <span>:</span>
      <div className="item-text">{text}</div>
    </Item>
  );
};

const Item = styled.div`
  display: flex;
  color: var(--color-text-dark);
  font-size: 19px;
  line-height: 100%;
  letter-spacing: -0.01em;
  padding-bottom: 20px;
  ${mobile({ fontSize: "17px" })};
  .item-title {
    min-width: 100px;
    ${mobile({ minWidth: "90px" })};
  }
  span {
    padding: 0 35px;
    ${mobile({ padding: "0 25px" })};
  }
`;

export default SingleProductDetailItem;
