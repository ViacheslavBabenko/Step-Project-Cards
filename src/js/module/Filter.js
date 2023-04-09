import Request from "./Request.js";
import { USER } from "./constans.js";
const request = new Request();

export default class Filter {
  findCard() {
    request.getCards(USER.token).then((data) => {
      console.log(data);
    });
  }
}
