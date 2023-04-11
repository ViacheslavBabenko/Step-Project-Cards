import Request from "./Request.js";
import { USER, noItemsText } from "./constans.js";
import Card from "./Card.js";
import Modal from "./Modal.js";

export default class Visit {
  render(cardio, dentist, therapeft) {
    const form = document.createElement("form");

    form.classList = "modal__form";

    form.action = "#";

    form.innerHTML = `
    
    <h2 class="modal__name">Create visit</h2>
    <select name="" id="" class="modal__select">
        <option value="none" disabled selected hidden class="modal__select-option">Select doctor</option>
        <option value="cardio">Cardiologist</option>
        <option value="dentist">Dentist</option>
        <option value="therapeft">Therapist</option>
      </select>
      <input type="text" class="modal__input purpose--visit" placeholder="The purpose of the visit" />
      <input type="text" class="modal__input description--visit" placeholder="A brief description of the visit" />
      <select name="" id="" class="modal__select urgency--select">
      <option value="none" disabled selected hidden class="modal__select-option">Urgency</option>
      <option value="high">High</option>
      <option value="normal">Normal</option>
      <option value="low">Low</option>
    </select>
    <input type="text" class="modal__input name--input" placeholder="Name" />
    <button class="modal__button">Create visit</button>
    `;
    const inputsDiv = document.createElement("div");

    const selectDoc = form.querySelector(".modal__select");

    const btn = form.querySelector(".modal__button");

    selectDoc.addEventListener("change", () => {
      const docValue = selectDoc.value;
      inputsDiv.innerHTML = "";
      if (docValue === "dentist") {
        inputsDiv.innerHTML = dentist;
      } else if (docValue === "cardio") {
        inputsDiv.innerHTML = cardio;
      } else if (docValue === "therapeft") {
        inputsDiv.innerHTML = therapeft;
      }
    });

    btn.insertAdjacentElement("beforebegin", inputsDiv);
    const requestBtn = form.querySelector(".modal__button");
    requestBtn.addEventListener("click", () => {
      const modal = document.querySelector(".modal");
      modal.remove();

      const patient = form.querySelector(".name--input").value;

      const doctor = selectDoc.value;

      const objectiveDesc = form.querySelector(".purpose--visit").value;

      const shortDesc = form.querySelector(".description--visit").value;

      const urgency = form.querySelector(".urgency--select").value;
      const otherInfo = {};

      const docValue = selectDoc.value;
      if (docValue === "cardio") {
        const cs = form.querySelector(".cs--input").value || null;
        const weigth = form.querySelector(".body--mass").value || null;
        const pressure = form.querySelector(".pressure-input").value || null;
        const age = form.querySelector(".age--input").value || null;
        (otherInfo.weigth = weigth),
          (otherInfo.pressure = pressure),
          (otherInfo.cs = cs),
          (otherInfo.age = age);
      } else if (docValue === "dentist") {
        const lastVisit = form.querySelector(".lastvisit--input").value || null;
        otherInfo["Last Visit"] = lastVisit;
      } else if (docValue === "therapeft") {
        const age = form.querySelector(".age--input").value || null;
        otherInfo.age = age;
      }
      const obj = {
        patient: patient,
        doctor: doctor,
        objectiveDesc: objectiveDesc,
        shortDesc: shortDesc,
        urgency: urgency,
        otherInfo,
      };
      const request = new Request();
      request.setCard(USER.token, obj).then((response) => {
        const card = new Card();
        const cardList = document.querySelector(".cards-list");
        cardList.append(card.render(response));
        noItemsText.style.display = "none";
      });
    });
    return form;
  }
}
