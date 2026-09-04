window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script16 = function()
{
  const donut1 = object('5VH9lWpSihb');

donut1.style.opacity = 0; // Ensure it starts invisible

function loopAnimation() {
    donut1.animate([
     
        { opacity: .0, scale: '.1 .1' }, // Initial state
        { opacity: .25, scale: '.1 .1' },//offset: 0.5 / (0.5 + 0.5 + 0.5) }, // Fade in and grow simultaneously
        { opacity: .5, scale: '1 1' }, // Fade out
   		{ opacity: .75, scale: '1 1' }, 
   		{ opacity: 0, scale: '1 1' },
   		//{ opacity: .25, scale: '.5 .5' },
   		//{ opacity: 0, scale: '.25 .25' },
   		//{ opacity: .5, scale: '.75 .75' },
   		//{ opacity: .75, scale: '1 1' },
   		
   		// Fade out
        //{ opacity: 1, scale: '1.25 1.25' }, // Initial state
        //{ opacity: .5, scale: '1 1'} 1.25},// / (0.5 + 0.5 + 0.5) }, // Fade in and grow simultaneously
        //{ opacity: 1, scale: '1.2, 1.2', },
        //{ opacity: 1, scale: '1.1 1.1', },
        //{ opacity: 1, scale: '1  1' } // Fade out
    ], { 
        duration: 880, // Total duration for the loop
        iterations: Infinity, // Infinite looping
        easing: 'ease-out',
        fill: 'forwards' 
    });
}

loopAnimation();
}

window.Script17 = function()
{
  /*
let Donut10 = object("6eaPgjaOTxN");

//Donut10.opacity = 10;
//Donut10.scale = 70;
//gsap.to(Oval10, { scale: 100, opacity: 90, duration: 1, delay: .5, ease: "power1.out" });
//gsap.to(Oval10, { scale: 70, opacity: 20, duration: 1.5, delay: 1.25, ease: "power1.in" });



Donut10.opacity = 0; // Ensure it starts invisible

function loopAnimation() {
    donut1.animate([
     
        { opacity: 0, scale: '1 1' }, // Initial state
        { opacity: .5, scale: '1 1'},
        { opacity: .75, scale: '1 .1' },,//offset: 0.25 / (0.25 + 0.25 + 0.25) }, // Fade in and grow simultaneously
        { opacity: .0, scale: '1 1' } // Fade out
   		//{ opacity: 0, scale: '.9 .9' } // Fade out
        //{ opacity: 1, scale: '1.25 1.25' }, // Initial state
        //{ opacity: .5, scale: '1 1'} 1.25},// / (0.5 + 0.5 + 0.5) }, // Fade in and grow simultaneously
        //{ opacity: 1, scale: '1.2, 1.2', },
        //{ opacity: 1, scale: '1.1 1.1', },
        //{ opacity: 1, scale: '1  1' } // Fade out
    ], { 
        duration: 400, // Total duration for the loop
        iterations: 1, // Infinite looping
        easing: 'ease-out',
        fill: 'forwards' 
    });
}*/

}

