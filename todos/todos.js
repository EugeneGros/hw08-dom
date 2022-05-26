class Todos {
  // #endpoint = "https://jsonplaceholder.typicode.com/todos";
  #endpoint =
    "http://nestapi-env.eba-9kgvuxij.eu-central-1.elasticbeanstalk.com/todos";
  getTodos() {
    return fetch(this.#endpoint).then((r) => r.json());
  }
  deleteTodo(id) {
    return fetch(`${this.#endpoint}/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((r) => r.json());
  }

  createTodo(todo) {
    return fetch(this.#endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    });
  }

  editTodo(todo) {
    return fetch(`${this.#endpoint}/${todo.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    }).then((r) => r.json());
  }

  getTodo(id) {
    return fetch(`${this.#endpoint}/${id}`).then((r) => r.json());
  }
}
