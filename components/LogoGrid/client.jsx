import { useState } from "react";
import styled from "styled-components";

const ListItem = styled.li`
  color: ${(props) => (props.hover ? "#0ac959" : " inherit")};
`;

const Client = ({ client, selectedClients, i, setTheLogo }) => {
  const [hover, setHover] = useState();
  return (
    <ListItem
      hover={hover}
      onMouseEnter={() => {
        setTheLogo(client.imageThumb);
        setHover(true);
      }}
      onMouseLeave={() => setHover(false)}
    >
      {client.project ? client.project : client.clientName}
      {selectedClients.length !== i + 1 && ","}
    </ListItem>
  );
};

export default Client;
