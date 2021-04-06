import { useState } from "react";
import { Col, Row } from "../Grid";
import styled from "styled-components";
import Emoji from "react-apple-emojis";

const TitleLink = styled.button`
  background-color: transparent;
  border: 0;
  padding: 0;
  font-style: italic;
  position: relative;
  cursor: pointer;
  span {
    ::before {
      display: none;
      content: "";
      position: absolute;
      left: 0;
      width: 100%;
      height: 6px;
      background-color: #252529;
      bottom: 0;
      z-index: -1;
    }
    ::after {
      content: "";
      position: absolute;
      left: 60px;
      width: 30px;
      height: 30px;
      background-color: #fafaed;
      bottom: -20px;
      z-index: -1;
      transform: rotate(10deg);
    }
    &.dev {
      ::after {
        content: "";
        position: absolute;
        left: 100px;
        width: 20px;
        height: 30px;
        background-color: #fafaed;
        bottom: -20px;
        z-index: -1;
        transform: rotate(10deg);
      }
    }
  }
  ::before {
    content: "";
    width: 24px;
    height: 24px;
    background-color: #252529;
    transform: rotate(45deg);
    position: absolute;
    top: -24px;
    left: calc(50% - 12px);
    display: ${(props) => (props.seeMore ? "flex" : "none")};
  }
  ::after {
    content: "See more";
    font-size: 20px;
    line-height: 20px;
    color: #fafaed;
    width: 100%;
    height: 36px;
    background-color: #252529;
    border-radius: 100px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -84px;
    left: 0;
    padding: 36px 0;
    display: ${(props) => (props.seeMore ? "flex" : "none")};
    border: solid 3px #fafaed;
  }
`;

const ContactButton = styled.button``;

const TitleLinkWrap = ({ children, theRef }) => {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <TitleLink
      seeMore={seeMore}
      onClick={() =>
        theRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        })
      }
      onMouseEnter={() => setSeeMore(true)}
      onMouseLeave={() => setSeeMore(false)}
    >
      {children}
    </TitleLink>
  );
};

const Hero = ({ showdef, setShowDef, devRef, desRef }) => {
  return (
    <>
      <Row>
        <Col width={[1, 1 / 2, 1 / 2]}>
          <h1
            onMouseEnter={() => setShowDef(true)}
            onMouseLeave={() => setShowDef(false)}
          >
            Unicorns
            <br />
            are real{" "}
            <Emoji
              name="unicorn"
              width={72}
              style={{ marginBottom: `-12px` }}
            />
          </h1>
        </Col>
      </Row>
      <Row>
        <Col width={[1, 1 / 2, 1 / 2]}>
          <h2>
            I am a{" "}
            <TitleLinkWrap theRef={desRef}>
              <span className="des">designer</span>
            </TitleLinkWrap>{" "}
            <span className="color">&</span>{" "}
            <TitleLinkWrap theRef={devRef}>
              <span className="dev">developer</span>
            </TitleLinkWrap>{" "}
            <br /> based in South London
          </h2>
        </Col>
        <Col width={[1, 1 / 2, 1 / 2]}>
          <p style={{ marginTop: `12px` }}>
            I sepcialise in UX design, building design systems, designing UI’s
            and building UI’s. Im a experianced user researcher and have coded
            many projects from conception to production.{" "}
          </p>
        </Col>
      </Row>
    </>
  );
};

export default Hero;
