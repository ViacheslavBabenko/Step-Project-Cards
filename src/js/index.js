// Import styles
import "../scss/style.scss";
const openMoreBtns = document.querySelectorAll(".button--open-more");
const openMoreBtnsArr = Array.from(openMoreBtns);

openMoreBtnsArr.forEach((el) => {
  el.addEventListener("click", (event) => {
    if (event.target.closest(".button--open-more")) {
      el.classList.toggle("active");

      const btn = el.closest(".card-item__buttons");
      btn.classList.toggle("card-item__buttons--active");

      const card = el.closest(".card-item");
      const cardInfo = card.querySelector(".card-item__info");
      cardInfo.classList.toggle("card-item__info--active");
    }
  });
});

const closedBtns = document.querySelectorAll(".closed-btn");

Array.from(closedBtns).forEach((el) => {
  el.addEventListener("click", (event) => {
    if (event.target.closest(".closed-btn")) {
      el.closest(".card-item").remove();
    }
  });
});

function createEl(elName, className) {
  const element = document.createElement(elName);
  element.classList.add(className);
  return element;
}
// const paragraph = createEl("p", "text");