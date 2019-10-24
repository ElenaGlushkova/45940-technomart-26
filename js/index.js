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

var mapOpen = document.querySelector(".map-image");
var mapPopup = document.querySelector(".modal-map");
var mapCover = document.querySelector(".cover");
var mapClose = mapPopup.querySelector(".modal-close");

mapOpen.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
  mapCover.classList.add("cover-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
  mapCover.classList.remove("cover-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});

mapCover.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
  mapPopup.classList.remove("modal-error");
  mapCover.classList.remove("cover-show");
});

var feedbackOpen = document.querySelector(".button-contacts");
var feedbackPopup = document.querySelector(".modal-feedback");
var feedbackCover = document.querySelector(".cover");
var feedbackClose = feedbackPopup.querySelector(".modal-close");
var feedbackForm = feedbackPopup.querySelector("form");
var feedbackName = feedbackPopup.querySelector("[name=name]");
var feedbackEmail = feedbackPopup.querySelector("[name=email]");
var feedbackLetter = feedbackPopup.querySelector("[name=letter]");
var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

feedbackOpen.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");
  if (storageName && storageEmail) {
    feedbackName.value = storageName;
    feedbackEmail.value = storageEmail;
    feedbackLetter.focus();
  } else {
    feedbackName.focus();
  }
  feedbackCover.classList.add("cover-show");
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  feedbackPopup.classList.remove("modal-error");
  feedbackCover.classList.remove("cover-show");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackName.value || !feedbackEmail.value || !feedbackLetter.value) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", feedbackName.value);
      localStorage.setItem("email", feedbackEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (feedbackPopup.classList.contains("modal-show")) {
      feedbackPopup.classList.remove("modal-show");
      feedbackPopup.classList.remove("modal-error");
      feedbackCover.classList.remove("cover-show");
    }
  }
});

feedbackCover.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  feedbackPopup.classList.remove("modal-error");
  feedbackCover.classList.remove("cover-show");
});
