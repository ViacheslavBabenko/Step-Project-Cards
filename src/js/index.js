// Import styles
import "../scss/style.scss";
// Import modules
import Request from "./module/Request.js";
import Modal from "./module/Modal.js";
import Login from "./module/Login.js";
import Card from "./module/Card.js";
import Visit from "./module/Visit.js";
import VisitDentist from "./module/VisitDentist.js";
import VisitTherapist from "./module/VisitTherapist.js";
import VisitCardiologist from "./module/VisitCardiologist.js";
import ChangeVisit from "./module/ChangeVisit.js";
import Filter from "./module/Filter";
import { USER, noItemsText } from "./module/constans.js";

const request = new Request();
const modal = new Modal();
const card = new Card();
const visit = new Visit();
const dentVisit = new VisitDentist();
const therapVisit = new VisitTherapist();
const cardioVisit = new VisitCardiologist();

const loginBtn = document.querySelector(".header__button--login");

loginBtn.addEventListener("click", () => {
  const login = new Login();
  document.body.append(modal.render(login.render()));
});

const createVisit = document.querySelector(".header__button--visit");
createVisit.addEventListener("click", () => {
  const modal = new Modal();
  document.body.append(
    modal.render(
      visit.render(
        cardioVisit.render(),
        dentVisit.render(),
        therapVisit.render()
      )
    )
  );
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
