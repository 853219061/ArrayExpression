
// 要防抖的函数  hander  :function
// 防抖的时间    delay   :ms
function debounce (hander,delay){
    var timer = null ;
    return function (e){
      
        clearTimeout(timer);
        timer = setTimeout(function(){
            hander();
        },delay)
    }
}