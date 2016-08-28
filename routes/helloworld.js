var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {

        res.json("Hello I Vote App (;");
});

module.exports = router;