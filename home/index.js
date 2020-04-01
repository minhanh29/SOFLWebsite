"use strict";


/* 2.4.6 - a,b - Home Page*/
//Clock
setInterval("showClock()", 1000);
function showClock () {
    var currentTime = new Date();
    var eventTime = new Date("April 30, 2020 8:00:00");
    
    var daysLeft = (eventTime - currentTime)/(1000*60*60*24);
    var hrsLeft = (daysLeft - Math.floor(daysLeft))*24;
    var minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
    var secsLeft = (minsLeft - Math.floor(minsLeft))*60;

    var timeLeft = Math.floor(daysLeft) + " days " + Math.floor(hrsLeft) + ":" + Math.floor(minsLeft) + ":" + Math.floor(secsLeft);

    document.getElementById("clock").innerHTML = timeLeft;
}
