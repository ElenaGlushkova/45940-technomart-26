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

