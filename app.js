const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
const { parseString, builder } = require("xml2js");
const cors = require("cors");
let xmlParser = require("xml2json");
const path = require("path");
const axios = require("axios");
const { request } = require("http");

const PORT = process.env.PORT || 5000;

app.use(express.static(path.resolve(__dirname, "../build")));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Clothes
app.get("/clothes", (req, res) => {
  const options = {
    method: "GET",
    url: "https://imageupload-28cb9-default-rtdb.europe-west1.firebasedatabase.app/payload.json",
  };
  axios
    .request(options)
    .then((response) => {
      console.log(response.data);

      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

// Clothes
// cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/newsfeed", (req, res) => {
  const options = {
    method: "GET",
    url: "https://www.mirror.co.uk/?service=rss",
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  };
  axios
    .request(options)
    .then((response) => {
      console.log("JSON output", xmlParser.toJson(response.data));
      res.json(xmlParser.toJson(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
});

// cors

const publicPath = path.join(__dirname, "build");
app.use(express.static(publicPath));
console.log(publicPath);
app.get("/", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});
app.listen(PORT, () => console.log(`server is running on PORT=${PORT}`));
