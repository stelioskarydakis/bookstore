import styled from "styled-components";
import { navItems } from "../../utils/data";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { BiMenuAltLeft } from "react-icons/bi";
import CartButtons from "./CartButtons";
import { useGlobalContext } from "../../context/global_context";
import { useUserContext } from "../../context/user_context";
const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  const { myUser } = useUserContext();
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Logo />
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <BiMenuAltLeft />
          </button>
        </div>
        <div className="nav-links">
          {navItems.map((item) => (
            <Link key={item.name} to={`${item.link}`} className="headerlink">
              {item.name}
            </Link>
          ))}
          {myUser && (
            <Link to="/checkout" className="headerlink">
              checkout
            </Link>
          )}
        </div>

        <CartButtons />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-blue);
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 120px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--color-white);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  .headerbtn {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        font-size: 1rem;
        text-transform: capitalize;
        padding: 0.5rem;
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
    .headerbtn {
      display: block;
    }
  }
`;

export default Navbar;
