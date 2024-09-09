import { Flex, Paragraph, Title } from "@ethanheo/ui";
import Todo from "./Todo";

function App() {
  return (
    <Flex
      as="main"
      column={["col-6", "col-mp-12", "col-ml-11", "col-tp-11", "col-tl-8"]}
      vertical
      align="center"
      style={{
        boxShadow: "2px 2px 8px #000",
        margin: "0 auto",
        padding: "16px 0",
      }}
    >
      <Title>TodoList Example</Title>
      <Paragraph>- Frontend Layered Architecture</Paragraph>
      <Todo />
    </Flex>
  );
}

export default App;
