import { noItemsText } from "./constans.js";
export default class Filter {
  constructor() {
    this.cards = Array.from(document.querySelectorAll(".card-item"));
    this.hiddenCards = Array.from(document.querySelectorAll(".card-item--hidden"));
  }
  // findPatient(value, stringClass) {
  //   try {
  //     this.cards.forEach((card) => {
  //       const str = card.querySelector(stringClass).textContent.toLowerCase();
  //       if (str.search(value) === -1) {
  //         card.classList.add("card-item--hidden");
  //       } else {
  //         card.classList.remove("card-item--hidden");
  //       }
  //       if (value === "all" && stringClass !== ".card-item__patient") {
  //         card.classList.remove("card-item--hidden");
  //       }
  //     });
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  findPatient() {
    this.cards.forEach((card) => {
      const patientString = card.querySelector(".card-item__patient").textContent.toLowerCase();
      const urgencyString = card.querySelector(".info__descr--urgency").textContent.toLowerCase();
      const patientValue = document.querySelector(".filter-form__input").value.trim().toLowerCase();
      const urgencyValue = document.querySelector("#urgency").value.trim().toLowerCase();

      if (patientString.search(patientValue) === -1 || urgencyString.search(urgencyValue) === -1) {
        card.classList.add("card-item--hidden");
      } else {
        card.classList.remove("card-item--hidden");
      }
      if (urgencyValue === "all" && patientString.search(patientValue) !== -1) {
        card.classList.remove("card-item--hidden");
      }
    });
  }

  showNoItemsText() {
    const cards = Array.from(document.querySelectorAll(".card-item"));
    const hiddenCards = Array.from(document.querySelectorAll(".card-item--hidden"));
    if (cards.length === hiddenCards.length) {
      noItemsText.style.display = "block";
    } else {
      noItemsText.style.display = "none";
    }
  }
}
