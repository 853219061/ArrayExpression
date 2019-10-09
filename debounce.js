
// 要防抖的函数  hander  :function
// 防抖的时间    delay   :ms
function debounce (hander,delay){
    var timer = null ;
    return function (e){
        var _self = this,_arg=arguments;
        clearTimeout(timer);
        timer = setTimeout(function(){
            hander.apply(_self,_arg);
        },delay)
    }
}