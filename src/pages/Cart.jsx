import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Hero from "../components/shared/Hero";
import { useCartContext } from "../context/cart_context";
import CartContent from "../components/cart/CartContent";

const CartPage = () => {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <Wrapper className="page-100">
        <Hero
          title="Cart"
          text="There are many variations of passages of Lorem Ipsum available,  have suffered alteration in some form."
          name="Cart"
        />
        <div className="empty">
          <h2>Your cart is empty</h2>
          <Link to="/store" className="btn">
            fill it
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <main>
      <Hero
        title="Cart"
        text="There are many variations of passages of Lorem Ipsum available,  have suffered alteration in some form."
        name="Cart"
      />
      <Wrapper className="page">
        <CartContent />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  .empty {
    padding-top: 20px;
    min-height: 50vh;
    max-width: 1500px;
    margin: 0 auto;
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;

export default CartPage;
