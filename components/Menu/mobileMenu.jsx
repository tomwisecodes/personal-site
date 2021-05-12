import { useState } from "react";
import styled from "styled-components";
import ButtonWrap from "../Button/styled";
import MenuInner from "./menuItems";
import MobileClose from "../MobileClose";

const Trigger = styled(ButtonWrap)`
  position: fixed;
  bottom: ${(props) => (props.display ? "12px" : "-100px")};
  right: 12px;
  display: none;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  @media (max-width: 900px) {
    display: block;
  }
`;
const MenuWrap = styled.div`
  position: fixed;
  bottom: ${(props) => (props.showMenu ? "0" : "-100vh")};
  padding: 24px;
  min-height: 100vh;
  left: 0;
  background-color: #252529;
  width: 100vw;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  display: flex;
  align-items: center;
  border: 4px solid #fafaed;
  outline: none;
`;
const MobileDisplay = styled.div`
  display: none;
  @media (max-width: 769px) {
    display: block;
  }
`;
const MobileMenu = ({ workRef, desRef, devRef, display }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <Trigger onClick={() => setShowMenu(true)} display={display}>
        Menu
      </Trigger>
      <MenuWrap showMenu={showMenu}>
        <MenuInner
          workRef={workRef}
          desRef={desRef}
          devRef={devRef}
          setShowMenu={setShowMenu}
          mobileMenu={true}
        />
        <MobileDisplay onClick={() => setShowMenu(false)}>
          <MobileClose />
        </MobileDisplay>
      </MenuWrap>
    </>
  );
};

export default MobileMenu;
