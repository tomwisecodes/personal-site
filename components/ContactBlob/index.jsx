import { useContext } from "react";
import styled, { keyframes } from "styled-components";

import { BlobContext } from "../Context/BlobContext";
import { Close } from "react-ikonate";
import SocialBlock from "../SocialBlock";
import FlexWrapper from "../FlexWrapper";
import Emoji from "react-apple-emojis";

const BlobWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${(props) => (props.contact ? "200" : "-10")};
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  opacity: ${(props) => (props.contact ? "1" : "0")};
  color: #fafaed;
  ::after,
  ::before {
    position: absolute;
    top: 0;

    content: "";
    width: 50vw;
    height: 100vh;
    background-color: ${(props) => (props.contact ? "#0A0A0A" : "transparent")};
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
  }
  ::before {
    right: ${(props) => (props.contact ? "0" : "-50vw")};
  }
  ::after {
    left: ${(props) => (props.contact ? "0" : "-50vw")};
  }
`;

const ContactDeets = styled.div`
  position: absolute;
  left: calc(50% - 200px);
  max-width: 420px;
  transition-duration: 0.3s;
  transition-delay: 0.3s;
  transition-timing-function: ease-in-out;
  visibility: hidden;
  visibility: ${(props) => props.contact && "visible"};
  opacity: 0;
  opacity: ${(props) => props.contact && "1"};
  z-index: 400;
  text-align: left;
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  @media (max-width: 600px) {
    width: 100vw;
    padding: 12px;
    left: 0;
  }
  * {
    color: white;
  }
`;

const CloseWrapper = styled.div`
  position: fixed;
  top: 12px;
  right: 24px;
  @media (max-width: 900px) {
    top: 12px;
    right: 8px;
  }
  width: 72px;
  height: 72px;
  z-index: 700;
  background-color: #fafaed;
  border-radius: 200px;
  cursor: pointer;
  display: ${(props) => (props.contact ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  svg {
    width: 80%;
    height: 80%;
    path {
      color: #252529;
    }
  }
  :hover {
    background-color: #0ac959;
  }
`;
const SocialWrap = styled.div`
  margin: 24px -12px 0px -12px;
`;

const ContactBlob = () => {
  const { setContactTextSource, contactTextSource } = useContext(BlobContext);

  const contactTextHandler = () => {
    if (contactTextSource === "social") {
      return (
        <>
          <h2 className="h1">
            <Emoji
              name="man-running"
              width={36}
              style={{ marginBottom: `0px` }}
            />
            <br />
            Hello.{" "}
          </h2>
          <p>
            If you want to get a hold of me for any reason please use one of the
            channels below!
          </p>
        </>
      );
    }
    if (contactTextSource === "portfolio") {
      return (
        <>
          <h2 className="h1">
            <Emoji
              name="smiling-face-with-halo"
              width={36}
              style={{ marginBottom: `0px` }}
            />
            <br />
            Thanks for taking an interest in my work.{" "}
          </h2>
          <p>
            If you want to hear more about any of the projects I have been a
            part of then get ahold of me below and I can take you through some.
          </p>
        </>
      );
    }
    if (contactTextSource === "contact") {
      return (
        <>
          <h2 className="h1">
            <Emoji
              name="mobile-phone"
              width={36}
              style={{ marginBottom: `0px` }}
            />
            <Emoji
              name="mobile-phone"
              width={36}
              style={{ marginBottom: `0px` }}
            />
            <Emoji
              name="mobile-phone"
              width={36}
              style={{ marginBottom: `0px` }}
            />
            <br />
            Tom Wise Hotline
          </h2>
          <p>You can get in touch with me via any of the channels below.</p>
        </>
      );
    }
    return null;
  };

  return (
    <>
      <CloseWrapper
        className="hover"
        contact={!!contactTextSource}
        onClick={() => setContactTextSource(false)}
      >
        <Close />
      </CloseWrapper>
      <BlobWrapper contact={!!contactTextSource}>
        <ContactDeets contact={!!contactTextSource}>
          {contactTextHandler()}
          <SocialWrap justify="center">
            <SocialBlock color="white" text={true} />
          </SocialWrap>
        </ContactDeets>
      </BlobWrapper>
    </>
  );
};

export default ContactBlob;
