var http = require('http');
var md5=require('md5');

var AppKey;//前去有道注册获取
var AppScrect;//前去有道注册获取
var Url='http://openapi.youdao.com/api';
var salt=new Date().getHours().toString();
function translate(Txt,callback) {
    var arr=[];
    var str1=md5(AppKey+Txt+salt+AppScrect);
    var myurl = Url+'?appKey='+AppKey+'&q='+encodeURI(encodeURI(Txt))+'&from='+'zh-CHS'+'&to='+'EN'+'&salt='+salt+'&sign='+str1;
    var req = http.request(myurl, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            chunk=JSON.parse(chunk);
            arr.push(Txt);
            arr.push(chunk.basic.explains);
            arr.push(chunk.web);
            callback(arr);
        });});
    req.end();
}

module.exports=translate;
// translate("好",function (arr) {
//     console.log(arr);
// })