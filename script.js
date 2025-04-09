const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const pageLinks = menu.querySelectorAll("a");

// document.addEventListener("click", (event) => {
//   if (!menu.classList.contains(".visible")) {
//     return;
//   }
//   if (!event.closest("#menu")) {
//     navToggle();
//   }
// });

// document.addEventListener("click", closeit);

btn.addEventListener("click", navToggle);

// pageLinks.forEach((child) => {
//   child.addEventListener("click", navToggle);
// });

function closeit(event) {
  if (event.target.id === "menu" || event.target.tagName === "BUTTON") {
    return;
  }
  navToggle();
  console.log("closeit");
  console.log(event.target.tagName);
}

function navToggle() {
  if (menu.classList.contains("visible")) {
    document.removeEventListener("click", closeit);
  }
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("visible");
  if (menu.classList.contains("visible")) {
    document.addEventListener("click", closeit);
  }
  console.log("navToggle");
}

// emailjs.init("YKu48JfyIl8eV0_hJ");

// window.onload = function () {
//   document
//     .getElementById("contact-form")
//     .addEventListener("submit", function (event) {
//       event.preventDefault();
//       // generate a five digit number for the contact_number variable
//       this.contact_number.value = (Math.random() * 100000) | 0;
//       // these IDs from the previous steps
//       emailjs.sendForm("contact_service", "contact_form", this).then(
//         function () {
//           console.log("SUCCESS!");
//         },
//         function (error) {
//           console.log("FAILED...", error);
//         }
//       );
//     });
// };
