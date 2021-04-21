import { useContext, useEffect, useState, useRef } from "react";
import { Col, Row } from "../components/Grid";
import Container from "../components/Container";
import DefaultLayout from "../Layouts/DefaultLayout";
import styled from "styled-components";
import { BlobContext } from "../components/Context/BlobContext";
import MouseCircle from "../components/MouseCircle";
import Hero from "../components/Hero";
import clients from "../data";
import Button from "../components/Button";
import FlexWrapper from "../components/FlexWrapper";
import Menu from "../components/Menu";
import LogoGrid from "../components/LogoGrid";

const HomeWrap = styled(Container)`
  height: calc(100vh);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 96px;
    line-height: 84px;
    margin-bottom: 36px;
    margin-top: 240px;

    cursor: none !important;
  }
  h2 {
    font-size: 34px;
    line-height: 42px;
    .color {
      color: #0ac959;
    }
  }
  @media (max-width: 769px) {
    h1 {
      font-size: 60px;
      line-height: 60px;
      margin-bottom: 24px;
    }
    h2 {
      font-size: 24px;
      line-height: 30px;
    }
    img {
      max-width: 60px;
    }
  }
  > div {
    width: 100%;
  }
`;

const Section = styled(Container)`
  padding-top: 96px;
  padding-bottom: 96px;
  h2 {
    font-size: 72px;
    line-height: 84px;
  }
`;

const SkillsWrap = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-left: 0;
  margin-left: -6px;
  margin-right: -6px;
`;

const Skill = styled.li`
  padding: 6px;
  line-height: 16px;
  font-size: 16px;
  color: #fafaed;
  background-color: #252529;
  color: white;
  margin: 4px;
`;

const HomePage = () => {
  const { setContact, setContactTextSource } = useContext(BlobContext);
  const [showdef, setShowDef] = useState(false);
  const [mouseX, setMouseX] = useState(null);
  const [mouseY, setMouseY] = useState(null);
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
    cricleRef.current.style.transform = `translate3d( ${mouseX}px, ${mouseY}px, 0) `;
  }, [mouseX, mouseY]);

  return (
    <>
      <DefaultLayout>
        {isTouchDevice && (
          <MouseCircle cricleRef={cricleRef} showdef={showdef} />
        )}
        <HomeWrap>
          <Hero
            showdef={showdef}
            setShowDef={setShowDef}
            desRef={desRef}
            devRef={devRef}
          />
        </HomeWrap>
        <Section ref={workRef}>
          <Row>
            <Col width={[1, 1 / 2, 1 / 2]}>
              <h2>My Work</h2>
              <p>
                Currently, I am leading the UX/UI design and Front End in a team
                supporting a government-funded COVID response in the Education
                sector(Oak National Academy). Being the first designer and the
                first developer on the project my dual passions allowed us to
                put the first product out within 7 days of the first square
                drawn in Figma. Since then, our small but gloriously talented
                team has scaled to creating 3 apps welcoming 3 million users
                learning from home per week using over 10,000 lessons.
                <br />
                Previously to Oak I was working at Pentlands Brands innovation
                lab leading there UX/UI department. I have headed up digital
                design at a ed-tech startup, a corn company, contracted at many
                many agencies, still run my own design studio (putty.studio).
                And before that I was a full time DJ and mechanical engineer.
              </p>
            </Col>
            <Col
              width={[1, 1 / 2, 1 / 2]}
              style={{ display: `flex`, justifyContent: `flex-end` }}
            >
              <Menu
                mouseX={mouseX}
                mouseY={mouseY}
                desRef={desRef}
                devRef={devRef}
                workRef={workRef}
              />
            </Col>
            <Col width={[1]}></Col>
          </Row>
        </Section>
        <Section ref={desRef}>
          <Row>
            <Col width={[1, 1 / 2, 1 / 2]}>
              <Menu
                mouseX={mouseX}
                mouseY={mouseY}
                left={true}
                desRef={desRef}
                devRef={devRef}
                workRef={workRef}
              />
            </Col>
            <Col width={[1, 1 / 2, 1 / 2]}>
              <h2>Designer</h2>
              <p>
                My one true love is design, I love to learn and implement new
                practises in the world of UX adding value to users and stake
                holders alike.
              </p>
              <h3>Well Practised in:</h3>
              <SkillsWrap>
                {desExp.map((exp) => (
                  <Skill key={exp}>{exp}</Skill>
                ))}
              </SkillsWrap>
              <h3>Love using:</h3>
              <SkillsWrap>
                {desSkill.map((exp) => (
                  <Skill key={exp}>{exp}</Skill>
                ))}
              </SkillsWrap>
            </Col>
            <Col width={[1]}>
              <h3 style={{ textAlign: `center`, margin: `72px 0 24px 0` }}>
                Notable design projects:
              </h3>
              <LogoGrid
                clients={clients}
                mouseX={mouseX}
                mouseY={mouseY}
                type="designer"
                mt="0px"
              />
              <FlexWrapper justify="center">
                <Button>Request Portfolio</Button>
              </FlexWrapper>
            </Col>
          </Row>
        </Section>
        <Section ref={devRef}>
          <Row>
            <Col width={[1, 1 / 2, 1 / 2]}>
              <h2>Developer</h2>
              <p>
                I have produced and worked on production sites using with
                WordPress and JS frame works. I'm most comfy sitting on the
                front end making things pixel perfect. At the moment I favour
                working with Next.JS.
              </p>
              <h3>Experience with:</h3>
              <SkillsWrap>
                {devExp.map((exp) => (
                  <Skill key={exp}>{exp}</Skill>
                ))}
              </SkillsWrap>
            </Col>
            <Col width={[1]}>
              <h3 style={{ textAlign: `center`, margin: `72px 0 24px 0` }}>
                Notable dev projects:
              </h3>
              <LogoGrid
                clients={clients}
                mouseX={mouseX}
                mouseY={mouseY}
                type="developer"
                mt="0px"
              />
            </Col>
            <Col width={[1]}>
              <FlexWrapper justify="center">
                <Button>Request Portfolio</Button>
              </FlexWrapper>
            </Col>
          </Row>
        </Section>
        {/* <Section >
          <p>{inView.toString()}</p>
        </Section> */}
      </DefaultLayout>
    </>
  );
};

export default HomePage;
