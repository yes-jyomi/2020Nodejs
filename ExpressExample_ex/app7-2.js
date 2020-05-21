var express = require('express');
var http = require('http');

var path = require('path');
var bodyParser = require('body-parser');
var static = require('serve-static');

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', static(path.join(__dirname, 'public')));

app.use(function(req, res) {
    console.log('첫 번째 미들웨어에서 요청 처리');

    res.redirect('./login.html');
});

app.set('port', process.env.PORT || 3000);

http.createServer(app).listen(app.get('port'), function() {
    console.log('익스프레스 서버를 시작했습니다: ' + app.get('port'));
});