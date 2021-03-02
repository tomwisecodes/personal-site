import styled from "styled-components";
import HeaderMenu from "../HeaderMenu";
import SocialBlock from "../SocialBlock";
import Logo from "../Logo";

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
`;
const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <Socials>
          <SocialBlock />
        </Socials>
        <Logo />
        <HeaderMenu />
      </HeaderWrapper>
      <FixHeaderHeight />
    </>
  );
};

export default Header;
