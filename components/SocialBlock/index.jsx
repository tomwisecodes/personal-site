import styled from "styled-components";
import FlexWrapper from "../FlexWrapper";
import LinkedIn from "../../assets/svg/social/linkedin.svg";
import WhatsApp from "../../assets/svg/social/whatsapp.svg";
import Instagram from "../../assets/svg/social/instagram.svg";

const A = styled.a`
  :hover {
    svg {
      path {
        transition-duration: 0.3s;
        transition-timing-function: ease-in-out;
        fill: #0800c9;
      }
    }
  }
`;

const SocialBlock = () => {
  return (
    <FlexWrapper
      justify="space-around"
      direction="flex-row"
      childrenMarginRight="12px"
    >
      <A href="https://www.linkedin.com/in/tom-wise1234/" target="_blank">
        <LinkedIn />
      </A>
      <A
        href="https://api.whatsapp.com/send?phone=tel:+447917621285"
        target="_blank"
      >
        <WhatsApp />
      </A>
      <A href="https://www.instagram.com/tomwisedefinatley" target="_blank">
        <Instagram />
      </A>
    </FlexWrapper>
  );
};

export default SocialBlock;
