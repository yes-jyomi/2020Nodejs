var express = require('express');
var http = require('http');

var app = express();

app.use(function(req, res, next) {
    console.log('첫 번째 미들웨어에서 요청을 처리함');

    var userAgent = req.header('User-Agent');
    var paramName = req.query.name;

    res.writeHead('200', { 'Content-Type': 'text/html; charset=utf8' });
    res.write('<h1>Express 서버에서 응답한 결과입니다. </h1>');
    res.write('<div><p>User-Agent: ' + userAgent + '</p></div>');
    res.write('<div><p>Param name: ' + paramName + '</p></div>');
    res.end();
});

app.set('port', process.env.PORT || 3000);

http.createServer(app).listen(app.get('port'), function() {
    console.log('익스프레스 서버를 시작했습니다: ' + app.get('port'));
});