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
  patient: 'Tom Black',
  doctor: 'cardiologist', 
  objectiveDesc: 'Description', 
  shortDesc: 'short', 
  urgency: 'high', 
  otherInfo: {
    'Age': 18
  }
}

  request.setCard('401442a3-16b9-4ba4-9067-29dfb6b05e32', obj);