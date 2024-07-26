import ExecutionContext from "./ExecutionContext";

class FrameStack {
  stack: ExecutionContext[] = [];

  push(executionContext: ExecutionContext) {
    executionContext.setFrameStack(this);

    this.stack.push(executionContext);
  }

  pop(executionContexct: ExecutionContext) {
    const self = this;

    if (!self.stack.includes(executionContexct)) {
      throw new Error(`ExecutionContext is not included in FrameStack`);
    }

    const lastExecutionContext = self.stack.at(-1);

    if (lastExecutionContext !== executionContexct) {
      throw new Error("ExecutionContext execution order is incorrect");
    }

    return self.stack.pop();
  }

  findOuterExecutionContext(
    executionContext: ExecutionContext,
    callback: (executionContext: ExecutionContext) => boolean,
  ) {
    const self = this;
    const idx = self.stack.indexOf(executionContext);

    if (idx < 0) {
      throw new Error("ExecutionContext is not registered");
    }

    const _stack = this.stack.slice(idx);

    return _stack.find(callback);
  }

  length() {
    return this.stack.length;
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

export default FrameStack;
