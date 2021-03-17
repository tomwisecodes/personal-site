import { useContext } from "react";
import { Col, Row } from "../components/Grid";
import Container from "../components/Container";
import DefaultLayout from "../Layouts/DefaultLayout";
import styled from "styled-components";
import Link from "next/link";
import { BlobContext } from "../components/Context/BlobContext";
import Emoji from "react-apple-emojis";

const HomeWrap = styled(Container)`
  height: calc(100vh - 144px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 48px;
    color: #080559;
    font-family: Rigton-Medium, sans-serif;
  }
  h1 {
    font-size: 72px;
    line-height: 84px;
    color: #080559;
    font-family: Rigton-Medium, sans-serif;
  }
`;

const RedSpan = styled.span`
  color: #c92014;
`;

const LinksWrapper = styled.div`
  display: flex;
  width: 100%;
  .green {
    background-color: #0ac959;
    color: #080559;
  }
  .purple {
    background-color: #5859cc;
    color: #ffffff;
  }
  .red {
    background-color: #c92014;
    color: #ffffff;
  }
  .yellow {
    background-color: #c9ab14;
    color: #080559;
  }
  > a,
  > button {
    width: 25%;
    padding: 60px 0;
    text-align: center;
    outline: none;
    border: 0;
    font-size: 20px;
    transition-duration: 0.4s;
    transition-timing-function: ease-in-out;
    cursor: pointer;
    :hover {
      background-color: #0800c9;
      color: #f8f8f8;
    }
  }
`;
const StyledRow = styled(Row)`
  width: 100%;
  padding-left: 24px;
  padding-right: 24px;
  @media (max-width: 1018px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

const ContactButton = styled.button``;

const HomePage = () => {
  const { setContact, setContactTextSource } = useContext(BlobContext);

  return (
    <>
      <DefaultLayout>
        <HomeWrap>
          <Row>
            <Col width={[1]} mb="48px">
              <h2 className="c">
                <Emoji
                  name="waving-hand"
                  width={36}
                  style={{ marginBottom: `-2px` }}
                />{" "}
                Hello
              </h2>
            </Col>
            <Col width={[1]} mb="48px">
              <h1 className="c">
                I’m a Product <br />
                Designer <RedSpan>&</RedSpan> Developer
              </h1>
            </Col>

            <Col width={[1]}>
              <LinksWrapper>
                <Link href="/bio">
                  <a className="c purple">Bio</a>
                </Link>
                <Link href="/work" className="c">
                  <a className="c green">Work</a>
                </Link>
                <Link href="/work" className="c">
                  <a className="c red">Skills</a>
                </Link>
                <ContactButton
                  className="yellow"
                  onClick={() => {
                    setContact(true);
                    setContactTextSource("contact");
                  }}
                >
                  Contact
                </ContactButton>
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
