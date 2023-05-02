import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { navItems } from "../../utils/data";
import { mobile } from "../../responsive";
import AuthLinks from "./AuthLinks";
import CartItem from "./CartItem";
import { useGlobalContext } from "../../context/global_context";
import { useUserContext } from "../../context/user_context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  const { myUser } = useUserContext();

  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <img src={logo} className="logo" alt="coding addict" />
          <button className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <div className="links-holder">
          {navItems.map((item) => (
            <Link
              onClick={closeSidebar}
              key={item.name}
              to={`${item.link}`}
              className="headerlink"
            >
              {item.name}
            </Link>
          ))}
          {myUser && (
            <Link onClick={closeSidebar} to="/checkout" className="headerlink">
              checkout
            </Link>
          )}
        </div>
        <AuthLinks />
        <CartItem />
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--color-red);
    transition: var(--trasition-ease);
    cursor: pointer;
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    opacity: 0.8;
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links-holder {
    margin-bottom: 2rem;
  }
  .links-holder a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--color-white);
    transition: var(--trasition-ease);
  }
  .links-holder a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--color-blue);
    opacity: 0.8;
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--color-white);
    transition: var(--trasition-ease);
    transform: translate(-100%);
    z-index: 1;
    background-color: var(--color-blue);
    max-width: 500px;
    ${mobile({ maxWidth: "100%" })};
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .show-cart {
    margin: 2rem auto;
    display: block;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
