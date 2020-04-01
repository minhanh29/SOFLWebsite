"use strict";

/*Side Navigation List Functions*/
//show navigation list in mobile and tablet modes
function showNav() {
    document.getElementById("navId").style.display = "block";
    setTimeout("setLeft()", 100);
    document.getElementById("background").style.display = "block";
}

function setLeft() {
    document.getElementById("navId").style.left = "0px";
}

//hide navigation list in mobile and tablet modes
function hideNav() {
    document.getElementById("navId").style.left = "-260px";
    setTimeout("setNone()", 800);
}

function setNone() {
    document.getElementById("background").style.display = "none";
    document.getElementById("navId").style.display = "none";
}

//hide the navigation list in desktop mode
setInterval("hideNavDesk()", 100);

function hideNavDesk() {
    var navicon = document.getElementById("naviconId");
    var Style = window.getComputedStyle(navicon);
    var disStatus = Style.getPropertyValue("display");

    if (disStatus == "none") {
        hideNav();
    }
}


/*Shopping cart*/
//show the cart content
function showCart() {
    document.getElementById("cartContainer").style.display = "block";
    document.getElementById("cartBg").style.display = "block";
}


//hide the cart content
function hideCart() {
    document.getElementById("cartContainer").style.display = "none";
    document.getElementById("cartBg").style.display = "none";
}


/*Showing the last modified date*/
lastModifiedDate();
function lastModifiedDate() {
    var date = new Date(document.lastModified);

    document.getElementById("update").innerHTML += " " + date.toLocaleDateString(); 
}