import Visit from "./Visit.js";

export default class VisitDentist extends Visit{
    render(){
        return `<input type="text" class="modal__input" placeholder="Last visit" />`;
    }
}