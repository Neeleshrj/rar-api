const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const {AnimeModel} = require('../models/anime-model');


router.get('/', async (req,res) => {
    const queryObj = req.query.Genres;
    console.log(queryObj);
    await AnimeModel
    .find({
        Genres: { $all: queryObj}
    })
    .then(list => {
        if(list.length == 0) return res.status(400).send('No Matches found!');
        else{
            var index = list.length
            console.log(index)
            var x = Math.ceil(Math.random()*(index));
            res.send(list[x])
            console.log(x)
        }
        // res.send(list);
    })
    .catch(e => console.log(e));
});

module.exports = router;