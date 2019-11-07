var sun = document.querySelector(".sun");
var mount = document.querySelector(".mount");
var island = document.querySelector(".island");
var form = document.querySelector(".form");
var img = document.querySelector(".tripImage");
var destination = document.querySelector("select");



    sun.addEventListener("click", function(e){
        form.classList.remove("hide");
        img.style.background = 'url("../img/desert.jpg")';

    });
    mount.addEventListener("click", function(e){
        form.classList.remove("hide");
        img.style.background = 'url("../img/mount.jpg")';

    });
    island.addEventListener("click", function(e){
        form.classList.remove("hide");
        img.style.background = 'url("../img/island.jpg")';

    });


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