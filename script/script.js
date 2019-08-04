


var menuButton = document.querySelector(".mobileNavOpenButton");

menuButton.addEventListener("mouseover",function(){
   document.querySelector(".mobileNavMenu").style.display="block";
},false);

menuButton.addEventListener("mouseout",function(){
   document.querySelector(".mobileNavMenu").style.display="none";
},false);

menuButton.addEventListener("click",function(){
   menuButton.classList.add("isOpen");
},false)
