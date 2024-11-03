//require dotenv as soon as possible
require("dotenv").config();
const express = require("express");
const path = require("path");
//custom tools to help with dev and handling graphql errors
const { DevLoggingTools } = require("./utils");
const dev = new DevLoggingTools(true);

//start the server in deployed environment port, or 3001 for dev purposes
const PORT = process.env.PORT || 3001;
const app = express();

const startServer = () => {
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  //if we are in production, serve the built react app on all GET routes
  if (dev.isProduction) {
    app.use(express.static(path.join(__dirname, "../client/dist")));

    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../client/dist/index.html"));
    });
  }

  //start express server
  app.listen(PORT, () => {
    dev.log(`express API server running on port ${PORT}!`);
    //dev.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
  });
};

// Call the function to start the server
startServer();
