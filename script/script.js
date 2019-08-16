//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//
//         SCROLL NAV BEHAVIOR
//
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var navigation = document.querySelector(".topNav");

function activateScrollMenu(){
   navigation.classList.remove("simple");
   navigation.classList.add("scroll");
   menuButton.classList.add("scroll");
   document.querySelector(".donateNav").classList.remove("simple");
   document.querySelector("#menuOpen").classList.add("scroll")
}

function deactivateScrollMenu(){
   navigation.classList.remove("scroll");
   navigation.classList.add("simple");
   menuButton.classList.remove("scroll");
   document.querySelector(".donateNav").classList.add("simple");
   document.querySelector("#menuOpen").classList.remove("scroll")
}

window.addEventListener("scroll", function(){
   if (window.pageYOffset > 150){
      activateScrollMenu();
   } else {
      deactivateScrollMenu();
   }
},false);



//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//
//         MOBILE NAV AND MENU BUTTON BEHAVIOR
//
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


var menuButton = document.querySelector(".mobileNavOpenButton");
var mobileMenu = document.querySelector(".mobileNav");
var menuO = document.querySelector("#menuOpen");
var menuX = document.querySelector("#menuClose");
var mobileMenuIsOpen = false;

//creates a hover effect, when hovering over the nav menu button, the word "menu" appears below it

   menuButton.addEventListener("mouseover",function(){
      document.querySelector(".mobileNavMenu").style.display="block";
   },false);

   menuButton.addEventListener("mouseout",function(){
      document.querySelector(".mobileNavMenu").style.display="none";
   },false);


//Toggles mobile menu open and closed when you click the menu button

   function openMobileMenu(){
      menuButton.classList.add("isOpen");
      menuO.style.display="none";
      menuX.style.display="block";
      mobileMenu.style.display = "block";
      activateScrollMenu()
   }

   function closeMobileMenu(){
      menuButton.classList.remove("isOpen");
      menuX.style.display="none";
      menuO.style.display="block";
      mobileMenu.style.display = "none";
      if (window.pageYOffset < 150){
         deactivateScrollMenu();
      }
   }


   menuButton.addEventListener("click",function(e){
      e.preventDefault();
      if( !mobileMenuIsOpen){
         openMobileMenu();
      } else {
         closeMobileMenu();
      }
      mobileMenuIsOpen = !mobileMenuIsOpen;

   },false)


// Closes mobile menu when a link is clicked

var mobileLinks = document.querySelectorAll(".mobileNav a");

for (var i = 0; i < mobileLinks.length - 1; i++) {
   (function(j){
      mobileLinks[j].addEventListener("click",function(){
         closeMobileMenu();
         mobileMenuIsOpen = false;
      },false);
   })(i)

}


// little code to make sure that if user sizes window down to mobile size, then opens menu, then resizes the window to be too large without having closed the mobile menu

   function closeMobileNav(){
      if (window.innerWidth >= 750){
         menuButton.classList.remove("isOpen");
         document.querySelector(".mobileNavOpenButton a span").style.display="none";
         mobileMenu.style.display = "none";
         deactivateScrollMenu();
         mobileMenuIsOpen = false;
      }
   }

   // window.addEventListener("resize",closeMobileNav(),false);
   //not complete yet but probably good enough for most purposes




//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//
//                FOOTER BEHAVIOR
//
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


//SOCIAL MEDIA ICON HOVER BEHAVIOR

var socialMediaIcons = document.querySelectorAll("footer .socialMedia img");

for (var i = 0; i < socialMediaIcons.length; i++) {
   (function(j){

      //on hover of an icon, make the others dim away
      socialMediaIcons[j].addEventListener("mouseover",function(){
         for (var k = 0; k < socialMediaIcons.length; k++) {
            socialMediaIcons[k].classList.add("dimmed");
         }
         socialMediaIcons[j].classList.remove("dimmed");
      },false);

      //remove dimmed effect on mouseout
      socialMediaIcons[j].addEventListener("mouseout",function(){
         var delayUndim = setTimeout( function(){
            for (var k = 0; k < socialMediaIcons.length; k++) {
               socialMediaIcons[k].classList.remove("dimmed");
            }
         }, 500)
      },false);

   })(i);
}


// INPUT TEXT FIELDS BEHAVIOR

var emailUI = document.querySelector("#emailInput");
var zipUI = document.querySelector("#zipInput");

var youCantBeSerious = "You can't be serious";
var counter = 0;

var boobs = "80085";
var counterZip = 0;

emailUI.addEventListener("keydown",function(e){
   if (e.key.length === 1 && counter <= youCantBeSerious.length){
      e.preventDefault();
      if (counter < youCantBeSerious.length) {
         counter++;
      }
   }
   if (e.keyCode === 8 && counter !== 0){
      e.preventDefault();
      if (window.getSelection().toString().length > 0){
         counter = counter - window.getSelection().toString().length
      } else {
         counter--;
      }
   }
   emailUI.value = youCantBeSerious.slice(0,counter);


   console.log(`emailUI length is ${emailUI.value.length} and counter is ${counter}`)
   console.log(`you pressed the ${e.key} key`)


},false);

zipUI.addEventListener("keydown",function(e){
   if (e.key.length === 1 && counterZip <= boobs.length){
      e.preventDefault();
      if (counterZip < boobs.length) {
         counterZip++;
      }
   }
   else if (e.keyCode === 8 && counterZip !== 0){
      e.preventDefault();
      if (window.getSelection().toString().length > 0){
         counterZip = counterZip - window.getSelection().toString().length
      } else {
         counterZip--;
      }
   }
   zipUI.value = boobs.slice(0,counterZip);

   //change font to orbitron if there are any typed characters in the zip field
   if (counterZip > 0) {
      zipUI.style.fontFamily = " 'Orbitron', sans-serif ";
   } else {
      zipUI.style.fontFamily = " 'Helvetica Neue', Helvetica, Arial, sans-serif ";
   }

   console.log(`zipUI length is ${zipUI.value.length} and counterZip is ${counterZip}`)


},false);
