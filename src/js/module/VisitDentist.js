import Request from "./Request.js";
import { USER } from "./constans.js";
import Visit from "./Visit.js";

export default class VisitDentist extends Visit {
  render() {
    return `<input type="text" class="modal__input lastvisit--input" placeholder="Data of the last visit" />`;
  }
}
