import mysql from "mysql";

const dbConfig = {
  host: "db",
  user: "root",
  password: "node_password",
  database: "node_database",
};

export function startDatabase() {
  const connection = createConnection();

  const sqlCreateTable = `CREATE TABLE IF NOT EXISTS people(id INT NOT NULL AUTO_INCREMENT, name VARCHAR(255), PRIMARY KEY(id))`;

  connection.query(sqlCreateTable);

  closeConnection(connection);
}

export function createConnection() {
  return mysql.createConnection(dbConfig);
}

export function closeConnection(connection) {
  connection.end();
}
