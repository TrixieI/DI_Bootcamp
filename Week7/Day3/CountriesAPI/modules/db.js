const knex = require("knex");
const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: "5432",
    user: "trixie",
    password: "1994",
    database: "dvdrental",
  },
});

const getCountries = () => {
  return db("country").select("country_id", "country");
};

module.exports = {
  getCountries,
};
