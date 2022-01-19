const knex = require("knex");
const env = require("dotenv");
env.config();
const db = knex({
  client: process.env.CLIENTDB,
  connection: {
    host: process.env.HOSTDB,
    port: process.env.DBPORTDB,
    user: process.env.USERDB,
    password: process.env.PASSWORDDB,
    database: process.env.DATABASEDB,
  },
});

const getCustomer = (id) => {
  return db("customer")
    .select("customer_id", "first_name", "last_name", "email")
    .where({ customer_id: id });
};

const getCustomers = () => {
  return db("customer")
    .select("customer_id", "first_name", "last_name", "email")
    .orderBy("first_name");
};

module.exports = {
  getCustomer,
  getCustomers,
};
