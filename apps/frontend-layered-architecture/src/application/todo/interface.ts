export type TodoStatus = "NOT_READY" | "IN_PROGRESS" | "DONE";

export type TodoItem = {
  id: string;
  content: string;
  status: TodoStatus;
  importance: boolean;
};

export type TodoFilterType = TodoStatus | "IMPORTANCE" | "NONE";

export type TodoSortType = "IMPORTANCE" | "NONE";

export type TodoState = {
  list: TodoItem[];
  filterType: TodoFilterType;
  sortType: TodoSortType;
};
