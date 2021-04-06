import styled from "styled-components";
import FlexWrapper from "../FlexWrapper";
import LinkedIn from "../../assets/svg/social/linkedin.svg";
import Mail from "../../assets/svg/social/mail.svg";
import WhatsApp from "../../assets/svg/social/whatsapp.svg";
import Instagram from "../../assets/svg/social/instagram.svg";
import LinkedInWhite from "../../assets/svg/social/linkedin-white.svg";
import WhatsAppWhite from "../../assets/svg/social/whatsapp-white.svg";
import InstagramWhite from "../../assets/svg/social/instagram-white.svg";
import MailWhite from "../../assets/svg/social/mail-white.svg";

const A = styled.a`
  display: ${(props) => (props.text ? "flex" : "unset")};
  align-items: ${(props) => (props.text ? "center" : "unset")};
  flex-direction: ${(props) => (props.text ? "column" : "unset")};
  transform: scale(0.8);
  :hover {
    opacity: 0.6;
  }

  p {
    font-size: 16px;
    color: ${(props) => (props.color === "white" ? "white" : "inherit")};
    font-family: "Rigton-Medium";
  }
`;

const socialDeets = [
  { href: "https://www.linkedin.com/in/tom-wise1234/", medium: "LinkedIn" },
  {
    href: "https://api.whatsapp.com/send?phone=tel:+447917621285",
    medium: "WhatsApp",
  },
  {
    href: "https://www.instagram.com/tomwisedefinatley",
    medium: "Instagram",
  },
  {
    href: "mailto:hello@tomwise.me",
    medium: "Mail",
  },
];

const SocialItem = ({ href, color, text, medium }) => {
  const whichIcon = (m) => {
    if (m === "LinkedIn") {
      return color === "white" ? <LinkedInWhite /> : <LinkedIn />;
    }
    if (m === "WhatsApp") {
      return color === "white" ? <WhatsAppWhite /> : <WhatsApp />;
    }
    if (m === "Instagram") {
      return color === "white" ? <InstagramWhite /> : <Instagram />;
    }
    if (m === "Mail") {
      return color === "white" ? <MailWhite /> : <Mail />;
    }
  };
  return (
    <A href={href} target="_blank" color={color} text={text}>
      <>
        {whichIcon(medium)}
        {text && <p>{medium}</p>}
      </>
    </A>
  );
};

const SocialBlock = ({ color, text }) => {
  return (
    <FlexWrapper
      justify="space-around"
      direction="flex-row"
      childrenMarginRight="12px"
    >
      {socialDeets.map((socialMedium) => (
        <SocialItem
          href={socialMedium.href}
          medium={socialMedium.medium}
          color={color}
          text={text}
        />
      ))}
    </FlexWrapper>
  );
};

export default SocialBlock;
