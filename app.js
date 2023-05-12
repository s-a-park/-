var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();




var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bbsRouter = require('./routes/bbs');
const { Duplex } = require('stream');



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));


app.get('/upload',function(req,res){
  res.render('upload');
});

app.post('/update',function(req,res){
  res.send('업로드 성공');
});

var oracledb = require('oracledb');
oracledb.autoCommit = true;

var dbconfig = {
    user : "TEST_USER_HOME",
    password : "1234",
    connectString : "192.168.55.187/XEPDB1"
}
var multer = require('multer');
var upload = multer({dest :'upload/'});

app.post('/upload',upload.single('userfile'),function(req,res){
  oracledb.getConnection(dbconfig,function(err,connection){
    var sql= "INSERT INTO bbs(filename) VALUES("+req.file +") ";
    console.log("file : "+req.file);
    console.log("sql: "+sql);
    connection.execute(sql, function (err, rows) {
      if(err)console.log(err);

      res.send('uploaded : '+req.file);
      console.log(req.file);
  });
  
 
});
});

var storage = multer.diskStorage({
  destination : function(req,file,cb){
    cb(null,'upload/')
  },
  filename: function(req,file,cb){
    cb(null,file.originalname)
  } 
});

var upload = multer({storage : storage});

app.use('/users',express.static('uploads'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/bbs', bbsRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});




// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
