import React from "react";
import { FaUserMinus, FaUserPlus } from "react-icons/fa";
import styled from "styled-components";
import { useCartContext } from "../../context/cart_context";
import { useUserContext } from "../../context/user_context";

const AuthLinks = () => {
  const { loginWithRedirect, myUser, logout } = useUserContext();
  const { clearCart } = useCartContext();
  return (
    <AuthLinksContainer>
      {myUser ? (
        <button
          type="button"
          className="link"
          onClick={() => {
            clearCart();
            localStorage.removeItem("user");
            logout({
              logoutParams: {
                returnTo: window.location.origin,
              },
            });
          }}
        >
          <FaUserMinus />
          <span>Logout</span>
        </button>
      ) : (
        <button type="button" className="link" onClick={loginWithRedirect}>
          <FaUserPlus />
          <span>Login</span>
        </button>
      )}
    </AuthLinksContainer>
  );
};

const AuthLinksContainer = styled.div`
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

export default AuthLinks;
