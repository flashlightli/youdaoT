var express = require('express');
var translate=require('./youdao');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var arr=[];
    res.render('index', { title: 'Express' ,arr:arr});
});
router.post('/', function(req, res, next) {
    var Txt=req.body.word;
    translate(Txt,function (arr) {
        res.render('index', { arr: arr });
    });
});
module.exports = router;
