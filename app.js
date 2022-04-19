// const noteE = document.getElementById("text").value;
const inpLastEl = document.getElementById("inpL");
const inpFirstEl = document.getElementById("inpF");
const inpPhomeEl = document.getElementById("inpP");
const btnE = document.getElementById("btn");
const olToDoListE = document.getElementById("list");

btnE.addEventListener("click", onAddList);

const templateE = document.getElementById("template");

function onAddList(params) {
  if (!chackValue()) {
    return;
  }

  const note = `${inpLastEl.value} ${inpFirstEl.value} ${inpPhomeEl.value}`;
  const el = createNoteE(note);
  addElement(el, olToDoListE);
  clearValue(inpLastEl);
  clearValue(inpFirstEl);
  clearValue(inpPhomeEl);
}

inpLastEl.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    onAddList();
  }
});

inpFirstEl.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    onAddList();
  }
});

inpPhomeEl.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    onAddList();
  }
});

function createNoteE(note) {
  const el = templateE.innerHTML.replace("{{note}}", note);
  return el;
}

function addElement(element, container) {
  container.innerHTML += element;
}

function clearValue(inpEl) {
  inpEl.value = "";
}

function chackValue() {
  if (!inpLastEl.value.trim()) {
    alert("LastName is Empty");
    return;
  }
  if (!inpFirstEl.value.trim()) {
    alert("FirstName is Empty");
    return;
  }
  if (!inpPhomeEl.value.trim()) {
    alert("PhoneNumber is Empty");
    return;
  }
  return true;
}
