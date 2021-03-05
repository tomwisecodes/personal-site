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
    :hover {
      text-decoration: none;
    }
    span {
      cursor: pointer;
      font-size: 30px;
      color: #0800c9;
      text-decoration: underline;
    }
  }
`;

const ContactButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 30px;
  color: #0800c9;
  line-height: 30px;
  padding: 0 6px;
  text-decoration: underline;
  :hover {
    text-decoration: none;
  }
`;

const HomePage = () => {
  const { setContact, setContactTextSource } = useContext(BlobContext);

  return (
    <>
      <DefaultLayout>
        <HomeWrap>
          <Row>
            <Col width={[1]}>
              <h1 style={{ textAlign: `center` }} className="c">
                <Emoji
                  name="waving-hand"
                  width={36}
                  style={{ marginBottom: `-4px` }}
                />{" "}
                I’m a Product
              </h1>
              <h2 style={{ textAlign: `center` }} className="c">
                Designer & Developer
              </h2>
            </Col>
            <Col width={[1]}>
              <LinksWrapper>
                <Link href="/bio">
                  <a className="c">Bio</a>
                </Link>
                <Link href="/work" className="c">
                  <a className="c">Work</a>
                </Link>
                <ContactButton
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
