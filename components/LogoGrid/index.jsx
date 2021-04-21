import { useState, useRef, useEffect } from "react";
import Client from "./client";
import styled from "styled-components";
import clients from "../../data";
import Image from "next/image";

const LogoCont = styled.div`
  width: 84px;
  position: absolute;
  z-index: 10;
  top: -84px;
  left: -84px;
  visibility: ${(props) => (props.showLogoCont ? "visible" : "hidden")};
  height: 84px;
  opacity: ${(props) => (props.showLogoCont ? "1" : "0")};
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

const ImageWrap = styled.div`
  width: 80px;
  height: 80px;
  position: absolute;
  border-radius: 12px;
  overflow: hidden;
  margin: 4px;
  display: ${(props) => (props.show ? "block" : "none")};
  z-index: 10;
  top: -60px;
  left: 0px;
`;
const LogoContain = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: ${(props) => (props.mt ? props.mt : "0px")};
  li {
    font-family: "bely", "serif";
    font-size: 34px;
    line-height: 42px;
    margin-right: 12px;
    cursor: default;
    position: relative;
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
        <LogoCont showLogoCont={theLogo} ref={logoContianRef}>
          {theLogo && <Image src={theLogo} alt={`logo`} layout="fill" />}
        </LogoCont>
      </LogoContain>
    </>
  );
};

export default LogoGrid;
