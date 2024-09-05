import { useSelector } from "react-redux";
import { selectTodoList } from "../application/todo";
import { Paragraph } from "@ethanheo/ui";

function TodoList() {
  const todoList = useSelector(selectTodoList);

  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id}>
          <Paragraph>{todo.content}</Paragraph>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
