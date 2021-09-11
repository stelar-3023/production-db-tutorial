const db = require("./db/db-config");

const findAll = () => {
  return db("profiles");
};

module.exports = {
  findAll,
};
