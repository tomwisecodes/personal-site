// styled-components example
import styled from "styled-components";
import { Box } from "reflexbox";

const Container = styled(Box)`
  max-width: 1020px;
`;

Container.defaultProps = {
  mx: "auto",
};

export default Container;
