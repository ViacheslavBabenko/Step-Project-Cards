export default class Modal {
  render(content) {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML =
      '<div action="#" class="modal__window">      <div class="modal-closed-btn">        <span class="modal-closed-btn__line"></span>        <span class="modal-closed-btn__line"></span>      </div>    </div>';
    modal.addEventListener("click", (event) => {
      const close = modal.querySelector(".modal-closed-btn");
      if(event.target===close||event.target === modal){
        modal.remove();
      }
    });
    modal.querySelector(".modal__window").append(content);
    return modal;
  }
}
