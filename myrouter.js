var express = require('express');
var router = express.Router();

router.get('/', function func1(request, response) {
    response.send('Hai hai');
});

router.get('/some', function func2(request, response) {
    response.json({"message": "hello", "sender": "me"});
});

modules.exports = router;