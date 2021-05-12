import styled from "styled-components";

const Close = styled.button`
  position: absolute;
  right: -4px;
  bottom: -4px;
  left: -4px;
  height: 36px;
  width: 100vw;
  padding: 48px;
  background-color: #fafaed;
  color: black !important;
  border: none;
  font-size: 24px;
  z-index: 1000;
  outline: none;
  border: none;
`;

const MobileClose = ({ className, childeren }) => {
  return <Close>Close</Close>;
};

export default MobileClose;
