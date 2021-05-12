// styled-components example
import styled from "styled-components";
import { Box } from "reflexbox";

const Container = styled(Box)`
  max-width: 1020px;
  padding-left: 6px;
  padding-right: 6px;
  @media (max-width: 769px) {
    padding-left: 12px;
    padding-right: 12px;
  }
`;

Container.defaultProps = {
  mx: "auto",
};

export default Container;
