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
        validate: (value) => {
          if (value.trim().length === 0) {
            return {
              valid: false,
              msg: "추가할 내용이 없습니다.",
            };
          }

          return {
            valid: true,
          };
        },
      },
    },
    submitWithValidation: true,
    submit: (form) => {
      dispatch(addTodoAction({ content: form.todo.element.value }));
      form.todo.reset();
    },
  });

  return (
    <Form onSubmit={onSubmit}>
      <Input {...form.todo.element} placeholder="입력해주세요." />
      <Button>추가</Button>
    </Form>
  );
}

export default TodoForm;
