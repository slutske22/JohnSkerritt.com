


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


var donateButtons = document.querySelector(".donateNav");

donateButtons.addEventListener("click",function(){
   alert("The Jonathan Skerritt Political Action Campaign (PAC) is not accepting donations at this time due to unresolved allegations against the PAC by the Securities and Exchange Commission.  Check back later.")
},false);
