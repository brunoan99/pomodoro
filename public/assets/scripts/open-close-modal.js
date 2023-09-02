const modal = document.querySelector("#configModal");
const openModalButton = document.querySelector("#open-modal-button");
const closeModalButton = document.querySelector("#close-modal-button");
const insideModal = document.querySelector("#insideModal");

openModalButton.addEventListener("click", () => modal.showModal());

closeModalButton.addEventListener("click", () => modal.close());

modal.addEventListener("click", () => modal.close());

insideModal.addEventListener("click", (event) => event.stopPropagation());
