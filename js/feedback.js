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
