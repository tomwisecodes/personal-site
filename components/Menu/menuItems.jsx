import styled from "styled-components";
import Button from "./button";
const MenuInnerWrap = styled.ul`
  display: flex;
  flex-direction: column;
  button,
  a {
    color: #fafaed;
    width: unset;
    font-size: 24px;
    line-height: 24px;
    padding: 4px 12px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    :last-child {
      margin-bottom: 0;
    }
  }
  p {
    color: #fafaed;
    font-size: 20px;
    padding-left: 12px;
  }
`;

const MenuInner = ({ workRef, desRef, devRef, setShowMenu, mobileMenu }) => {
  return (
    <MenuInnerWrap>
      <p>Menu</p>
      <li>
        <Button
          scrollTo={workRef}
          setShowMenu={setShowMenu}
          mobileMenu={mobileMenu}
        >
          My Work
        </Button>
      </li>
      <li>
        <Button
          scrollTo={desRef}
          setShowMenu={setShowMenu}
          mobileMenu={mobileMenu}
        >
          Designer
        </Button>
      </li>
      <li>
        <Button
          setShowMenu={setShowMenu}
          scrollTo={devRef}
          mobileMenu={mobileMenu}
        >
          Developer
        </Button>
      </li>
    </MenuInnerWrap>
  );
};

export default MenuInner;
