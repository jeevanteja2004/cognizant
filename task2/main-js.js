let broad = document.getElementById("connectionType");
let local = document.getElementById("local");
let std = document.getElementById("std");
let fulltalktime = document.getElementById("full");
let drop=document.getElementById("connectionType");
let duration = document.getElementById("connection-duration");
let cal_btn = document.getElementById("cal");
let bill = document.getElementById("bill-amount");
let a = 0;
let k=0;
drop.addEventListener("change",function(event){
    let b=event.target.value
    k=b==="Pre"?75:150;
})

local.addEventListener("change", function(event) {
    
    a = 200;
});

std.addEventListener("change", function(event) {
    a = 350;
});

fulltalktime.addEventListener("change", function(event) {
    a = 500;
});

cal_btn.addEventListener("click", function(event) {
    event.preventDefault();
    
    bill.textContent = (parseInt(duration.value * a) + k) ;
});
