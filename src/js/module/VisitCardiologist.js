import Visit from "./Visit.js";

export default class VisitCardiologist extends Visit{
    render(){
        return `<input type="text" class="modal__input" placeholder="Body mass index" />
        <input type="text" class="modal__input" placeholder="Normal pressure" />
        <input type="text" class="modal__input" placeholder="Transferred diseases of the CS" />
        <input type="text" class="modal__input" placeholder="Age" />`;
    }
}