import { useState, useContext } from "react";
import styled from "styled-components";
import HeaderMenu from "../HeaderMenu";
import SocialBlock from "../SocialBlock";
import MobileMenu from "../MobileMenu";
import { useRouter } from "next/router";
import FlexWrapper from "../FlexWrapper";
import { BlobContext } from "../Context/BlobContext";

const HeaderWrap = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  padding: 12px 24px;
  align-items: center;
  width: 100vw;
  @media (max-width: 900px) {
    padding: 12px 8px;
  }
`;

const Logo = styled.a`
  font-size: 24px;
  line-height: 24px;
  color: #252529;
  text-decoration: none;
  font-family: Rigton-semibold, sans-serif;

  @media (max-width: 900px) {
    padding: 24px;
    border-radius: 100px;
    border: none;
    font-size: 20px;
    line-height: 20px;
    background-color: #fafaed;
    cursor: pointer;
    border: solid 2px #fafaed;
  }
`;

const SayHello = styled.button`
  padding: 24px;
  border-radius: 100px;
  border: none;
  font-size: 20px;
  line-height: 20px;
  background-color: #252529;
  color: #fafaed;
  cursor: pointer;
  border: solid 2px #252529;
  :hover {
    background-color: transparent;
    color: #252529;
  }
`;

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const router = useRouter();

  const { setContactTextSource } = useContext(BlobContext);
  return (
    <HeaderWrap>
      <Logo>Tom Wise</Logo>
      <SayHello
        onClick={() => {
          setContactTextSource("social");
        }}
      >
        Say hello
      </SayHello>
    </HeaderWrap>
  );
};

export default Header;
