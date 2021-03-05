import { useState, useContext } from "react";
import DefaultLayout from "../../Layouts/DefaultLayout";
import { Col, Row } from "../../components/Grid";
import Container from "../../components/Container";
import FlexWrapper from "../../components/FlexWrapper";
import styled, { keyframes } from "styled-components";
import clients from "../../data";
import { Close, ArrowDown } from "react-ikonate";
import ClientThumbWrap from "../../components/ClientThumbWrap";
import Image from "next/Image";
import { BlobContext } from "../../components/Context/BlobContext";
import PageTitle from "../../components/PageTitle";

const CuteMessageWrap = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const BackgroundAcross = keyframes`
  0% {
    width: 0;
  } 100% {
    width: 100%;
  }
`;

const GridWrap = styled(FlexWrapper)`
  margin-left: -12px;
  margin-right: -12px;
`;

const FilterWorkBg = styled.div``;

const FilterWork = styled.button`
  background-color: transparent;
  border: none;
  text-align: left;
  font-size: 36px;
  line-height: 36px;
  padding: 12px 0;
  font-family: Rigton-SemiBold;
  color: #0800c9;
  position: relative;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  padding: ${(props) => (props.active ? "12px" : "12px 0")};
  color: ${(props) => (props.active ? "white" : " #0800c9")};
  background-color: ${(props) => (props.active ? "#040234" : "transparent")};
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  :hover {
    padding: 12px;
    color: white;
    transition-delay: 0.3s;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    ::after {
      background-color: #0800c9;
      animation: ${BackgroundAcross} 0.4s ease-in-out forwards;
    }
  }
  :focus {
    padding: 12px;
    color: white;
    background-color: #0800c9;
  }
`;

const ViewContainer = styled.div`
  overflow-x: scroll;
  height: 100%;
  width: 100%;
  .viewInner {
    display: flex;
    width: ${(props) => props.width * 400 + "px"};
  }
`;
const ImgWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  cursor: pointer;
  img {
    object-fit: cover;
  }
`;
const MainRow = styled(Row)`
  padding-top: 100px;
  min-height: calc(100vh - 172px);
`;
const Work = () => {
  const [discipline, setDiscipline] = useState(null);
  const [viewer, setViewer] = useState(false);
  const [blur, setBlur] = useState(false);
  const [focusClient, setFocusClient] = useState(false);
  const { setContact, contactTextSource, setContactTextSource } = useContext(
    BlobContext
  );

  function filterClickHandler(disc) {
    setDiscipline(disc);
    setViewer(false);
  }

  return (
    <DefaultLayout>
      <Container>
        <PageTitle title="Work" />
        <MainRow>
          <Col width={[1, 1 / 2, 5 / 12]}>
            <p
              style={{
                fontSize: `36px`,
                fontFamily: `Rigton-Book`,
                marginBottom: `24px`,
              }}
            >
              I am a:
            </p>
            <FlexWrapper direction="column">
              <FilterWorkBg order={1}>
                <FilterWork
                  onClick={() => filterClickHandler("ux")}
                  onMouseEnter={() => setBlur(true)}
                  onMouseLeave={() => setBlur(false)}
                  active={discipline === "ux" && true}
                >
                  UX Designer
                </FilterWork>
              </FilterWorkBg>
              <FilterWorkBg order={2}>
                <FilterWork
                  onClick={() => filterClickHandler("graphic")}
                  onMouseEnter={() => setBlur(true)}
                  onMouseLeave={() => setBlur(false)}
                  active={discipline === "graphic" && true}
                >
                  Graphic Designer
                </FilterWork>
              </FilterWorkBg>
              <FilterWorkBg order={3}>
                <FilterWork
                  onClick={() => filterClickHandler("dev")}
                  onMouseEnter={() => setBlur(true)}
                  onMouseLeave={() => setBlur(false)}
                  active={discipline === "dev" && true}
                >
                  Developer
                </FilterWork>
              </FilterWorkBg>
            </FlexWrapper>
          </Col>
          <Col width={[1, 1 / 2, 7 / 12]}>
            {!discipline ? (
              <CuteMessageWrap>
                <h3>What would you like to see?</h3>
              </CuteMessageWrap>
            ) : viewer ? (
              <>
                <FlexWrapper justify="space-between">
                  <h2 style={{ marginBottom: `0px` }}>{focusClient}</h2>
                  <Close
                    className="hover"
                    style={{ width: `36px`, height: `36px`, cursor: `pointer` }}
                    onClick={() => setViewer(false)}
                  />
                </FlexWrapper>
                <ViewContainer width={clients.length} className="hover">
                  <div className="viewInner">
                    {clients.map((client) => (
                      <ImgWrapper
                        onMouseEnter={() => setFocusClient(client.clientName)}
                        onClick={() => {
                          setContact(true);
                          setContactTextSource("portfolio");
                        }}
                      >
                        <Image
                          src={client.imageThumb}
                          alt="Picture of the author"
                          layout="fill"
                        />
                      </ImgWrapper>
                    ))}
                  </div>
                </ViewContainer>
              </>
            ) : (
              <GridWrap wrap={true} justify="flex-start">
                {clients.map((client) => (
                  <ClientThumbWrap
                    setViewer={setViewer}
                    client={client}
                    blur={blur}
                    key={client.id}
                    discipline={discipline}
                  />
                ))}
              </GridWrap>
            )}
          </Col>
        </MainRow>
      </Container>
    </DefaultLayout>
  );
};

export default Work;
