//////////////////////////////////////////////////////////////////////
//                SCROLL NAV HEBAVIOR
//////////////////////////////////////////////////////////////////////

var navigation = document.querySelector(".topNav");

window.addEventListener("scroll", function(){
   if (window.scrollY > 150){
      navigation.classList.remove("simple");
      navigation.classList.add("scroll");
      menuButton.classList.add("scroll");
      document.querySelector(".donateNav").classList.remove("simple");
      document.querySelector(".mobileNavOpenButton a span").classList.add("scroll")

   } else {
      navigation.classList.remove("scroll");
      navigation.classList.add("simple");
      menuButton.classList.remove("scroll");
      document.querySelector(".donateNav").classList.add("simple");
      document.querySelector(".mobileNavOpenButton a span").classList.remove("scroll")

   }
},false);




//////////////////////////////////////////////////////////////////////
//         MOBILE NAV AND MENU BUTTON BEHAVIOR
//////////////////////////////////////////////////////////////////////


var menuButton = document.querySelector(".mobileNavOpenButton");
var mobileMenuIsOpen = false;

menuButton.addEventListener("mouseover",function(){
   document.querySelector(".mobileNavMenu").style.display="block";
},false);

menuButton.addEventListener("mouseout",function(){
   document.querySelector(".mobileNavMenu").style.display="none";
},false);

menuButton.addEventListener("click",function(e){
   e.preventDefault();
   if( !mobileMenuIsOpen){
      menuButton.classList.add("isOpen");
      document.querySelector(".mobileNavOpenButton a span").style.display="block";
   } else {
      menuButton.classList.remove("isOpen");
      document.querySelector(".mobileNavOpenButton a span").style.display="none";
   }
   mobileMenuIsOpen = !mobileMenuIsOpen;

},false)





//////////////////////////////////////////////////////////////////////
//                LINK PAGE ALERTS
//////////////////////////////////////////////////////////////////////
var donateButtons = document.querySelector(".donateNav");

donateButtons.addEventListener("click",function(){
   alert("The Jonathan Skerritt Political Action Campaign (PAC) is not accepting donations at this time due to unresolved allegations against the PAC by the Securities and Exchange Commission.  Check back later.")
},false);
