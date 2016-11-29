function brwntogreen(){

 document.getElementById("brown").style.background="limegreen";
document.getElementById("green").style.background="brown";
}
function greentobrwn(){
    document.getElementById("brown").style.background="brown";
document.getElementById("green").style.background="limegreen";
}
var a=setInterval(brwntogreen,3000);
var b=setInterval(greentobrwn,6000);
function disableinterval(){
    var scrwid=window.innerWidth;
    if(scrwid<768){
        clearInterval(a);
        clearInterval(b);
    }
}
