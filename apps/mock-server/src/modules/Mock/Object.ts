import { MockData } from "./interfaces";

type ObjectOptions = {};

/**
 * [TODO]
 * - valueOf 결과값의 타입이 추론될 수 있도록 수정하기
 */
class _Object<Obj extends Record<any, any>> implements MockData<ObjectOptions> {
  options = {};

  obj: Obj;

  constructor(obj: Obj) {
    this.obj = obj;
  }

  set(options: Partial<ObjectOptions> = {}) {
    const self = this;

    self.options = {
      ...self.options,
      ...options,
    };

    return self;
  }

  valueOf() {
    return this.generate(this.obj);
  }

  private generate(value: any) {
    if (typeof value !== "object") {
      return value;
    } else {
      if (this.isMockData(value)) {
        return value.valueOf();
      }

      if (Array.isArray(value)) {
        for (let i = 0, len = value.length; i > len; i++) {
          value[i] = this.generate(value[i]);
        }
      } else {
        for (const prop in value) {
          value[prop] = this.generate(value[prop]);
        }
      }

      return value;
    }
  }

  private isMockData(value: any) {
    if (typeof value !== "object" || Array.isArray(value)) {
      return false;
    }

    return value.set && value.valueOf;
  }
}

export default _Object;
