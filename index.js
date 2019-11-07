var button = document.querySelectorAll(".btn");
var form = document.querySelector("form");

for (var i=0; i<button.length; i++){
    button[i].addEventListener("click", function(e){
        form.classList.remove("hide");
    });
}