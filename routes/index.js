var express = require('express');
var fs = require('fs');
var path = require('path');

var jsonObj= {"title":"demo","goodslist":[
    {"name":"飞科剃毛机毛球修剪器充电式去","img":"http://img04.taobaocdn.com/bao/uploaded/i4/2811146467/TB2JFGvcM1J.eBjy0FaXXaXeVXa_!!2811146467.jpg_400x400_.webp","coupon":5,"price":10},
    {"name":"飞科剃毛机毛球修剪器充电式去球器衣服打毛器脱毛去毛球剃毛机器2","coupon":6,"img":"http://img03.taobaocdn.com/bao/uploaded/i3/TB1iJpVKFXXXXXTXXXXXXXXXXXX_!!0-item_pic.jpg_400x400_.webp","price":20},
    {"name":"飞科剃毛机毛球修剪器充电式去球器衣服打毛器脱毛去毛球剃毛机器3","img":"http://img01.taobaocdn.com/bao/uploaded/i1/404671352/TB22oIbbB9J.eBjy0FoXXXyvpXa_!!404671352.jpg_400x400_.webp","coupon":7,"price":30} 
]};

var filePath = path.join(__dirname, '../json/product.json');

fs.readFile(filePath,function(err,data){  
  if(err)  
        throw err;  
});

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', jsonObj);
});

router.get('/user', function(req, res, next) {
  res.render('user', jsonObj);
});

router.get('/pic', function(req, res, next) {
  res.render('pic', jsonObj);
});

router.get('/news', function(req, res, next) {
  res.render('news');
});

router.get('/newslist', function(req, res, next) {
  res.render('newslist');
});

router.get('/topic', function(req, res, next) {
  res.render('topic');
});

router.get('/topiclist', function(req, res, next) {
  res.render('topiclist');
});



module.exports = router;