window.Script18 = function()
{
  // Reference to the element
//const maintext = document.querySelector("[data-model-id='6HKDmc5cRXA']");
let maintext = document.querySelector("[data-model-id='6HKDmc5cRXA']");
var BASE_FONT_SIZE = 32;
var BASE_SLIDE_WIDTH = 960;

///

// Set the text style, including bold font



// Find the slide container that Storyline scales
var slideContainer = maintext.closest('.slide-container') || maintext.closest('[style*="--slide-window-scale"]');

function getScaledFontSize() {
  var scale = 1;
  if (slideContainer) {
    var scaleVal = getComputedStyle(slideContainer).getPropertyValue('--slide-window-scale');
    if (scaleVal) {
      scale = parseFloat(scaleVal);
    }
  }
  // Fallback: calculate scale from the actual rendered width of the slide container
  if (!scale || isNaN(scale) || scale === 1) {
    var container = maintext.closest('.slide-layer') || maintext.closest('.slide');
    if (container) {
      var actualWidth = container.getBoundingClientRect().width;
      scale = actualWidth / BASE_SLIDE_WIDTH;
    }
  }
  return BASE_FONT_SIZE * scale;
}


function applyFontSize() {
  maintext.style.fontSize = getScaledFontSize() + "px";
}

// Apply font styles so GSAP text inherits the correct Storyline font
maintext.style.fontWeight = "bold"; // Makes the font bold
maintext.style.fontFamily = "Arial, sans-serif";
maintext.style.color = "#F2F2F3";
maintext.style.lineHeight = "1.2";;
maintext.style.opacity = 1;
applyFontSize();

// Update font size on resize so it stays in sync with Storyline's scaling
window.addEventListener("resize", applyFontSize);

// Clear the existing vector/SVG text content so GSAP can work with plain text
maintext.innerHTML = "";

// Add animation properties
const script = document.createElement("script");
script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/TextPlugin.min.js";
script.onload = () => {
  gsap.registerPlugin(TextPlugin);

  // Now you can use it
  gsap.to(maintext, {
    duration: 5.5,
    text: "Ready to move the needle on your Storyline courses!",
    ease: "sine.out",
  });
};
document.head.appendChild(script);
}

window.Script19 = function()
{
  let TextBox2 = object("6b94wnm47HC");

TextBox2.opacity = 0;
TextBox2.scale = 80;
gsap.to(TextBox2, { x: 210, y: 50, scale: 140, opacity: 80, duration: 2, delay: .02, ease: "sine.in" });
TextBox2.opacity = 100;
}

window.Script20 = function()
{
  const itemsSelected = object('6Wd3G0svDIB');


}

window.Script21 = function()
{
  Donut3 = object("5ZZnfQhMgQN");
Donut3.rotation = -1080,
//gsap.fromTo(Donut3, {rotation: 1080 }, { rotation: 0, duration: 1.5, delay: 0, ease: "sine.inOut" });
gsap.to(Donut3, { rotation: 1080, duration: 1.5, delay: 0.01, ease: "sine.inOut" });
}

window.Script22 = function()
{
  Donut2 = object("5skFBv5VMw6");
Donut2.rotation = 1080,
//gsap.fromTo(donut2, {rotation: -1080 }, { rotation: 0, duration: 1.5, delay: 0, ease: "sine.inOut" });//
gsap.to(Donut2, { rotation: -1080, duration: 1.5, delay: 0.1, ease: "sine.inOut" });
}

window.Script23 = function()
{
  Donut2 = object("5skFBv5VMw6");
Donut2.rotation = 0,
//gsap.fromTo(donut2, {rotation: 0 }, { rotation: -1080, duration: 1.5, delay: 0, ease: "sine.inOut" });
//gsap.to(donut2, { rotation: 0, duration: 1.5, delay: 0.1, ease: "sine.inOut" });
gsap.to(Donut2, { rotation: 1080, duration: 1.5, delay: 0.01, ease: "sine.inOut" });
}

window.Script24 = function()
{
  
Donut3 = object("5ZZnfQhMgQN");
Donut3.rotation = 1080,
//gsap.To(Donut3, { rotation: 1080, duration: 1.5, delay: 0, ease: "sine.inOut" });
gsap.to(Donut3, { rotation: -1080, duration: 1.5, delay: 0.01, ease: "sine.inOut" });

}

window.Script25 = function()
{
  MyDial = object("5iFyxMJqHzG");
MyDial.rotation = 80,
//gsap.fromTo(Donut3, {rotation: 1080 }, { rotation: 0, duration: 1.5, delay: 0, ease: "sine.inOut" });
gsap.to(MyDial, { rotation: 0, duration: .75, delay: .5, ease: "sine.out" });

}

};
