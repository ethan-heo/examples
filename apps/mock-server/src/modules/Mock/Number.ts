import Random from "../utils/random";
import { MockData } from "./interfaces";

type NumberOptions = {
  min: number;
  max: number;
};

class Number implements MockData<NumberOptions, number> {
  options = {
    max: 0,
    min: 0,
  };

  set(options: Partial<NumberOptions> = {}) {
    const self = this;

    self.options = {
      ...self.options,
      ...options,
    };
    return self;
  }

  valueOf(): number {
    const options = this.options;
    const max = options.max;
    const min = options.min ?? 0;

    return Random.number(min, max);
  }
}

export default Number;
