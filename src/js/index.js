// Import styles
import "../scss/style.scss";
// Import modules
import Request from "./module/Request.js";
import Modal from "./module/Modal.js";
import Login from "./module/Login.js";
import Card from "./module/Card.js";
import Filter from "./module/Filter";
import { USER, noItemsText } from "./module/constans.js";

const request = new Request();
const modal = new Modal();

const loginBtn = document.querySelector(".header__button--login");

loginBtn.addEventListener("click", () => {
  const login = new Login();
  document.body.append(modal.render(login.render()));
});

const searchField = document.querySelector(".filter-form__input");
const filterUrgency = document.querySelector("#urgency");
const filterState = document.querySelector("#cardState");

searchField.addEventListener("keyup", (e) => {
  const filter = new Filter();
  filter.findPatient();
});

filterUrgency.addEventListener("change", (e) => {
  const filter = new Filter();
  filter.findPatient();
});

filterState.addEventListener("change", (e) => {
  const filter = new Filter();
  filter.findPatient();
});

if (sessionStorage.getItem('token')) {
  USER.token = sessionStorage.token;
  request.getCards(USER.token).then((cards) => {
    document.querySelector(".header__button--login").style.display = "none";
    document.querySelector(".header__button--visit").style.display = "block";
    if (cards.length > 0) {
      cards.forEach((card) => {
        noItemsText.style.display = "none";
        const newCard = new Card();
        document.querySelector(".cards-list").append(newCard.render(card));
      });

      searchField.value = sessionStorage.getItem('filterTitle');
      filterUrgency.value = sessionStorage.getItem('filterUrgency');
      filterState.value = sessionStorage.getItem('filterState');

      const filter = new Filter();
      filter.findPatient();
    }
  });
}
