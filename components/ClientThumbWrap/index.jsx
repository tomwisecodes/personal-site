import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

const ClientThumb = styled.div`
  width: calc(33% - 24px);
  margin: 12px;
  position: relative;
  display: ${(props) => (props.display ? "block" : "none")};
  border-radius: 0px;
  overflow: hidden;
  cursor: pointer;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  @media (max-width: 550px) {
    width: calc(50% - 24px);
  }
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
    border-radius: 0px;
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
      flex-direction: column;
      p {
        color: white;
        margin-bottom: 0;
        display: ${(props) => (props.clientHover ? "block" : "none")};
        &.agency {
          font-size: 16px;
          line-height: 20px;
        }
        &.title {
          font-weight: 700;
        }
      }
    }
  }
  :focus {
    img {
      display: none !important;
    }
    .clientInner {
      background-color: #040234;
      p {
        display: block;
      }
    }
  }
`;

const ClientThumbWrap = ({ setViewer, client, blur, discipline }) => {
  const [clientHover, setClientHover] = useState(false);
  function handleKeyDown(e, client) {
    if (e.key === "Enter") {
      setViewer(client);
    }
  }
  return (
    <ClientThumb
      className="hover"
      key={client.id}
      onClick={() => setViewer(client)}
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
      tabIndex="0"
      role="button"
      onKeyDown={(e) => handleKeyDown(e, client)}
    >
      <div className="clientInner">
        {!clientHover && (
          <Image
            src={client.imageThumb}
            alt={client.clientName + `logo`}
            layout="fill"
          />
        )}
        <div className="clientContent">
          <>
            <p className="title">
              {client.project ? client.project : client.clientName}{" "}
            </p>
            <p className="agency">{client.project && client.clientName}</p>
          </>
        </div>
      </div>
    </ClientThumb>
  );
};

export default ClientThumbWrap;
