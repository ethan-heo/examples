export interface MockData<Options, Result> {
  readonly options: Options;
  set(...args: any[]): this;
  valueOf(): Result;
}
