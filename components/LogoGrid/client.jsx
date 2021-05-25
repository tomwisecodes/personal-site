import { useState } from "react";
import styled from "styled-components";

const ListItem = styled.li``;

const Client = ({ client, selectedClients, i, setTheLogo }) => {
  return (
    <ListItem
      onMouseEnter={() => {
        setTheLogo(client.imageThumb);
      }}
    >
      {client.project ? client.project : client.clientName}
      {selectedClients.length !== i + 1 && ","}
    </ListItem>
  );
};

export default Client;
