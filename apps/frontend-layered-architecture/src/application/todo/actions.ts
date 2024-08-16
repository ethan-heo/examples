import { createAction } from "@reduxjs/toolkit";
import { TodoItem } from "./interface";

export const TODO_ACTION_PREFIX = "@TODO";

export const ADD_TODO_ACTION_TYPE = `${TODO_ACTION_PREFIX}/ADD`;
export const addTodoAction =
  createAction<Omit<TodoItem, "id">>(ADD_TODO_ACTION_TYPE);

export const DELETE_TODO_ACTION_TYPE = `${TODO_ACTION_PREFIX}/DELETE`;
export const deleteTodoAction = createAction<string>(DELETE_TODO_ACTION_TYPE);

export const UPDATE_TODO_ACTION_TYPE = `${TODO_ACTION_PREFIX}/UPDATE`;
export const updateTodoAction = createAction<TodoItem>(UPDATE_TODO_ACTION_TYPE);

export const UPDATED_TODO_LIST_ACTION_TYPE = `${TODO_ACTION_PREFIX}/UPDATED_TODO_LIST`;
export const updatedTodoListAction = createAction<TodoItem[]>(
  UPDATED_TODO_LIST_ACTION_TYPE,
);

export const UPDATE_TODO_STATUS_ACTION_TYPE = `${TODO_ACTION_PREFIX}/UPDATE_TODO_STATUS`;
export const updateTodoStatusAction = createAction<
  Required<Pick<TodoItem, "id" | "status">>
>(UPDATE_TODO_STATUS_ACTION_TYPE);
