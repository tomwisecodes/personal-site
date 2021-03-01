import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const Circle = styled.div`
  position: fixed;
  border-radius: 50%;
  border: 2px solid #040234;
  transition: opacity 0.3s ease 0s;
  top: -30px;
  left: -30px;
  width: 60px;
  height: 60px;
  margin-right: 24px;
  backface-visibility: hidden;
  pointer-events: none;
`;

const MouseCircle = () => {
  const cricleRef = useRef();
  const [mouseX, setMouseX] = useState(null);
  const [mouseY, setMouseY] = useState(null);
  const [mouseMove, setMouseMove] = useState(null);
  useEffect(() => {
    const setFromEvent = (e) => {
      setMouseX(e.pageX);
      setMouseY(e.pageY);
    };
    const mouseMoving = () => {
      setMouseMove(true);
    };

    window.addEventListener("mousemove", setFromEvent);
    window.addEventListener("mousemove", mouseMoving);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  useEffect(() => {
    cricleRef.current.style.transform = `translate3d( ${mouseX}px, ${mouseY}px, 0) `;
  }, [mouseX]);
  return <Circle ref={cricleRef} />;
};

export default MouseCircle;
