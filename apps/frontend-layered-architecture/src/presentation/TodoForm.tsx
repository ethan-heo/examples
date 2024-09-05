import { Button, Form, Input, useFormState } from "@ethanheo/ui";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../application/todo";

function TodoForm() {
  const dispatch = useDispatch();
  const { form, onSubmit } = useFormState({
    form: {
      todo: {
        id: "todo",
        defaultValue: "",
        event: "change",
      },
    },
    submit: (form) => {
      dispatch(addTodoAction({ content: form.todo.element.value }));
      form.todo.reset();
    },
  });

  return (
    <Form onSubmit={onSubmit}>
      <Input {...form.todo.element} />
      <Button>추가</Button>
    </Form>
  );
}

export default TodoForm;
