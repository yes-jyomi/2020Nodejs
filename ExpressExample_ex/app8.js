var express = require('express');
var http = require('http');

var app = express();

var router = express.Router();

router.route('/process/login').post(function(req, res) {
    console.log('/process/login 처리함');

    var paramId = req.body.id || req.body.id;
    var paramPassword = req.body.password || req.query.password;

    res.writeHead('200', { 'Content-Type': 'text/html; charset=utf8;' });
    res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
    res.write('<div><p>Param id: ' + paramId + '</p></div>');
    res.write('<div><p>Param Password: ' + paramPassword + '</p></div>');
    res.write("<br/><br/><a href='/public/login2.html'>로그인 페이지로 돌아가기</a>");
    res.end();
});

app.use('/', router);

app.set('port', process.env.PORT || 3000);

http.createServer(app).listen(app.get('port'), function() {
    console.log('익스프레스 서버를 시작했습니다: ' + app.get('port'));
});