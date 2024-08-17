export const TODO_STATUS = {
  NOT_READY: "NOT_READY",
  IN_PROGRESS: "IN_PROGRESS",
  DONE: "DONE",
} as const;

export const TODO_FILTER = {
  IMPORTANCE: "IMPORTANCE",
  NONE: "NONE",
  ...TODO_STATUS,
} as const;

export const TODO_SORT = {
  IMPORTANCE: "IMPORTANCE",
  NONE: "NONE",
} as const;
