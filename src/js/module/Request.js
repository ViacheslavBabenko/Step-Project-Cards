export default class Request {
  login(email, password) {
    return fetch("https://ajax.test-danit.com/api/v2/cards/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    }).then((response) => response.text());
  }
  getCards(token) {
    return fetch("https://ajax.test-danit.com/api/v2/cards", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => response.json());
  }
  setCard(token, cardObj) {
    return fetch("https://ajax.test-danit.com/api/v2/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(cardObj),
    }).then((response) => response.json());
  }
  changeCard(token, cardId, cardObj) {
    return fetch(`https://ajax.test-danit.com/api/v2/cards/${cardId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(cardObj)
    }).then((response) => response.json());
  }
  deleteCard(token, cardId){
    return fetch(`https://ajax.test-danit.com/api/v2/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    });
  }
}
