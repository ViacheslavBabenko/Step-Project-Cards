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
      state='open',
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
    const inputsDiv = form.querySelector(".inputs--div");
    const changeBtn = form.querySelector(".modal__button");

    const stateInput = document.createElement("select");
    stateInput.classList.add('modal__select');
    stateInput.innerHTML = `
    <option value="open" selected>Open</option>
    <option value="done">Done</option>`
    
    
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

    if (doctor === "Dentist") {
      inputsDiv.innerHTML = dentist;
    } else if (doctor === "Cardiologist") {
      inputsDiv.innerHTML = cardio;
    } else if (doctor === "Therapist") {
      inputsDiv.innerHTML = therapist;
    }
    inputsDiv.append(stateInput);

    changeBtn.insertAdjacentElement("beforebegin", inputsDiv);
    changeBtn.addEventListener("click", () => {
      this.changeCard(form, card);
    });
    return form;
  }
  changeCard(form, card) {
    const formObj = super.setObj(form);
    
    const request = new Request();
    request.changeCard(USER.token, card.id, formObj).then((response) => {
      console.log(response);
      const patientName = card.querySelector('.card-item__patient');
      const doctorName = card.querySelector('.card-item__doctor');
      const infoBlock = card.querySelector('.card-item__info');

      patientName.textContent = response.patient;
      doctorName.textContent = response.doctor;

      const updatedCard = new Card();
      const newCardInfo = updatedCard.render(formObj).querySelector('.card-item__info');

      infoBlock.innerHTML = newCardInfo.innerHTML;
    });
  }
}
