const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const {AnimeModel} = require('../models/anime-model');

router.get('/', async (req,res) => {
    await AnimeModel
    .aggregate().sample(1)
    .then(list => {
        if(list.length == 0) return res.status(400).send('Empty Database!');
        res.send(list);
    })
    .catch(e => console.log(e));
});

module.exports = router;