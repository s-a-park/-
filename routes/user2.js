var database;
var UserSchema;
var UserModel;

var init = function(db, schema, model) {
    console.log('init 호출됨');
    
    database = db;
    UserSchema = schema;
    UserModel = model;
}

var authUser = function(database, id, password, callback) {
    console.log('authUser 호출됨.....');
	
    // 1. 아이디를 사용해 검색
    UserModel.findById(id, function(err, results) {
        if(err) {
            callback(err, null);
            return;
        }
        
        console.log('아이디 [%s]로 사용자 검색 결과', id);        
        
        if(results.length > 0) {
            console.log('아이디와 일치하는 사용자 찾음.');
			
            // 2. 비밀번호 확인
            var user = new UserModel({id : id});
            var authenticated = user.authenticate(password, results[0]._doc.salt, results[0]._doc.hashed_password);
            if(authenticated) {
                console.log('비밀번호 일치함');
                callback(null, results);
            } else {
                console.log('비밀번호 일치하지 않음');
                callback(null, null);
            }      
        } else {
            console.log("아이디와 일치하는 사용자를 찾지 못함.");
            callback(null, null);
        }   
    });
};

var addUser = function(database, id, pass, name, callback){
    console.log('addUser 호출됨....');
        
    var user = new UserModel({"id":id, "password":pass, 'name':name});
    
    user.save(function(err){
        if(err) {
            callback(err, null);
            return;
        }
        console.log('사용자 추가됨....');
        callback(null, user);
    });    
};

var login = function(req, res) {
    console.log('user 모듈 안에 있는 login 호출됨');
    
    var paramId = req.body.id;
    var paramPassword = req.body.password;

    if(database) {
        authUser(database, paramId, paramPassword, function(err, docs) {
            console.log("callback run.....");
            if(err) {throw err;}
            
            if(docs) {
                console.log('....to client...');
                var username = docs[0].name;
                
                var context = {userid:paramId, username:username};
                req.app.render('login_success', context, function(err, html){  //로그인 석세스라는 페이지만들고 거기에 내용보이게(뷰엔진 쓴다면 로그인석세스에 ejs파일 이름넣기)
                    if(err) {
                        console.error("뷰 렌더링 중 오류 발생: " + err.stack);
                        res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
                        res.write('<h1>뷰 렌더링 중 오류 발생</h1>');
                        res.write('<p>' + err.stack + '</p>');
                        res.end();
                        return;
                    }
                    
                    console.log('rendered: ' + html)                
                    
                    res.end(html);  //이제는 태그하나씩 넣을 필요 없어지고 ejs에서 꾸미면 됨
                });
            }
            else {
                res.write('<h1>login fail...</h1>');
                res.end();
            }
        });
    } else {
        res.write('<h1>connection error....</h1>');
        res.end();
    }
}

var adduser = function(req, res) {
    console.log('user 모듈 안에 있는 login 호출됨');
    
    var paramId = req.body.id;
    var paramPW = req.body.pass;
    var paramName = req.body.name;
    
    if(database){
        addUser(database, paramId, paramPW, paramName, function(err, user){
            if(err) throw err;
            
            if(user) { //ejs랑 연결
                console.dir(user);
                var context={username:paramName}; //ejs에서 변수를 여기에 넣으면 됨,변수 여러개면 ;쓰고 계속추가
                req.app.render('adduser_success',context,function(err,html){
                    if(err) throw err;
                    
                    else res.end(html);
                });//ejs,전달내용,결과받아줄 콜백함수 순으로 작성/ 콜백함수에는 에러랑 만들어질 html파일 씀
               /* res.writeHead('200', {'Content-TYpe':'text/html;charset=utf8'});
                res.write('<h2>사용자 추가 성공...</h2>');
                res.end();
            */}
            else {
                res.writeHead('200', {'Content-TYpe':'text/html;charset=utf8'});
                res.write('<h2>사용자 추가 실패...</h2>');
                res.end();
            }
        });
        
    }
    else {
        res.writeHead('200', {'Content-TYpe':'text/html;charset=utf8'});
        res.write('<h2>데이터베이스 연결 실패</h2>');
        res.end();
    }
}
var listuser = function(req, res) {
    console.log('user 모듈 안에 있는 login 호출됨');
    
    if(database) {
        // 1. 모든 사용자 검색
        UserModel.findAll(function(err, results) {
            if (err) {
                console.error('사용자 리스트 조회 중 오류 발생 : ' + err.stack);
                res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
                res.write('<h2>사용자 리스트 조회 중 오류 발생</h2>');
                res.write('<p>' + err.stack + '</p>');
                res.end();
                return;
            }
            if (results) { // 결과 객체 있으면 리스트 전송                 
                console.dir(results);
                var context={results:results}; //앞에는 ejs의 변수이름 뒤는 넘겨줄 값
                 req.app.render('listuser_success',context,function(err,html){
                    if(err) throw err;
                    
                    else 
                        res.end(html);
                });
                /*res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
                res.write('<h2>사용자 리스트</h2>');
                res.write('<div><ul>');
                
                for (var i = 0; i < results.length; i++) {
                    var curId = results[i]._doc.id;
                    var curName = results[i]._doc.name;
                    res.write(' <li>#' + i + ' : ' + curId + ', ' + curName + '</li>');
                }	
                res.end();     */           
                
            } else { // 결과 객체가 없으면 실패 응답 전송
                res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
                res.write('<h2>사용자 리스트 조회 실패</h2>');
                res.end();
            }
        });
    } else {
        res.writeHead('200', {'Content-TYpe':'text/html;charset=utf8'});
        res.write('<h2>데이터베이스 연결 실패</h2>');
        res.end();
    }
}

var test= function(req,res){
  var iid=req.query.id; //링크주소에 써있는 ?id= 이거는 쿼리값임
 var context={id:iid};
    
    res.render('test',context,function(err,html){
        if(err) throw err;
        else
            res.end(html);
    });
};

module.exports.init = init;
module.exports.login = login;
module.exports.adduser = adduser;
module.exports.listuser = listuser;
module.exports.test= test;
//이거에서 export.보라색 으로 되어있는 이름은 외부에서 불러쓸때 사용하는 이름, = 흰색은 이 파일(내부)에서 쓸때 사용하는 이름임