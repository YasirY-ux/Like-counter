var img = document.querySelector("img");
var icon = document.querySelector("i");
const Likes = document.querySelector(".Likes");

let Like = parseInt(localStorage.getItem("Like")) || 0;
Likes.textContent = Like;

img.addEventListener("dblclick", function(event) {
    Like++;
    localStorage.setItem("Like", Like);
    Likes.textContent = Like;

    const rect = img.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    icon.style.left = `${x}px`;
    icon.style.top = `${y}px`;
    icon.style.transform = "scale(1)";
    icon.style.color = "red";

    setTimeout(function() {
        icon.style.transform = "scale(0)";
        icon.style.color = "white";
    }, 800);
});