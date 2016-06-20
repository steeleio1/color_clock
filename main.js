// ====================first clock=================

var timeInterval = setInterval(function(){

var currentTime = new Date;

var hours = currentTime.getHours();
 if (hours <10) {
 	hours = "0" + hours
 }

var minutes = currentTime.getMinutes();
 if (minutes <10) {
 	minutes = "0" + minutes
 }

var seconds = currentTime.getSeconds();
 if (seconds <10) {
 	seconds = "0" + seconds
 }

var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; 

var timeStr = hours + ":" + minutes + ":" + seconds;

var clockNode = document.querySelector(".clock");
	clockNode.innerHTML = timeStr;

}, 1000);

// ====================second clock==============

var timeInterval2 = setInterval(function(){

var currentTime = new Date;

var hours = currentTime.getHours();
 if (hours <10) {
 	hours = "0" + hours
 }

var minutes = currentTime.getMinutes();
 if (minutes <10) {
 	minutes = "0" + minutes
 }

var seconds = currentTime.getSeconds();
 if (seconds <10) {
 	seconds = "0" + seconds
 }

var timeStr2 = "#" +hours  + minutes  + seconds;

var clockNode = document.querySelector(".clock2");
	clockNode.innerHTML = timeStr2;

var backgroundchanger = document.querySelector(".clockcontainer2");
backgroundchanger.style.backgroundColor = timeStr2;

}, 1000);



// var backgroundchanger = setInterval(function(){

// var displaycolor = "#" + backgroundchanger;

// var newcolors = document.querySelector("clockcontainer2").style.backgroundColor = "pink";
// 	newcolors.innerHTML = displaycolor;

// }, 3000);