
document.addEventListener("keydown", function(event) {
    const keyDisplay = document.getElementById("keyDisplay");
    keyDisplay.textContent = event.key;
    keyDisplay.style.animation = "none"; // Reset animation
    setTimeout(() => {
        keyDisplay.style.animation = "fadeIn 0.2s ease-in-out";
    }, 10); // Re-apply animation for each keypress
});
