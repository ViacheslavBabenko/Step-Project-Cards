// Import styles
import "../scss/style.scss";
// Import modules
import Request from "./module/Request.js";
import Modal from "./module/Modal.js";
import Login from "./module/Login.js";
import Card from "./module/Card.js";
import { USER } from "./module/constans.js";

const request = new Request();
const modal = new Modal();
const card = new Card();

const loginBtn = document.querySelector(".header__button--login");

loginBtn.addEventListener("click", () => {
  const login = new Login();
  document.body.append(modal.render(login.render()));
});

const obj = {
  patient: "Tom Black",
  doctor: "cardiologist",
  objectiveDesc: "Description",
  shortDesc: "lorem",
  urgency: "high",
  otherInfo: {
    Age: 18,
    "Body mass index": 3,
  },
};

request.setCard("401442a3-16b9-4ba4-9067-29dfb6b05e32", obj);

import Visit from "./module/Visit.js";
import VisitDentist from "./module/VisitDentist.js";
import VisitCardiologist from "./module/VisitCardiologist.js";
import VisitTherapist from "./module/VisitTherapist.js";

const visit = new Visit();
const visitDentist = new VisitDentist();
const visitCardio = new VisitCardiologist();
const visitTherapist = new VisitTherapist();

const createBtn = document.querySelector(".header__button--visit");

createBtn.addEventListener("click", () => {
  document.body.append(
    modal.render(visit.render(visitDentist, visitCardio, visitTherapist))
  );
});
