const express = require("express");
const app = express();

const cors = require("cors");

const path = require("path");
const axios = require("axios");
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
      console.log(response.data);
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

// Clothes

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`listening on port ${PORT}`);
});
