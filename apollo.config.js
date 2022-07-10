require("dotenv").config();

module.exports = {
  client: {
    service: {
      name: "web-folio-cms",
      url: process.env.ENDPOINT,
    }
  }
};