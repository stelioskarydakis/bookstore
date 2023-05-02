import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cart_context";
import { AiOutlineShoppingCart } from "react-icons/ai";
import AmountButtons from "./AmountButtons";
import styled from "styled-components";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, stock } = product;
  const [amount, setAmount] = useState(1);
  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };
  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };
  return (
    <AddToCartContainer>
      <div className="btn-container">
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
      </div>
      <Link
        to="/cart"
        className="small"
        onClick={() => addToCart(id, amount, product)}
      >
        <AiOutlineShoppingCart className="icon" /> add to cart
      </Link>
    </AddToCartContainer>
  );
};

const AddToCartContainer = styled.div`
  .btn-container {
    padding-bottom: 15px;
  }
`;

export default AddToCart;
