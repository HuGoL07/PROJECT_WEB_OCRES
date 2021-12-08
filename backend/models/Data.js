const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema(
{
    artistName: {
        type: String,
        required: true,
    },
    nameAlbum: {
        type: String,
        required: true,
    },
});

const Artist = mongoose.model("Artist", artistSchema);
module.exports = Artist;