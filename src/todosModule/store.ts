import { create } from "zustand";
import { Todo } from "../types";

type TodosStore = {
  todos: Todo[];
  add: (todo: Todo) => void;
  remove: (id: number) => void;
  update: (todo: Todo) => void;
};

const useTodosStore = create<TodosStore>((set) => ({
  todos: [],
  add: (todo) =>
    set((state) => ({
      todos: [todo, ...state.todos],
    })),
  remove: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  update: (newTodo) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id == newTodo.id ? newTodo : todo
      ),
    })),
}));

export default useTodosStore;
