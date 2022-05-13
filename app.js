// const hamb = new Hamb(document.querySelector("#hamb"));

const hamb = document.querySelector("#hamb");
const menu = document.querySelector("#menu").cloneNode(1);

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  hamb.classList.toggle("active");
  // const popup = new Popup(document.querySelector("#popup");
  const popup = new Popup(document.querySelector("#popup"));
  //   popup.classList.toggle("open");
  //   popup.appendChild(menu);
}
