import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MouseCircle from "../../components/MouseCircle";
import styled from "styled-components";
import ContactBlob from "../../components/ContactBlob";

const Chaos = styled.button`
  position: fixed;
  bottom: 0;
  right: 0;
  background-color: ${(props) => (props.chaos ? "#0800C9" : "#A90000")};
  padding: 30px;
  cursor: pointer;
  color: white;
  font-size: 18px;
  border: none;
  outline: none;
  z-index: 10;
`;

const PageWrapper = styled.div`
  margin-bottom: 96px;
  @media (max-width: 900px) {
    margin-bottom: 0;
  }
`;

const DefaultLayout = ({ children }) => {
  const [chaos, setChaos] = useState(false);
  const [counter, setCounter] = useState(1);

  let theStuff = null;
  function getPlusOrMinus() {
    return Math.round(Math.random()) * 2 - 1;
  }
  function getRandomDuration() {
    return Math.random() * Math.random() * 100;
  }
  function getRandomXPosition() {
    const X = getPlusOrMinus() * Math.round(-50 + Math.random() * 1500);
    return X;
  }
  function getRandomYPosition() {
    const Y = getPlusOrMinus() * Math.round(-500 + Math.random() * 1500);
    return Y;
  }
  function getRandomRotate(max) {
    const R = getPlusOrMinus() * Math.floor(Math.random() * Math.floor(max));
    return R;
  }

  function addStyles(item) {
    item.style.transform =
      "translate3d(" +
      getRandomXPosition() +
      "px" +
      ", " +
      getRandomYPosition() +
      "px" +
      ", 0)rotate(" +
      getRandomRotate(720) +
      "deg)";
  }
  function addTime(item, time) {
    item.style.transitionDuration = time + "s";
  }

  // useEffect(() => {
  //   if (chaos) {
  //     const interval = setInterval(() => {
  //       setCounter((counter) => counter + 1);
  //     }, 1000);
  //     return () => clearInterval(interval);
  //   } else {
  //     setCounter(1);
  //   }
  // }, [chaos]);

  // useEffect(() => {
  //   theStuff = document.querySelectorAll(".floater");
  //   function isItYourTimeToChange() {
  //     const counterSeconds = counter + "s";
  //     if (counter > 1) {
  //       for (const [key, value] of Object.entries(theStuff)) {
  //         if (value.style.transitionDuration === counterSeconds) {
  //           addStyles(theStuff[key]);
  //         }
  //       }
  //     }
  //   }
  //   isItYourTimeToChange();
  // }, [counter]);

  // useEffect(() => {
  //   theStuff = document.querySelectorAll(".floater");
  //   function elementsGoWild() {
  //     for (let i = 0; i < theStuff.length; i++) {
  //       const theTimeThatControlsTheSpeed = getRandomDuration();
  //       const roundedTime = Math.round(theTimeThatControlsTheSpeed);
  //       // When the user clicks on an element
  //       theStuff[i].onclick = function () {
  //         theStuff[i].style.padding = "36px";
  //         addStyles(theStuff[i]);
  //         addTime(theStuff[i], roundedTime);
  //       };

  //       //defualt fire
  //       theStuff[i].style.padding = "36px";
  //       addStyles(theStuff[i]);
  //       addTime(theStuff[i], roundedTime);
  //     }
  //   }
  //   function elementsBackToWork() {
  //     for (let i = 0; i < theStuff.length; i++) {
  //       addStyles(theStuff[i]);
  //       theStuff[i].style.padding = "inherit";
  //       theStuff[i].style.transitionDuration = "1.2s";
  //     }
  //   }
  //   if (chaos) {
  //     elementsGoWild();
  //   } else {
  //     elementsBackToWork();
  //   }
  // }, [chaos]);

  // /// Fires on first load
  // useEffect(() => {
  //   function wrapChars(str) {
  //     // return str.replace(/\w/g, <span className="c">$&</span>);
  //     const replacement = str.replace(
  //       /./gm,
  //       "<span class=" + "floater" + ">$&</span>"
  //     );
  //     return replacement;
  //   }
  //   function wrapText() {
  //     const theTest = document.querySelectorAll(".c");

  //     for (let i = 0; i < theTest.length; i++) {
  //       const theTestSpanned = wrapChars(theTest[i].innerHTML);
  //       theTest[i].innerHTML = theTestSpanned;
  //     }
  //   }

  //   wrapText();
  // }, []);

  // useEffect(() => {
  //   theStuff = document.querySelectorAll(".floater");

  //   function initialLoadUp() {
  //     for (let i = 0; i < theStuff.length; i++) {
  //       const theTimeThatControlsTheSpeed = getRandomDuration();
  //       const roundedTime = Math.round(theTimeThatControlsTheSpeed);
  //       //defualt fire
  //       addStyles(theStuff[i]);
  //       addTime(theStuff[i], roundedTime);
  //     }
  //   }
  //   initialLoadUp();
  // }, []);

  function isTouchDevice() {
    if (typeof window !== "undefined") {
      return (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      );
    }
    return null;
  }
  useEffect(() => {
    isTouchDevice();
  }, []);
  return (
    <PageWrapper>
      <Header />
      {/* <h1>{counter}</h1> */}
      {/* <Chaos
        onClick={() => {
          setChaos((i) => !i);
        }}
        chaos={chaos}
      >
        {chaos ? "Clean up" : "Start some chaos"}
      </Chaos> */}
      <main>{children}</main>
      <Footer />

      <ContactBlob />

      {isTouchDevice && <MouseCircle />}

      {/* 
      <style jsx global>
        {`
          .floater {
            transition-duration: 1.2s;
            transition-timing-function: linear;
            cursor: ${chaos ? "pointer" : "inherit"};
            position: ${chaos ? "fixed" : "relative"};
            border: ${chaos ? "solid 6px pink" : "none"};
            border-radius: ${chaos ? "1000px" : "unset"};
          }
        `}
      </style> */}
    </PageWrapper>
  );
};

export default DefaultLayout;
