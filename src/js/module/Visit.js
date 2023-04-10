export default class Visit {
  render(dentist, cardio, therap) {
    const form = document.createElement("form");
    form.innerHTML = `<h2 class="modal__name">Create visit</h2>
        <select name="" id="selectDoc" class="modal__select">
        <option value="none" disabled selected hidden class="modal__select-option">Select doctor</option>
        <option value="cardiologist">Cardiologist</option>
        <option value="dentist">Dentist</option>
        <option value="therapist">Therapist</option>
      </select>
      <input type="text" class="modal__input" placeholder="The purpose of the visit" />
      <input type="text" class="modal__input" placeholder="A brief description of the visit" />
      <select name="" id="" class="modal__select">
        <option value="none" disabled selected hidden class="modal__select-option">Urgency</option>
        <option value="cardio">High</option>
        <option value="cardio">Normal</option>
        <option value="cardio">Low</option>
      </select>
      <input type="text" class="modal__input" placeholder="Name" />
      <div class="otherInfo"></div>
      <button class="modal__button">Create visit</button>`;

    const selectDoctor = form.querySelector("#selectDoc");
    const otherInfo = form.querySelector(".otherInfo");
    const createVisit = form.querySelector(".modal__button");

    selectDoctor.addEventListener("change", () => {
      if (selectDoctor.value === "cardiologist") {
        otherInfo.innerHTML = cardio.render();
      }
      if (selectDoctor.value === "dentist") {
        otherInfo.innerHTML = dentist.render();
      }
      if (selectDoctor.value === "therapist") {
        otherInfo.innerHTML = therap.render();
      }
    });

    createVisit.addEventListener('click', ()=>{
        
    })

    return form;
  }
}
