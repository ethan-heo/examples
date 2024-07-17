import _Array from "./Array";
import Float from "./Float";
import { MockData } from "./interfaces";
import Lorem from "./Lorem";
import Number from "./Number";
import _Object from "./Object";

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
  static object<Obj extends Record<any, any>>(obj: Obj) {
    return new _Object<Obj>(obj);
  }
}

export default Mock;
