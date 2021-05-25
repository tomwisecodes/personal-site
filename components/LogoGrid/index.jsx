import { useState, useRef, useEffect } from "react";
import Client from "./client";
import styled from "styled-components";
import clients from "../../data";
import Image from "next/image";

const LogoCont = styled.div`
  position: absolute;
  z-index: 10;
  top: -144px;
  left: -144px;
  visibility: ${(props) => (props.showLogoCont ? "visible" : "hidden")};
  opacity: ${(props) => (props.showLogoCont ? "1" : "0")};
  width: 144px;
  height: 144px;
  img {
    transition-duration: 0.6s;
    position: absolute;
    bottom: 0;
    left: 0;
    transition-duration: 0.6s;
    transition-timing-function: ease-in-out;
    height: ${(props) =>
      props.showLogoCont ? "100% !important" : "0 !important"};
    min-height: ${(props) =>
      props.showLogoCont ? "100% !important" : "0 !important"};
    width: 100%;
    z-index: 0;
    border-radius: 4px;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
  }
`;

const ImgWrap = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: ${(props) => (props.showLogoCont ? "100%" : "0")};
  width: 100%;
  overflow: hidden;
  transition-duration: 0.4s;
  transition-timing-function: ease-in-out;
`;

const LogoContain = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: ${(props) => (props.mt ? props.mt : "0px")};
  li {
    font-size: 36px;
    line-height: 36px;
    margin-right: 8px;
    cursor: default;
    position: relative;
    :hover {
      color: #0ac959;
    }
    @media (max-width: 769px) {
      z-index: -1;
    }
  }
  @media (max-width: 769px) {
    justify-content: center;
    text-align: center;
    li {
      width: 100%;
      font-size: 36px;
      line-height: 42px;
    }
  }
`;

const LogoGrid = ({ type, mt, mouseX, mouseY }) => {
  const designerCli = clients.filter((_) => _.ux || _.graphic);
  const devCli = clients.filter((_) => _.dev);
  const selectedClients = type === "designer" ? designerCli : devCli;
  const [showLogoCont, setShowLogoCont] = useState(false);
  const [theLogo, setTheLogo] = useState(false);
  const logoContianRef = useRef();
  useEffect(() => {
    logoContianRef.current.style.transform = `translate3d( ${mouseX}px, ${mouseY}px, 0) `;
  }, [mouseX, mouseY]);

  return (
    <>
      <LogoContain
        mt={mt}
        onMouseEnter={() => setShowLogoCont(true)}
        onMouseLeave={() => {
          setShowLogoCont(false);
          setTheLogo(false);
        }}
      >
        {selectedClients.map((client, i) => (
          <Client
            key={client.name}
            client={client}
            selectedClients={selectedClients}
            i={i}
            setTheLogo={setTheLogo}
          />
        ))}
        <LogoCont showLogoCont={!!theLogo} ref={logoContianRef}>
          <ImgWrap showLogoCont={!!theLogo}>
            {theLogo && <Image src={theLogo} alt={`logo`} layout="fill" />}
          </ImgWrap>
        </LogoCont>
      </LogoContain>
    </>
  );
};

export default LogoGrid;
