import { useContext } from "react";
import { Col, Row } from "../../components/Grid";
import Container from "../../components/Container";
import DefaultLayout from "../../Layouts/DefaultLayout";
import styled from "styled-components";
import Image from "next/image";
import FlexWrapper from "../../components/FlexWrapper";
import { ArrowLeft, ArrowDown } from "react-ikonate";
import PageTitle from "../../components/PageTitle";
import Button from "../../components/Button";
import ButtonLink from "../../components/Button/ButtonLink";
import { BlobContext } from "../../components/Context/BlobContext";
import BtnWrap from "../../components/BtnWrap";

const BioWrap = styled(Container)``;

const SpaceBetween = styled(Row)`
  justify-content: space-between;
  h2 {
    font-size: 30px;
    line-height: 48px;
  }
`;

const ImgWrap = styled.div`
  img {
    object-fit: cover;
  }
`;

const BioPage = () => {
  const { setContact, setContactTextSource } = useContext(BlobContext);

  return (
    <>
      <DefaultLayout>
        <BioWrap>
          <PageTitle title="Bio" />

          <Row style={{ marginTop: `72px`, marginBottom: `72px` }}>
            <Col width={[1]}>
              <FlexWrapper
                justify="center"
                childrenMarginRight="24px"
                align="center"
              >
                <ImgWrap>
                  <Image
                    src="/images/tom-watermelon.jpg"
                    width="144px"
                    height="144px"
                  />
                </ImgWrap>

                <ArrowLeft
                  style={{
                    marginLeft: `0px`,
                    marginRight: `6px`,
                    width: `24px`,
                    height: `24px`,
                  }}
                />
                <h1 style={{ marginBottom: `0px` }}>Tom Wise!!!</h1>
              </FlexWrapper>
            </Col>
          </Row>
          <SpaceBetween>
            <Col width={[1, 1, 5 / 12]} mb="72px">
              <h2>Inside my work:</h2>
              <p>
                <b>I design, I code.</b>
                <br /> I am a product designer and developer with plentiful
                experience in UX, UI, Branding and Front End Development. I like
                to work in roles that allow me to jump between design, research
                and code adding maximum efficiency and value to digital product
                teams.
              </p>
              <p>
                Currently, I am leading the UX design, UI design and Front End
                in a team supporting a government-funded COVID response in the
                Education sector(Oak National Academy). Being the first designer
                and the first developer on the project my dual passions allowed
                us to put the first product out within 7 days of the first
                square drawn in Figma. Since then, our small but gloriously
                talented team has scaled to creating 3 apps welcoming 3 million
                users learning from home per week using over 10,000 lessons.
              </p>
              <p>
                Previously to Oak I was working at Pentlands Brands innovation
                lab leading there UX/UI department. I have headed up digital
                design at a ed-tech startup, a corn company, contracted at many
                many agencies, still run my own design studio (putty.studio).
                And before that I was a full time DJ and mechanical engineer.
              </p>
              <BtnWrap>
                <ButtonLink href="/work">My work</ButtonLink>
              </BtnWrap>
            </Col>
            <Col width={[1, 1, 5 / 12]}>
              <h2>Outside my work:</h2>
              <p>
                I was born and raised in Brighton before moving to Manchester,
                and most recently Dulwich in South East London. I'm a passionate
                amatuer athlete with a special love for running, cycling and
                climbing and am impartial to a cheeky skateboard, game of footy
                or open water swim.
              </p>
              <p>
                When i'm not working hard or trying to get injured I wind down
                with personal illustration projects, crochet and trying to get
                anyone to discuss why Brighton & Hove Albion keep losing.
              </p>
              <p>
                Let me know if you fancy joining me for a run, or my crochet
                circle.
              </p>
              <BtnWrap
                onClick={() => {
                  setContact(true);
                  setContactTextSource("social");
                }}
              >
                <Button>Join me</Button>
              </BtnWrap>
            </Col>
          </SpaceBetween>
        </BioWrap>
      </DefaultLayout>
    </>
  );
};

// const getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;
// BioPage.getLayout = getLayout;

export default BioPage;
