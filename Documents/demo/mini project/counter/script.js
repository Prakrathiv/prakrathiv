const DeaId = document.getElementById("DeaId");
const restId = document.getElementById("restId");
const increId = document.getElementById("increId");
const number = document.getElementById("number");

let count = 0;

increId.onclick= function(){
    count++;
    number.textContent = count;
}
DeaId.onclick = function(){
    count--;
    number.textContent = count;
}
restId.onclick = function(){
    count = 0 ;
    number.textContent= count;
}