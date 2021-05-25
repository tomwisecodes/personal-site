import { useContext } from "react";
import { Col, Row } from "../Grid";
import DesktopMenu from "../Menu/desktopMenu";
import styled from "styled-components";
import FlexWrapper from "../FlexWrapper";
import LogoGrid from "../LogoGrid";
import Button from "../Button";
import Container from "../Container";
import { BlobContext } from "../Context/BlobContext";
import SectionTitle from "../SectionTitle";
const Section = styled(Container)`
  padding-top: 96px;
  padding-bottom: 96px;
  p.statement {
    font-size: 36px;
    line-height: 42px;
    margin-bottom: 36px;
  }
  h3 {
    font-size: 24px;
  }
  align-items: center;
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

const RowController = styled(Row)`
  flex-direction: ${(props) => (props.swap ? "row-reverse" : "row")};
`;

const SkillSection = ({
  mouseX,
  mouseY,
  desRef,
  devRef,
  workRef,
  desExp,
  devExp,
  desSkill,
  clients,
  skill,
}) => {
  const { setContactTextSource } = useContext(BlobContext);
  const info =
    skill === "design"
      ? {
          ref: desRef,
          title: "Designer",
          statement:
            " My one true love is design, I love to learn and implement new practises in the world of UX adding value to users and stake holders alike.",
          exp: desExp,
          type: "designer",
          menuLeft: true,
        }
      : {
          ref: devRef,
          title: "Developer",
          statement:
            "I have produced and worked on production sites using with WordPress and JS frame works. I'm most comfy sitting on the front end making things pixel perfect. At the moment I favour working with Next.JS.",
          exp: devExp,
          type: "developer",
          menuLeft: false,
        };

  return (
    <Section ref={info.ref}>
      <RowController swap={info.type === "developer"}>
        <SectionTitle title={info.title} />
        <Col width={[1, 1 / 2, 1 / 2]}>
          <DesktopMenu
            mouseX={mouseX}
            mouseY={mouseY}
            left={info.menuLeft}
            desRef={desRef}
            devRef={devRef}
            workRef={workRef}
          />
        </Col>
        <Col width={[1, 1 / 2, 1 / 2]}>
          <p className="statement">{info.statement}</p>
          <h3>Well Practised in:</h3>
          <SkillsWrap>
            {info.exp.map((exp) => (
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
            type={info.type}
            mt="0px"
          />
          <FlexWrapper justify="center">
            <Button onClick={() => setContactTextSource("portfolio")}>
              Request Portfolio
            </Button>
          </FlexWrapper>
        </Col>
      </RowController>
    </Section>
  );
};

export default SkillSection;
