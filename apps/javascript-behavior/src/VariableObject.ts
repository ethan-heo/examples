import Heap from "./Heap";

class VariableObject {
  variables = new Map<any, any>();
  heap: Heap;
  referredVariables = new Set();
  REF_SEPERATOR = ".";

  constructor(heap: Heap, variables: Record<any, any> = {}) {
    this.heap = heap;
    this.set(variables);
  }

  set(variables: Record<string, any>) {
    const self = this;

    self.travalseObject(variables, (key, value) => {
      if (typeof value === "object") {
        self.heap.add(value);
      }

      if (!key.includes(this.REF_SEPERATOR)) {
        self.variables.set(key, value);
        return;
      }
    });
  }

  refer(variable: any) {
    // this.referredVariables.
  }

  removeAll() {
    const self = this;
    const _variables = new Map(self.variables);

    self.travalseObject(_variables, (key, value) => {
      if (typeof value === "object") {
        self.heap.remove(value);
      }

      if (!key.includes(this.REF_SEPERATOR)) {
        _variables.delete(key);
        return;
      }
    });

    self.variables.clear();
    this.variables = _variables;
  }

  has(variable: any) {
    const self = this;

    return self.variables.has(variable) || self.heap.has(variable);
  }

  isEmpty() {
    return this.variables.size === 0;
  }

  private travalseObject(
    value: Record<any, any>,
    callback: (key: string, value: any) => void,
  ) {
    let stack = (
      value.constructor.name === "Map"
        ? Array.from(value.entries())
        : Object.entries(value)
    ) as [string, any][];
    let returnCounts: number[] = [stack.length];
    const keyStack: string[] = [];

    while (stack.length) {
      const [key, value] = stack.shift()!;

      keyStack.push(key);
      callback(keyStack.join(this.REF_SEPERATOR), value);

      if (typeof value === "object") {
        const _stack: [string, any][] = [];
        let count = 0;

        for (const _key in value) {
          _stack.push([_key, value[_key]]);
          count++;
        }

        stack = [..._stack, ...stack];
        returnCounts.push(count);
      } else {
        const _returnCount = [...returnCounts];

        for (const count of returnCounts.reverse()) {
          keyStack.pop();

          if (count === 1) {
            _returnCount.pop();
          } else {
            _returnCount[_returnCount.length - 1] -= 1;
            break;
          }
        }

        returnCounts = _returnCount;
      }
    }
  }
}

export default VariableObject;
