const Client = ({ client, selectedClients, i, setTheLogo }) => {
  return (
    <li onMouseEnter={() => setTheLogo(client.imageThumb)}>
      {client.project ? client.project : client.clientName}
      {selectedClients.length !== i + 1 && ","}
    </li>
  );
};

export default Client;
