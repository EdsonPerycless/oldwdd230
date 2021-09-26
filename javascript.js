//("Last Updated " +  now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear() )
let getDate = new Date
window.onload = function myFunction() {
    document.getElementById("p1").innerHTML = getDate;
}

