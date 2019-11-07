var button = document.querySelectorAll(".btn");
var submitBtn = document.querySelector(".submit");
var form = document.querySelector("form");
var img = document.querySelector(".tripImage");
var destination = document.querySelector("select");



for (var i=0; i<button.length; i++){
    button[i].addEventListener("click", function(e){
        form.classList.remove("hide");
    });
}

destination.addEventListener("click", function(e){
    var choice = destination.value;
    e.preventDefault();
    if (choice === "sun"){
        img.style.background = 'url("../img/desert.jpg")';
    }
    if (choice === "mount"){
        img.style.background = 'url("../img/mount.jpg")';
    }
    if (choice === "island"){
        img.style.background = 'url("../img/island.jpg")';
    }


});