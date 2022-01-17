const axios = require("axios");
async function getRobots() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getRobots,
};
