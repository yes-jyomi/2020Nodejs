//라우터 사용하여 라우팅 함수 등록
var router = express.Router();
// 파일 업로드 라우팅 함수 - 로그인 후 세션 저장함
router.route('/process/photo').post(upload.array('photo', 10), function (req, res) {
  console.log('/process/photo 호출됨.');
  res.writeHead('200', { 'Content-Type': 'text/html;charset=utf8' });
  try {
    var files = req.files;
    // 현재의 파일 정보를 저장할 변수 선언
    var originalname = '',
      filename = '',
      mimetype = '',
      size = 0;
    if (Array.isArray(files)) { // 배열에 들어가 있는 경우 (설정에서 1개의 파일도 배열에 넣게 했음)
      console.log("배열에 들어있는 파일 갯수 : %d", files.length);
      for (var index = 0; index < files.length; index++) {
        console.dir('#===== 업로드된 ' + (index + 1) + ' 번째 파일 정보 =====#')
        originalname = files[index].originalname;
        filename = files[index].filename;
        mimetype = files[index].mimetype;
        size = files[index].size;
        console.log('현재 파일 정보 : ' + originalname + ', ' + filename + ', '
          + mimetype + ', ' + size);
        // 클라이언트에 응답 전송
        res.write('<h3> ' + (index + 1) + ' 번째 파일 업로드 성공</h3>');
        res.write('<hr/>');
        res.write('<p>원본 파일명 : ' + originalname + '<br> -> 저장 파일명 : ' + filename + '</p>');
        res.write('<p>MIME TYPE : ' + mimetype + '</p>');
        res.write('<p>파일 크기 : ' + size + '</p>');
        res.end();
      }
    }
  } catch (err) {
    console.dir(err.stack);
  }
});
app.use('/', router);