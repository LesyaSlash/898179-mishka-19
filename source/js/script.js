//мобильное меню

var navHead = document.querySelector(".page-header__wrapper");
var navToggle = document.querySelector(".page-header__toggle");

navHead.classList.remove("page-header__no-js");
navHead.classList.add("page-header--closed-menu");

navToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (navHead.classList.contains("page-header--closed-menu")) {
    navHead.classList.remove("page-header--closed-menu");
    navHead.classList.add("page-header--opened-menu");
  } else {
    navHead.classList.remove("page-header--opened-menu");
    navHead.classList.add("page-header--closed-menu");
  }
});

//модальное окно заказа товара

var modalButton = document.querySelectorAll(".add-cart");
var modalOrder = document.querySelector(".modal");
var modalWindow = document.querySelector(".modal__form");


for (var i = 0; i < modalButton.length; i++) {
  result = modalButton[i];
  result.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalOrder.classList.add("modal__open");
  });
};

  modalWindow.addEventListener("click", function (evt) {
  evt.stopPropagation();
  evt.stopImmediatePropagation();
});

  modalOrder.addEventListener("click", function () {
  modalOrder.classList.remove("modal__open");
});
