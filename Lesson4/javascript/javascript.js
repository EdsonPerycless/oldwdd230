//("Last Updated " +  now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear() )
let getDate = new Date
window.onload = function myFunction() {
    document.getElementById("p1").innerHTML = getDate;
}

let nav = document.getElementById("navbar"),
    mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {
    
    "use strict";
    
    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");
    
};