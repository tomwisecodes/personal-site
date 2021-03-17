import { useState } from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import Emoji from "react-apple-emojis";
import { useRouter } from "next/router";

const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 1600px;
  min-width: 100vw;
  height: 48px;

  background-color: transparent;
  display: flex;
  overflow-x: hidden;
  @media (max-width: 900px) {
    position: relative;
    border-top: 0;
    width: 100vw;
    height: unset;
  }
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
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  font-weight: 100;
  align-items: center;
  padding: 0 24px;
  padding-bottom: 6px;
  height: 100%;
  width: 100%;
  animation: ${footerMoving};
  animation-duration: 30s;
  animation-iteration-count: ${(props) =>
    props.pauseAnimation ? "0s" : "infinite"};
  animation-timing-function: linear;
  background-color: transparent;
  transition-duration: 0.3s;
  margin-top: ${(props) => (props.pauseAnimation ? "100px" : "0")};
  a {
    font-size: 36px;
    text-decoration: none;
    color: #0800c9;
    font-family: Rigton-Light;
    margin-right: 48px;
    white-space: nowrap;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

const FooterInnerTwo = styled.div`
  transform: translateX(100vw);
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  font-weight: 100;
  align-items: center;
  padding: 0 24px;
  padding-bottom: 6px;
  height: 100%;
  width: 100%;
  animation: ${footerMoving};
  animation-duration: 30s;
  animation-delay: 6s;
  animation-iteration-count: ${(props) =>
    props.pauseAnimation ? "0s" : "infinite"};
  animation-timing-function: linear;
  background-color: transparent;
  transition-duration: 0.3s;
  margin-top: ${(props) => (props.pauseAnimation ? "100px" : "0")};
  a {
    font-size: 36px;
    text-decoration: none;
    color: #0800c9;
    font-family: Rigton-Light;
    margin-right: 48px;
    white-space: nowrap;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

const MobileFooterContent = styled.div`
  padding: 48px 6px;
  display: flex;
  flex-direction: column;

  a {
    font-size: 24px;
    text-decoration: none;
    color: #0800c9;
    font-family: Rigton-Medium;
    margin-right: 48px;
    white-space: nowrap;
    font-weight: 600;
    margin-bottom: 12px;
    img {
      margin-right: 6px;
    }
  }
`;

const StaticFooter = styled.footer`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 48px;
  margin-top: 96px;
  a {
    color: #0800c9;
    img {
      margin-right: 6px;
    }
  }
  p {
    margin-top: 36px;
  }
  a,
  p {
    font-size: 20px;
  }
`;

const Footer = () => {
  const router = useRouter();
  return router.pathname === "/" ? (
    <FooterWrapper>
      <FooterInner>
        <a href="mailto:hello@tomwise.me" target="_blank">
          <Emoji
            name="man-technologist"
            width={36}
            style={{ marginBottom: `-4px` }}
          />
          hello@tomwise.me
        </a>
        <a href="mailto:hello@tomwise.me" target="_blank">
          <Emoji name="selfie" width={36} style={{ marginBottom: `-4px` }} />
          +(44) 79176 21285
        </a>
      </FooterInner>
      <FooterInnerTwo>
        <a href="mailto:hello@tomwise.me" target="_blank">
          <Emoji
            name="man-technologist"
            width={36}
            style={{ marginBottom: `-4px` }}
          />
          hello@tomwise.me
        </a>
        <a href="mailto:hello@tomwise.me" target="_blank">
          <Emoji name="selfie" width={36} style={{ marginBottom: `-4px` }} />
          +(44) 79176 21285
        </a>
      </FooterInnerTwo>
      <MobileFooterContent>
        <a href="mailto:hello@tomwise.me" target="_blank">
          <Emoji
            name="man-technologist"
            width={36}
            style={{ marginBottom: `-4px` }}
          />
          hello@tomwise.me
        </a>
        <a href="tel:079176 21285" target="_blank">
          <Emoji name="selfie" width={36} style={{ marginBottom: `-4px` }} />
          +(44) 79176 21285
        </a>
      </MobileFooterContent>
    </FooterWrapper>
  ) : (
    <StaticFooter>
      <a href="mailto:hello@tomwise.me" target="_blank">
        <Emoji
          name="man-technologist"
          width={36}
          style={{ marginBottom: `-4px` }}
        />
        hello@tomwise.me
      </a>
      <a href="tel:079176 21285" target="_blank">
        <Emoji name="selfie" width={36} style={{ marginBottom: `-4px` }} />
        +(44) 79176 21285
      </a>

      <p>© Tom Wise 2021</p>
    </StaticFooter>
  );
};

export default Footer;
