var models  = require('../models');
var express = require('express');
var router = express.Router();

// get all users
router.get('/users', function(req, res) {
    models.Beekeeper.findAll({}).then(function(users) {
        res.json(users);
    });
});

module.exports = router;