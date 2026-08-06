const menuButton = document.querySelector(".mobile-menu-btn");
const menuOverlay = document.querySelector(".mobile-menu-overlay");
const menuClose = document.querySelector(".mobile-menu-close");

if (menuButton && menuOverlay && menuClose) {

    menuButton.addEventListener("click", () => {
        menuOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
    });

    menuClose.addEventListener("click", () => {
        menuOverlay.classList.remove("active");
        document.body.style.overflow = "";
    });

}