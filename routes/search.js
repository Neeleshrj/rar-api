const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const {AnimeModel} = require('../models/anime-model');
const Joi = require('joi');


router.get('/', async (req,res) => {
    console.log(req.query)
    await AnimeModel
    .find({Title: {$regex: req.query.Title}})
    .then(list => {
        if(!list) return res.status(400).send('No such entry exists!');
        res.send(list);
    })
    .catch(e => console.log(e));
});

module.exports = router;