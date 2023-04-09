// Import styles
import "../scss/style.scss";
// Import modules
import Request from "./module/Request.js";
import Modal from "./module/Modal.js";
import Login from "./module/Login.js";
import Card from "./module/Card.js";
import Filter from "./module/Filter";
import { USER } from "./module/constans.js";

const request = new Request();
const modal = new Modal();
const card = new Card();
const filter = new Filter();

const loginBtn = document.querySelector(".header__button--login");

loginBtn.addEventListener("click", () => {
  const login = new Login();
  document.body.append(modal.render(login.render()));
});

const obj = {
  patient: "Tom Black",
  doctor: "cardiologist",
  objectiveDesc: "Description",
  shortDesc: "short",
  urgency: "high",
  otherInfo: {
    Age: 18,
  },
};

// request.setCard("6ec12806-d63d-4dc5-9def-6832631252cc", obj);
// my token 6ec12806-d63d-4dc5-9def-6832631252cc

// request.getCards("6ec12806-d63d-4dc5-9def-6832631252cc").then((cards) => {
//   cards.forEach((element) => {
//     request.deleteCard("6ec12806-d63d-4dc5-9def-6832631252cc", element.id);
//   });
// });
