import { useContext } from "react";
import Link from "next/link";
import FlexWrapper from "../FlexWrapper";
import styled from "styled-components";
import { useRouter } from "next/router";
import { BlobContext } from "../Context/BlobContext";

const LinksWrapper = styled(FlexWrapper)`
  background-color: white;
  height: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 769px) {
    display: none;
  }
  a,
  button {
    cursor: pointer;
    font-size: 18px;
    color: #0800c9;
    min-width: 120px;
    width: 25%;
    text-align: center;
    height: 100%;
    line-height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    &.green {
      background-color: #0ac959;
      color: #080559;
    }
    &.purple {
      background-color: #5859cc;
      color: #ffffff;
    }
    &.red {
      background-color: #c92014;
      color: #ffffff;
    }
    &.yellow {
      background-color: #c9ab14;
      color: #080559;
    }
    :hover {
      text-decoration: underline;
    }
  }
`;
const ContactButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 22px;
  color: #0800c9;
  line-height: 30px;
  padding: 0 12px;
  :hover {
    text-decoration: underline;
  }
`;

const HeaderMenu = () => {
  const router = useRouter();

  const { setContact, setContactTextSource } = useContext(BlobContext);

  return (
    <LinksWrapper justify="space-around">
      <Link href="/bio">
        <a
          className="c purple"
          style={
            router.pathname.includes("bio")
              ? {
                  backgroundColor: `#f8f8f8`,
                  color: `#0800c9`,
                }
              : null
          }
        >
          Bio
        </a>
      </Link>
      <Link href="/work">
        <a
          className="c green"
          style={
            router.pathname.includes("work")
              ? {
                  backgroundColor: `#f8f8f8`,
                  color: `#0800c9`,
                }
              : null
          }
        >
          Work
        </a>
      </Link>
      <Link href="/tech">
        <a
          className="c red"
          style={
            router.pathname.includes("tech")
              ? {
                  backgroundColor: `#f8f8f8`,
                  color: `#0800c9`,
                }
              : null
          }
        >
          Skills
        </a>
      </Link>
      <ContactButton
        className="yellow"
        onClick={() => {
          setContact(true);
          setContactTextSource("contact");
        }}
      >
        Contact
      </ContactButton>
    </LinksWrapper>
  );
};

export default HeaderMenu;
