import { useState } from "react";
import DefaultLayout from "../../Layouts/DefaultLayout";
import { Col, Row } from "../../components/Grid";
import Container from "../../components/Container";
import FlexWrapper from "../../components/FlexWrapper";
import styled, { keyframes } from "styled-components";

const BackgroundAcross = keyframes`
  0% {
    width: 0;
  } 100% {
    width: 100%;
  }
`;

const FilterWorkBg = styled.div``;

const FilterWork = styled.button`
  background-color: transparent;
  border: none;
  text-align: left;
  font-size: 36px;
  line-height: 36px;
  padding: 12px 0;
  font-family: Rigton-SemiBold;
  color: #0800c9;
  position: relative;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  :hover {
    padding: 12px;
    color: white;
    transition-delay: 0.3s;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    ::after {
      background-color: #0800c9;
      animation: ${BackgroundAcross} 0.4s ease-in-out forwards;
    }
  }
  :focus {
    padding: 12px;
    color: white;
    background-color: #0800c9;
  }
`;

const Work = () => {
  const [discipline, setDiscipline] = useState(null);
  return (
    <DefaultLayout>
      <Container>
        <Row>
          <Col width={[1]}>
            <h1
              style={{
                fontSize: `18px`,
                lineHeight: `18px`,
                textAlign: `center`,
              }}
            >
              A page of my Work
            </h1>
          </Col>
        </Row>
        <Row>
          <Col width={[1, 1 / 2, 1 / 2]}>
            <p
              style={{
                fontSize: `36px`,
                fontFamily: `Rigton-Book`,
                marginBottom: `24px`,
              }}
            >
              I am a:
            </p>
            <FlexWrapper direction="column">
              <FilterWorkBg order={1}>
                <FilterWork onClick={() => setDiscipline("ux")}>
                  UX Designer
                </FilterWork>
              </FilterWorkBg>
              <FilterWorkBg order={2}>
                <FilterWork onClick={() => setDiscipline("graph")}>
                  Graphic Designer
                </FilterWork>
              </FilterWorkBg>
              <FilterWorkBg order={3}>
                <FilterWork onClick={() => setDiscipline("dev")}>
                  Developer
                </FilterWork>
              </FilterWorkBg>
            </FlexWrapper>
          </Col>
          <Col width={[1, 1 / 2, 1 / 2]}>{discipline}</Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default Work;
