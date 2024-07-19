import { MockData } from "./interfaces";

type ObjectOptions = {};

type ObjType = Record<string | number | symbol, any>;

/**
 * [TODO]
 * - valueOf 결과값의 타입이 추론될 수 있도록 수정하기
 */
class _Object<Obj extends ObjType> implements MockData<ObjectOptions> {
  options = {};

  private obj: string;

  private mockDataPath: Map<string, MockData>;

  private PATH_SEPERATOR = ".";

  constructor(obj: Obj) {
    this.mockDataPath = this.findMockDataPath(obj);
    this.obj = JSON.stringify(obj);
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
    const self = this;
    const result = JSON.parse(self.obj);

    self.mockDataPath.forEach((mockData, path) => {
      let temp = result;
      const paths = path.split(self.PATH_SEPERATOR);
      const id = paths.pop()!;

      for (const _p of paths) {
        temp = temp[_p];
      }

      temp[id] = mockData.valueOf();
    });

    return result;
  }

  private isMockData(value: any) {
    if (typeof value !== "object" || Array.isArray(value)) {
      return false;
    }

    return value.set && value.valueOf;
  }

  private findMockDataPath(obj: Obj) {
    const self = this;
    const result = new Map<string, MockData>();
    const paths: string[] = [];

    travasal(obj);

    return result;

    function travasal(value: any) {
      if (self.isMockData(value) || typeof value !== "object") {
        return value;
      } else {
        if (Array.isArray(value)) {
          for (let i = 0, len = value.length; i < len; i++) {
            const _v = travasal(value[i]);

            if (self.isMockData(_v)) {
              result.set([...paths, i].join(self.PATH_SEPERATOR), _v);

              value[i] = null;
            }
          }
        } else {
          for (const _p in value) {
            paths.push(_p);

            const _v = travasal(value[_p]);

            if (self.isMockData(_v)) {
              result.set(paths.join(self.PATH_SEPERATOR), _v);
              value[_p] = null;
            }

            paths.pop();
          }
        }
      }
    }
  }
}

export default _Object;
