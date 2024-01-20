export async function setNames(connection) {
  const listNamesRandom = [
    "Sofia Oliveira",
    "Lucas Pereira",
    "Isabella Santos",
    "Miguel Costa",
    "Julia Silva",
    "Enzo Souza",
    "Maria Oliveira",
    "Pedro Almeida",
    "Ana Lima",
    "João Duarte",
  ];

  const nameIndex = Math.floor(Math.random() * listNamesRandom.length);

  const sql = `INSERT INTO people(name) VALUES('${listNamesRandom[nameIndex]}')`;

  return new Promise((resolve) => {
    resolve(connection.query(sql));
  });
}
