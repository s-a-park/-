var crypto = require('crypto');

var Schema = {};

Schema.createSchema = function (mongoose){
    
    // 스키마 정의
    UserSchema = mongoose.Schema({
        id: {type: String, required: true, unique: true},   
        hashed_password : {type : String, required : true, 'default' : ' '},
        salt : {type : String, required : true},        
        name: {type: String, index: 'hashed', 'default':''},
        age: {type: Number, 'default': -1},
        created_at : {type : Date, index : {unique : false}, 'default' : Date.now},
        updated_at : {type : Date, index : {unique : false}, 'default' : Date.now}
    });
    
    // info를 virtual 메소드로 정의
    UserSchema
        .virtual('password')
        .set(function(password) {
        this._password = password;
        this.salt = this.makeSalt();
        this.hashed_password = this.encryptPassword(password);
        console.log('virtual password 호출됨 : ' + this.hashed_password);
    })
    .get(function() {return this._password});

        
    UserSchema.static('findById', function(id, callback) { //전체사용자에 대해 만들어야하기 때문에 static사용
        return this.find({id : id}, callback);
    });
    
    UserSchema.static('findAll', function(callback) {
        return this.find({ }, callback);
    });
    
    UserSchema.method('encryptPassword', function(plainText, inSalt) {  //사용자 별 암호화 해야하기때문에 method로 작성 
        if(inSalt) {
            return crypto.createHmac('sha1', inSalt).update(plainText).digest('hex');
        } else {
            return crypto.createHmac('sha1', this.salt).update(plainText).digest('hex');
        }
    });
    
    // salt 값 만들기 메소드
    UserSchema.method('makeSalt', function() {
        return Math.round((new Date().valueOf() * Math.random())) + '';
    });

    // 인증 메소드 - 입력된 비밀번호와 비교 (true/false 리턴)
    UserSchema.method('authenticate', function(plainText, inSalt, hashed_password) {
        if(inSalt) {
            console.log('authenticate 호출됨 : %s -> %s : %s', plainText, 
                        this.encryptPassword(plainText, inSalt), hashed_password);
            return this.encryptPassword(plainText, inSalt) === hashed_password;
        } else {
            console.log('authenticate 호출됨 : %s -> %s : %s', plainText, 
                        this.encryptPassword(plainText), this.hashed_password);
            return this.encryptPassword(plainText) === this.hashed_password;
        }
    });
    
    // 필수 속성에 대한 유효성 확인 (길이 값 체크)
    UserSchema.path('id').validate(function(id) {
        return id.length;
    }, 'id 칼럼의 값이 없습니다.');
    
    UserSchema.path('name').validate(function(name) {
        return name.length;
    }, 'name 칼럼의 값이 없습니다.');
    
    
    console.log('UserSchema 정의함.');
    
    return UserSchema;  //리턴한 값을 받아주기위해 외부파일에서 변수하나에 넣어줘야함 그래서  UserSchema = require('./database/user_schema').createSchema(mongoose); 이런식으로 썼음
}

module.exports = Schema;  //다른파일에서 var a= require('./user_schema); 이렇게 불러왔으면 a가 schema가 되는것임 require하면 export된 것들이 변수에 들어감


