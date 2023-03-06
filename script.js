var number =0;
document.getElementById("num").innerHTML = number;
function increase(){
    number += 1;
    document.getElementById("num").innerHTML = number;
}
function decrease(){
    number -= 1;
    document.getElementById("num").innerHTML = number;
}
function zero(){
    document.getElementById("num").innerHTML = 0;
}