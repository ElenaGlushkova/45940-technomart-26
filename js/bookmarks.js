var headerBookmarks = document.querySelector(".bookmarks");

var catalog = document.querySelector(".catalog-list");
var bookmarkButtons = catalog.querySelectorAll(".button-catalog-bookmarks");
var bookmarkButton;


for (bookmarkButton of bookmarkButtons) {
  bookmarkButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    headerBookmarks.classList.add("highlight");
  });
}
