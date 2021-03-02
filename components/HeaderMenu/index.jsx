import Link from "next/Link";
import FlexWrapper from "../FlexWrapper";
import styled from "styled-components";

const LinksWrapper = styled(FlexWrapper)`
  position: absolute;
  right: 24px;
  height: 100%;
  display: flex;
  align-items: center;
  a {
    cursor: pointer;
    font-size: 22px;
    color: #0800c9;
    :hover {
      text-decoration: underline;
    }
  }
`;

const HeaderMenu = () => {
  return (
    <LinksWrapper justify="space-around" childrenMarginRight="12px">
      <Link href="/bio">
        <a className="c">bio</a>
      </Link>
      <Link href="/work" className="c">
        <a className="c">work</a>
      </Link>
      <Link href="/contact">
        <a className="c">contact</a>
      </Link>
    </LinksWrapper>
  );
};

export default HeaderMenu;
