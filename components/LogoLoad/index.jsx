import Square from "../../assets/svg/shapes/square.svg";
import Dimond from "../../assets/svg/shapes/dimond.svg";
import Triangle from "../../assets/svg/shapes/triangle.svg";
import Circle from "../../assets/svg/shapes/circle.svg";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import FlexWrapper from "../FlexWrapper";

const loadIn = keyframes`
from { 
  opacity: 0;

}
to {
  opacity: 1;
}
`;
const loadInSwaz = keyframes`
from { 
  opacity: 0;
  transform: rotate(0deg);
}
to {
  opacity: 1;
  transform: rotate(360deg);
}
`;
const loadInSwaza = keyframes`
from { 
  opacity: 0;
  transform: rotate(0deg);
}
to {
  opacity: 1;
  transform: rotate(-360deg);
}
`;

const popOff = keyframes`
  0% {
    top: 0
  }
  90% {
    top: -100vh;
  }
  100% {
    display: none;
  }
`;
const FlexWrap = styled(FlexWrapper)`
  p {
    margin-bottom: 0;
    font-size: 16px;
    font-weight: 600;
    opacity: 0;
    &.right {
      animation: ${loadInSwaza};
      animation-duration: 2s;
      animation-delay: 1s;
      animation-fill-mode: forwards;
      animation-timing-function: ease-in-out;
    }
    &.left {
      margin-left: 0px;
      animation: ${loadInSwaz};
      animation-duration: 2s;
      animation-delay: 1s;
      animation-fill-mode: forwards;
      animation-timing-function: ease-in-out;
    }
  }
  .di,
  .ci,
  .squ,
  .tri {
    opacity: 0;
    animation: ${loadIn};
    animation-delay: 0s;
    animation-fill-mode: forwards;

    animation-timing-function: ease-in-out;
  }
  .tri {
    margin-left: -0px;
    margin-right: 0px;
    margin-bottom: 5px;
    animation-delay: 0.5s;
  }
  .ci {
    animation-delay: 1s;
  }
  .squ {
    animation-delay: 1.5s;
  }
  svg {
    transform: scale(1.05);
  }
`;

const LoadWrap = styled.a`
  background-color: white;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 700;
  top: 0;
  padding: 12px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  transform: scale(3);
  animation: ${popOff};
  animation-duration: 0.6s;
  animation-delay: 2.9s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
`;

const Logo = () => {
  return (
    <LoadWrap>
      <FlexWrap align="center" childrenMarginRight="6px">
        <p className="left">{"<"}</p>
        <Dimond className="di" />
        <Triangle className="tri" />
        <Circle className="ci" />
        <Square className="squ" />
        <p className="right">{"/>"}</p>
      </FlexWrap>
    </LoadWrap>
  );
};

export default Logo;
