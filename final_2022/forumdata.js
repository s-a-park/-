//포럼 데이터
var board = [
    {num : 1, title : "안녕하세요", content :"Datawiki에 오신 것을 환영합니다.", date: "2022.05.01", count : "10" },//0
    {num : 2, title : "관리자소개", content:"Datawiki의 관리자를 소개 합니다.", date:"2022.05.05", count: "5" }, //1
    {num : 3, title : "최신 뉴스", content:"Datawiki는 상명대 천안캠퍼스에서 주관하는 데이터 공유 사이트 입니다.", date:"2022.05.06", count: "22" },//2
    {num : 4, title : "공지사항", content:"Datawiki가 새롭게 단장됩니다. 더욱 개선된 사이트를 기대해 주세요.", date:"2022.05.08", count: "100" },//3
    {num : 5, title : "추가 공지 사항", content:"Datawiki를 새롭게 개선하기 위한 매니저를 공모합니다. ", date:"2022.05.10", count: "1" },//4
    {num : 6, title : "2022년 데이터위키 공모전", content:"2022년 데이터 위키는 이미지 인식 주제로 진행합니다.", date:"2022.05.12", count: "44" },//5
    {num : 7, title :"공모전 종료 안내", content:"2022년 데이터 위키 공모전이 성공리에 마감 되었습니다. ", date:"2022.05.14", count: "50" },//6
    {num : 8, title : "2023년 데이터 위키 공모전", content:"2023년 데이터 위키 공모전을 소개 합니다.", date:"2022.05.16", count: "49" },//7
    {num : 9, title : "학기 종료 안내", content:"22년 1학기 종료까지 이제 6주 남았습니다. ", date:"2022.05.18", count: "17" },//8
    {num : 10, title : "튜토리얼 공지", content:"tensorflow와 keras의 라이브러리를 이용하여 같이 공부해 봅시다.", date:"2022.05.19", count: "84" },//9
    {num : 11, title : "신규 데이터 요청", content:"새로운 데이터가 필요하신 분은 언제든 요청 바랍니다.", date:"2022.05.21", count: "3" }//10
];

//포럼 게시판에 출력

function table(){
    var test = document.getElementById("table_num1");
    test.innerText = board[10].num;

    var test = document.getElementById("table_title1");
    test.innerText = board[10].title;

    var test = document.getElementById("table_date1");
    test.innerText = board[10].date;

    var test = document.getElementById("table_count1");
    test.innerText = board[10].count;
//---------------------------------------------------------
    var test = document.getElementById("table_num2");
    test.innerText = board[9].num;

    var test = document.getElementById("table_title2");
    test.innerText = board[9].title;

    var test = document.getElementById("table_date2");
    test.innerText = board[9].date;

    var test = document.getElementById("table_count2");
    test.innerText = board[9].count;
//---------------------------------------------------------
var test = document.getElementById("table_num3");
    test.innerText = board[8].num;

var test = document.getElementById("table_title3");
test.innerText = board[8].title;

var test = document.getElementById("table_date3");
test.innerText = board[8].date;

var test = document.getElementById("table_count3");
test.innerText = board[8].count;
//---------------------------------------------------------------
var test = document.getElementById("table_num4");
    test.innerText = board[7].num;

var test = document.getElementById("table_title4");
test.innerText = board[7].title;

var test = document.getElementById("table_date4");
test.innerText = board[7].date;

var test = document.getElementById("table_count4");
test.innerText = board[7].count;
//------------------------------------------------------------------
var test = document.getElementById("table_num5");
    test.innerText = board[6].num;

var test = document.getElementById("table_title5");
test.innerText = board[6].title;

var test = document.getElementById("table_date5");
test.innerText = board[6].date;

var test = document.getElementById("table_count5");
test.innerText = board[6].count;
//-------------------------------------------------------------------
var test = document.getElementById("table_num6");
    test.innerText = board[5].num;

var test = document.getElementById("table_title6");
test.innerText = board[5].title;

var test = document.getElementById("table_date6");
test.innerText = board[5].date;

var test = document.getElementById("table_count6");
test.innerText = board[5].count;
//--------------------------------------------------------------
var test = document.getElementById("table_num7");
    test.innerText = board[4].num;

var test = document.getElementById("table_title7");
test.innerText = board[4].title;

var test = document.getElementById("table_date7");
test.innerText = board[4].date;

var test = document.getElementById("table_count7");
test.innerText = board[4].count;
//------------------------------------------------------------
var test = document.getElementById("table_num8");
    test.innerText = board[3].num;

var test = document.getElementById("table_title8");
test.innerText = board[3].title;

var test = document.getElementById("table_date8");
test.innerText = board[3].date;

var test = document.getElementById("table_count8");
test.innerText = board[3].count;
//-------------------------------------------------------------
var test = document.getElementById("table_num9");
    test.innerText = board[2].num;

var test = document.getElementById("table_title9");
test.innerText = board[2].title;

var test = document.getElementById("table_date9");
test.innerText = board[2].date;

var test = document.getElementById("table_count9");
test.innerText = board[2].count;
//------------------------------------------------------------
var test = document.getElementById("table_num10");
    test.innerText = board[1].num;

var test = document.getElementById("table_title10");
test.innerText = board[1].title;

var test = document.getElementById("table_date10");
test.innerText = board[1].date;

var test = document.getElementById("table_count10");
test.innerText = board[1].count;
//------------------------------------------------------------------
var test = document.getElementById("table_num11");
    test.innerText = board[0].num;

var test = document.getElementById("table_title11");
test.innerText = board[0].title;

var test = document.getElementById("table_date11");
test.innerText = board[0].date;

var test = document.getElementById("table_count11");
test.innerText = board[0].count;
//---------------------------------------------------------------


}

//포럼 글 클릭 시 내용 보이게   

/*function clickF(){
    var Totitle = document.getElementById("table_title");
    var Tocontent = document.getElementById("table_content");
    var Todate = document.getElementById("table_date");
    var Tocount = document.getElementById("table_count");

    Totitle.innerText = board[0].title;
    Tocontent.innerText = board[0].content;
    Todate.innerText = board[0].date;
    Tocount.innerText = board[0].count;

    window();

}

function window(){
    window.open('forum_click.html','_self');
}
*/
//게시글 추가

/*function update(){
    var Wtitle = document.getElementById("write_title");
    var Wcontent = document.getElementById("write_content");
    var today =new date();
    var Wdate = today;
    var Wcount = 0;

     W= {num: 12, title: Wtitle, content: Wcontent, date: Wdate, count:Wcount}; 

    board.push(W);
}*/

//데이터셋 데이터를 MYSQL에 테이블을 만들어 저장해 쓰려고 했으나 php , node.js로 연결은 성공하였지만 데이터들을 HTML에 출력되도록 하는 것에 실패하여 지금의 방식대로 만들게 되었습니다.
//구현하고 싶은 기능은 많았지만 기한안에 만들 수 없을 것이라 판단하여 최대한 간단하면서도 작동이 잘 되는 방식을 찾게 되었습니다.
//전에 OracleDB와 node.js를 이용하여 게시판 만들기를 해본 적이 있기에
//포럼 데이터들을 OracleDB에도 저장하여 node.js를 이용하여 게시판이 제대로 작동하도록 만들고 싶었으나 .ejs 파일과 router의 연동 중 생기는 오류를 다 고치지 못하여 포기하게 되었습니다. 