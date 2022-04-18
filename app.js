// const noteE = document.getElementById("text").value;
const noteE = document.getElementById("text");
const btnE = document.getElementById("btn");
const olToDoListE = document.getElementById("list");

btnE.addEventListener("click", onClick);

function onClick() {
  const note = noteE.value.trim();
  if (note) {
    makeLi();
  }
}

noteE.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("btn").click();
  }
});

function makeLi() {
  const liE = document.createElement("li");
  liE.textContent = noteE.value.trim();
  noteE.value = "";
  olToDoListE.append(liE);
  noteE.focus();
}
