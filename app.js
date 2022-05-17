const url = `https://api.github.com/users`;
const fields = ["public_repos", "followers", "following"];
const inpEl = document.getElementById("inp");
const btnE = document.getElementById("btn");
const dateUser = document.getElementById("list");

btnE.addEventListener("click", onGetUser);

class GitHub {
  constructor(user) {
    this.user = inpEl.value;
    this.urlUser = `${url}/${this.user}`;
  }

  getUser() {
    fetch(this.urlUser)
      .then((r) => r.json())
      .then((r) => {
        renderUser(r);
      })
      .catch((e) => {
        if (e) {
          dateUser.innerHTML = "ERROR " + e;
        }
      });
  }
}

function onGetUser() {
  const user = new GitHub(inpEl);
  user.getUser();
}

function renderUser(user) {
  addElement(`<div><img src="${user.avatar_url}"/></div>`, dateUser);
  fields.map((t) => {
    addElement(`<div>${t} - ${user[t]}</div>`);
  });
}

function addElement(note) {
  const wrapper = document.createElement("div");
  wrapper.insertAdjacentHTML("beforeend", note);
  dateUser.append(wrapper);
}
