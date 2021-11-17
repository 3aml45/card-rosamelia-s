const express = require('express');
const router = express.Router();

// routes
router.get('/', (req, res) => {
    // res.send('hello world');
    // console.log(__dirname + '/views/index.html');
    // console.log(path.join(__dirname + '/views/index.html'));
    // res.sendFile(path.join(__dirname + '/views/index.html'));
    res.render('index.html', {title: "Rosamelia's"});
});

module.exports = router;