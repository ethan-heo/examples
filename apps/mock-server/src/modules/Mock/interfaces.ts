export interface MockData<Options = unknown, Result = unknown> {
  readonly options: Options;
  set(...args: any[]): this;
  valueOf(): Result;
}
