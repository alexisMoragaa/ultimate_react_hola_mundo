import { create } from "zustand";
import { Todo } from "../types";

type TodosStore = {
  todos: Todo[];
  add: (todo: Todo) => void;
  remove: (id: number) => void;
};

const useTodosStore = create<TodosStore>((set) => ({
  todos: [],
  add: (todo) =>
    set((state) => ({
      todos: [todo, ...state.todos],
    })),
  remove: (id) =>
    set((state) => ({
      todos: state.todos.filter((t) => t.id !== id),
    })),
}));

export default useTodosStore;
