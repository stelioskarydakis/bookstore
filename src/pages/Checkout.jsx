import React from "react";
import styled from "styled-components";
// import { PageHero, StripeCheckout } from "../components";
import StripeCheckout from "../components/store/StripeCheckout";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import Hero from "../components/shared/Hero";

const CheckoutPage = () => {
  const { cart } = useCartContext();

  return (
    <main>
      <Hero
        title="Checkout"
        text="There are many variations of passages of Lorem Ipsum available,  have suffered alteration in some form."
        name="Checkout"
      />
      <Wrapper className="page">
        {cart.length < 1 ? (
          <div className="empty">
            <h2>Your cart is empty</h2>
            <Link to="/store" className="btn">
              fill it
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1500px;
  margin: 0 auto;
  min-height: 60vh;
  .empty {
    text-align: center;
  }
`;
export default CheckoutPage;
