import React from "react";
import styled from "styled-components";
import AuthLinks from "./AuthLinks";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
const CartButtons = () => {
  return (
    <Wrapper>
      <CartItem />
      <AuthLinks />
      <Link to="/store" className="small headerbtn">
        Order Today
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  gap: 10px;
  flex-wrap: nowrap;
  @media (min-width: 992px) {
    display: flex;
  }
`;
export default CartButtons;
