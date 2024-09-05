import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodoAction,
  selectTodoList,
  TodoStatus,
  updateTodoStatusAction,
} from "../application/todo";
import { Button, Flex, Paragraph } from "@ethanheo/ui";

function TodoList() {
  const todoList = useSelector(selectTodoList);
  const dispatch = useDispatch();

  return (
    <Flex as="ul" vertical gap style={{ padding: 0 }}>
      {todoList.map((todo) => (
        <Flex as="li" key={todo.id} justify="space-between" align="center">
          <Flex vertical>
            <Paragraph>{todo.content}</Paragraph>{" "}
          </Flex>
          <Flex column="col-2" vertical gap>
            <select
              defaultValue={todo.status}
              onChange={(e) =>
                dispatch(
                  updateTodoStatusAction({
                    id: todo.id,
                    status: e.target.value as TodoStatus,
                  }),
                )
              }
            >
              <option value="NOT_READY">Not Ready</option>
              <option value="IN_PROGRESS">In Progress</option>
              <option value="DONE">Done</option>
            </select>
            <Button
              size="small"
              onClick={() => dispatch(deleteTodoAction(todo.id))}
            >
              삭제
            </Button>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}

export default TodoList;
