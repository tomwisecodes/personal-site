import styled from "styled-components";
import Link from "next/Link";

const Logo = styled.h3`
  color: #0800c9;
  font-size: 24px;
  line-height: 24px;
  margin-bottom: 0;
  font-family: Rigton-Medium;
  span {
    color: #0800c9;
  }
`;

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 72px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FixHeaderHeight = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin-top: 72px;
`;

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <Link href="/">
          <a>
            <Logo className="c">tom wise</Logo>
          </a>
        </Link>
      </HeaderWrapper>
      <FixHeaderHeight />
    </>
  );
};

export default Header;
