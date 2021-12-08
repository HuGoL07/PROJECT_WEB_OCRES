const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const mongoose = require('mongoose')
const app = express();

const ArtistModel = require("./models/Data.js")

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://Roman:roro94220@crud.gthvm.mongodb.net/artist?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});

app.post("/insert", async(req, res) => {

    const nameArtist = req.body.nameArtist
    const nameAlbum = req.body.nameAlbum
    const artist = new ArtistModel({ artistName: nameArtist, nameAlbum: nameAlbum });

    try {
        await artist.save();
        res.send("inserted data")
    } catch (err) {
        console.log(err)
    }
});

app.get("/read", async(req, res) => {
    ArtistModel.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
});

app.listen(3002, () => { console.log("Server Running...") });

 
// /*GET data from .json*/
// const artistData = require("./data/data.json");
// app.get("/artist", function(req, res) {
//     res.send(artistData);
// });

// const dataPost = require("./data/input_data.json");
// app.get("/postdata", function(req, res) {
//     res.send(dataPost);
// });

// app.post("/postdata", function(req, res) {
//     if (req.body) {
//         fs.writeFileSync("./data/input_data.json", JSON.stringify(req.body));
//         res.send({
//             message: "Data Saved",
//         });
//     } else {
//         res.status(400).send({
//             message: "Error No Data",
//         });
//     }
// });


// /*PUT data in input_data.json*/
// const requestOptions = require('./data/input_data.json')
// app.put("/postdata", (req,res) => {
//     //Get the name of the artist from request
//     const { nameArtist } = req.body;
//     // Get the nbr of albums of this corresponding artist
//     const { nbrAlbum } = req.body;
//     //Create new unique id
//     const _id = _.uniqueId();

//     res.json({
//         message: 'Just added ${id}',
//     });

// });

// app.listen(5000, () => console.log("Server Running..."));