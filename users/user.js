class Users {
  #endpoint = "https://jsonplaceholder.typicode.com/users/";
  getUser(id) {
    return fetch(this.#endpoint + id).then((r) => r.json());
  }
}
