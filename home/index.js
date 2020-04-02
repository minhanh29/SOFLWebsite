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


/*Gallery Slide*/
var current = 1;  //indicate the current slide's index
//switch between the 3 slides
function changeSlide(index) {
    if (index == 1) {
        if (current == 3)
            currentSlide(1);
        else {
            current++;
            currentSlide(current);
        }
    }

    if (index == -1) {
        if (current == 1)
            currentSlide(3);
        else {
            current--;
            currentSlide(current);
        }
    }
}

//set current slide status
function currentSlide(index) {
    var bg = ["url('home/homebG.webp')", "url('home/strawing.webp')", "url('home/swapper.webp')"];  //store 3 image sources
    var caps = document.getElementsByClassName("caption");   //store 2 captions
    var container = document.getElementById("gallery-container");   //get the container to change its background
    var dots = document.getElementsByClassName("dot");

    //change the container background
    container.style.backgroundImage = bg[index-1];

    //change the dots' backgrounds
    for (var i = 0; i < dots.length; i++)       //reset backgrounds
        dots[i].classList.remove("active");
    dots[index-1].classList.add("active");      //apply active background to the selected dot

    //display the captions 
    //reset captions' status
    for (var i = 0; i < caps.length; i++) 
        caps[i].setAttribute("id", "");
    switch (index) {
        case 2:
            caps[0].setAttribute("id", "show");
            break;
        case 3:
            caps[1].setAttribute("id", "show");
            break;
        default:
            break;
    }

    current = index;
}

/*Automatic slide change*/
var autoSlide = setInterval("changeSlide(1)", 5000);
