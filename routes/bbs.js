var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({dest:'uploads/'});



var oracledb = require('oracledb');
oracledb.autoCommit = true;

var dbconfig = {
    user : "TEST_USER_HOME",
    password : "1234",
    connectString : "192.168.55.187/XEPDB1"
}

router.get('/', function(req, res, next) {  
    res.redirect('/bbs/list');
    
});



async function countRecord(){
    return new Promise( function(resolve, reject){

        oracledb.getConnection(dbconfig, function(err,connection){
           
           var sql="SELECT COUNT(*) FROM BBS ";
            connection.execute(sql, function(err,count){
                if(err) console.error("err: "+err);
                console.log(count);
                var totalRecords = parseInt(count.rows);
                console.log("total Records is "+totalRecords);
                connection.release();
                resolve(totalRecords);
            });
        });
    });
}
router.get('/list', async function(req,res,next){  
   
  var stNum=0, totalRecords=0, totalPage=0, firstPage=0, lastPage=0, currentPage=1, blockSize=5, pageSize=5;
  
  countRecord().then( function(totalRecords){
      if(req.query.currentPage != undefined){
          currentPage = parseInt(req.query.currentPage);
      }
      console.log("total record: "+totalRecords);
      totalPage = Math.ceil(totalRecords/pageSize);
      console.log("totalpage: "+totalPage);
      firstPage = currentPage - (currentPage-1);
      lastPage = firstPage + blockSize -1;
      stNum = (currentPage-1)*pageSize;
  
       
    oracledb.getConnection(dbconfig, function (err, connection) {

        var sql = "SELECT NO, TITLE, WRITER, to_char(REGDATE,'yyyy-mm-dd hh24:mi'), COUNT, OK " +
                " FROM BBS WHERE OK = 1 ORDER BY NO DESC" +        
               " OFFSET "+stNum+ " ROWS FETCH NEXT "+pageSize+ " ROWS ONLY";  
                console.log("sql: "+sql);
                console.log("err1:"+err);
            connection.execute(sql, function (err, rows) {
                if (err) console.error("err : " + err);
                
                console.log(rows);
                res.render('bbs/list', {rows:rows, currentPage:currentPage,
                                        totalRecords:totalRecords, pageSize:pageSize,
                                        totalPage:totalPage, blockSize:blockSize,
                                        firstPage:firstPage, lastPage:lastPage,
                                        stNum:stNum});
                connection.release();
            });

        }); 

    });
});

router.get('/readcount', function(req,res,next){    // /bbs/readcount(조회수 세기)
    oracledb.getConnection(dbconfig,function (err,connection) {
        console.log("brd: " + req.query.brdno);
        sql = "UPDATE BBS" +
                    " SET COUNT= COUNT+'"+1+"' "    //게시글을 들어갈 때마다 조회수 1씩 증가시킨다.
                    +"WHERE NO="+req.query.brdno;   //게시글 식별 번호
       
            console.log("sql : " + sql);        //로그를 확인하기 위해 쓴다.
            connection.execute(sql, function (err, rows) {
                if (err) console.error("err : " + err);        
                res.redirect("/bbs/read?brdno="+req.query.brdno);
                connection.release();
        });
    });
});

router.get('/read', function(req,res,next){     // /bin/read(게시글 뷰어)
    oracledb.getConnection(dbconfig,function (err,connection) {
        var sql = "";
        if(!req.query.brdno){
            sql = "SELECT NO, TITLE, WRITER, CONTENT, REGDATE, COUNT, FILENAME" +
                   " FROM BBS" +
                  " WHERE NO=" + req.query.bbs_no;
                 
        }else{
            sql = "SELECT NO, TITLE, WRITER, CONTENT, REGDATE, COUNT, FILENAME" +
                   " FROM BBS" +
                  " WHERE NO=" + req.query.brdno; // 클릭 한 글 번호에 대한 게시판을 찾는다.
        }
            console.log("rows : " + sql);
        connection.execute(sql, function (err, rows) {
            if (err) console.error("err : " + err); //err가 있으면 err 발생
            console.log("rows : " + JSON.stringify(rows)); //err가 없으면 rows를 콘솔창에 띄워라

            res.render('bbs/read', rows);
            connection.release();
        });
    });
});

