document.addEventListener("DOMContentLoaded", function() {
    const emoji = document.querySelector(".emoji");

    emoji.addEventListener("click", function() {
        alert("Tangina nyo Skibidi Member!");
        this.style.transform = "scale(1.5)";
        setTimeout(() => {
            this.style.transform = "scale(1)";
        }, 300);
    });
});
