var start = 0;

function insert(){
document.getElementById("number").innerHTML = start +=1 ;  
 if(start == 34){
 alert("Now say الحمدلله");
 }
 if(start == 67){
alert("Now say الله أكبر");
 }
}
function decrease(){
 document.getElementById("number").innerHTML = start -= 1;
}
function reset(){
    start = 0;
  document.getElementById("number").innerHTML = start;
}
