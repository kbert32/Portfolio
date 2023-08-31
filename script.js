const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  //   menu.classList.toggle("hidden");
  menu.classList.toggle("visible");
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
