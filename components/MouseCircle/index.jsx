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
  border-radius: 50%;
  border: 2px solid #040234;
  transition: opacity 0.3s ease 0s;
  top: -25px;
  left: -25px;
  width: 50px;
  height: 50px;
  margin-right: 24px;
  backface-visibility: hidden;
  pointer-events: none;
  z-index: 9999;
  animation: ${(props) => (props.linkHovered ? hover : "unset")};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  @media (max-width: 900px) {
    display: none;
  }
`;

const MouseCircle = () => {
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
    window.addEventListener("mousemove", mouseMoving);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  useEffect(() => {
    cricleRef.current.style.transform = `translate3d( ${mouseX}px, ${mouseY}px, 0) `;
  }, [mouseX, mouseY]);
  return <Circle ref={cricleRef} linkHovered={linkHovered} />;
};

export default MouseCircle;
