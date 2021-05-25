import { useEffect, useState } from "react";
import styled from "styled-components";

const FirstLoadWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: #252529;
  opacity: ${(props) => (props.load ? "1" : "0")};
  z-index: ${(props) => (props.load ? "1000" : "-1000")};
  visibility: ${(props) => (props.load ? "visible" : "hidden")};
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 24px;
    font-family: "Rigton-Regular", sans;
    color: #fafaed;
  }
`;

const FirstLoad = () => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoad(false), 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <FirstLoadWrap load={load}>
      <p>Tom Wise</p>
    </FirstLoadWrap>
  );
};

export default FirstLoad;
