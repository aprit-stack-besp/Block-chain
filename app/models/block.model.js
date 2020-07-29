const mongoose = require('mongoose');

const Blocks = new mongoose.Schema({
  owner: { type: String },
  hash: [],
});

module.exports = mongoose.model('blocks', Blocks);