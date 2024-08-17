import { createAction } from "@reduxjs/toolkit";
import { TodoItem, TodoState } from "./interface";

export const TODO_ACTION_PREFIX = "@TODO";

export const ADD_TODO_ACTION_TYPE = `${TODO_ACTION_PREFIX}/ADD`;
export const addTodoAction = createAction<
  Pick<TodoItem, "content"> & Partial<Pick<TodoItem, "status" | "importance">>
>(ADD_TODO_ACTION_TYPE);

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

export const UPDATE_TODO_IMPORTANCE_ACTION_TYPE = `${TODO_ACTION_PREFIX}/UPDATE_TODO_IMPORTANCE`;
export const updateTodoImportanceAction = createAction<
  Required<Pick<TodoItem, "id" | "importance">>
>(UPDATE_TODO_IMPORTANCE_ACTION_TYPE);

export const FILTER_TODO_LIST_ACTION_TYPE = `${TODO_ACTION_PREFIX}/FILTER_TODO_LIST`;
export const filterTodoListAction = createAction<Pick<TodoState, "filterType">>(
  FILTER_TODO_LIST_ACTION_TYPE,
);

export const SORT_TODO_LIST_ACTION_TYPE = `${TODO_ACTION_PREFIX}/SORT_TODO_LIST`;
export const sortTodoListAction = createAction<Pick<TodoState, "sortType">>(
  FILTER_TODO_LIST_ACTION_TYPE,
);
