import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-wrap: ${(props) => (props.wrap ? "wrap" : "unset")};
  justify-content: ${(props) => (props.justify ? props.justify : "unset")};
  align-items: ${(props) => (props.align ? props.align : "unset")};
  flex-direction: ${(props) => (props.direction ? props.direction : "unset")};
  width: ${(props) => (props.width ? props.width + "%" : "unset")};
  > * {
    margin-right: ${(props) => {
      if (!props.width) {
        return props.childrenMarginRight ? props.childrenMarginRight : "unset";
      }
      return "0px";
    }};

    :last-child {
      margin-right: 0;
    }
  }
`;

const FlexWrapper = ({
  children,
  className,
  wrap,
  justify,
  direction,
  align,
  childrenMarginRight,
  width,
}) => {
  const style = {
    wrap,
    justify,
    direction,
    align,
    childrenMarginRight,
    width,
  };
  return (
    <Flex {...style} className={className}>
      {children}
    </Flex>
  );
};

export default FlexWrapper;
