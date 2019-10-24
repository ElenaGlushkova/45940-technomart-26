var headerBookmarks = document.querySelector(".bookmarks");
var catalog = document.querySelector(".catalog-list");
var bookmarkButtons = catalog.querySelectorAll(".button-catalog-bookmarks");

for (var i = 0; i < bookmarkButtons.length; i++) {
  bookmarkButtons[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    headerBookmarks.classList.add("highlight");
  });
}

var basketOpenButtons = document.querySelectorAll(".button-catalog-buy");
var basketPopup = document.querySelector(".modal-in-basket");
var basketCover = document.querySelector(".cover");
var basketClose = basketPopup.querySelector(".modal-close");
var basketContinue = basketPopup.querySelector(".button-continue");
var basketOrder = basketPopup.querySelector(".button-order");
var headerBasket = document.querySelector(".basket");

for (var i = 0; i < basketOpenButtons.length; i++) {
  basketOpenButtons[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    basketPopup.classList.add("modal-show");
    basketCover.classList.add("cover-show");
    headerBasket.classList.add("highlight");
    basketOrder.focus();
  });
}

basketClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  basketPopup.classList.remove("modal-show");
  basketCover.classList.remove("cover-show");
});

basketContinue.addEventListener("click",function (evt) {
  evt.preventDefault();
  basketPopup.classList.remove("modal-show");
  basketCover.classList.remove("cover-show");
});

basketContinue.addEventListener("keydown",function (evt) {
  if (evt.keyCode === 13) {
    evt.preventDefault();
    basketPopup.classList.remove("modal-show");
    basketCover.classList.remove("cover-show");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (basketPopup.classList.contains("modal-show")) {
      basketPopup.classList.remove("modal-show");
    }
  }
});

basketCover.addEventListener("click", function (evt) {
  evt.preventDefault();
  basketPopup.classList.remove("modal-show");
  basketPopup.classList.remove("modal-error");
  basketCover.classList.remove("cover-show");
});

