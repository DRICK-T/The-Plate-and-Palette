document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").replace('.html', '');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            } else {
                window.location.href = this.getAttribute("href"); // Navigate to other pages
            }
        });
    });

    // Contact form validation and message storage
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Please fill in all fields before submitting.");
                return;
            }

            // Store message in local storage (simulating saving messages)
            let messages = JSON.parse(localStorage.getItem("contactMessages")) || [];
            messages.push({ name, email, message });
            localStorage.setItem("contactMessages", JSON.stringify(messages));

            // Show confirmation message
            alert(`Thank you, ${name}! Your message has been recorded. We will get back to you soon.`);

            // Reset the form after submission
            contactForm.reset();
        });
    }
});
