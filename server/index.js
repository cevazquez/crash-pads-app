const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const Pad = require('./models/pad');
const FakeDb = require('./fake-db');

const padRoutes = require('./routes/pads');

mongoose.connect(
    config.DB_URI,
    { useNewUrlParser: true }
).then(() => {
    const fakeDb = new FakeDb();
    fakeDb.seeDb();
}).catch(err => console.error(err));

const app = express();

app.use('/api/v1/pads', padRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
    console.log('I am running.')
});