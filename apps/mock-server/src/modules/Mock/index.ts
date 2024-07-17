import Lorem from "./Lorem";
import Number from "./Number";

class Mock {
  static number() {
    return new Number();
  }
  static lorem() {
    return new Lorem();
  }
}

export default Mock;
