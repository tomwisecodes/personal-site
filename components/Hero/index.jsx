import { useState } from "react";
import { Col, Row } from "../Grid";
import styled from "styled-components";
import Container from "../Container";
import Image from "next/image";

const HomeWrap = styled(Container)`
  height: calc(100vh);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 96px;
    line-height: 84px;
    margin-bottom: 36px;
    margin-top: 240px;
    cursor: none !important;
  }
  h2 {
    font-size: 34px;
    line-height: 42px;
    .color {
      color: #0ac959;
    }
  }
  .break {
    display: none;
    @media (max-width: 550px) {
      display: block;
    }
  }
  @media (max-width: 1100px) {
    margin-left: -12px;
    margin-right: -12px;
  }
  @media (max-width: 900px) {
    .headline {
      width: 100%;
    }
    .rowFix {
      flex-direction: column;
      width: 100%;

      > div {
        width: 100%;
      }
    }
  }
  @media (max-width: 769px) {
    h1 {
      font-size: 72px;
      line-height: 60px;
      margin-bottom: 24px;
    }
    h2 {
      font-size: 30px;
      line-height: 42px;
    }
    img {
      max-width: 60px;
    }
  }
  > div {
    width: 100%;
  }
  p {
    font-size: 22px;
    line-height: 30px;
    @media (max-width: 769px) {
      font-size: 18px;
      line-height: 24px;
    }
  }
`;

const TitleLink = styled.button`
  background-color: transparent;
  border: 0;
  padding: 0;
  font-style: italic;
  position: relative;
  span {
    &.dev,
    &.des {
      color: #fafaed;
      padding-right: 6px;
      cursor: pointer;
      transition-duration: 0.3s;
      transition-timing-function: ease-in-out;
      ::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #252529;
        z-index: -1;
      }
      :hover {
        color: #252529;
        ::after {
          background-color: #0ac959;
        }
      }
    }
  }
`;

const ContactButton = styled.button``;

const TitleLinkWrap = ({ children, theRef }) => {
  return (
    <TitleLink
      onClick={() =>
        theRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        })
      }
    >
      {children}
    </TitleLink>
  );
};

const Hero = ({ setShowDef, devRef, desRef, isTouchDevice }) => {
  return (
    <HomeWrap>
      <Row>
        <Col width={[1, 1 / 2, 1 / 2]} className="headline">
          <h1
            onMouseEnter={() => setShowDef(true)}
            onMouseLeave={() => setShowDef(false)}
            onClick={() => {
              isTouchDevice && setShowDef(true);
            }}
          >
            Unicorns
            <br />
            are real{" "}
            <span
              style={{
                marginLeft: `-12px`,
                marginTop: `0px`,
                display: `inline-block`,
              }}
            >
              <Image
                src="/emoji/unicorn.png"
                width={84}
                height={84}
                fill="fill"
              />
            </span>
          </h1>
        </Col>
      </Row>
      <Row className="rowFix">
        <Col width={[1, 1 / 2, 1 / 2]}>
          <h2>
            I am a <span className="break"></span>
            <TitleLinkWrap theRef={desRef}>
              <span className="des">designer</span>
            </TitleLinkWrap>{" "}
            <span>&</span>{" "}
            <TitleLinkWrap theRef={devRef}>
              <span className="dev">developer</span>
            </TitleLinkWrap>{" "}
            <br /> based in South London
          </h2>
        </Col>
      </Row>
    </HomeWrap>
  );
};

export default Hero;
