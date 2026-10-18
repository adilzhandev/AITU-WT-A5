const paragraph = document.getElementById("paragraph");
const styleBox = document.getElementById("style-box");
const itemList = document.getElementById("item-list");

document.getElementById("change-text").addEventListener("click", function () {
  paragraph.textContent = "The paragraph was changed with JavaScript.";
});

document.getElementById("change-color").addEventListener("click", function () {
  styleBox.style.backgroundColor = "#fff0bd";
});

document.getElementById("change-size").addEventListener("click", function () {
  styleBox.style.fontSize = "24px";
});

document.getElementById("add-item").addEventListener("click", function () {
  const item = document.createElement("li");
  item.textContent = "Item " + (itemList.children.length + 1);
  itemList.appendChild(item);
});

document.getElementById("remove-item").addEventListener("click", function () {
  if (itemList.lastElementChild) {
    itemList.lastElementChild.remove();
  }
});
