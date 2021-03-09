import DefaultLayout from "../../Layouts/DefaultLayout";
import { Row, Col } from "../../components/Grid";
import PageTitle from "../../components/PageTitle";
import styled from "styled-components";
import Container from "../../components/Container";

const SpaceBetween = styled(Row)`
  justify-content: space-between;
`;

const TechPage = () => {
  return (
    <DefaultLayout>
      <Container>
        <PageTitle title="tech stack" />
        <SpaceBetween style={{ marginTop: `72px` }}>
          <Col width={[1, 1, 5 / 12]}>
            <h2>Code</h2>
            <p>
              I have produced and worked on production sites using with php and
              JS frame works.
            </p>
            <h3>Preferred JS Stack</h3>
            <ul>
              <li>Next.js</li>
              <li>Vercel</li>
              <li>GraphQL</li>
              <li>Reddis</li>
              <li>StoryBook</li>
              <li>Github</li>
            </ul>
            <h3>Preferred PHP Stack</h3>
            <ul>
              <li>WordPress</li>
              <li>mySQL</li>
              <li>deployHQ</li>
              <li>bitBucket</li>
            </ul>
          </Col>
          <Col width={[1, 1, 5 / 12]}>
            <h2>Design</h2>
            <p>
              I have a comprehensive understanding in all major design tools, my
              current preferred tools are Figma and InVison Studio for
              prototyping and producing design systems.
            </p>
          </Col>
        </SpaceBetween>
      </Container>
    </DefaultLayout>
  );
};

export default TechPage;
