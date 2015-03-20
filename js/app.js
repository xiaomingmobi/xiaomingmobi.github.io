function include_js(path) {
    var sobj = document.createElement('script');
    sobj.type = "text/javascript";
    sobj.src = path;
    var headobj = document.getElementsByTagName('head')[0];
    headobj.appendChild(sobj);
}

function include_css(path){
    var fileref=document.createElement("link")
    fileref.rel = "stylesheet";
    fileref.type = "text/css";
    fileref.href = path;
    var headobj = document.getElementsByTagName('head')[0];
    headobj.appendChild(fileref);
}

function include_img(path) {
    var img = document.createElement('img');
    img.src = path;
    img.style.display="none";
    document.body.appendChild(img);
}

function hide(id){
    document.getElementById(id).className="hide";
}
function show(id){
    document.getElementById(id).className=id;
}
function make(tag){
    return document.createElement(tag);
}
function remove_html(id){
    document.getElementById(id).innerHTML="";
}
window.onload=function(){
  document.getElementById("loader").className="tohide";
  setTimeout(function(){
    
    show("wrap");

  },1200);
  setTimeout(function(){
    hide("loader");
    
    include_img("http://img.users.51.la/17682537.asp");
  },1500);
}
