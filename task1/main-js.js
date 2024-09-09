let img1=document.getElementById("img1");
let img2=document.getElementById("img2");
let img3=document.getElementById("img3");
let z=document.getElementById("zoom");
let zoomimg=document.createElement("img");
img1.addEventListener("click",function(){
    zoomimg.src=img1.src;
    zoomimg.classList.add("zoom");
    z.appendChild(zoomimg);
})
img2.addEventListener("click",function(){
    zoomimg.src=img2.src;
    zoomimg.classList.add("zoom");
    z.appendChild(zoomimg);
})
img3.addEventListener("click",function(){
    zoomimg.src=img3.src;
    zoomimg.classList.add("zoom");
    z.appendChild(zoomimg);
})