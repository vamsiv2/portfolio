document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");

    for (const link of links) {
        link.addEventListener("click", smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
        });
    }

    // Contact form validation
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
    });
});