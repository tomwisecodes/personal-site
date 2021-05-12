import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import MenuInner from "./menuItems";

const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  justify-content: ${(props) => (props.left ? "flex-start" : "flex-end")};
  @media (max-width: 900px) {
    display: none;
  }
`;
const MenuOuter = styled.div`
  position: absolute;
  width: 66%;
  height: unset;
  top: 40px;
`;
const MenuWrap = styled.div`
  background-color: #252529;
  padding: 24px;
  border-radius: 12px;
  opacity: ${(props) => (props.show ? "1" : "0")};
  margin-top: ${(props) => (props.show ? "0px" : "80px")};
  transition-duration: 0.6s;
  transition-delay: 0.4s;
`;

const DesktopMenu = ({ show, left, desRef, devRef, workRef }) => {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <MenuContainer left={left ? left : false} ref={ref}>
      <MenuOuter>
        <MenuWrap show={inView}>
          <MenuInner workRef={workRef} desRef={desRef} devRef={devRef} />
        </MenuWrap>
      </MenuOuter>
    </MenuContainer>
  );
};

export default DesktopMenu;
