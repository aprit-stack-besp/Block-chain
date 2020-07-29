const Blocks = require('../models/block.model.js');
const axios = require('axios');
const watchToken = require('./watchToken');
// Create and Save a new Note

// Retrieve and return all notes from the database.
exports.postBlock = async (req, res) => {
    try {
        const response = await watchToken.watchTokenTransfers(
            "0x9866772A9BdB4Dc9d2c5a4753e8658B8B0Ca1fC3",
            "0x0000000000000000000000000000000000000000"
          );
        console.log("response ==========", response);
             
            res.send({ success: true });
        } catch (err) {
        console.log(err);
        res.status(500).send('not able to get the data');
        }
};

// Find a single note with a noteId
exports.getBlock = (req, res) => {

};