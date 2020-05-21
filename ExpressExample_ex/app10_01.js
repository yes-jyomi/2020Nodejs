var express = require('express');
var http = require('http');
var path = require('path');

var bodyParser = require('body-parser');
var static = require('server-static');

var app = express();

app.set('port', process.env.PORT || 5000);

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use('/public', static(path.join(__dirname, 'public')));

var router = express.Router();

router.route('/process/users/:id').post(function(req, res) {
    console.log('/process/users/:id 처리함.');

    var paramId = req.param.id;

    console.log('/process/users 와 토근 %s를 이용해 처리함.', paramId);

    res.writeHead('200', { 'Content-Type': 'text/html; charset=utf8' });
    res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
    res.write('<div><p>Param id: ' + paramId + '</p></div>');
    res.end();
});

app.use('/', router);