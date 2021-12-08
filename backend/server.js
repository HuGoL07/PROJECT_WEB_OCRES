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

mongoose.connect("mongodb+srv://Hugo:hermes07@cluster0.jpvos.mongodb.net/artists?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});

app.post("/insert", async(req, res) => {
    const nameArtist = req.body.artistName
    const nameAlbum = req.body.nameAlbum
    const artist = new ArtistModel({ artistName: nameArtist, nameAlbum: nameAlbum });

    try {
        await artist.save();
        res.send("inserted data")
        alert('Le son a bien été ajouté')
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

app.put("/update", async(req, res) => {
    const newNameArtist = req.body.newNameArtist;
    const id = req.body.id;

    try {
        await ArtistModel.findById(id, (err, updatedName) => {
            updatedName.artistName = newNameArtist;
            updatedName.save();
            res.send("update");
        });
    } catch (err) {
        console.log(err)
    }
});

app.listen(3002, () => { console.log("Server Running...") });