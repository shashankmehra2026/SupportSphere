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

document.getElementById("contactForm").addEventListener("submit", function(e) {

e.preventDefault();

const formData = new FormData();

formData.append("entry.1552722244", document.getElementById("name").value);
formData.append("entry.290524923", document.getElementById("email").value);
formData.append("entry.832263973", document.getElementById("company").value);
formData.append("entry.89871982", document.getElementById("phone").value);
formData.append("entry.155127433", document.getElementById("message").value);

fetch(
"https://docs.google.com/forms/d/e/1FAIpQLSfcD03Mr8dY9lHkOrwQBSB6Vx4Mk2mO1BNHlPqJ9vDCIDDnPg/formResponse",
{
method: "POST",
mode: "no-cors",
body: formData
}
)
.then(() => {

document.getElementById("successMessage").style.display = "block";

document.getElementById("contactForm").reset();

})
.catch(error => console.error(error));

});
const backToTop = document.getElementById("backToTop");

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
const faqItems = document.querySelectorAll('.faq-item');

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