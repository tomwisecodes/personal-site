import { useEffect, useState, useRef } from "react";
import { Col, Row } from "../components/Grid";
import Container from "../components/Container";
import DefaultLayout from "../Layouts/DefaultLayout";
import styled from "styled-components";
import MouseCircle from "../components/MouseCircle";
import Hero from "../components/Hero";
import clients from "../data";
import MobileMenu from "../components/Menu/mobileMenu";
import FirstLoad from "../components/FirstLoad";
import SkillSection from "../components/SkillSection";

const Section = styled(Container)`
  padding-top: 96px;
  padding-bottom: 96px;
  align-items: center;
`;

const Statment = styled.p`
  font-size: 36px;
  line-height: 42px;
  max-width: 760px;
  margin-bottom: 10vh;
`;

const HomePage = () => {
  const [showdef, setShowDef] = useState(false);
  const [mouseX, setMouseX] = useState(null);
  const [mouseY, setMouseY] = useState(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [display, setDisplay] = useState(true);
  const desRef = useRef();
  const devRef = useRef();
  const workRef = useRef();
  const cricleRef = useRef();
  const devExp = [
    "Next.js",
    "Gatsby",
    "React.js",
    "Vercel",
    "GraphQL",
    "StoryBook",
    "Github",
    "WordPress",
    "mySQL",
    "deployHQ",
    "bitBucket",
  ];
  const desSkill = [
    "Figma",
    "FramrX",
    "Full Adobe suite",
    "Sketch",
    "Google Analytics",
    "Google Optimize",
    "MixPanel",
    "HotJar",
  ];
  const desExp = [
    "Design Thinking",
    "User Centered Design",
    "Building Design Systems",
    "Qualative User Research",
    "Usability Testing",
    "Building Personas",
    "Quantitative Research",
    "A/B Testing",
    "Wireframing",
    "UI design",
    "Branding",
  ];

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
  useEffect(() => {
    if (window === "undefined") {
      return null;
    }
    const setFromEvent = (e) => {
      setMouseX(e.pageX);
      setMouseY(e.pageY);
    };
    window.addEventListener("mousemove", setFromEvent);
    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);
  useEffect(() => {
    if (isTouchDevice() === false) {
      cricleRef.current.style.transform = `translate3d( ${mouseX}px, ${mouseY}px, 0)`;
    }
  }, [mouseX, mouseY]);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setDisplay(!!(prevScrollPos > currentScrollPos || currentScrollPos < 100));
    setPrevScrollPos(currentScrollPos);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, display, handleScroll]);

  return (
    <>
      <FirstLoad />
      <DefaultLayout display={!!display}>
        <Hero
          showdef={showdef}
          setShowDef={setShowDef}
          desRef={desRef}
          devRef={devRef}
          isTouchDevice={isTouchDevice}
        />
        <Section>
          <Row>
            <Col width={[1]}>
              <Statment>
                I sepcialise in UX design, building design systems, designing
                UI’s and building UI’s. I'm an seasoned front-end developer and
                have plenty of experience conducting user research.{" "}
              </Statment>
            </Col>
          </Row>
        </Section>
        {/* <SkillSection
          skill="design"
          desRef={desRef}
          clients={clients}
          mouseX={mouseX}
          mouseY={mouseY}
          desRef={desRef}
          devRef={devRef}
          workRef={workRef}
          devExp={devExp}
          desSkill={desSkill}
          desExp={desExp}
          clients={clients}
        />
        <SkillSection
          skill="developer"
          desRef={desRef}
          clients={clients}
          mouseX={mouseX}
          mouseY={mouseY}
          desRef={desRef}
          devRef={devRef}
          workRef={workRef}
          devExp={devExp}
          desSkill={desSkill}
          desExp={desExp}
          clients={clients}
        /> */}

        {/* <Section ref={workRef} black={true}>
          <Row>
            <Col width={[1]}>
              <h2>My Work</h2>
              <p>
                Currently, I am leading the UX, design and Front End in a team
                supporting a government-funded COVID response in the Education
                sector (
                <a
                  href="https://thenational.academy"
                  target="_blank"
                  style={{ color: `#B30DC4` }}
                >
                  Oak National Academy
                </a>
                ). Being the first designer and the first developer on the
                project my dual passions allowed us to put the first product out
                within 7 days of the first square drawn in Figma. Since then,
                our small but gloriously talented team has scaled to creating 3
                apps welcoming 3 million users learning from home per week using
                over 10,000 lessons.
                <br />
                <br />
                Previously to Oak I was working at Pentlands Brands innovation
                lab leading there UX/UI department. I have headed up digital
                design at a ed-tech startup, a corn company, contracted at many
                many agencies, still run my own design studio (putty.studio).
                And before that I was a full time DJ and mechanical engineer.
              </p>
            </Col>

            <Col width={[1]}></Col>
          </Row>
        </Section> */}
        {/* <Section >
          <p>{inView.toString()}</p>
        </Section> */}
        {isTouchDevice && (
          <MouseCircle
            cricleRef={cricleRef}
            showdef={showdef}
            setShowDef={setShowDef}
            isTouchDevice={isTouchDevice}
          />
        )}
        <MobileMenu
          workRef={workRef}
          desRef={desRef}
          devRef={devRef}
          display={display}
        />
      </DefaultLayout>
    </>
  );
};

export default HomePage;
