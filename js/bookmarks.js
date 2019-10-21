var headerBookmarks = document.querySelector(".bookmarks");

var catalog = document.querySelector(".catalog-list");
var bookmarkButtons = catalog.querySelectorAll(".button-catalog-bookmarks");

for (var i = 0; i < bookmarkButtons.length; i++) {
  bookmarkButtons[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    headerBookmarks.classList.add("highlight");
  });
}

