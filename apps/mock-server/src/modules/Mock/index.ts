import _Array from "./Array";
import Float from "./Float";
import { MockData } from "./interfaces";
import Lorem from "./Lorem";
import Number from "./Number";

class Mock {
  static number() {
    return new Number();
  }
  static float() {
    return new Float();
  }
  static lorem() {
    return new Lorem();
  }
  static array<Mocks extends MockData[]>(...mocks: Mocks) {
    return new _Array<Mocks>(...mocks);
  }
}

export default Mock;
