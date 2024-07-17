import Random from "../utils/random";
import { MockData } from "./interfaces";

type ArrayOptions = {
  length: number;
};

/**
 * [TODO]
 * - MockData Result 타입에러 해결 필요
 */
class _Array<Mock extends MockData[]>
  implements MockData<ArrayOptions, ReturnType<Mock[number]["valueOf"]>[]>
{
  options = {
    length: 1,
  };
  private mocks: Mock;

  constructor(...mocks: Mock) {
    this.mocks = mocks;
  }

  set(options: Partial<ArrayOptions> = {}) {
    const self = this;

    this.options = {
      ...self.options,
      ...options,
    };

    return this;
  }
  valueOf() {
    const self = this;
    const mockCount = self.mocks.length;

    return self
      .makeArray()
      .map(() =>
        self.mocks[Random.number(0, mockCount - 1)].valueOf(),
      ) as ReturnType<Mock[number]["valueOf"]>[];
  }

  private makeArray() {
    return Array.from({ length: this.options.length });
  }
}

export default _Array;
