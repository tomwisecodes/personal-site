import { useContext, useEffect, useState, useRef } from "react";
import { Col, Row } from "../components/Grid";
import Container from "../components/Container";
import DefaultLayout from "../Layouts/DefaultLayout";
import styled from "styled-components";
import Link from "next/link";
import { BlobContext } from "../components/Context/BlobContext";
import MouseCircle from "../components/MouseCircle";
import Hero from "../components/Hero";
import clients from "../data";
import Image from "next/image";

const HomeWrap = styled(Container)`
  height: calc(100vh - 144px);
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
    font-size: 60px;
    line-height: 84px;
  }
`;

const ImageWrap = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
`;
const LogoContain = styled.div`
  display: flex;
  flex-wrap: wrap;
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
const MenuOuter = styled.div`
  width: 66%;
  height: unset;
`;
const MenuWrap = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: #252529;
  padding: 24px;
  border-radius: 12px;

  button,
  a {
    color: #fafaed;
    width: unset;
    font-size: 30px;
    line-height: 30px;
    padding: 6px 12px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    :last-child {
      margin-bottom: 0;
    }
  }
  p {
    color: #fafaed;
    font-size: 24px;
    padding-left: 12px;
  }
`;

const LogoGrid = ({ type }) => {
  const designerCli = clients.filter((_) => _.ux || _.graphic);
  const devCli = clients.filter((_) => _.dev);
  const selectedClients = type === "designer" ? designerCli : devCli;
  return (
    <LogoContain>
      {selectedClients.map((client) => (
        <ImageWrap key={client.id}>
          <Image
            src={client.imageThumb}
            alt={client.clientName + `logo`}
            layout="fill"
          />
        </ImageWrap>
      ))}
    </LogoContain>
  );
};

const Menu = () => {
  return (
    <MenuOuter>
      <MenuWrap>
        <p>Menu</p>
        <li>
          <button>My Work</button>
        </li>
        <li>
          <button>Designer</button>
        </li>
        <li>
          <button>Developer</button>
        </li>
        <li>
          <button>Bio</button>
        </li>
      </MenuWrap>
    </MenuOuter>
  );
};

const HomePage = () => {
  const { setContact, setContactTextSource } = useContext(BlobContext);
  const [showdef, setShowDef] = useState(false);
  const desRef = useRef();
  const devRef = useRef();
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
    <>
      <DefaultLayout>
        {isTouchDevice && <MouseCircle showdef={showdef} />}
        <HomeWrap>
          <Hero
            showdef={showdef}
            setShowDef={setShowDef}
            desRef={desRef}
            devRef={devRef}
          />
        </HomeWrap>
        {/* <Section>
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
              <Menu />
            </Col>
            <Col width={[1]}></Col>
          </Row>
        </Section>
        <Section ref={desRef}>
          <Row>
            <Col width={[1, 1 / 2, 1 / 2]}>
              <LogoGrid clients={clients} type="designer" />
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
                <Skill>Design Thinking</Skill>
                <Skill>User Centered Design</Skill>
                <Skill>Building Design Systems</Skill>
                <Skill>Qualative User Research</Skill>
                <Skill>Usability Testing</Skill>
                <Skill>Building Personas</Skill>
                <Skill>Quantitative Research</Skill>
                <Skill>A/B Testing</Skill>
                <Skill>Wireframing</Skill>
                <Skill>UI design</Skill>
                <Skill>Branding</Skill>
              </SkillsWrap>
              <h3>Love using:</h3>
              <SkillsWrap>
                <Skill>Figma</Skill>
                <Skill>FramrX</Skill>
                <Skill>Full Adobe suite</Skill>
                <Skill>Sketch</Skill>
                <Skill>Google Analytics</Skill>
                <Skill>Google Optimize</Skill>
                <Skill>MixPanel</Skill>
                <Skill>HotJar</Skill>
              </SkillsWrap>
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
                <Skill>Next.js</Skill>
                <Skill>Gatsby</Skill>
                <Skill>React.js</Skill>
                <Skill>Vercel</Skill>
                <Skill>GraphQL</Skill>
                <Skill>StoryBook</Skill>
                <Skill>Github</Skill>
                <Skill>WordPress</Skill>
                <Skill>mySQL</Skill>
                <Skill>deployHQ</Skill>
                <Skill>bitBucket</Skill>
              </SkillsWrap>
            </Col>
            <Col width={[1, 1 / 2, 1 / 2]}>
              <LogoGrid type="developer" clients={clients} />
            </Col>
          </Row>
        </Section> */}
      </DefaultLayout>
    </>
  );
};

export default HomePage;
