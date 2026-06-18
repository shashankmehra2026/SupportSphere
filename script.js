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
    
console.log("FAQ JS Loaded");
const faqItems = document.querySelectorAll('.faq-item');
alert("FAQ Items Found: " + faqItems.length);

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        item.classList.toggle('active');

        const icon = question.querySelector('span');

        if (item.classList.contains('active')) {
            icon.textContent = '−';
        } else {
            icon.textContent = '+';
        }
    });
});