router.get('/form', function(req,res,next){    
    if (!req.query.brdno) {     //글 번호 없을 시 form.ejs로 반환
        res.render('bbs/form', {row: ""});
        return;
    }
    oracledb.getConnection(dbconfig,function (err,connection) {
        var sql = "SELECT NO, TITLE, CONTENT, WRITER, REGDATE" + //글 번호에 맞는 데이터를 찾아 sql에 저장
                   " FROM BBS" +
                  " WHERE NO=" + req.query.brdno;
        connection.execute(sql, function (err, rows) { //sql을 excute해라 에러가 발생하면 err 메시지가 들어간다. 실행이 끝나면 모든 행은 rows로 들어간다.
            if (err) console.error("err : " + err); //err에 값이 있으면 err 메시지를 보여준다.

            res.render('bbs/updateform', rows); // rows를 참조하여 bbs 폴더에 updateform.ejs 파일로 가라 이것을 참조하여 화면에 보여준다.
            connection.release();
        });
    });
});


router.post('/save', function(req,res,next){    //글쓰기
    oracledb.getConnection(dbconfig,function (err,connection) {
        var sql = "";
        if (req.body.brdno) {   //글 번호가 있으면 업데이트 (업데이트 활용)
            sql = "UPDATE BBS" +
                    " SET TITLE= '"+req.body.brdtitle+"', CONTENT='"+req.body.brdmemo+"', WRITER='"+req.body.brdwriter+"' "
                    +"WHERE NO="+req.body.brdno;
        } else {    //글 번호가 없으면 추가 (insert 활용)
            sql = "INSERT INTO BBS(NO, TITLE, CONTENT, WRITER, REGDATE, COUNT) VALUES(bbs_seq.nextval,'"
                    +req.body.brdtitle+"','"+req.body.brdmemo+"','"+req.body.brdwriter+"', sysdate, 0)";
        }
        console.log("sql : " + sql);    //콘솔 화면에 출력
        connection.execute(sql, function (err, rows) { //sql을 excute해라 에러가 발생하면 err 메시지가 들어간다. 실행이 끝나면 모든 행은 rows로 들어간다.
            if (err) console.error("err : " + err); //err에 값이 있으면 err 메시지를 보여준다.

            res.redirect('/bbs/list');  // rows를 참조하여 bbs 폴더에 list.ejs 파일로 가라 이것을 참조하여 화면에 보여준다.
            connection.release();
        });
    });
});

router.get('/search', function(req,res,next){
    oracledb.getConnection(dbconfig,function (err,connection) {
        var sql = ""
        if (req.query.brdsearchoption == "title") {     //serchoption 제목일 때
            console.log(req.query.brdsearch);
            sql = "SELECT NO, TITLE, WRITER, CONTENT, REGDATE, COUNT" +    //제목에 req.query.brdsearch 값이 포함되어 있는 db 출력
                   " FROM BBS" +
                   " WHERE title LIKE '%"+req.query.brdsearch+"%'"+
                   " ORDER BY NO ASC";
        } else if(req.query.brdsearchoption == "writer"){   //serchoption 작성자일 때
            sql = "SELECT NO, TITLE, WRITER, CONTENT, REGDATE, COUNT" +    //작성자에 req.query.brdsearch 값이 포함되어 있는 db 출력
                   " FROM BBS" +
                   " WHERE WRITER LIKE '%"+req.query.brdsearch+"%'"+
                   " ORDER BY NO ASC";
        }else if(req.query.brdsearchoption == "content"){   //serchoption 내용일 때
            sql = "SELECT NO, TITLE, WRITER, CONTENT, REGDATE, COUNT" +    //내용에 req.query.brdsearch 값이 포함되어 있는 db 출력
                   " FROM BBS" +
                   " WHERE content LIKE '%"+req.query.brdsearch+"%'"+
                   " ORDER BY NO ASC";
        }
        connection.execute(sql, function (err, rows) {  //sql을 excute해라 에러가 발생하면 err 메시지가 들어간다. 실행이 끝나면 모든 행은 rows로 들어간다.
            if (err) console.error("err : " + err);     //err에 값이 있으면 err 메시지를 보여준다.
            res.render('bbs/search', rows);     // rows를 참조하여 bbs 폴더에 search.ejs 파일로 가라 이것을 참조하여 화면에 보여준다.
            connection.release();
        });
    });
});


router.get('/delete', function(req,res,next){
    oracledb.getConnection(dbconfig,function (err, connection) {
        var sql = "UPDATE BBS SET OK = 0" +   //해당 번호 게시글 db에서 삭제
                  " WHERE NO=" + req.query.brdno;
        connection.execute(sql, function (err, rows) { //sql을 excute해라 에러가 발생하면 err 메시지가 들어간다. 실행이 끝나면 모든 행은 rows로 들어간다.
            if (err) console.error("err : " + err); //err에 값이 있으면 err 메시지를 보여준다.

            res.redirect('/bbs/list'); // rows를 참조하여 bbs 폴더에 list.ejs 파일로 가라 이것을 참조하여 화면에 보여준다.
            connection.release();
        });
    });
});

