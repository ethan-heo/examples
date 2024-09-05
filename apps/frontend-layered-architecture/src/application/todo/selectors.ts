import { AppState } from "../interface";

export const selectTodoList = (state: AppState) => state.todo.list;
