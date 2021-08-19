const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const {AnimeModel} = require('../models/anime-model');


router.get('/', async (req,res) => {
    await AnimeModel
    .find({
        Genres: req.query.Genres
    })
    .then(list => {
        if(!list) return res.status(400).send('Empty Database!');
        else{
            var index = list.length
            console.log(index)
            var x = Math.ceil(Math.random()*100);
            res.send(list[x])
            console.log(x)
        }
        // res.send(list);
    })
    .catch(e => console.log(e));
});

module.exports = router;