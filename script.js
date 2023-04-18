// alert("I'm an alert")

//Click the share icon and display the new div
document.querySelector(".share-btn").addEventListener("click", function() {
    document.querySelector(".open-share").style.display = "none";
    document.querySelector(".open-share").style.display = "flex";
});

// click to close the new div
document.querySelector(".popup-btn").addEventListener("click", function() {
    document.querySelector(".open-share").style.display = "none";
});

// closing the div on desktop screen size
document.querySelector(".close").addEventListener("click", function() {
    document.querySelector(".open-share").style.display = "none";
});

