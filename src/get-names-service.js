export function getNames(connection) {
  const sql = `SELECT * FROM people;`;

  return new Promise((resolve, reject) => {
    connection.query(sql, (err, results) => {
      if (err) {
        reject(err);
      }

      resolve({ names: results.map((result) => result.name).filter(Boolean) });
    });
  });
}
