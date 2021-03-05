import FlexWrapper from "../FlexWrapper";
import { ArrowDown } from "react-ikonate";
import { Col, Row } from "../Grid";
import styled from "styled-components";

const MobileOverRide = styled(FlexWrapper)`
  @media (max-width: 769px) {
    align-items: flex-start;
    padding-left: 6px;
    margin-top: 6px;
  }
`;

const PageTitle = ({ title }) => {
  return (
    <Row>
      <Col width={[1]}>
        <MobileOverRide direction="column" justify="center" align="center">
          <h1
            style={{
              fontSize: `18px`,
              lineHeight: `18px`,
              textAlign: `center`,
              color: `#040234`,
              marginBottom: `0`,
            }}
          >
            {title}
          </h1>
          <ArrowDown style={{ width: `18px`, height: `18px` }} />
        </MobileOverRide>
      </Col>
    </Row>
  );
};

export default PageTitle;
