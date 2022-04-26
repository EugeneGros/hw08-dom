// const noteE = document.getElementById("text").value;
const inpLastEl = document.getElementById("inpL");
const inpFirstEl = document.getElementById("inpF");
const inpPhomeEl = document.getElementById("inpP");
const btnE = document.getElementById("btn");
const olToDoListE = document.getElementById("list");
const btnContainerControl = document.getElementById("btn-container");
const inputsE = document.querySelectorAll(".user-info");

btnE.addEventListener("click", onAddList);

const templateE = document.getElementById("template");

function onAddList(params) {
  // if (!chackValue()) {
  //   return;
  // }
  if (dataIsNotValid(inputsE)) {
    alert("Empty field");
    return;
  }

  const note = `${inpLastEl.value} ${inpFirstEl.value} ${inpPhomeEl.value}`;
  const el = createNoteE(note);
  addElement(el, olToDoListE);
  clearValue(inpLastEl);
  clearValue(inpFirstEl);
  clearValue(inpPhomeEl);
}

btnContainerControl.addEventListener("keyup", function (event) {
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

// function chackValue() {
//   if (!inpLastEl.value.trim()) {
//     alert("LastName is Empty");
//     return;
//   }
//   if (!inpFirstEl.value.trim()) {
//     alert("FirstName is Empty");
//     return;
//   }
//   if (!inpPhomeEl.value.trim()) {
//     alert("PhoneNumber is Empty");
//     return;
//   }
//   return true;
// }

function dataIsNotValid(elements) {
  return [...elements].some((e) => !e.value.trim());
}
