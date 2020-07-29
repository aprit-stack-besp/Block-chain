module.exports = (app) => {
    const blocks = require('../controllers/blocks.controller.js');

    // Create a new Note
    app.get('/notes', blocks.getBlock);

    // Retrieve all Notes
    app.get('/api/v1/transactions', blocks.postBlock); 
}
