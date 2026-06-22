let subs = Number(localStorage.getItem("subs")) || 0;

const display = document.getElementById("subs");

display.innerHTML = subs.toLocaleString("en-US");


function subscribe(){

    subs++;

    localStorage.setItem("subs", subs);

    display.innerHTML = subs.toLocaleString("en-US");

}
