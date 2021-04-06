import { useState } from "react";
import styled, { keyframes } from "styled-components";
import Emoji from "react-apple-emojis";
import { useRouter } from "next/router";

const FooterWrap = styled.footer`
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 48px;
  flex-direction: column;
  align-items: center;
  p {
    font-family: rigton;
    margin-top: 24px;
    font-size: 16px;
  }
`;

const Footer = () => {
  const router = useRouter();
  const [footerHover, setFooterHover] = useState(false);

  return (
    <FooterWrap>
      <Emoji name="man-guard" width={36} style={{ marginBottom: `-12px` }} />
      <p>© Tom Wise 2021</p>
    </FooterWrap>
  );
};

export default Footer;
