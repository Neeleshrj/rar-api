const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnimeSchema = new mongoose.Schema({
    Alt_titles: {
        type: Object,
    },
    Title: String,
    Synopsis: String,
    Type: String,
    Episodes: String,
    Status: String,
    Aired: String,
    Premiered: String,
    Broadcast: String,
    Producers: {
        type: [String],
    },
    Licensors: {
        type: [String],
    },
    Studios: String,
    Source: String,
    Genres: {
        type: [String],
    },
    Duration: String,
    Rating: String,
    Score: String,
    Image : String,
    A_ID: Number,
},{collection: 'anime'});

const AnimeModel = mongoose.model('Anime', AnimeSchema);

exports.AnimeModel = AnimeModel;