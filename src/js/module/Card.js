import Request from "./Request.js";
import { USER, noItemsText } from "./constans.js";

export default class Card {
  render({
    id,
    patient,
    doctor,
    objectiveDesc,
    state = "open",
    shortDesc,
    urgency,
    otherInfo,
  }) {
    const card = document.createElement("li");
    card.classList.add("card-item");
    card.id = id;
    card.innerHTML = `                                                                              <div class="cards-item__closed-btn closed-btn">                                                 <span class="closed-btn__line"></span>                                                        <span class="closed-btn__line"><span>                                                             </div>                                                                                          <h3 class="card-item__patient">${patient}</h3>                                                  <p class="card-item__doctor">${doctor}</p>                                                                                               <div class="card-item__info">                                                                          <p class="info__descr info__descr--objective">${objectiveDesc}</p>                                                                                               <p class="info__descr info__descr--short">${shortDesc}</p>                                                                                              <p class="info__descr info__descr--urgency">Urgency: <span>${urgency}</span></p>    <p class="info__descr info__descr--state">Status: <span>${state}</span></p>                                                                                      </div>                                                                                         <div class="card-item__buttons">                                                            <button class="card-item__button button--edit">                                                 <svg style="color: rgb(0, 0, 0)" xmlns="http://www.w3.org/2000/svg" width="12"   height="12"            fill="currentColor"            class="bi bi-pencil"            viewBox="0 0 16 16"          >            <path              d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"              fill="#000000"            ></path>          </svg>          Edit        </button>          <button class="card-item__button button--open-more">          <svg            xmlns="http://www.w3.org/2000/svg"            width="16"            height="16"            fill="currentColor"            class="bi bi-three-dots"            viewBox="0 0 16 16"          >            <path              class="card-item__dots"              d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"              fill="#000000"            ></path>          </svg>          More        </button>                                                                                            </div>`;

    const infoBlock = card.querySelector(".card-item__info");
    const deleteBtn = card.querySelector(".closed-btn");
    const moreBtn = card.querySelector(".button--open-more");

    Object.keys(otherInfo).forEach((info) => {
      const infoItem = document.createElement("p");
      infoItem.classList.add("info__descr");
      infoItem.innerHTML = `${info}: <span>${otherInfo[info]}</span>`;
      infoBlock.append(infoItem);
    });

    deleteBtn.addEventListener("click", ()=>this.removeCard(card));
    moreBtn.addEventListener("click", (event) => this.showMore(event, infoBlock));

    return card;
  }
  removeCard(card) {
    const request = new Request();
    request.deleteCard(USER.token, card.id).then((response) => {
      if (response.status === 200) {
        card.remove();
      }
    });
    request.getCards(USER.token).then((cards) => {
      if (cards.length === 1) {
        noItemsText.style.display = "block";
      }
    });
  }
  showMore(event, infoBlock){
    event.target.closest(".button--open-more").classList.toggle("active");
    event.target
      .closest(".card-item__buttons")
      .classList.toggle("card-item__buttons--active");
    infoBlock.classList.toggle("card-item__info--active");
  }
  
}
