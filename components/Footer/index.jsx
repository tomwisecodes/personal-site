import { useState } from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";

const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  max-width: 100vw;
  width: 100vw;
  height: 72px;
  border-top: solid 1px #040234;
  background-color: white;
`;
const footerMoving = keyframes`
from {
  transform: translateX(100vw);
}
to {
  transform: translateX(-100vw);
}
 `;
const FooterInner = styled.div`
  background-color: ${(props) => (props.pauseAnimation ? "red" : "black")};
  display: flex;
  justify-content: space-between;
  font-weight: 100;
  align-items: center;
  padding: 0 24px;
  height: 100%;
  width: 100%;
  animation: ${footerMoving};
  animation-duration: 24s;
  animation-iteration-count: ${(props) =>
    props.pauseAnimation ? "0s" : "infinite"};
  animation-timing-function: linear;
  background-color: transparent;
  transition-duration: 0.3s;
  margin-top: ${(props) => (props.pauseAnimation ? "100px" : "0")};
  a {
    font-size: 48px;
    text-decoration: none;
    color: #0800c9;
    font-family: Rigton-Light;
  }
`;
const FooterInnerReal = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 100;
  align-items: center;
  padding: 0 24px;
  height: 100%;
  width: 100%;
  background-color: white;
  position: absolute;
  top: ${(props) => (props.pauseAnimation ? "0" : "100px")};
  left: 0;
  transition-duration: 0.3s;
  transition-delay: ${(props) => (props.pauseAnimation ? "0s" : "0.3s")};
  z-index: 10;

  a {
    font-size: 48px;
    text-decoration: none;
    color: #0800c9;
    font-family: Rigton-LightItalic;
  }
`;
const Footer = () => {
  const [pauseAnimation, setPauseAnimation] = useState(false);

  return (
    <FooterWrapper>
      <FooterInner pauseAnimation={pauseAnimation}>
        <div className="downloads">
          <a href="/" target="_blank" download style={{ marginRight: `24px` }}>
            portfolio
          </a>
          <a href="/" target="_blank" download>
            cv
          </a>
        </div>
        <div className="contact">
          <a href="mailto:hello@tomwise.me" target="_blank">
            hello@tomwise.me
          </a>
        </div>
      </FooterInner>
      <FooterInnerReal pauseAnimation={pauseAnimation}>
        <div className="downloads">
          <a href="/" target="_blank" download>
            portfolio
          </a>
          <a href="/" target="_blank" download>
            cv
          </a>
        </div>
        <div className="contact">
          <a href="mailto:hello@tomwise.me" target="_blank">
            hello@tomwise.me
          </a>
        </div>
      </FooterInnerReal>
    </FooterWrapper>
  );
};

export default Footer;
