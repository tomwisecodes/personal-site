import { useContext } from "react";
import Link from "next/link";
import FlexWrapper from "../FlexWrapper";
import styled from "styled-components";
import { useRouter } from "next/router";
import { BlobContext } from "../Context/BlobContext";

const LinksWrapper = styled(FlexWrapper)`
  background-color: white;
  border-radius: 100px;
  position: absolute;
  right: 24px;
  height: 100%;
  display: flex;
  align-items: center;
  line-height: 30px;
  @media (max-width: 769px) {
    display: none;
  }
  a {
    cursor: pointer;
    font-size: 22px;
    color: #0800c9;
    padding: 0 12px;
    :hover {
      text-decoration: underline;
    }
    :focus {
      outline: #0800c9 solid 1px;
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
  :focus {
    outline: #0800c9 solid 1px;
  }
`;

const HeaderMenu = () => {
  const router = useRouter();

  const { setContact, setContactTextSource } = useContext(BlobContext);

  return (
    <LinksWrapper justify="space-around" childrenMarginRight="12px">
      <Link href="/bio">
        <a
          className="c"
          style={
            router.pathname.includes("bio")
              ? { color: `#CC4537`, textDecoration: `underline` }
              : null
          }
        >
          Bio
        </a>
      </Link>
      <Link href="/work" className="c">
        <a
          className="c"
          style={
            router.pathname.includes("work")
              ? { color: `#CC4537`, textDecoration: `underline` }
              : null
          }
        >
          Work
        </a>
      </Link>
      <ContactButton
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
