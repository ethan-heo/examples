import { useDispatch, useSelector } from "react-redux";
import { deleteTodoAction, selectTodoList } from "../application/todo";
import { Button, Flex, Paragraph } from "@ethanheo/ui";

function TodoList() {
  const todoList = useSelector(selectTodoList);
  const dispatch = useDispatch();

  return (
    <ul>
      {todoList.map((todo) => (
        <Flex as="li" key={todo.id} justify="space-between" align="center">
          <Paragraph>{todo.content}</Paragraph>{" "}
          <Flex column="col-1">
            <Button
              size="small"
              onClick={() => dispatch(deleteTodoAction(todo.id))}
            >
              삭제
            </Button>
          </Flex>
        </Flex>
      ))}
    </ul>
  );
}

export default TodoList;
