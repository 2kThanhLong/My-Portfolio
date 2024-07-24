let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + " ]")
          .classList.add("active");
      });
    }
  });
};
menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-x");
  navbar.classList.toggle("active");
};

//Emailjs
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // get info
    var templateParams = {
      from_name: this.from_name.value,
      from_email: this.from_email.value,
      phone: this.phone.value,
      message: this.message.value,
    };

    // send email
    emailjs.send("service_vba2bj5", "template_okdc0h9", templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        //reset form
        document.getElementById("contact-form").reset();
      },
      function (error) {
        console.log("FAILED...", error);
        alert("Message failed to send.");
      }
    );
  });
