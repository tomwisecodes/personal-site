import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  > * {
    margin-right: 12px;
    :last-child {
      margin-right: 0;
    }
  }
`;

const BtnWrap = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};

export default BtnWrap;
