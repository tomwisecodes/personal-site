import Image from "next/image";
import ClientThumbWrap from "../ClientThumbWrap";
import FlexWrapper from "../FlexWrapper";
import styled from "styled-components";
import { Close, ArrowDown } from "react-ikonate";
import InfoText from "./infoText";

const ViewContainer = styled.div`
  height: 100%;
  width: 100%;
`;
const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  cursor: pointer;
  img {
    object-fit: cover;
  }
`;

const GridWrap = styled(FlexWrapper)`
  margin-left: -12px;
  margin-right: -12px;
`;

const Button = styled.button`
  font-size: 16px;
  line-height: 16px;
  padding: 15px 24px;
  background-color: #0ac959;
  border: 0;
  outline: 0;
  color: #080559;
  margin-top: 12px;
  cursor: pointer;
  border: solid 3px #0ac959;
  transition-duration: 0.3s;
  :hover {
    border-color: #0800c9;
    color: #0800c9;
  }
`;

const WorkDisplayer = ({
  viewer,
  clients,
  setViewer,
  blur,
  discipline,
  setContactTextSource,
  setContact,
}) => {
  if (viewer) {
    return (
      <>
        <FlexWrapper justify="space-between">
          <FlexWrapper direction="column">
            <h2 style={{ fontSize: `36px`, marginBottom: `6px` }}>
              {viewer.project ? viewer.project : viewer.clientName}
            </h2>
            {viewer.project && (
              <h3 style={{ marginBottom: `24px`, color: `#040234` }}>
                {viewer.clientName}
              </h3>
            )}
          </FlexWrapper>

          <Close
            className="hover"
            style={{ width: `36px`, height: `36px`, cursor: `pointer` }}
            onClick={() => setViewer(false)}
          />
        </FlexWrapper>
        <ViewContainer width={clients.length} className="hover">
          <ImgWrapper
            onClick={() => {
              setContact(true);
              setContactTextSource("portfolio");
            }}
          >
            <Image
              src={viewer.imageThumb}
              alt="Picture of the author"
              layout="fill"
            />
          </ImgWrapper>
          <p style={{ marginTop: `36px` }}>
            <InfoText client={viewer} />
          </p>
          <Button
            onClick={() => {
              setContact(true);
              setContactTextSource("portfolio");
            }}
          >
            More about this project
          </Button>
        </ViewContainer>
      </>
    );
  }
  return (
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
  );
};

export default WorkDisplayer;
