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

// db("country")
//   //   .select("country_id", "country")
//   .where({ country_id: 110 })
//   .delete({
//     country: "Lalaland",
//   })

//   .returning("*")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
