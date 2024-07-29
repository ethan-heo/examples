class Heap {
  memory: Set<any>;
  _size: number;

  constructor(size: number = 100) {
    this.memory = new Set();
    this._size = size;
  }

  add(obj: any) {
    const self = this;

    self.isOverflow();

    self.memory.add(obj);
  }

  get(obj: any) {
    for (const value of this.memory.values()) {
      if (value === obj) {
        return value;
      }
    }
    return null;
  }

  remove(obj: any) {
    this.memory.delete(obj);
  }

  has(obj: any) {
    return this.memory.has(obj);
  }

  isEmpty() {
    return this.memory.size === 0;
  }

  size() {
    return this.memory.size;
  }

  private isOverflow() {
    const { memory, _size } = this;

    if (memory.size + 1 > _size) {
      throw new Error(`Out of memory`);
    }
  }
}

export default Heap;
