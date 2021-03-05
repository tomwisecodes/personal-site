import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

const ClientThumb = styled.div`
  width: calc(33% - 24px);
  margin: 12px;
  position: relative;
  display: ${(props) => (props.display ? "block" : "none")};
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  img {
    object-fit: cover;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    filter: ${(props) => (props.blur ? "blur(4px)" : "unset")};
    opacity: ${(props) => (props.blur ? 0.8 : 1)};
  }
  .clientInner {
    position: relative;
    display: flex;
    padding-bottom: 100%;
    width: 100%;
    background-color: ${(props) => (props.clientHover ? "#040234" : "#f8f8f8")};
    border-radius: 8px;
    .clientContent {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      padding: 24px;
      text-align: center;
      p {
        color: white;
        margin-bottom: 0;
      }
    }
  }
`;

const ClientThumbWrap = ({ setViewer, client, blur, discipline }) => {
  const [clientHover, setClientHover] = useState(false);
  return (
    <ClientThumb
      className="hover"
      key={client.id}
      onClick={() => setViewer(true)}
      display={
        ((client.ux && discipline === "ux") ||
          (client.graphic && discipline === "graphic") ||
          (client.dev && discipline === "dev")) &&
        true
      }
      blur={blur}
      onMouseEnter={() => setClientHover(true)}
      onMouseLeave={() => setClientHover(false)}
      clientHover={clientHover}
    >
      <div className="clientInner">
        {!clientHover && (
          <Image
            src={client.imageThumb}
            alt="Picture of the author"
            layout="fill"
          />
        )}
        <div className="clientContent">
          {clientHover && <p> {client.clientName} </p>}
        </div>
      </div>
    </ClientThumb>
  );
};

export default ClientThumbWrap;
