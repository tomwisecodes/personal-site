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
  top: -15px;
  left: -15px;
  width: 30px;
  height: 30px;
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
    // window.addEventListener("mousemove", mouseMoving);
    // window.addEventListener("mousemove", mouseTrail);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  useEffect(() => {
    cricleRef.current.style.transform = `translate3d( ${mouseX}px, ${mouseY}px, 0) `;
  }, [mouseX, mouseY]);

  // const dots = [];
  // const classNames = ["square", "circle", "triangle", "dimaond", "square"];
  // const colours = ["#0800C9", "#5859cc", "#0ac959", "#c92014", "#c9ab14"];
  // for (let i = 0; i < 8; i++) {
  //   const node = document.createElement("div");
  //   const theClass = classNames[Math.floor(Math.random() * classNames.length)];
  //   node.className = theClass;
  //   document.body.appendChild(node);
  //   dots.push(node);
  // }
  // let currentDot = 0;

  // function mouseTrail(event) {
  //   const dot = dots[currentDot];
  //   const theColour = colours[Math.floor(Math.random() * colours.length)];
  //   const min = -5;
  //   const max = 5;
  //   const minHue = -30;
  //   const maxHue = 30;
  //   const random = Math.floor(Math.random() * (+max - +min)) + +min;
  //   const randomHue = Math.floor(Math.random() * (+maxHue - +minHue)) + +minHue;
  //   if (dot.classList.value !== "triangle") {
  //     dot.style.backgroundColor = theColour;
  //   } else {
  //     dot.style.borderTopColor = theColour;
  //     dot.style.transform = "rotate(" + Math.random() * 360 + "deg)";
  //   }
  //   dot.style.filter = "hue-rotate(" + randomHue + "deg)";
  //   dot.style.display = "block";
  //   dot.style.left = event.pageX + random + "px";
  //   dot.style.top = event.pageY + random + "px";
  //   dot.style.opacity = "0";
  //   dot.style.animationName = "fader";
  //   dot.style.animationDuration = "2000ms";
  //   dot.style.animationFillMode = "forwards";
  //   setTimeout(function () {
  //     dot.style.animationName = "unset";
  //   }, 800);

  //   currentDot = (currentDot + 1) % dots.length;
  // }

  return (
    <>
      <Circle ref={cricleRef} linkHovered={linkHovered} />
      <style jsx global>
        {`
          @keyframes fader {
            0 {
              opacity: 1;
            }
            99% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }
          .square {
            /* className for trail elements */
            position: absolute;
            height: 12px;
            width: 12px;
            -webkit-backface-visibility: hidden; /* Safari */
            backface-visibility: hidden;

            z-index: -1;
          }

          .circle {
            /* className for trail elements */
            position: absolute;
            height: 16px;
            width: 16px;
            border-radius: 300px;
            -webkit-backface-visibility: hidden; /* Safari */
            backface-visibility: hidden;

            z-index: -1;
          }
          .triangle {
            /* className for trail elements */
            position: absolute;
            width: 0px;
            border: 12px solid;
            border-top-color: transparent;
            border-left-color: transparent;
            border-right-color: transparent;
            border-bottom-color: transparent;
            -webkit-backface-visibility: hidden; /* Safari */
            backface-visibility: hidden;

            z-index: -1;
          }
          .dimaond {
            /* className for trail elements */
            position: absolute;
            height: 16px;
            width: 16px;
            transform: rotate(45deg);
            -webkit-backface-visibility: hidden; /* Safari */
            backface-visibility: hidden;

            z-index: -1;
          }
        `}
      </style>
    </>
  );
};

export default MouseCircle;
