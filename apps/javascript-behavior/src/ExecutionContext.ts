import FrameStack from "./FrameStack";
import VariableObject from "./VariableObject";

class ExecutionContext {
  frameStack: FrameStack | undefined;
  variableObject: VariableObject | undefined;

  create(frameStack: FrameStack, variableObject: VariableObject) {
    const self = this;

    self.frameStack = frameStack;
    self.frameStack!.push(this);
    self.variableObject = variableObject;

    return this;
  }

  run(variables: Record<any, any> = {}) {
    const self = this;

    self.isReady();
    self.variableObject!.set(variables);
  }

  remove() {
    const self = this;

    self.isReady();
    self.frameStack!.pop(this);
    self.variableObject!.removeAll();

    return this;
  }

  chaning(variable: any) {
    const self = this;

    self.isReady();

    const findExecutionContextCallback = (
      executionContext: ExecutionContext,
    ) => {
      return executionContext.variableObject!.has(variable);
    };
    const outerExecutionContext = self.frameStack!.findOuterExecutionContext(
      this,
      findExecutionContextCallback,
    );

    if (!outerExecutionContext) {
      throw new Error("Variable not found");
    }

    outerExecutionContext.variableObject!.refer(variable);
  }

  private isReady() {
    const self = this;

    if (!self.frameStack || !self.variableObject) {
      throw new Error(
        `This is an Execution Context that has not been added to FrameStack.`,
      );
    }
  }
}

export default ExecutionContext;
