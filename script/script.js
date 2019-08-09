//////////////////////////////////////////////////////////////////////
//                SCROLL NAV BEHAVIOR
//////////////////////////////////////////////////////////////////////

var navigation = document.querySelector(".topNav");

function activateScrollMenu(){
   navigation.classList.remove("simple");
   navigation.classList.add("scroll");
   menuButton.classList.add("scroll");
   document.querySelector(".donateNav").classList.remove("simple");
   document.querySelector(".mobileNavOpenButton a span").classList.add("scroll")
}

function deactivateScrollMenu(){
   navigation.classList.remove("scroll");
   navigation.classList.add("simple");
   menuButton.classList.remove("scroll");
   document.querySelector(".donateNav").classList.add("simple");
   document.querySelector(".mobileNavOpenButton a span").classList.remove("scroll")
}

window.addEventListener("scroll", function(){
   if (window.scrollY > 150){
      activateScrollMenu();
   } else {
      deactivateScrollMenu();
   }
},false);




//////////////////////////////////////////////////////////////////////
//         MOBILE NAV AND MENU BUTTON BEHAVIOR
//////////////////////////////////////////////////////////////////////


var menuButton = document.querySelector(".mobileNavOpenButton");
var mobileMenu = document.querySelector(".mobileNav");
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
      document.querySelector(".mobileNavOpenButton a span").style.display="block";
      mobileMenu.style.display = "block";
      activateScrollMenu()
   }

   function closeMobileMenu(){
      menuButton.classList.remove("isOpen");
      document.querySelector(".mobileNavOpenButton a span").style.display="none";
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
      console.log("window resized");
   }
   //not complete yet but probably good enough for most purposes




//////////////////////////////////////////////////////////////////////
//                LINK PAGE ALERTS
//////////////////////////////////////////////////////////////////////
var donateButtons = document.querySelector(".donateNav");
donateButtons.addEventListener("click",function(e){
   alert("The Jonathan Skerritt Political Action Campaign (PAC) is not accepting donations at this time due to unresolved allegations against the PAC by the Securities and Exchange Commission.  Check back later.");
   e.preventDefault();
},false);

document.getElementById("donateNavMobile").addEventListener("click",function(e){
   alert("The Jonathan Skerritt Political Action Campaign (PAC) is not accepting donations at this time due to unresolved allegations against the PAC by the Securities and Exchange Commission.  Check back later.");
   e.preventDefault();
},false);


var watchInterviewButton = document.querySelector("#interviewLink");
watchInterviewButton.addEventListener("click",function(e){
   alert("Video currently unavailable due to an ongoing anti-libel lawsuit between Jonathan Skerritt Inc. and Fox news.");
   e.preventDefault();
},false);

document.getElementById("youthClickHere").addEventListener("click",function(e){
   alert('Jonathan Skerritt Christian Youth Center website currently unavailable while court case "Parents of Portland Maine vs. Jonathan Skerritt Youth Centers Inc." is still active.');
   e.preventDefault();
},false);



//////////////////////////////////////////////////////////////////////
//                FOOTER BEHAVIOR
//////////////////////////////////////////////////////////////////////

var socialMediaIcons = document.querySelectorAll("footer .socialMedia img");

//on hover of an icon, make the others dim away
for (var i = 0; i < socialMediaIcons.length; i++) {
   (function(j){
      socialMediaIcons[j].addEventListener("mouseover",function(){
         for (var k = 0; k < socialMediaIcons.length; k++) {
            socialMediaIcons[k].classList.add("dimmed");
         }
         socialMediaIcons[j].classList.remove("dimmed");
      },false);
      //remove dimmed effect on mouseout
      socialMediaIcons[j].addEventListener("mouseout",function(){
         for (var k = 0; k < socialMediaIcons.length; k++) {
            socialMediaIcons[k].classList.remove("dimmed");
         }
      },false);
   })(i);
}
