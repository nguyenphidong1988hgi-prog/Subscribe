let subs=0;
let power=1;

function subscribe(){

subs+=power;

document.getElementById("subs").innerHTML=subs;

}


function openShop(){

document.getElementById("shop").style.display="block";

}


function buy(){

power++;

}
