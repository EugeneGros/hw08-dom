const ELEMENT = (tag, id, className, value) =>
  `<${tag} id="${id}" class="${className}">${value}</${tag}>`;

const inpEl = document.getElementById("inp");
const btnE = document.getElementById("btn");
const olToDoListE = document.getElementById("list");
const btnContainerControl = document.getElementById("btn-container");
const inputsE = document.querySelectorAll(".user-info");

btnE.addEventListener("click", onAddList);
olToDoListE.addEventListener("click", onClick);

function onAddList() {
  if (dataIsNotValid(inputsE)) {
    alert("Empty field");
    return;
  }
  const note = inpEl.value;
  addElement(note, olToDoListE);
  clearValue(inpEl);
}

btnContainerControl.addEventListener("keyup", function (event) {
  // console.log(event);
  if (event.keyCode === 13) {
    event.preventDefault();
    onAddList();
  }
  if (event.keyCode === 17 && event.keyCode === 8) {
    event.preventDefault();
    clearValue(inpEl);
  }
  if (event.keyCode) {
    if (dataIsNotValid(inputsE)) {
      // alert("Empty field");
      clearValue(inpEl);
      return;
    }
  }
});

function addElement(note, container) {
  const wrapper = document.createElement("div");
  // container.id = '';
  wrapper.classList.add("table-items-wrapper");

  console.log(wrapper.outerHTML);
  const el = ELEMENT("div", "note", "table-item table-item-col", note);
  console.log(el);

  wrapper.insertAdjacentHTML("beforeend", el);
  wrapper.insertAdjacentHTML(
    "beforeend",
    `<div class="delete" id="delete">X</div>`
  );
  container.append(wrapper);
}

function clearValue(inpEl) {
  inpEl.value = "";
}

function dataIsNotValid(elements) {
  return [...elements].some((e) => !e.value.trim());
}

function onClick(e) {
  console.log(e.target);
  if (e.target.id === "delete") {
    const item = e.target.closest(".table-items-wrapper");
    item.remove();
  }
  if (e.target.id === "note") {
    console.dir(e);

    const item = e.target;
    item.classList.toggle("table-item-col");
  }
}