router.get('/wlist', function(req,res,next){    //댓글 목록 기능
    oracledb.getConnection(dbconfig, function (err, connection) {
        console.log("bbs_no: " + req.query.bbs_no);
        var sql = "SELECT NO, BBS_NO, WRITER, CONTENT, REGDATE" +  
                   " FROM BBSW" +                       //BBSW 테이블에서 찾는다.
                   " WHERE BBS_NO="+req.query.bbs_no+ //해당 게시글에 써져있는 댓글을 찾는다.
                   " ORDER BY NO ASC";                 //오름차순으로 정리
        connection.execute(sql, function (err, rows) {
            if (err) console.error("err : " + err);
            console.log("rows: " + sql);
            res.render('bbs/write', rows);
            connection.release();
        });
    });
});


router.post('/write', function(req,res,next){       //댓글 추가 기능, 수정 기능
    oracledb.getConnection(dbconfig,function (err,connection) {
        var sql = "";
        if (req.body.brdno1) { //댓글 번호가 있으면 업데이트 (업데이트 활용)
            sql = "UPDATE BBSW" +
                    " SET WRITER= '"+req.body.brdwriter1+"', CONTENT='"+req.body.brdmemo1+"' "
                    +"WHERE NO="+req.body.brdno1;
        } else {    //댓글 번호가 없으면 추가 (insert 활용)
            sql = "INSERT INTO BBSW(NO, BBS_NO, WRITER, CONTENT, REGDATE) VALUES(bbsw_seq.nextval,'"
                    +req.body.bbs_no+"','"+req.body.brdwriter1+"','"+req.body.brdmemo1+"', sysdate)";
        }
        console.log("sql : " + sql);
        connection.execute(sql, function (err, rows) {
            if (err) console.error("err : " + err);
            res.redirect("/bbs/wlist?bbs_no=" + req.body.bbs_no); //댓글이 쓰여져 있는 게시글 구별을 위해 req.body.bbs_no값도 같이 보낸다.
            connection.release();
        });
    });
});


router.get('/wform', function(req,res,next){     //댓글  수정 기능
    if (!req.query.brdno1) {    //댓글 번호 없을 시 write로 반환
        res.render('bbs/write', {row: ""});
        return;
    }
    oracledb.getConnection(dbconfig,function (err,connection) {
        var sql = "SELECT NO, BBS_NO, WRITER, CONTENT, REGDATE" + //댓글 번호에 맞는 데이터를 찾아 sql에 저장
                   " FROM BBSW" +
                   " WHERE NO="+req.query.brdno1;
                   
        connection.execute(sql, function (err, rows) { //sql을 excute해라 에러가 발생하면 err 메시지가 들어간다. 실행이 끝나면 모든 행은 rows로 들어간다.
            if (err) console.error("err : " + err); //err에 값이 있으면 err 메시지를 보여준다.
            res.render('bbs/writeupdate', rows); // rows를 참조하여 bbs 폴더에 updateform.ejs 파일로 가라 이것을 참조하여 화면에 보여준다.
            connection.release();
        });
    });
});


router.get('/wdelete', function(req,res,next){  //댓글 삭제 기능
    oracledb.getConnection(dbconfig,function (err, connection) {
        var sql = "DELETE FROM BBSW" +  //해당 번호 댓글 db에서 삭제
                  " WHERE NO=" + req.query.brdno1;
        connection.execute(sql, function (err, rows) { //sql을 excute해라 에러가 발생하면 err 메시지가 들어간다. 실행이 끝나면 모든 행은 rows로 들어간다.
            if (err) console.error("err : " + err); //err에 값이 있으면 err 메시지를 보여준다.

            res.redirect("/bbs/wlist?bbs_no=" + req.query.bbs_no);  //댓글이 쓰여져 있는 게시글 구별을 위해 req.body.bbs_no값도 같이 보낸다.
            connection.release();
        });
    });
});




router.get('/upload',function(req,res,next){
    
    res.render('bbs/upload');
    
     });  

  
router.post('/upload',upload.single('userfile'),function(req,res,next){
    if(!upload.single('userfile')){
        res.render('bbs/read',{rows:""});
        return;
    } 
       res.send('Uploaded :'+req.file.filename);
    oracledb.getConnection(dbconfig,function(err,connection){
        var sql= "UPDATE BBS SET FILENAME = '"+req.file.filename+"' WHERE NO= 12";
        console.log("file : "+req.file.filename);
        console.log("sql: "+sql);
        console.log("err_up: "+err);

        
        connection.execute(sql, function (err, rows) {
          if(err)console.log(err);
          console.log(req.file);
          
          connection.release();
          res.send('uploaded : '+req.file);
          
          


     
      
     
        });
    });
  });


module.exports = router;