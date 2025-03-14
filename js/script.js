document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let index = 0;

  function showNextSlide() {
    slides[index].classList.remove("active"); // Remove active class from current slide
    index = (index + 1) % slides.length; // Move to the next image, loop back to first
    slides[index].classList.add("active"); // Add active class to new slide
  }

  setInterval(showNextSlide, 4000); // Change image every 4 seconds
});

const menuIcon = document.querySelector(".hamburger-icon");
const mobileMenu = document.querySelector(".mobile-nav");

const closeMenu = document.querySelector(".close-menu");

function toggleMenu() {
  mobileMenu.classList.toggle("show-menu");
}

menuIcon.addEventListener("click", toggleMenu);

closeMenu.addEventListener("click", toggleMenu);

document
  .getElementById("myForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Stop default redirection

    const formData = new FormData(this);

    try {
      const response = await fetch("https://formspree.io/f/mqapakpn", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        this.reset(); // Clear the form after success
      } else {
        alert(
          "Oops! Something went wrong. Make sure the email address is correct"
        );
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit. Please try again.");
    }
  });
