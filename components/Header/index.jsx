import { useState } from "react";
import styled from "styled-components";
import HeaderMenu from "../HeaderMenu";
import SocialBlock from "../SocialBlock";
import Logo from "../Logo";
import MobileMenu from "../MobileMenu";
import { useRouter } from "next/router";
import FlexWrapper from "../FlexWrapper";

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
`;

const HeaderWrapperHome = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 36px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  background-color: #0800c9;
`;

const FixHeaderHeight = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin-top: 72px;
`;
const Socials = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 6px 24px;
  a {
    margin-bottom: -6px;
  }
  @media (max-width: 550px) {
    display: none;
  }
`;

const MobileMenuToggle = styled.button`
  display: none;
  @media (max-width: 769px) {
    display: block;
    border: none;
    font-size: 24px;
    padding: 0px 12px;
    background-color: transparent;
    border-radius: 100px;
    color: white;
    cursor: pointer;
  }
`;

const MenuItems = styled(FlexWrapper)`
  height: 100%;
  align-items: center;
`;

const Mobile = styled.div`
  display: none;
  @media (max-width: 769px) {
    display: block;
  }
`;

const Desktop = styled.div`
  height: 100%;
  @media (max-width: 769px) {
    display: none;
  }
`;

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const router = useRouter();

  console.log(router.pathname);

  return (
    <>
      {router.pathname !== "/" ? (
        <>
          <HeaderWrapperHome>
            <Logo header={true} />
            <Desktop>
              <MenuItems align="center">
                <Socials>
                  <SocialBlock />
                </Socials>
                <HeaderMenu />
              </MenuItems>
            </Desktop>
            <Mobile>
              <FlexWrapper align="center">
                <MenuItems align="center">
                  <Socials>
                    <SocialBlock />
                  </Socials>
                  <HeaderMenu />
                </MenuItems>
                <MobileMenuToggle onClick={() => setToggleMenu((i) => !i)}>
                  {toggleMenu ? "Close" : "Menu"}
                </MobileMenuToggle>
              </FlexWrapper>
            </Mobile>
          </HeaderWrapperHome>
          <FixHeaderHeight />
          <MobileMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        </>
      ) : (
        <>
          <HeaderWrapper>
            <Logo />
          </HeaderWrapper>
          <FixHeaderHeight />
        </>
      )}
    </>
  );
};

export default Header;
