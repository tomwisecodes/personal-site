import styled from "styled-components";
import Link from "next/link";
import { useContext } from "react";
import { BlobContext } from "../Context/BlobContext";
import { useRouter } from "next/router";
import SocialBlock from "../SocialBlock";

const MobileMenuWrap = styled.div`
  position: fixed;
  bottom: ${(props) => (props.toggleMenu ? "0" : "-100vh")};
  height: 70vh;
  left: 0;
  width: 100vw;
  background-color: #040234;
  background-color: #0800c9;
  z-index: 100;
  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(0.27, 1.16, 0.71, 0.87);
  transition-delay: 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px;
  a,
  button {
    color: white;
    text-align: right;
    font-size: 36px;
    line-height: 48px;
  }
`;

const ContactButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-right: 0;
  :hover {
    text-decoration: underline;
  }
  :focus {
    outline: #0800c9 solid 1px;
  }
`;

const SocialWrap = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  background-color: #0800c9;
`;
const CloseMenuArea = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 30vh;
  z-index: 100;
  display: ${(props) => (props.toggleMenu ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  font-size: 48px;
  color: #0800c9;
  padding-bottom: 72px;
`;

<ContactButton
  onClick={() => {
    setContact(true);
    setContactTextSource("contact");
  }}
>
  Contact
</ContactButton>;

const MobileMenu = ({ toggleMenu, setToggleMenu }) => {
  const { setContact, setContactTextSource } = useContext(BlobContext);
  const router = useRouter();
  return (
    <>
      <CloseMenuArea
        toggleMenu={toggleMenu}
        onClick={() => setToggleMenu(false)}
      >
        Close
      </CloseMenuArea>
      <MobileMenuWrap toggleMenu={toggleMenu}>
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
        <Link href="/skills" className="c">
          <a
            className="c"
            style={
              router.pathname.includes("skills")
                ? { color: `#CC4537`, textDecoration: `underline` }
                : null
            }
          >
            Skills
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
        <SocialWrap>
          <SocialBlock text={true} color="white" />
        </SocialWrap>
      </MobileMenuWrap>
    </>
  );
};

export default MobileMenu;
