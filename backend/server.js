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

//POST a new artist by his name with his album's name
app.post("/insert", async(req, res) => {
    const nameArtist = req.body.nameArtist
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

//GET all the artists in the mongoDb 
app.get("/read", async(req, res) => {
    ArtistModel.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
});

//PUT we want to update the current list of artists
app.put("/update", async(req, res) => {
    const newArtistName = req.body.newArtistName;
    const id = req.body.id;

    try {
        await ArtistModel.findById(id, (err, updatedName) => {
            updatedName.artistName = newArtistName;
            updatedName.save();
            res.send("update");
        });
    } catch (err) {
        console.log(err)
    }
});

//DELETE an artist by id
app.delete("/delete/:id", async(req, res) => {
    const id = req.params.id;
    await ArtistModel.findByIdAndRemove(id).exec();
    res.send('deleted')
});


app.listen(3002, () => { console.log("Server Running...") });