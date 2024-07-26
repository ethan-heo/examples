import Heap from "./Heap";

class VariableObject {
  variables: Map<any, any> = new Map();
  heap: Heap;

  constructor(heap: Heap) {
    this.heap = heap;
  }

  add(identifier: string, value: any) {
    const self = this;

    self.variables.set(identifier, value);
    self.travalseObject(value, (value) => self.heap.add(value));
  }

  set(variables: Record<string, any>) {
    const self = this;

    for (const identifier in variables) {
      self.variables.set(identifier, variables[identifier]);
    }
  }

  removeAll() {
    const self = this;
    const _variables = new Map(self.variables);

    self.variables.forEach((variable, identifier) => {
      _variables.delete(identifier);
      self.travalseObject(variable, (value) => self.heap.remove(value));
    });

    self.variables.clear();
    this.variables = _variables;
  }

  findVariable() {}

  isEmpty() {
    return this.variables.size === 0;
  }

  private travalseObject(
    value: Record<any, any> | any[],
    callback: (value: Record<any, any> | any[]) => void,
  ) {
    if (typeof value === "object") {
      callback(value);
      if (Array.isArray(value)) {
        for (const _v of value) {
          this.travalseObject(_v, callback);
        }
      } else {
        for (const key in value) {
          this.travalseObject(value[key], callback);
        }
      }
    }
  }
}

export default VariableObject;
