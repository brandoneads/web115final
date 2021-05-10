"use strict";

/* calls the function and displays on screen using setinterval method in 1000 milliseconds */
window.onload = setInterval(myTime,1000);
/* Function to create date and time. It grabs the ids currentDate and currentTime and converts them into a readable string. */
function myTime(){
    var date = new Date(); 
    document.getElementById("currentDate").innerHTML = date.toDateString();
    document.getElementById("currentTime").innerHTML = date.toLocaleTimeString();
}