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
import { USER } from "./module/constans.js";
import VisitCardiologist from "./module/VisitCardiologist.js";
import ChangeVisit from "./module/ChangeVisit.js";

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
