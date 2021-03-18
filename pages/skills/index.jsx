import DefaultLayout from "../../Layouts/DefaultLayout";
import { Row, Col } from "../../components/Grid";
import PageTitle from "../../components/PageTitle";
import styled from "styled-components";
import Container from "../../components/Container";

const SpaceBetween = styled(Row)`
  justify-content: space-between;
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
  background-color: #0800c9;
  color: white;
  margin: 4px;
`;

const TechPage = () => {
  return (
    <DefaultLayout>
      <Container>
        <PageTitle title="skills" />
        <SpaceBetween style={{ marginTop: `72px` }}>
          <Col width={[1, 1, 5 / 12]}>
            <h2>Code</h2>
            <p>
              I have produced and worked on production sites using with php and
              JS frame works. At the moment I favour working with Next.JS.
              <br />
              This is a Next app.
            </p>
            <h3>Experienced Working with:</h3>
            <SkillsWrap>
              <Skill>Next.js</Skill>
              <Skill>Gatsby</Skill>
              <Skill>React.js</Skill>
              <Skill>Vercel</Skill>
              <Skill>GraphQL</Skill>
              <Skill>Reddis</Skill>
              <Skill>StoryBook</Skill>
              <Skill>Github</Skill>
              <Skill>WordPress</Skill>
              <Skill>mySQL</Skill>
              <Skill>deployHQ</Skill>
              <Skill>bitBucket</Skill>
            </SkillsWrap>
          </Col>
          <Col width={[1, 1, 5 / 12]}>
            <h2>Design</h2>
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
        </SpaceBetween>
      </Container>
    </DefaultLayout>
  );
};

export default TechPage;
