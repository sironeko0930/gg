window.onload = function(){
 let url = new URL(window.location.href); // URLを取得
 let params = url.searchParams; // URLSearchParamsオブジェクトを取得
 
document.getElementById('class').innerHTML = "<div>"+params.get('class')+"</div>";
document.getElementById('course').innerHTML = "<div>"+params.get('course')+"</div>";
document.getElementById('time').innerHTML = "<div>"+params.get('time')+"</div>";

}
