var router = express.Router();

router.route('/process/users/:id').get(function (req, res) {
  console.log('/process/users/:id 처리함.');

  //URL 파라미터 확인
  var paramId = req.params.id;

  console.log('/process/users와 토큰 %s를 이용해 처리함.', paramId);

  res.writeHead('200', { 'Content-Type': 'text/html;charset=utf8' });
  res.writeHead('<h1>Express 서버에서 응답한 결과입니다.</h1>');
  res.writeHead('<div><p>Param id:' + paramId + '</p></div>');
  res.end();
});