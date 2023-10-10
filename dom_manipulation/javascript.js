const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener('click', () => {
  const value = input.value;
  input.value = '';
  const liNew = document.createElement("li");
  const spanNew = createTextItem(liNew, value);
  const buttonNew = createDeleteButton(liNew);
  ul.appendChild(liNew);
  input.focus();
});

function createTextItem(listItem, value) {
  const spanNew = document.createElement("span");
  spanNew.innerText = value
  listItem.appendChild(spanNew);
  return spanNew
}

function createDeleteButton(listItem) {
  const buttonNew = document.createElement("button");
  buttonNew.innerText = "Delete"
  buttonNew.addEventListener('click', () => {
    buttonNew.parentNode.remove();
  });
  listItem.appendChild(buttonNew);
  return buttonNew
}
