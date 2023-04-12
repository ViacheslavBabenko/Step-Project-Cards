import Visit from "./Visit.js";
import Card from "./Card.js";
import Request from "./Request.js";
import { USER } from "./constans.js";

export default class ChangeVisit extends Visit {
  render(cardio, dentist, therapist, obj, card) {
    const {
      id,
      patient,
      doctor,
      objectiveDesc,
      state,
      shortDesc,
      urgency,
      otherInfo,
    } = obj;

    const form = super.render(cardio, dentist, therapist);

    const modalTitle = form.querySelector(".modal__name");
    const selDoc = form.querySelector(".modal__select");
    const purVisit = form.querySelector(".purpose--visit");
    const shortDescription = form.querySelector(".description--visit");
    const selUrgency = form.querySelector(".urgency--select");
    const patientName = form.querySelector(".name--input");
    const changeBtn = form.querySelector(".modal__button");

    modalTitle.textContent = "Change visit";
    Array.from(selDoc.options)
      .find((option) => option.value === doctor)
      .setAttribute("selected", "");
    purVisit.value = objectiveDesc;
    shortDescription.value = shortDesc;
    Array.from(selUrgency.options)
      .find((option) => option.value === urgency)
      .setAttribute("selected", "");
    patientName.value = patient;
    changeBtn.textContent = "Change visit";

    const inputsDiv = form.querySelector(".inputs--div");
    if (doctor === "Dentist") {
      inputsDiv.innerHTML = dentist;
    } else if (doctor === "Cardiologist") {
      inputsDiv.innerHTML = cardio;
    } else if (doctor === "Therapist") {
      inputsDiv.innerHTML = therapist;
    }
    changeBtn.insertAdjacentElement("beforebegin", inputsDiv);
    changeBtn.addEventListener("click", () => {
      this.changeCard(form, card);
    });
    return form;
  }
  changeCard(form, card) {
    const formObj = super.setObj(form);
    const updatedCard = new Card();
    updatedCard.render(formObj);
    const request = new Request();
    request.changeCard(USER.token, card.id, formObj).then((response) => {
      
    });
  }
}
