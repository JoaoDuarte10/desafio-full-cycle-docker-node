import express from "express";
import { getNames } from "./get-names-service.js";
import { setNames } from "./set-names-service.js";
import {
  closeConnection,
  createConnection,
  startDatabase,
} from "./db-config.js";

const app = express();
const port = 3000;

startDatabase();

app.get("/", async (_, res) => {
  const connection = createConnection();

  await setNames(connection);
  const { names } = await getNames(connection);

  closeConnection(connection);

  const listNames = `<ul>
    ${names.map((name) => `<li>${name}</li>`)}
  </ul>`.replace(/,/g, "");

  const result = `
  <h1>Full Cycle Rocks!<h1>
  ${listNames}
  `;

  res.send(result);
});

app.listen(port, () => {
  console.log("Aplicação rodando na porta", port);
});
