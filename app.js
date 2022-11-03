const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const xmlparser = require("express-xml-bodyparser");
const cors = require("cors");

const path = require("path");

const PORT = process.env.PORT || 5000;

app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    req.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}
// XML

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(xmlparser());

// app.post("http://feeds.bbci.co.uk/news/rss.xml", function (req, res, next) {
//   // req.body contains the parsed xml
//   console.log(req.body);
// });

// XML

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`listening on port ${PORT}`);
});
