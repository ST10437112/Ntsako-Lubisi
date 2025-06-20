document.addEventListener("DOMContentLoaded", function () {
  // ===== Contact Form =====
  const form = document.getElementById("contactForm");
  const messageDiv = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name && email && message) {
        messageDiv.textContent = `Thank you for contacting us, ${name}!`;
        messageDiv.style.color = "green";
        form.reset();
      } else {
        messageDiv.textContent = "Please fill in all fields.";
        messageDiv.style.color = "red";
      }
    });
  }
});


