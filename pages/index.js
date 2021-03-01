import { Col, Row } from "../components/Grid";
import Container from "../components/Container";
import DefaultLayout from "../Layouts/DefaultLayout";
import styled from "styled-components";
import Link from "next/Link";

const HomeWrap = styled(Container)`
  height: calc(100vh - 144px);
  display: flex;
  align-items: center;
  justify-content: center;
  h1,
  h2 {
    font-size: 36px;
    color: #040234;
    font-family: Rigton-Medium, sans-serif;
  }
`;
const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 370px;
  margin: auto;
  margin-top: 12px;
  a {
    cursor: pointer;
    font-size: 30px;
    color: #0800c9;
    text-decoration: underline;
    span {
      cursor: pointer;
      font-size: 30px;
      color: #0800c9;
      text-decoration: underline;
    }
  }
`;

const HomePage = () => {
  return (
    <>
      <DefaultLayout>
        <HomeWrap>
          <Row>
            <Col width={[1]}>
              <h1 style={{ textAlign: `center` }} className="c">
                👋 I’m a UX
              </h1>
              <h2 style={{ textAlign: `center` }} className="c">
                Designer + Developer
              </h2>
            </Col>
            <Col width={[1]}>
              <LinksWrapper>
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
            </Col>
          </Row>
        </HomeWrap>
      </DefaultLayout>
    </>
  );
};

// const getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;
// HomePage.getLayout = getLayout;

export default HomePage;
