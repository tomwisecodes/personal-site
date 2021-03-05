import { useState } from "react";
import styled from "styled-components";
import HeaderMenu from "../HeaderMenu";
import SocialBlock from "../SocialBlock";
import Logo from "../Logo";
import MobileMenu from "../MobileMenu";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 72px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  @media (max-width: 769px) {
    justify-content: space-between;
  }
`;

const FixHeaderHeight = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin-top: 72px;
`;
const Socials = styled.div`
  position: absolute;
  top: 0;
  left: 12px;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: white;
  padding: 0 12px;
  background-color: white;
  border-radius: 100px;
  @media (max-width: 769px) {
    display: none;
  }
`;

const MobileMenuToggle = styled.button`
  display: none;
  @media (max-width: 769px) {
    display: block;
    background-color: transparent;
    border: none;
    font-size: 24px;
    padding: 24px 12px;
    background-color: white;
    border-radius: 100px;
    color: #0800c9;
    cursor: pointer;
  }
`;

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <HeaderWrapper>
        <Socials>
          <SocialBlock />
        </Socials>
        <Logo />
        <HeaderMenu />
        <MobileMenuToggle onClick={() => setToggleMenu((i) => !i)}>
          {toggleMenu ? "Close" : "Menu"}
        </MobileMenuToggle>
      </HeaderWrapper>
      <FixHeaderHeight />
      <MobileMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
    </>
  );
};

export default Header;
