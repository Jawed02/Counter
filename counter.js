var start = 0;

function insert(){
document.getElementById("number").innerHTML = start +=1 ;  
}
function decrease(){
 document.getElementById("number").innerHTML = start -= 1;
}
function reset(){
    start = 0;
  document.getElementById("number").innerHTML = start;
}
