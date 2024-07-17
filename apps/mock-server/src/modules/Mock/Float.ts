import Random from "../utils/random";
import { MockData } from "./interfaces";

type FloatOptions = {
  min: number;
  max: number;
};

class Float implements MockData<FloatOptions, number> {
  options = {
    max: 0,
    min: 0,
  };

  set(options: Partial<FloatOptions> = {}) {
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

    return Random.float(min, max);
  }
}

export default Float;
