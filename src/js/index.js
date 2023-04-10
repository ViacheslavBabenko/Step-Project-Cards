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
const card = new Card();

const loginBtn = document.querySelector(".header__button--login");

loginBtn.addEventListener("click", () => {
  const login = new Login();
  document.body.append(modal.render(login.render()));
});

// const obj = {
//   patient: "Tom White",
//   doctor: "dentist",
//   objectiveDesc: "Description",
//   shortDesc: "short",
//   urgency: "low",
//   otherInfo: {
//     Age: 18,
//   },
// };
const searchField = document.querySelector(".filter-form__input");
const filterUrgency = document.querySelector("#urgency");
const filterState = document.querySelector("#cardState");

searchField.addEventListener("keyup", (e) => {
  const filter = new Filter();
  filter.findPatient();
  filter.showNoItemsText();
});

filterUrgency.addEventListener("change", (e) => {
  const filter = new Filter();
  filter.findPatient();
  filter.showNoItemsText();
});

// searchField.addEventListener("keyup", (e) => {
//   const filter = new Filter();
//   const value = e.target.value.trim().toLowerCase();
//   filter.findPatient(value, ".card-item__patient");
//   filter.showNoItemsText();
// });

// filterUrgency.addEventListener("change", (e) => {
//   const filter = new Filter();
//   const value = e.target.value.trim().toLowerCase();
//   filter.findPatient(value, ".info__descr--urgency");
//   filter.showNoItemsText();
// });

// filterState.addEventListener("change", (e) => {
//   const value = e.target.value.trim().toLowerCase();
//   filter.findPatient(value, ".info__descr--state");
// });
