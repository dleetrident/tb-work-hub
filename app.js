const express = require("express");
const app = express();
const fs = require("fs");
const { parseString, builder } = require("xml2js");
const cors = require("cors");
let xmlParser = require("xml2json");
const path = require("path");
const axios = require("axios");
const { request } = require("http");
const xmlparser = require("express-xml-bodyparser");
const PORT = process.env.PORT || 5000;

app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.use("*", express.static("build"));
  app.get("*", (req, res) => {
    req.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}
// Clothes
app.get("/clothes", (req, res) => {
  const options = {
    method: "GET",
    url: "https://imageupload-28cb9-default-rtdb.europe-west1.firebasedatabase.app/payload.json",
  };
  axios
    .request(options)
    .then((response) => {
      // console.log(response.data);

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
      // console.log(response.data);
      // const xml = fs.readFileSync(response.data).toString();
      // parseString(xml, function (err, data) {
      //   console.dir(data);
      // });
      // console.log(xml);
      console.log("JSON output", xmlParser.toJson(response.data));
      res.json(xmlParser.toJson(response.data));
      // res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

// cors

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`listening on port ${PORT}`);
});
