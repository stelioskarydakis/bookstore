import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../../context/global_context";
import { useCartContext } from "../../context/cart_context";

const CartItem = () => {
  const { closeSidebar } = useGlobalContext();
  const { total_items } = useCartContext();
  return (
    <CartItemHolder>
      <Link to="/cart" className="cart-btn link" onClick={closeSidebar}>
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">{total_items}</span>
        </span>
      </Link>
    </CartItemHolder>
  );
};

const CartItemHolder = styled.div`
  .cart-btn {
    display: flex;
    align-items: center;
  }
  .cart-container {
    gap: 10px;
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
    }
  }
  .cart-value {
    position: absolute;
    top: -16px;
    right: -20px;
    background: var(--color-yellow);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--color-white);
    padding: 12px;
  }
`;

export default CartItem;
