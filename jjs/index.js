
const navTog = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav-link");

navTog.addEventListener("click",() => {
    document.body.classList.toggle('nav-open');
})

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove('nav-open');
    })
})
