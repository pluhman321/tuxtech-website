// Creates random shooting stars in the background
document.addEventListener("DOMContentLoaded", () => {
    const starContainer = document.querySelector(".shooting-stars");

    function createStar() {
        let star = document.createElement("div");
        star.classList.add("shooting-star");
        star.style.top = Math.random() * window.innerHeight + "px";
        star.style.left = Math.random() * window.innerWidth + "px";
        document.body.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 3000);
    }

    setInterval(createStar, 500);
});