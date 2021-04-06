import { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const hover = keyframes`
  0% { 
    top: -25px;
  left: -25px;
  width: 50px;
  height: 50px;
  }
  100% {
    top: -40px;
  left: -40px;
  width: 80px;
  height: 80px;
  border: 5px solid #18922B;
  }
`;

const Circle = styled.div`
  position: absolute;

  background-color: transparent;
  cursor: none !important;
  top: -240px;
  left: 0px;
  max-width: 396px;
  margin-right: 24px;
  padding: 24px;
  visibility: ${(props) => (props.showdef ? "visible" : "hidden")};

  transition-duration: ${(props) => (props.showdef ? "0" : "0.3s")};
  pointer-events: none;
  ::before {
    background-color: #252529;
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: ${(props) => (props.showdef ? "100%" : "0px")};
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    z-index: -1;
    border: ${(props) => (props.showdef ? "4px solid #fafaed" : "none")};
  }
  * {
    color: #fafaed;
  }
  p {
    font-size: 18px;
    line-height: 24px;
    opacity: ${(props) => (props.showdef ? 1 : 0)};
    transition-duration: 0.3s;
    transition-delay: 0.5s;
    transition-timing-function: ease-in-out;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;
const Label = styled.p`
  font-family: Rigton-semiBold, serif;
  font-family: 20px;
  :first-child {
    margin-bottom: 0;
  }
`;
const Source = styled.p`
  font-size: 14px;
  font-style: italic;
`;

const MouseCircle = ({ showdef }) => {
  const cricleRef = useRef();
  const [mouseX, setMouseX] = useState(null);
  const [mouseY, setMouseY] = useState(null);
  const [mouseMove, setMouseMove] = useState(null);
  const [linkHovered, setLinkHovered] = useState(false);

  const handleLinkHoverEvents = () => {
    document.querySelectorAll("a").forEach((el) => {
      el.addEventListener("mouseover", () => setLinkHovered(true));
      el.addEventListener("mouseout", () => setLinkHovered(false));
    });
    document.querySelectorAll("button", ".hover").forEach((el) => {
      el.addEventListener("mouseover", () => setLinkHovered(true));
      el.addEventListener("mouseout", () => setLinkHovered(false));
    });
  };

  useEffect(() => {
    if (window === "undefined") {
      return null;
    }
    const setFromEvent = (e) => {
      setMouseX(e.pageX);
      setMouseY(e.pageY);
    };
    const mouseMoving = () => {
      setMouseMove(true);
    };

    handleLinkHoverEvents();

    window.addEventListener("mousemove", setFromEvent);
    // window.addEventListener("mousemove", mouseMoving);
    // window.addEventListener("mousemove", mouseTrail);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  useEffect(() => {
    cricleRef.current.style.transform = `translate3d( ${mouseX}px, ${mouseY}px, 0) `;
  }, [mouseX, mouseY]);

  return (
    <>
      <Circle ref={cricleRef} showdef={showdef}>
        <Label>"UX Unicorn"</Label>
        <Label>noun</Label>
        <p>
          Mythical user experience designer with an advanced and adaptive skill
          range. Outstanding skills in graphic design, rapid prototyping, front
          end development, user testing, technical specifications, marketing and
          branding.
        </p>
        <Source>Source: uxunicorn.com</Source>
      </Circle>
    </>
  );
};

export default MouseCircle;
