const express = require('express');
const mongoose = require('mongoose');
const search = require('./routes/search');
// const apicache = require('apicache');

const app = express();
// let cache = apicache.middleware;
// app.use(cache('5 minutes'));


mongoose.connect('mongodb+srv://admin:rishi@chutiya1337@animedb.suudi.mongodb.net/test',{useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log('Connected to DB'))
    .catch(e => console.log(e));

app.use(express.json());
app.use('/api/search',search);

// app.get('/', (req,res) => {
//     res.send('Hello Weirdo');
// });

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`port ${port}`));