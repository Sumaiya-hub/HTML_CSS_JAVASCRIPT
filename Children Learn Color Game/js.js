let h = document.getElementById("h");
let btn = document.getElementById("btn");
let colors= ["Blue","Green","Yellow","Red","Purple","white","Black"];
let i= 0;

btn.addEventListener("click",function(){
   h.style.background=colors[i];
   h.innerHTML=colors[i];
   if(i>=(colors.length - 1)) {
    i=0;
   }
   else {
    i++;
   }

});

 