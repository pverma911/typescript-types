import axios from "axios";

const url = `https://jsonplaceholder.typicode.com/todos/1`;

/* Defining a type called `Todo` that has three properties: `id`, `title`, and `completed`. */
interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logToDo(id, title, completed);
});

/**
 * Logs the id, title, and whether the todo is completed or not
 * @param {string} id - The id of the todo.
 * @param {string} title - string
 * @param {boolean} completed - boolean
 */
function logToDo(id: string, title: string, completed: boolean) {
  console.log(`
    The todo with Id ${id}
    which has a title of ${title}
    has been ${completed ? "completed" : "not completed"}
`);
}
