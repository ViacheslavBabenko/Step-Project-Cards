import Request from "./Request.js";
import { USER, noItemsText } from "./constans.js";
import Card from "./Card.js";

export default class Login {
  render() {
    const form = document.createElement("form");
    form.innerHTML =
      '<h2 class="modal__name">Log in</h2>        <label class="modal__input-name">Login</label>        <input type="email" class="modal__input login-email" placeholder="Login" />        <label class="modal__input-name">Passwort</label>        <input type="password" class="modal__input login-password" placeholder="Password" /> <p class="modal__invalid-date">Incorrect username or password*</p>        <button class="modal__button">Log in</button>';

    const loginBtn = form.querySelector(".modal__button");
    const email = form.querySelector(".login-email");
    const password = form.querySelector(".login-password");
    const invalidText = form.querySelector('.modal__invalid-date');

    loginBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const request = new Request();
      request.login(email.value, password.value)
      .then(token=>{
        if(token !== 'Incorrect username or password'){
            USER.token = token;
            document.querySelector('.header__button--login').style.display = 'none';
            document.querySelector('.header__button--visit').style.display = 'block';
            document.querySelector('.modal').remove();
            request.getCards(USER.token).then(cards=>{
              if(cards.length>0){
                cards.forEach(card => {
                  noItemsText.style.display = 'none';
                  const newCard = new Card();
                  document.querySelector('.cards-list').append(newCard.render(card));
                });
              }
            })
        }else{
            invalidText.style.display = 'block';
        }
      })
      .catch(error=>{
        alert(error.message);
      })
    });
    return form;
  }
}
