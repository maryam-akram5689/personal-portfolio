
const contactForm = document.getElementById("contactForm");
const message = document.getElementById("message");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  message.textContent =
    "Thank you! Your message has been submitted successfully.";

  message.style.color = "#a78bfa";

  contactForm.reset();
});

