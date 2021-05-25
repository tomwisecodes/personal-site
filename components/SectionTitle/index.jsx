import { Col } from "../Grid";
import styled from "styled-components";
const Title = styled.h2`
  font-size: 24px;
  line-height: 24px;
  text-align: center;
  padding-bottom: 24px;
  margin-bottom: 60px;
  text-align: center;
  border-bottom: black solid 1px;
`;

const SectionTitle = ({ title }) => {
  return (
    <Col width={[1]}>
      <Title>{title}</Title>
    </Col>
  );
};

export default SectionTitle;
