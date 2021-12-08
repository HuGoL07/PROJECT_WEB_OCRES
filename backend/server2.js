const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

const artistData = require("./data/data.json");
app.get("/artist", function(req, res) {
 res.send(artistData);
});

app.listen(5000, () => { console.log("Server Running...") });

 
