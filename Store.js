  //事件监听
  function createStore(initialState) {
    var state = initialState || {};
    var list = [];
    function getState(type) {
        return state[type];
    };

    function dispatch(action ){
        state[action.type] = action.value;
        list.forEach(f => {
            f()
        });
    }

    function subscribe(func){
        list.push(func);
    }

    return {
        getState : getState,
        dispatch : dispatch,
        subscribe : subscribe
    }
}

//创建监听
var store = createStore({
    text:'',
    sex:'a'
});

//事件订阅
store.subscribe(function(){
    alert('123456');
})


//修改数值触发事件:
store.dispatch( {type : 'text' ,value :'你好'}  );