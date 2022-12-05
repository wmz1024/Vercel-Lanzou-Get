mdui.snackbar({
    message: 'Demo测试使用',
    position: 'right-bottom',
  });

function get(){
    var channel = localStorage.getItem("apipath")
    if (channel==""){
        var channel = window.location.protocol+"//"+window.location.host+"/api";
    }
    if (channel==null){
        var channel = window.location.protocol+"//"+window.location.host+"/api";
    }
    mdui.snackbar({
        message: '获取中',
        position: 'right-bottom',
      });
      fetch (channel+"?url="+document.getElementById('lanzou').value+"&pass="+document.getElementById('pwd').value).then(function(response){
        //打印返回的json数据
        response.json().then(function(data){
            document.getElementById("fin").innerHTML = data.url
        })
    }).catch(function(e){
        console.log('error: ' + e.toString());
    })
}