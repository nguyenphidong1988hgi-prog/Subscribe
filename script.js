let game={

subs:Number(localStorage.getItem("subs"))||0,

price:Number(localStorage.getItem("price"))||50,

power:Number(localStorage.getItem("power"))||1

};


function update(){

document.getElementById("subs").innerHTML=
game.subs.toLocaleString("en-US");

document.getElementById("price").innerHTML=
game.price;

}


function save(){

localStorage.setItem("subs",game.subs);
localStorage.setItem("price",game.price);
localStorage.setItem("power",game.power);

}


function subscribe(){

game.subs+=game.power;

save();

update();

}


function openShop(){

document.getElementById("shop").style.display="block";

}


function buy(){

game.power++;

game.price+=50;

save();

update();

}


update();
