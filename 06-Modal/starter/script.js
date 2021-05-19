"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalButton = document.querySelector(".close-modal");
const showModalButtons = document.querySelectorAll(".show-modal");

const hideOverlayAndModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const showOverlayAndModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let index = 0; index < showModalButtons.length; index++) {
  showModalButtons[index].addEventListener("click", showOverlayAndModal);
}
closeModalButton.addEventListener("click", hideOverlayAndModal);
overlay.addEventListener("click", hideOverlayAndModal);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    hideOverlayAndModal();
  }
});
