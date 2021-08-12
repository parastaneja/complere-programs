/* eslint-disable linebreak-style */
// eslint-disable-next-line import/no-unresolved
const { Pool } = require('pg');

// eslint-disable-next-line max-len

module.exports = ({
  host, port, user, password, database, waitForConnections, connectionLimit, queueLimit, debug,
}) => {
  const connection = new Pool({
    host,
    port,
    user,
    password,
    database,
    waitForConnections,
    connectionLimit,
    queueLimit,
    debug,
  });

  const getConnection = async () => connection;

  const getTransactionalConnection = async () => connection.getConnection();

  return {
    getConnection,
    getTransactionalConnection,
  };
};
