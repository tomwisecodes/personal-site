import Square from "../../assets/svg/shapes/square.svg";
import Dimond from "../../assets/svg/shapes/dimond.svg";
import Triangle from "../../assets/svg/shapes/triangle.svg";
import Circle from "../../assets/svg/shapes/circle.svg";
import styled from "styled-components";
import Link from "next/Link";
import FlexWrapper from "../FlexWrapper";

const LogoText = styled.h3`
  color: #0800c9;
  font-size: 24px;
  line-height: 24px;
  margin-bottom: 0;
  font-family: Rigton-Medium;
  span {
    color: #0800c9;
  }
`;

const FlexWrap = styled(FlexWrapper)`
  p {
    margin-bottom: 0;
    font-size: 16px;
    font-weight: 600;
  }
  .tri {
    transform: rotate(-41.33deg);
    margin-left: -3px;
    margin-right: 9px;
    margin-bottom: 5px;
  }
  svg {
    transform: scale(1.05);
  }
`;

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <>
          <LogoText className="c">TOM WISE</LogoText>
          <FlexWrap align="center" childrenMarginRight="6.8px">
            <p>{"<"}</p>
            <Dimond />
            <Triangle className="tri" />
            <Circle />
            <Square />
            <p>{"/>"}</p>
          </FlexWrap>
        </>
      </a>
    </Link>
  );
};

export default Logo;
