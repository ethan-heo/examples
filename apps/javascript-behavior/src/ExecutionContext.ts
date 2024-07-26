import FrameStack from "./FrameStack";
import Heap from "./Heap";
import VariableObject from "./VariableObject";

class ExecutionContext {
  frameStack: FrameStack | undefined;
  variableObject: VariableObject;

  constructor(heap: Heap, variables: Record<string, any> = {}) {
    const variableObject = new VariableObject(heap);

    for (const identifier in variables) {
      variableObject.add(identifier, variables[identifier]);
    }

    this.variableObject = variableObject;
  }

  setFrameStack(frameStack: FrameStack) {
    this.frameStack = frameStack;
  }

  start() {
    const self = this;

    self.isReady();

    return this;
  }

  end() {
    const self = this;

    self.isReady();
    self.frameStack!.pop(this);
    self.variableObject.removeAll();

    return this;
  }

  chaning(variable: any) {
    const self = this;

    self.isReady();

    const outerExecutionContext = self.frameStack!.findOuterExecutionContext(
      this,
      (executionContext) => {
        return true;
      },
    );

    if (!outerExecutionContext) {
      throw new Error("value not found");
    }
  }

  private isReady() {
    const self = this;

    if (!self.frameStack) {
      throw new Error(
        `This is an Execution Context that has not been added to FrameStack.`,
      );
    }
  }
}

export default ExecutionContext;
