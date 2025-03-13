// document

// console.log(document, "whats in our document");
// console.log(Date.now(), "current date and time");

// const now = new Date();
// const hours = now.getHours();

const hours = new Date().getHours();
console.log(hours, "current hour");
//getElementById
//getElementByClassName
//getElementByTagName
//getElementByName
//querySelector
//querySelectorAll

// document.getElementById("greeting").innerText = "Good Morning";

if (hours >= 0 && hours < 12) {
  document.getElementById("greeting").innerText = "Good Morning";
} else if (hours >= 12 && hours < 16) {
  document.getElementById("greeting").innerText = "Good Afternoon";
} else if (hours >= 18 && hours < 21) {
  document.getElementById("greeting").innerText = "Good Evening";
} else {
  document.getElementById("greeting").innerText = "Good Night";
}

// const hours = new Date().getHours();
// console.log(hours, "current hour");

// switch (true) {
//   case hours >= 0 && hours < 12:
//     document.getElementById("greeting").innerText = "Good Morning";
//     break;
//   case hours >= 12 && hours < 16:
//     document.getElementById("greeting").innerText = "Good Afternoon";
//     break;
//   case hours >= 16 && hours < 18:
//     document.getElementById("greeting").innerText = "Good Evening";
//     break;
//   default:
//     document.getElementById("greeting").innerText = "Good Night";
//     break;
// }

// document.getElementsByClassName("header").innerHTML = "Hello World";
// document.getElementByClassName("header").addEventListener("click", function () {
//   document.getElementByClassName("header").style.color = "red";
// });

// document.getElementsByTagName("button").addEventListener("click", function () {
//   console.log("Working");
//   document.getElementsByClassName("header")[0].style.color = "red";
// });

function changeColor() {
  console.log("Working");
  document.getElementsByClassName("header")[0].style.backgroundColor = "blue";
}

function israel() {
  console.log("My name is Israel");
}

function greeting() {
  console.log("Good Afternoon Sir!");
}

document
  .getElementsByClassName("btn")[0]
  .addEventListener("click", changeColor);

function changeName() {
  const typing = document.getElementById("name").value;
  document.getElementById("name").value = typing.toUpperCase();
  // console.log(document.getElementsByClassName("userName"));
  document.getElementsByClassName("userName")[0].innerText =
    typing.toUpperCase();
}

function changeToSmallLetters() {
  const typing = document.getElementById("email").value;
  document.getElementById("email").value = typing.toLowerCase();
  document.getElementsByClassName("userEmail")[0].innerText =
    typing.toLowerCase();
}

//IMAGE CHANGER
//STYLING - CSS
//EVENT HANDLING
//FORM VALIDATION - INPUT FIELD
// document.writeln("<h1>Image Changer</h1>");

// onanimationiteration
// :
// null
// onanimationstart
// :
// null
// onauxclick
// :
// null
// onbeforecopy
// :
// null
// onbeforecut
// :
// null
// onbeforeinput
// :
// null
// onbeforematch
// :
// null
// onbeforepaste
// :
// null
// onbeforetoggle
// :
// null
// onbeforexrselect
// :
// null
// onblur
// :
// null
// oncancel
// :
// null
// oncanplay
// :
// null
// oncanplaythrough
// :
// null
// onchange
// :
// null
// onclick
// :
// null
// onclose
// :
// null
// oncontentvisibilityautostatechange
// :
// null
// oncontextlost
// :
// null
// oncontextmenu
// :
// null
// oncontextrestored
// :
// null
// oncopy
// :
// null
// oncuechange
// :
// null
// oncut
// :
// null
// ondblclick
// :
// null
// ondrag
// :
// null
// ondragend
// :
// null
// ondragenter
// :
// null
// ondragleave
// :
// null
// ondragover
// :
// null
// ondragstart
// :
// null
// ondrop
// :
// null
// ondurationchange
// :
// null
// onemptied
// :
// null
// onended
// :
// null
// onerror
// :
// null
// onfocus
// :
// null
// onformdata
// :
// null
// onfreeze
// :
// null
// onfullscreenchange
// :
// null
// onfullscreenerror
// :
// null
// ongotpointercapture
// :
// null
// oninput
// :
// null
// oninvalid
// :
// null
// onkeydown
// :
// null
// onkeypress
// :
// null
// onkeyup
// :
// null
// onload
// :
// null
// onloadeddata
// :
// null
// onloadedmetadata
// :
// null
// onloadstart
// :
// null
// onlostpointercapture
// :
// null
// onmousedown
// :
// null
// onmouseenter
// :
// null
// onmouseleave
// :
// null
// onmousemove
// :
// null
// onmouseout
// :
// null
// onmouseover
// :
// null
// onmouseup
// :
// null
// onmousewheel
// :
// null
// onpaste
// :
// null
// onpause
// :
// null
// onplay
// :
// null
// onplaying
// :
// null
// onpointercancel
// :
// null
// onpointerdown
// :
// null
// onpointerenter
// :
// null
// onpointerleave
// :
// null
// onpointerlockchange
// :
// null
// onpointerlockerror
// :
// null
// onpointermove
// :
// null
// onpointerout
// :
// null
// onpointerover
// :
// null
// onpointerrawupdate
// :
// null
// onpointerup
// :
// null
// onprerenderingchange
// :
// null
// onprogress
// :
// null
// onratechange
// :
// null
// onreadystatechange
// :
// null
// onreset
// :
// null
// onresize
// :
// null
// onresume
// :
// null
// onscroll
// :
// null
// onscrollend
// :
// null
// onscrollsnapchange
// :
// null
// onscrollsnapchanging
// :
// null
// onsearch
// :
// null
// onsecuritypolicyviolation
// :
// null
// onseeked
// :
// null
// onseeking
// :
// null
// onselect
// :
// null
// onselectionchange
// :
// null
// onselectstart
// :
// null
// onslotchange
// :
// null
// onstalled
// :
// null
// onsubmit
// :
// null
// onsuspend
// :
// null
// ontimeupdate
// :
// null
// ontoggle
// :
// null
// ontransitioncancel
// :
// null
// ontransitionend
// :
// null
// ontransitionrun
// :
// null
// ontransitionstart
// :
// null
// onvisibilitychange
// :
// null
// onvolumechange
// :
// null
// onwaiting
// :
// null
// onwebkitanimationend
// :
// null
// onwebkitanimationiteration
// :
// null
// onwebkitanimationstart
// :
// null
// onwebkitfullscreenchange
// :
// null
// onwebkitfullscreenerror
// :
// null
// onwebkittransitionend
// :
// null
// onwheel
// :
// null
