import { Flex, Box } from "reflexbox";

const Col = (props) => {
  const { children, gutter = "12", ...rest } = props;
  return (
    <Box {...rest} px={`${gutter}px`}>
      {children}
    </Box>
  );
};

const Row = (props) => {
  const { children, gutter = "-12", ...rest } = props;
  return (
    <Flex {...rest} flexWrap="wrap" mx={`${gutter}px`}>
      {children}
    </Flex>
  );
};

export { Row, Col };
