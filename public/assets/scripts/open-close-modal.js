const modal = document.querySelector("#configModal");
const openModalButton = document.querySelector("#open-modal-button");
const closeModalButton = document.querySelector("#close-modal-button");
const insideModal = document.querySelector("#insideModal");

openModalButton.addEventListener("click", () => modal.showModal());

modal.addEventListener("click", (e) => {
  if (e.target.nodeName === "DIALOG") modal.close();
});

closeModalButton.addEventListener("click", () => modal.close());
