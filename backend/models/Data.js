const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
    artistName: {
        type: String,
        required: true,
    },
    nameAlbum: {
        type: String,
        required: true,
    },
});

const artist = mongoose.model("artist", artistSchema);
module.exports = artist;