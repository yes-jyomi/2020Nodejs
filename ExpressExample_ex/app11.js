var cookieParser = require('cookie-parser');

app.use('/public', static(path.join(__dirname, 'public')));
//cookie-parser 설정
app.use(cookieParser());

//라우터 사용하여 라우팅 함수 등록
router.route('/process/setUserCookie').get(function (req, res) {
  console.log('/process/setUserCookie 호출됨.');

  //쿠키 설정
  res.cookie('user', {
    id: 'mike',
    name: '소녀시대',
    authorized: true
  });
  //redirect로 응답
  res.redirect('/process/showCookie');
});

router.route('/process/showCookie').get(function (req, res) {
  console.log('/process/showCookie 호출됨.');

  res.send(req.cookies);
});

app.use('/', router);

//404에러 페이지 처리
var errorHandler = expressErrorHanndler({
  static: {
    '404': './public/404.html'
  }
})