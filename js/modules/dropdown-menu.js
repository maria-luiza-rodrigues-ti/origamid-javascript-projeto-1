export default function initDropdownMenu() {}

const dropdownMenys = document.querySelectorAll("[data-dropdown");

dropdownMenys.forEach((menu) => {
  ["touchstart", "click"].forEach((userEvent) => {
    menu.addEventListener(userEvent, handleClick);
  });
});

function handleClick(event) {
  event.preventDefault();
  this.classList.toggle("active");
}
