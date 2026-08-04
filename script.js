window.addEventListener("scroll", () => {

const cards = document.querySelectorAll(
".service-card,.about-card,.stat-card,.testimonial-card"
);

cards.forEach(card => {

const top = card.getBoundingClientRect().top;

if(top < window.innerHeight - 100){
card.style.opacity = "1";
card.style.transform = "translateY(0)";
}

});

});

/* HOMEPAGE FORM */

const homepageForm = document.getElementById("homepageForm");

if (homepageForm) {

    homepageForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const formData = new FormData();

        formData.append("entry.41570321", document.getElementById("name").value);
        formData.append("entry.152664379", document.getElementById("email").value);
        formData.append("entry.712659114", document.getElementById("company").value);
        formData.append("entry.319167195", document.getElementById("phone").value);
        formData.append("entry.1684864340", document.getElementById("message").value);

        fetch(
            "https://docs.google.com/forms/d/e/1FAIpQLSc3YA6Lz-ZbB5u32mjCqzECcWTXLzbCog4eiY1EDTNu3OoZjg/formResponse",
            {
                method: "POST",
                mode: "no-cors",
                body: formData
            }
        )
        .then(() => {

            document.getElementById("homepageSuccessMessage").style.display = "block";

            homepageForm.reset();

        })
        .catch(error => console.error(error));

    });

}


/* CONTACT PAGE FORM */

const contactPageForm = document.getElementById("contactPageForm");

if (contactPageForm) {

    contactPageForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const formData = new FormData();

        formData.append("entry.41570321", document.getElementById("name").value);
        formData.append("entry.152664379", document.getElementById("email").value);
        formData.append("entry.712659114", document.getElementById("company").value);
        formData.append("entry.319167195", document.getElementById("phone").value);
        formData.append("entry.1881054381", document.getElementById("service").value);
        formData.append("entry.1832702163", document.getElementById("message").value);

        fetch(
            "https://docs.google.com/forms/d/e/1FAIpQLSfqMKULiJ0K5kggej-7RuTISVPySwJXq0PzkoswWiqgKAbDGA/formResponse",
            {
                method: "POST",
                mode: "no-cors",
                body: formData
            }
        )
        .then(() => {

            document.getElementById("contactSuccessMessage").style.display = "block";

            contactPageForm.reset();

        })
        .catch(error => console.error(error));

    });

}
const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

}
    
// ===============================
// SEARCH POPUP
// ===============================

const searchButton = document.querySelector(".search-icon a");
const searchOverlay = document.querySelector(".search-overlay");
const closeSearch = document.querySelector(".close-search");
const popupSearchInput = document.querySelector(".search-box input");

if (searchButton && searchOverlay && closeSearch && popupSearchInput) {

    searchButton.addEventListener("click", function (e) {
        e.preventDefault();

        searchOverlay.classList.add("active");
        popupSearchInput.focus();
    });

    closeSearch.addEventListener("click", function () {
        searchOverlay.classList.remove("active");
    });

    searchOverlay.addEventListener("click", function (e) {
        if (e.target === searchOverlay) {
            searchOverlay.classList.remove("active");
        }
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            searchOverlay.classList.remove("active");
        }
    });

}
/* ==========================
   WHY SUPPORTSPHERE ANIMATION
========================== */

const whyItems = document.querySelectorAll(".why-item");

const whyObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        } else {

            entry.target.classList.remove("show");

        }

    });

}, {
    threshold: 0.2
});

whyItems.forEach(item => {
    whyObserver.observe(item);
});

// ===========================
// MOBILE MENU
// ===========================

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".nav-links");

if (menuToggle && mobileMenu) {

    menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
    });

}