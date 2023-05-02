import styled from "styled-components";
import logo from "../../assets/logo.svg";
const Logo = () => {
  return (
    <LogoDrawer>
      <img src={logo} alt="logo" />
    </LogoDrawer>
  );
};

const LogoDrawer = styled.div`
  background-color: var(--color-blue);
  padding: 10px 0;
  & img {
    max-width: 120px;
  }
`;
export default Logo;
