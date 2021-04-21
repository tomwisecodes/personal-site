import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import Button from "./button";

const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  justify-content: ${(props) => (props.left ? "flex-start" : "flex-end")};
`;
const MenuOuter = styled.div`
  position: absolute;
  width: 66%;
  height: unset;
  top: 100px;
`;
const MenuWrap = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: #252529;
  padding: 24px;
  border-radius: 12px;
  opacity: ${(props) => (props.show ? "1" : "0")};
  margin-top: ${(props) => (props.show ? "0px" : "80px")};
  transition-duration: 0.6s;
  transition-delay: 1s;
  button,
  a {
    color: #fafaed;
    width: unset;
    font-size: 30px;
    line-height: 30px;
    padding: 6px 12px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    :last-child {
      margin-bottom: 0;
    }
  }
  p {
    color: #fafaed;
    font-size: 24px;
    padding-left: 12px;
  }
`;

const Menu = ({ show, left, desRef, devRef, workRef }) => {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <MenuContainer left={left ? left : false} ref={ref}>
      <MenuOuter>
        <MenuWrap show={inView}>
          <p>Menu</p>
          <li>
            <Button scrollTo={workRef}>My Work</Button>
          </li>
          <li>
            <Button scrollTo={desRef}>Designer</Button>
          </li>
          <li>
            <Button scrollTo={devRef}>Developer</Button>
          </li>
        </MenuWrap>
      </MenuOuter>
    </MenuContainer>
  );
};

export default Menu;
